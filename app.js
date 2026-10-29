// ==========================================================================
// SafarSaarthi (सफ़र सारथी) — Main Application Logic (app.js)
// Plain JavaScript (No frameworks, no build step, no backend)
//
// Core Features Preserved:
// - Top Bar Monument Search (live filters + instant suggestions dropdown)
// 1. Home screen with heritage monument cards
// 2. Monument page: 3-4 story cards, EN/HI toggle, Web Speech API audio narration,
//    and Kids Mode with simpler stories
// 3. Bar chart of expected crowd by hour (8 AM - 6 PM) with status badge
// 4. "Quieter nearby heritage gem" card with distance & Google Maps link
// 5. Safety section: 24x7 emergency helplines, nearest police/hospital, visit checklist
// 6. Fair-fare range table
//
// Upgrades Implemented:
// A. Geolocation & Proximity Engine (Distance in km, GPS & City Selector, Regional Filters)
// B. Mausam-X Inspired Weather & Tour Planning Radar (Open-Meteo live feed,
//    Heat Stress Index, hourly precipitation radar, optimal visit windows, and 7-day tour forecast)
// C. High-Definition Online Monument Gallery & Lightbox Viewer (curated high-res photos + SVG art toggle)
// D. Safar AI Tour Planning Agent (1-14 days custom weather-balanced itineraries)
// E. Dark & Light Theme with smooth transitions and persistence
// F. Humanized Male & Female Voice Narration + Conversational Voice Guide (Voice Assistant)
// ==========================================================================

(function () {
  // Application State
  const state = {
    currentMonumentId: null,      // null means Home Screen is active
    lang: "en",                   // "en" for English, "hi" for Hindi
    kidsMode: false,              // false = standard stories, true = kids stories
    speakingStoryId: null,        // ID of story being read aloud (or "ALL")
    selectedHour: "10 AM",        // Default selected crowd time slot
    searchQuery: "",              // Current query in top search bar
    checkedItems: {},             // Checked checklist items per monument
    activeFilter: "all",          // "all", "nearest", "north", "west-central", "south-east"
    visualMode: "photo",          // "photo" = real HD photo, "art" = SVG illustration
    activeImageIdx: 0,            // Currently selected photo in monument gallery
    theme: "light",               // "light" or "dark"
    voiceGender: "female",        // "female" or "male"
    isListeningVoice: false,      // Voice assistant recognition state
    userCoords: {                 // Current reference location (default: Delhi)
      lat: 28.6139,
      lon: 77.2090,
      cityName: "Delhi NCR",
      isGps: false
    },
    plannerDays: 3,               // Default number of days in Tour Planner
    weatherCache: {}              // In-memory cache for live weather responses
  };

  // Indian Cities Reference Directory for Distance Calculation & Hub Selection
  const INDIAN_CITIES = [
    { name: "Delhi NCR", lat: 28.6139, lon: 77.2090 },
    { name: "Jaipur, Rajasthan", lat: 26.9124, lon: 75.7873 },
    { name: "Agra, Uttar Pradesh", lat: 27.1767, lon: 78.0081 },
    { name: "Mumbai, Maharashtra", lat: 19.0760, lon: 72.8777 },
    { name: "Bengaluru, Karnataka", lat: 12.9716, lon: 77.5946 },
    { name: "Kolkata, West Bengal", lat: 22.5726, lon: 88.3639 },
    { name: "Chennai, Tamil Nadu", lat: 13.0827, lon: 80.2707 },
    { name: "Hyderabad, Telangana", lat: 17.3850, lon: 78.4867 },
    { name: "Madurai, Tamil Nadu", lat: 9.9252, lon: 78.1198 },
    { name: "Bhubaneswar, Odisha", lat: 20.2961, lon: 85.8245 },
    { name: "Chhatrapati Sambhajinagar", lat: 19.8762, lon: 75.3433 },
    { name: "Hampi / Hosapete", lat: 15.2689, lon: 76.3909 }
  ];

  // DOM References: Views & Navigation
  const homeView = document.getElementById("home-view");
  const monumentView = document.getElementById("monument-view");
  const monumentsGrid = document.getElementById("monuments-grid");
  const monumentHero = document.getElementById("monument-hero");
  const brandLink = document.getElementById("brand-link");
  const homeNavBtn = document.getElementById("home-nav-btn");
  const backHomeBtn = document.getElementById("back-home-btn");
  const backBtnLabel = document.getElementById("back-btn-label");

  // DOM References: Search Bar
  const searchInput = document.getElementById("monument-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const searchDropdown = document.getElementById("search-results-dropdown");
  const homeSearchStatus = document.getElementById("home-search-status");
  const homeSearchStatusText = document.getElementById("home-search-status-text");
  const resetHomeSearchBtn = document.getElementById("reset-home-search-btn");

  // DOM References: Theme & Voice Controls
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeToggleIcon = document.getElementById("theme-toggle-icon");
  const voiceFemaleBtn = document.getElementById("voice-female-btn");
  const voiceMaleBtn = document.getElementById("voice-male-btn");

  // DOM References: Voice Assistant Modal & Buttons
  const openVoiceAssistantBtn = document.getElementById("open-voice-assistant-btn");
  const voiceAssistantModal = document.getElementById("voice-assistant-modal");
  const closeAssistantBtn = document.getElementById("close-assistant-btn");
  const assistantMicBtn = document.getElementById("assistant-mic-btn");
  const assistantPromptText = document.getElementById("assistant-prompt-text");
  const assistantDialogueBox = document.getElementById("assistant-dialogue-box");
  const assistantActiveVoiceTag = document.getElementById("assistant-active-voice-tag");
  const assistantChips = document.querySelectorAll("[data-voice-cmd]");

  // DOM References: Location & Filters
  const geoLocationBtn = document.getElementById("geo-location-btn");
  const geoBtnLabel = document.getElementById("geo-btn-label");
  const locationDisplayText = document.getElementById("location-display-text");
  const changeLocBtn = document.getElementById("change-loc-btn");
  const filterChips = document.querySelectorAll(".filter-chip");
  const locationModal = document.getElementById("location-modal");
  const closeLocModalBtn = document.getElementById("close-loc-modal-btn");
  const modalDetectGpsBtn = document.getElementById("modal-detect-gps-btn");
  const locCityGrid = document.getElementById("loc-city-grid");

  // DOM References: Feature 2 (Stories, Language, Audio, Kids Mode)
  const storiesList = document.getElementById("stories-list");
  const storiesHeading = document.getElementById("stories-heading");
  const storiesSubheading = document.getElementById("stories-subheading");
  const langEnBtn = document.getElementById("lang-en-btn");
  const langHiBtn = document.getElementById("lang-hi-btn");
  const kidsModeBtn = document.getElementById("kids-mode-btn");
  const kidsModeText = document.getElementById("kids-mode-text");
  const listenAllBtn = document.getElementById("listen-all-btn");
  const listenAllText = document.getElementById("listen-all-text");
  const stopSpeechBtn = document.getElementById("stop-speech-btn");
  const speechStatusBar = document.getElementById("speech-status-bar");
  const speechStatusText = document.getElementById("speech-status-text");

  // DOM References: Weather Dashboard (Mausam-X Inspired)
  const weatherMainIcon = document.getElementById("weather-main-icon");
  const weatherTempMain = document.getElementById("weather-temp-main");
  const weatherConditionCaption = document.getElementById("weather-condition-caption");
  const weatherCityTag = document.getElementById("weather-city-tag");
  const weatherFeelsLike = document.getElementById("weather-feels-like");
  const weatherHumidity = document.getElementById("weather-humidity");
  const weatherWind = document.getElementById("weather-wind");
  const weatherUv = document.getElementById("weather-uv");
  const heatRiskLabel = document.getElementById("heat-risk-label");
  const heatRiskAdvice = document.getElementById("heat-risk-advice");
  const heatMeterFill = document.getElementById("heat-meter-fill");
  const rainBadge = document.getElementById("rain-badge");
  const rainOverviewText = document.getElementById("rain-overview-text");
  const rainHourlyBars = document.getElementById("rain-hourly-bars");
  const optimalWindowText = document.getElementById("optimal-window-text");
  const forecast7dayRow = document.getElementById("forecast-7day-row");
  const weatherUpdatedText = document.getElementById("weather-updated-text");

  // DOM References: Feature 3 & 4 (Crowd Chart, Dropdown, Status Badge, Nearby Gem)
  const crowdHeading = document.getElementById("crowd-heading");
  const crowdSubheading = document.getElementById("crowd-subheading");
  const timeSlotLabel = document.getElementById("time-slot-label");
  const timeSlotSelect = document.getElementById("time-slot-select");
  const crowdStatusCaption = document.getElementById("crowd-status-caption");
  const crowdStatusBadge = document.getElementById("crowd-status-badge");
  const crowdChartBars = document.getElementById("crowd-chart-bars");
  const nearbyGemContainer = document.getElementById("nearby-gem-container");

  // DOM References: Feature 5 (Safety & Checklist)
  const safetyHeading = document.getElementById("safety-heading");
  const safetySubheading = document.getElementById("safety-subheading");
  const helplinesTitle = document.getElementById("helplines-title");
  const helplinesDesc = document.getElementById("helplines-desc");
  const nearestFacilities = document.getElementById("nearest-facilities");
  const checklistTitle = document.getElementById("checklist-title");
  const checklistDesc = document.getElementById("checklist-desc");
  const checklistProgress = document.getElementById("checklist-progress");
  const visitChecklist = document.getElementById("visit-checklist");

  // DOM References: Feature 6 (Fair-Fare Table & Ride App Comparison)
  const fareHeading = document.getElementById("fare-heading");
  const fareSubheading = document.getElementById("fare-subheading");
  const thRoute = document.getElementById("th-route");
  const thMode = document.getElementById("th-mode");
  const thDistance = document.getElementById("th-distance");
  const thFare = document.getElementById("th-fare");
  const fareTableBody = document.getElementById("fare-table-body");
  const appComparisonTitle = document.getElementById("app-comparison-title");
  const appComparisonDesc = document.getElementById("app-comparison-desc");
  const appRouteLabel = document.getElementById("app-route-label");
  const appRouteSelect = document.getElementById("app-route-select");
  const appCardsGrid = document.getElementById("app-cards-grid");
  const appComparisonNote = document.getElementById("app-comparison-note");

  // DOM References: Safar AI Tour Planner
  const openPlannerBtn = document.getElementById("open-planner-btn");
  const plannerModal = document.getElementById("planner-modal");
  const closePlannerBtn = document.getElementById("close-planner-btn");
  const dayPresetBtns = document.querySelectorAll(".day-preset-btn");
  const plannerDaysInput = document.getElementById("planner-days-input");
  const plannerHubSelect = document.getElementById("planner-hub-select");
  const plannerPaceSelect = document.getElementById("planner-pace-select");
  const plannerSeasonSelect = document.getElementById("planner-season-select");
  const generateItineraryBtn = document.getElementById("generate-itinerary-btn");
  const plannerResults = document.getElementById("planner-results");

  // DOM References: Lightbox
  const imageLightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-desc");
  const lightboxCredit = document.getElementById("lightbox-credit");
  const closeLightboxBtn = document.getElementById("close-lightbox-btn");

  // ========================================================================
  // Theme Management (Light and Dark Mode)
  // ========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem("safarsaarthi-theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
  }

  function setTheme(newTheme) {
    state.theme = newTheme;
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("safarsaarthi-theme", newTheme);
    if (themeToggleIcon) {
      themeToggleIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute("title", newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
    }
  }

  function toggleTheme() {
    setTheme(state.theme === "dark" ? "light" : "dark");
  }

  // ========================================================================
  // Voice Gender Management
  // ========================================================================
  function setVoiceGender(gender) {
    state.voiceGender = gender;
    if (voiceFemaleBtn && voiceMaleBtn) {
      voiceFemaleBtn.classList.toggle("active", gender === "female");
      voiceFemaleBtn.setAttribute("aria-pressed", gender === "female" ? "true" : "false");
      voiceMaleBtn.classList.toggle("active", gender === "male");
      voiceMaleBtn.setAttribute("aria-pressed", gender === "male" ? "true" : "false");
    }
    if (assistantActiveVoiceTag) {
      assistantActiveVoiceTag.textContent = gender === "female"
        ? (state.lang === "hi" ? "आवाज: प्राकृतिक महिला स्वर (रिया/कल्पना)" : "Voice: Natural Female (Riya)")
        : (state.lang === "hi" ? "आवाज: प्राकृतिक पुरुष स्वर (कबीर/हेमंत)" : "Voice: Natural Male (Kabir)");
    }
  }

  // ========================================================================
  // Haversine Distance Formula (km between coordinates)
  // ========================================================================
  function calculateDistanceKm(lat1, lon1, lat2, lon2) {
    if (!lat1 || !lon1 || !lat2 || !lon2) return null;
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  }

  function getMonumentDistance(monument) {
    if (!monument.coords || !state.userCoords) return null;
    return calculateDistanceKm(
      state.userCoords.lat,
      state.userCoords.lon,
      monument.coords.lat,
      monument.coords.lon
    );
  }

  function getNearestCityName(lat, lon) {
    let bestCity = INDIAN_CITIES[0].name;
    let minDistance = Infinity;
    INDIAN_CITIES.forEach(function (c) {
      const dist = calculateDistanceKm(lat, lon, c.lat, c.lon);
      if (dist < minDistance) {
        minDistance = dist;
        bestCity = c.name;
      }
    });
    return bestCity;
  }

  // ========================================================================
  // Location Detection & Management
  // ========================================================================
  function requestUserLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser. Please select your city manually.");
      openLocationModal();
      return;
    }

    if (geoBtnLabel) geoBtnLabel.textContent = "Detecting...";

    navigator.geolocation.getCurrentPosition(
      function (pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const nearestName = getNearestCityName(lat, lon);

        state.userCoords = {
          lat: lat,
          lon: lon,
          cityName: nearestName + " (GPS)",
          isGps: true
        };

        updateLocationDisplay();
        renderHomeCards();
      },
      function (err) {
        console.warn("Geolocation denied or unavailable:", err.message);
        if (geoBtnLabel) geoBtnLabel.textContent = "Near Me";
        openLocationModal();
      },
      { timeout: 8000, enableHighAccuracy: false }
    );
  }

  function setUserCity(city) {
    state.userCoords = {
      lat: city.lat,
      lon: city.lon,
      cityName: city.name,
      isGps: false
    };
    closeLocationModal();
    updateLocationDisplay();
    renderHomeCards();
  }

  function updateLocationDisplay() {
    if (geoBtnLabel) {
      const shortName = state.userCoords.cityName.split(",")[0];
      geoBtnLabel.textContent = "📍 " + shortName;
    }
    if (locationDisplayText) {
      locationDisplayText.textContent =
        "Reference: " + state.userCoords.cityName + " · Distances calculated to 10 sites";
    }
  }

  function openLocationModal() {
    if (!locationModal) return;
    renderCityGrid();
    locationModal.classList.remove("hidden");
  }

  function closeLocationModal() {
    if (locationModal) locationModal.classList.add("hidden");
  }

  function renderCityGrid() {
    if (!locCityGrid) return;
    locCityGrid.innerHTML = INDIAN_CITIES.map(function (city) {
      const isSelected = state.userCoords.cityName.indexOf(city.name.split(",")[0]) !== -1;
      return `
        <button type="button" class="btn-city-choice ${isSelected ? "active" : ""}" data-city-name="${city.name}">
          ${city.name}
        </button>
      `;
    }).join("");

    locCityGrid.querySelectorAll(".btn-city-choice").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const cityName = btn.getAttribute("data-city-name");
        const match = INDIAN_CITIES.find(function (c) { return c.name === cityName; });
        if (match) setUserCity(match);
      });
    });
  }

  // ========================================================================
  // Filter & Search Logic
  // ========================================================================
  function filterMonuments(query) {
    if (!window.MONUMENTS) return [];
    let list = [...window.MONUMENTS];

    // Filter by Region or Nearest Chip
    if (state.activeFilter === "nearest") {
      list.sort(function (a, b) {
        const distA = getMonumentDistance(a) || 99999;
        const distB = getMonumentDistance(b) || 99999;
        return distA - distB;
      });
    } else if (state.activeFilter === "north") {
      const northIds = ["taj-mahal", "hawa-mahal", "qutub-minar", "red-fort", "amer-fort"];
      list = list.filter(function (m) { return northIds.includes(m.id); });
    } else if (state.activeFilter === "west-central") {
      const westIds = ["gateway-india", "ajanta-caves"];
      list = list.filter(function (m) { return westIds.includes(m.id); });
    } else if (state.activeFilter === "south-east") {
      const southEastIds = ["hampi-chariot", "konark-sun-temple", "meenakshi-temple"];
      list = list.filter(function (m) { return southEastIds.includes(m.id); });
    }

    // Apply text search
    const trimmed = (query || "").trim().toLowerCase();
    if (!trimmed) return list;

    return list.filter(function (m) {
      const haystack = [
        m.name.en,
        m.name.hi,
        m.city.en,
        m.city.hi,
        m.era.en,
        m.shortSummary.en
      ].join(" ").toLowerCase();
      return haystack.indexOf(trimmed) !== -1;
    });
  }

  function handleSearchInput() {
    state.searchQuery = searchInput.value;
    const hasText = state.searchQuery.trim().length > 0;

    if (hasText) {
      clearSearchBtn.classList.remove("hidden");
      renderSearchDropdown(state.searchQuery);
    } else {
      clearSearchBtn.classList.add("hidden");
      searchDropdown.classList.add("hidden");
    }

    renderHomeCards();
  }

  function renderSearchDropdown(query) {
    const matches = filterMonuments(query);
    searchDropdown.classList.remove("hidden");

    if (matches.length === 0) {
      searchDropdown.innerHTML = `
        <div class="search-no-match">
          No monuments found matching "${query}". Try Taj Mahal, Jaipur, Delhi, Red Fort, or Hampi.
        </div>
      `;
      return;
    }

    searchDropdown.innerHTML = matches
      .map(function (m) {
        return `
          <button type="button" class="search-result-item" data-search-monument-id="${m.id}" role="option">
            <div>
              <div class="search-result-title">${m.name.en} · ${m.name.hi}</div>
              <div class="search-result-city">${m.city.en}</div>
            </div>
            <span class="search-result-city">Open →</span>
          </button>
        `;
      })
      .join("");

    const optionButtons = searchDropdown.querySelectorAll("[data-search-monument-id]");
    optionButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const targetId = btn.getAttribute("data-search-monument-id");
        searchDropdown.classList.add("hidden");
        openMonumentPage(targetId);
      });
    });
  }

  function clearSearch() {
    state.searchQuery = "";
    if (searchInput) searchInput.value = "";
    if (clearSearchBtn) clearSearchBtn.classList.add("hidden");
    if (searchDropdown) searchDropdown.classList.add("hidden");
    renderHomeCards();
  }

  // ========================================================================
  // Feature 1: Render Home Screen (10 Monument Cards + Distance & Weather)
  // ========================================================================
  function renderHomeCards() {
    if (!monumentsGrid || !window.MONUMENTS) return;

    const filtered = filterMonuments(state.searchQuery);
    const hasQuery = state.searchQuery.trim().length > 0;

    if (hasQuery && homeSearchStatus && homeSearchStatusText) {
      homeSearchStatus.classList.remove("hidden");
      homeSearchStatusText.textContent =
        'Showing ' + filtered.length + ' of ' + window.MONUMENTS.length + ' monuments for "' + state.searchQuery.trim() + '"';
    } else if (homeSearchStatus) {
      homeSearchStatus.classList.add("hidden");
    }

    if (filtered.length === 0) {
      monumentsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; background: var(--surface); border-radius: 16px; border: 1px solid var(--border-hairline);">
          <p style="font-size: 1.1rem; color: var(--text-primary); font-weight: 600;">No monuments found matching your current filter.</p>
          <button type="button" id="reset-filter-btn" class="btn-top-secondary" style="margin-top: 1rem;">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-filter-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", function () {
          state.activeFilter = "all";
          state.searchQuery = "";
          if (searchInput) searchInput.value = "";
          filterChips.forEach(function (c) { c.classList.toggle("active", c.getAttribute("data-filter") === "all"); });
          renderHomeCards();
        });
      }
      return;
    }

    monumentsGrid.innerHTML = filtered
      .map(function (monument) {
        const storyCount = monument.stories ? monument.stories.length : 3;
        const distanceKm = getMonumentDistance(monument);
        const distBadge = distanceKm !== null
          ? `<span class="card-dist-pill" title="Distance from your location">📍 ${distanceKm} km</span>`
          : "";

        const firstImage = monument.images && monument.images[0] ? monument.images[0].url : null;
        const visualContent = firstImage
          ? `<img src="${firstImage}" alt="${monument.name.en}" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />`
          : monument.svgIllustration;

        return `
          <article class="monument-card" data-monument-id="${monument.id}" tabindex="0" role="button" aria-label="Explore ${monument.name.en}">
            <div class="card-visual" style="overflow:hidden; position:relative;">
              ${visualContent}
              <div style="position:absolute; bottom:8px; right:8px; background:rgba(15,43,91,0.85); color:#fff; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:999px;">
                ${monument.images ? "📷 " + monument.images.length + " Photos" : "🎨 SVG"}
              </div>
            </div>
            <div class="card-body">
              <div class="card-badges-row">
                ${distBadge}
                <span class="card-weather-pill" data-weather-preview-id="${monument.id}">🌤️ Live Weather</span>
              </div>
              <div class="card-meta">
                <span>${monument.city.en}</span>
                <span aria-hidden="true">·</span>
                <span>${monument.era.en}</span>
              </div>
              <div class="card-title-row">
                <h2 class="card-title">${monument.name.en}</h2>
                <span class="card-title-hi">${monument.name.hi}</span>
              </div>
              <p class="card-summary">${monument.shortSummary.en}</p>
              <div class="card-footer">
                <span class="card-story-count">${storyCount} Audio Stories · Weather & Crowd Radar</span>
                <span class="btn-explore-card">
                  Explore
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    // Attach click and keyboard listeners to cards
    const cards = monumentsGrid.querySelectorAll(".monument-card");
    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        const id = card.getAttribute("data-monument-id");
        openMonumentPage(id);
      });
      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          const id = card.getAttribute("data-monument-id");
          openMonumentPage(id);
        }
      });
    });

    // Populate quick weather previews for visible cards
    filtered.slice(0, 4).forEach(function (m) {
      fetchWeatherSummaryForCard(m);
    });
  }

  // Quick weather pill fetch for home cards
  function fetchWeatherSummaryForCard(monument) {
    if (!monument.coords) return;
    const cacheKey = monument.id;
    if (state.weatherCache[cacheKey]) {
      updateCardWeatherBadge(monument.id, state.weatherCache[cacheKey]);
      return;
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${monument.coords.lat}&longitude=${monument.coords.lon}&current=temperature_2m,weather_code&timezone=auto`;
    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d && d.current) {
          state.weatherCache[cacheKey] = d;
          updateCardWeatherBadge(monument.id, d);
        }
      })
      .catch(function () {});
  }

  function updateCardWeatherBadge(monumentId, data) {
    const badge = document.querySelector(`[data-weather-preview-id="${monumentId}"]`);
    if (badge && data && data.current) {
      const temp = Math.round(data.current.temperature_2m);
      badge.textContent = `🌤️ ${temp}°C`;
    }
  }

  // ========================================================================
  // Navigation
  // ========================================================================
  function openMonumentPage(monumentId) {
    stopSpeech();
    state.currentMonumentId = monumentId;
    state.selectedHour = "10 AM";
    state.activeImageIdx = 0;
    state.visualMode = "photo";

    homeView.classList.add("hidden");
    monumentView.classList.remove("hidden");

    renderMonumentPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showHomeScreen() {
    stopSpeech();
    state.currentMonumentId = null;

    monumentView.classList.add("hidden");
    homeView.classList.remove("hidden");

    renderHomeCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getCurrentMonument() {
    if (!window.MONUMENTS) return null;
    return window.MONUMENTS.find(function (m) {
      return m.id === state.currentMonumentId;
    });
  }

  // ========================================================================
  // Render Full Monument Page
  // ========================================================================
  function renderMonumentPage() {
    const monument = getCurrentMonument();
    if (!monument) return;

    const lang = state.lang; // "en" or "hi"

    if (backBtnLabel) {
      backBtnLabel.textContent = lang === "hi" ? "सभी स्मारकों पर वापस जाएं" : "Back to Monuments";
    }

    // 1. Render Monument Hero Banner with HD Photos & Toggle
    renderMonumentHero(monument, lang);

    // 2. Render Feature 2: Stories, EN/HI Toggle, Audio, and Kids Mode
    renderStoriesSection(monument, lang);

    // 3. Render NEW Feature: Mausam-X Weather & Tour Planning Radar
    renderWeatherSection(monument, lang);

    // 4. Render Feature 3 & 4: Crowd Bar Chart, Dropdown & Quieter Gem
    renderCrowdAndGemSection(monument, lang);

    // 5. Render Feature 5: Safety Section & Visit Checklist
    renderSafetySection(monument, lang);

    // 6. Render Feature 6: Fair-Fare Range Table
    renderFareTableSection(monument, lang);
  }

  // ========================================================================
  // Monument Hero Banner & HD Photo Gallery Viewer
  // ========================================================================
  function renderMonumentHero(monument, lang) {
    const hasImages = monument.images && monument.images.length > 0;
    const activeImg = hasImages ? monument.images[state.activeImageIdx] : null;

    let visualContent = "";
    if (state.visualMode === "photo" && activeImg) {
      visualContent = `
        <img
          src="${activeImg.url}"
          alt="${activeImg.title}"
          class="hero-main-photo"
          id="hero-active-img"
          title="Click to view full screen high definition photo"
        />
      `;
    } else {
      visualContent = `<div style="height:100%; display:flex; align-items:center;">${monument.svgIllustration}</div>`;
    }

    const thumbnailsStrip = hasImages && state.visualMode === "photo"
      ? `
        <div class="hero-thumbs-row" role="tablist" aria-label="Monument photo gallery">
          ${monument.images
            .map(function (img, idx) {
              return `
                <button
                  type="button"
                  class="gallery-thumb-btn ${idx === state.activeImageIdx ? "active" : ""}"
                  data-thumb-idx="${idx}"
                  aria-label="View photo: ${img.title}"
                >
                  <img src="${img.url}" alt="${img.title}" loading="lazy" />
                </button>
              `;
            })
            .join("")}
        </div>
      `
      : "";

    monumentHero.innerHTML = `
      <div class="hero-visual-container">
        <!-- Visual Mode Switcher (Photo / Art) -->
        <div class="gallery-mode-toggle">
          <button type="button" class="btn-gallery-mode ${state.visualMode === "photo" ? "active" : ""}" id="btn-mode-photo">
            📷 HD Photos (${hasImages ? monument.images.length : 0})
          </button>
          <button type="button" class="btn-gallery-mode ${state.visualMode === "art" ? "active" : ""}" id="btn-mode-art">
            🎨 Heritage Art
          </button>
        </div>

        ${visualContent}
        ${thumbnailsStrip}
      </div>

      <div class="monument-hero-content">
        <p class="monument-hero-meta">
          <span>${monument.city[lang]}</span>
          <span aria-hidden="true"> · </span>
          <span>${monument.era[lang]}</span>
        </p>
        <h1 class="monument-hero-title">${monument.name[lang]}</h1>
        <p class="monument-hero-desc">${monument.shortSummary[lang]}</p>
      </div>
    `;

    // Wire up photo/art toggles
    const btnPhoto = document.getElementById("btn-mode-photo");
    const btnArt = document.getElementById("btn-mode-art");
    if (btnPhoto) {
      btnPhoto.addEventListener("click", function () {
        state.visualMode = "photo";
        renderMonumentHero(monument, state.lang);
      });
    }
    if (btnArt) {
      btnArt.addEventListener("click", function () {
        state.visualMode = "art";
        renderMonumentHero(monument, state.lang);
      });
    }

    // Wire up thumbnail clicks
    const thumbBtns = monumentHero.querySelectorAll("[data-thumb-idx]");
    thumbBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.activeImageIdx = parseInt(btn.getAttribute("data-thumb-idx"), 10);
        renderMonumentHero(monument, state.lang);
      });
    });

    // Wire up clicking main photo to open Lightbox
    const mainImgEl = document.getElementById("hero-active-img");
    if (mainImgEl && activeImg) {
      mainImgEl.addEventListener("click", function () {
        openLightbox(activeImg, monument, state.lang);
      });
    }
  }

  function openLightbox(imageObj, monument, lang) {
    if (!imageLightbox) return;
    lightboxImg.src = imageObj.url;
    lightboxImg.alt = imageObj.title;
    lightboxTitle.textContent = imageObj.title + " — " + monument.name[lang];
    lightboxDesc.textContent = imageObj.caption ? imageObj.caption[lang] : "";
    lightboxCredit.textContent = "Photo Source: " + (imageObj.credit || "High Definition Archive");
    imageLightbox.classList.remove("hidden");
  }

  function closeLightbox() {
    if (imageLightbox) imageLightbox.classList.add("hidden");
  }

  // ========================================================================
  // NEW FEATURE: Mausam-X Weather & Tour Planning Radar
  // ========================================================================
  function weatherCodeToCondition(code, lang) {
    if (code === 0) return { icon: "☀️", en: "Clear Sunny Sky", hi: "साफ़ और धूप भरा मौसम" };
    if (code === 1 || code === 2) return { icon: "🌤️", en: "Mainly Clear / Gentle Sun", hi: "हल्की धूप और साफ़ मौसम" };
    if (code === 3) return { icon: "☁️", en: "Overcast / Shaded Clouds", hi: "बादल छाए रहेंगे (सुहाना)" };
    if (code >= 45 && code <= 48) return { icon: "🌫️", en: "Misty Fog", hi: "धुंध और कोहरा" };
    if (code >= 51 && code <= 55) return { icon: "🌦️", en: "Light Drizzle", hi: "हल्की बूंदाबांदी" };
    if (code >= 61 && code <= 65) return { icon: "🌧️", en: "Moderate Rain", hi: "बारिश की संभावना" };
    if (code >= 80 && code <= 82) return { icon: "🌧️", en: "Passing Rain Showers", hi: "तेज़ बौछारें" };
    if (code >= 95) return { icon: "⛈️", en: "Thunderstorm Warning", hi: "आंधी और गरज के साथ बारिश" };
    return { icon: "🌤️", en: "Fair Outdoor Weather", hi: "अनुकूल मौसम" };
  }

  function renderWeatherSection(monument, lang) {
    if (!monument.coords) return;

    if (weatherCityTag) {
      weatherCityTag.textContent = monument.city[lang].split(",")[0];
    }
    if (weatherUpdatedText) {
      weatherUpdatedText.textContent = lang === "hi" ? "लाइव सैटेलाइट रडार सक्रिय" : "Live Satellite Radar Active";
    }

    const cacheKey = monument.id;
    if (state.weatherCache[cacheKey]) {
      populateWeatherUI(monument, state.weatherCache[cacheKey], lang);
      return;
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${monument.coords.lat}&longitude=${monument.coords.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,uv_index&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,weather_code&timezone=auto`;

    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        state.weatherCache[cacheKey] = data;
        populateWeatherUI(monument, data, lang);
      })
      .catch(function (err) {
        console.warn("Weather fetch fallback:", err.message);
        const fallback = generateFallbackWeather(monument);
        populateWeatherUI(monument, fallback, lang);
      });
  }

  function generateFallbackWeather(monument) {
    return {
      current: {
        temperature_2m: 26.5,
        apparent_temperature: 28.0,
        relative_humidity_2m: 52,
        wind_speed_10m: 8.5,
        weather_code: 1,
        uv_index: 4
      },
      hourly: {
        time: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
        precipitation_probability: [0, 5, 10, 5, 0, 0]
      },
      daily: {
        time: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        temperature_2m_max: [28, 29, 27, 28, 30, 29, 28],
        temperature_2m_min: [17, 18, 16, 17, 18, 19, 18],
        precipitation_probability_max: [5, 10, 0, 15, 5, 0, 10],
        weather_code: [1, 2, 0, 3, 1, 0, 2]
      }
    };
  }

  function populateWeatherUI(monument, data, lang) {
    const cur = data.current || {};
    const temp = Math.round(cur.temperature_2m || 25);
    const feelsLike = Math.round(cur.apparent_temperature || temp + 2);
    const humidity = Math.round(cur.relative_humidity_2m || 50);
    const wind = Math.round(cur.wind_speed_10m || 6);
    const code = cur.weather_code !== undefined ? cur.weather_code : 1;
    const cond = weatherCodeToCondition(code, lang);

    const uvVal = cur.uv_index !== undefined ? cur.uv_index : (data.hourly && data.hourly.uv_index ? Math.max(...data.hourly.uv_index.slice(0, 12)) : 5);

    if (weatherMainIcon) weatherMainIcon.textContent = cond.icon;
    if (weatherTempMain) weatherTempMain.textContent = temp + "°C";
    if (weatherConditionCaption) weatherConditionCaption.textContent = cond[lang];
    if (weatherFeelsLike) weatherFeelsLike.textContent = feelsLike + "°C";
    if (weatherHumidity) weatherHumidity.textContent = humidity + "%";
    if (weatherWind) weatherWind.textContent = wind + " km/h";
    if (weatherUv) weatherUv.textContent = uvVal ? `${Math.round(uvVal)} (Mod)` : "4 (Low)";

    // Mausam-X Heat Advisory Meter
    let heatPct = 25;
    let heatRiskTitle = lang === "hi" ? "गर्मी का स्तर: सुखद (Green)" : "Heat Stress: Pleasant (Green)";
    let heatTip = lang === "hi" ? "घूमने और सैर के लिए बिल्कुल अनुकूल मौसम" : "Comfortable outdoor walking conditions";

    if (feelsLike >= 38) {
      heatPct = 90;
      heatRiskTitle = lang === "hi" ? "⚠️ अत्यधिक गर्मी चेतावनी (Red)" : "⚠️ High Heat Warning (Red)";
      heatTip = lang === "hi" ? "दोपहर 12 से 3 बजे खुली धूप से बचें, पानी अवश्य पिएं" : "Avoid direct sun 12–3 PM. Hydrate constantly";
    } else if (feelsLike >= 32) {
      heatPct = 60;
      heatRiskTitle = lang === "hi" ? "मध्यम गर्मी (Amber)" : "Moderate Heat (Amber)";
      heatTip = lang === "hi" ? "टोपी व धूप का चश्मा पहनें, छांव में विश्राम लें" : "Wear a sun hat & sunglasses; take shaded breaks";
    } else if (feelsLike <= 15) {
      heatPct = 15;
      heatRiskTitle = lang === "hi" ? "शीतल / हल्की ठंड (Cool)" : "Cool / Crisp (Green)";
      heatTip = lang === "hi" ? "हल्की गर्म जैकेट या शॉल साथ रखें" : "Pleasant; carry a light jacket for breeze";
    }

    if (heatRiskLabel) heatRiskLabel.textContent = heatRiskTitle;
    if (heatRiskAdvice) heatRiskAdvice.textContent = heatTip;
    if (heatMeterFill) heatMeterFill.style.width = heatPct + "%";

    // Hourly Rain Probability Bars
    if (rainHourlyBars && data.hourly && data.hourly.precipitation_probability) {
      const rainProbs = data.hourly.precipitation_probability.slice(0, 6);
      const times = ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM", "7 PM"];

      const maxRain = Math.max(...rainProbs, 0);
      if (rainBadge) {
        if (maxRain > 40) {
          rainBadge.textContent = lang === "hi" ? "🌧️ वर्षा की संभावना" : "🌧️ Rain Likely";
          rainBadge.style.background = "var(--amber-tint)";
          rainBadge.style.color = "var(--amber)";
        } else {
          rainBadge.textContent = lang === "hi" ? "☀️ सूखा मौसम" : "☀️ Dry Weather";
          rainBadge.style.background = "rgba(14, 165, 233, 0.15)";
          rainBadge.style.color = "#0284C7";
        }
      }

      if (rainOverviewText) {
        rainOverviewText.textContent = maxRain > 30
          ? (lang === "hi" ? `अगले कुछ घंटों में ${maxRain}% तक बारिश की संभावना है। छाता साथ रखें।` : `${maxRain}% max precipitation expected. Carry an umbrella.`)
          : (lang === "hi" ? `अगले 12 घंटों में बारिश का जोखिम न्यूनतम (${maxRain}%) है।` : `Minimal precipitation risk (${maxRain}%) over the next 12 hours.`);
      }

      rainHourlyBars.innerHTML = rainProbs.map(function (prob, idx) {
        const heightPct = Math.max(prob, 8);
        return `
          <div class="rain-bar-col">
            <span class="rain-bar-pct">${prob}%</span>
            <div class="rain-bar-fill-track">
              <div class="rain-bar-fill" style="height: ${heightPct}%;"></div>
            </div>
            <span class="rain-bar-time">${times[idx] || "hr"}</span>
          </div>
        `;
      }).join("");
    }

    // Dynamic Best Visiting Window Today
    if (optimalWindowText) {
      if (feelsLike > 34) {
        optimalWindowText.textContent = lang === "hi"
          ? "🌅 सुबह 06:30 से 09:30 बजे (ठंडी हवा व कम भीड़) और 🌇 शाम 04:30 से 06:30 बजे (सूर्यास्त का सुनहरा समय)। दोपहर में धूप से बचें।"
          : "🌅 06:30 AM – 09:30 AM (Cool breeze & low crowds) & 🌇 04:30 PM – 06:30 PM (Golden hour). Rest indoors at noon.";
      } else {
        optimalWindowText.textContent = lang === "hi"
          ? "🌟 सुबह 08:30 से 11:30 बजे और शाम 03:30 से 05:30 बजे। सुहाना मौसम, शानदार तस्वीरें खींचने के लिए उत्तम।"
          : "🌟 08:30 AM – 11:30 AM & 03:30 PM – 05:30 PM. Pleasant daylight, great lighting for photography.";
      }
    }

    // 7-Day Tour Planner Forecast Cards
    if (forecast7dayRow && data.daily && data.daily.time) {
      const days = data.daily.time.slice(0, 7);
      const maxs = data.daily.temperature_2m_max || [];
      const mins = data.daily.temperature_2m_min || [];
      const rains = data.daily.precipitation_probability_max || [];
      const codes = data.daily.weather_code || [];

      const dayNamesEn = ["Today", "Tomorrow", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const dayNamesHi = ["आज", "कल", "बुध", "गुरु", "शुक्र", "शनि", "रवि"];

      forecast7dayRow.innerHTML = days.map(function (d, i) {
        const maxT = Math.round(maxs[i] || 28);
        const minT = Math.round(mins[i] || 18);
        const rainP = rains[i] || 0;
        const cCode = codes[i] || 1;
        const cInfo = weatherCodeToCondition(cCode, lang);

        let ratingClass = "rating-ideal";
        let ratingTag = lang === "hi" ? "🌟 उत्तम दिन" : "🌟 Ideal Day";

        if (rainP > 40) {
          ratingClass = "rating-rain";
          ratingTag = lang === "hi" ? "🌧️ बारिश" : "🌧️ Rain Likely";
        } else if (maxT > 36) {
          ratingClass = "rating-hot";
          ratingTag = lang === "hi" ? "☀️ दोपहर तेज़" : "☀️ Hot Noon";
        } else if (maxT > 30) {
          ratingClass = "rating-good";
          ratingTag = lang === "hi" ? "🌤️ अच्छा मौसम" : "🌤️ Good Visit";
        }

        const dayLabel = i < 2
          ? (lang === "hi" ? dayNamesHi[i] : dayNamesEn[i])
          : new Date(d).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-US", { weekday: "short" });

        return `
          <div class="forecast-day-card">
            <span class="forecast-day-name">${dayLabel}</span>
            <span class="forecast-day-date">${d.slice(5)}</span>
            <span class="forecast-day-icon">${cInfo.icon}</span>
            <span class="forecast-day-temp">${maxT}° / <span class="forecast-day-min">${minT}°</span></span>
            <span class="forecast-rating-tag ${ratingClass}">${ratingTag}</span>
          </div>
        `;
      }).join("");
    }
  }

  // ========================================================================
  // Feature 2: Stories, EN/HI Toggle, Listen Button & Kids Mode (Preserved)
  // ========================================================================
  function renderStoriesSection(monument, lang) {
    if (lang === "en") {
      langEnBtn.classList.add("active");
      langEnBtn.setAttribute("aria-pressed", "true");
      langHiBtn.classList.remove("active");
      langHiBtn.setAttribute("aria-pressed", "false");
    } else {
      langHiBtn.classList.add("active");
      langHiBtn.setAttribute("aria-pressed", "true");
      langEnBtn.classList.remove("active");
      langEnBtn.setAttribute("aria-pressed", "false");
    }

    if (state.kidsMode) {
      kidsModeBtn.classList.add("kids-active");
      kidsModeBtn.setAttribute("aria-pressed", "true");
      kidsModeText.textContent = lang === "hi" ? "किड्स मोड: चालू" : "Kids Mode: On";
    } else {
      kidsModeBtn.classList.remove("kids-active");
      kidsModeBtn.setAttribute("aria-pressed", "false");
      kidsModeText.textContent = lang === "hi" ? "किड्स मोड: बंद" : "Kids Mode: Off";
    }

    // Sync Voice gender active states
    setVoiceGender(state.voiceGender);

    if (lang === "hi") {
      storiesHeading.textContent = state.kidsMode
        ? "बच्चों के लिए सरल और रोचक कहानियां (Kids Mode)"
        : "ऐतिहासिक और वास्तुकला की कहानियां";
      storiesSubheading.textContent = state.kidsMode
        ? "युवा खोजकर्ताओं के लिए आसान शब्दों में मज़ेदार कहानियां।"
        : "प्रत्येक कहानी को सुनने के लिए 'सुनें' बटन दबाएं या ऊपर से किड्स मोड चुनें।";
      listenAllText.textContent = state.speakingStoryId === "ALL" ? "सुनाया जा रहा है..." : "सभी कहानियां सुनें";
    } else {
      storiesHeading.textContent = state.kidsMode
        ? "Kids Mode: Fun & Simple Heritage Stories"
        : "Architectural & Historical Stories";
      storiesSubheading.textContent = state.kidsMode
        ? "Simplified, wonder-filled stories written specially for young explorers."
        : "Standard heritage stories — switch to Kids Mode above for simpler tales.";
      listenAllText.textContent = state.speakingStoryId === "ALL" ? "Narrating All..." : "Listen to All Stories";
    }

    storiesList.innerHTML = monument.stories
      .map(function (story, index) {
        const storyText = state.kidsMode ? story.kids[lang] : story.standard[lang];
        const isSpeakingThis = state.speakingStoryId === story.id;
        const modeTag = state.kidsMode
          ? lang === "hi"
            ? "किड्स मोड · सरल कहानी"
            : "Kids Mode · Explorer Story"
          : lang === "hi"
            ? "विरासत अध्याय"
            : "Heritage Chapter";

        const listenBtnLabel = isSpeakingThis
          ? lang === "hi"
            ? "रोकें"
            : "Stop"
          : lang === "hi"
            ? "सुनें (Listen)"
            : "Listen";

        return `
          <article class="story-card ${state.kidsMode ? "kids-mode-card" : ""} ${isSpeakingThis ? "story-speaking" : ""}">
            <div>
              <p class="story-meta">
                <span>${modeTag}</span>
                <span aria-hidden="true"> · </span>
                <span>#${index + 1}</span>
              </p>
              <h3 class="story-title">${story.title[lang]}</h3>
              <p class="story-body">${storyText}</p>
            </div>
            <div class="story-footer">
              <span class="story-read-time">${story.readTime}</span>
              <button
                type="button"
                class="btn-story-listen ${isSpeakingThis ? "active-audio" : ""}"
                data-story-id="${story.id}"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                <span>${listenBtnLabel}</span>
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    const storyButtons = storiesList.querySelectorAll(".btn-story-listen");
    storyButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const storyId = btn.getAttribute("data-story-id");
        toggleSingleStorySpeech(storyId);
      });
    });
  }

  // ========================================================================
  // Feature 3 & 4: Crowd Bar Chart & Quieter Nearby Gem (Preserved)
  // ========================================================================
  function getBarColorClass(status) {
    if (status === "Low") return "fill-green";
    if (status === "Moderate") return "fill-amber";
    return "fill-red";
  }

  function translateCrowdStatus(status, lang) {
    if (lang !== "hi") return status;
    const map = {
      Low: "कम भीड़ (Low)",
      Moderate: "सामान्य भीड़ (Moderate)",
      High: "अधिक भीड़ (High)",
      Peak: "अत्यधिक भीड़ (Peak)"
    };
    return map[status] || status;
  }

  function getCrowdStatusFromPercentage(pct) {
    if (pct < 45) return "Low";
    if (pct < 70) return "Moderate";
    if (pct < 85) return "High";
    return "Peak";
  }

  function renderCrowdAndGemSection(monument, lang) {
    if (lang === "hi") {
      crowdHeading.textContent = "घंटे के अनुसार अनुमानित भीड़ (सुबह 8 – शाम 6)";
      crowdSubheading.textContent = "समय चुनकर भीड़ का स्तर और शांत विकल्प देखें।";
      timeSlotLabel.textContent = "आगमन समय चुनें";
      crowdStatusCaption.textContent = "चुने गए समय पर स्थिति";
    } else {
      crowdHeading.textContent = "Expected Crowd by Hour (8 AM – 6 PM)";
      crowdSubheading.textContent = "Pick your planned arrival time slot below to check crowd status and quieter alternatives.";
      timeSlotLabel.textContent = "Select Time Slot";
      crowdStatusCaption.textContent = "Selected Slot Status";
    }

    const hours = monument.crowdByHour;
    timeSlotSelect.innerHTML = hours
      .map(function (item) {
        const selected = item.hour === state.selectedHour ? "selected" : "";
        return `<option value="${item.hour}" ${selected}>${item.hour}</option>`;
      })
      .join("");

    const currentSlotData =
      hours.find(function (item) { return item.hour === state.selectedHour; }) || hours[2];
    const statusCategory = getCrowdStatusFromPercentage(currentSlotData.pct);

    crowdStatusBadge.className = "crowd-status-badge";
    if (statusCategory === "Low") {
      crowdStatusBadge.classList.add("status-low");
    } else if (statusCategory === "Moderate") {
      crowdStatusBadge.classList.add("status-moderate");
    } else {
      crowdStatusBadge.classList.add("status-high");
    }

    crowdStatusBadge.innerHTML = `
      <span>${translateCrowdStatus(statusCategory, lang)}</span>
      <span class="badge-pct">· ${currentSlotData.pct}% ${lang === "hi" ? "क्षमता" : "Capacity"}</span>
    `;

    crowdChartBars.innerHTML = hours
      .map(function (item) {
        const cat = getCrowdStatusFromPercentage(item.pct);
        const colorClass = getBarColorClass(cat);
        const isSelected = item.hour === state.selectedHour;
        const heightPct = Math.max(item.pct, 8);

        return `
          <div
            class="chart-bar-column ${isSelected ? "selected-column" : ""}"
            data-hour="${item.hour}"
            tabindex="0"
            role="button"
            aria-label="${item.hour}: ${item.pct}% crowd (${cat})"
          >
            <div class="bar-value-label">${item.pct}%</div>
            <div class="bar-track">
              <div class="bar-fill ${colorClass}" style="height: ${heightPct}%;"></div>
            </div>
            <div class="bar-hour-label">${item.hour}</div>
          </div>
        `;
      })
      .join("");

    const barColumns = crowdChartBars.querySelectorAll(".chart-bar-column");
    barColumns.forEach(function (col) {
      col.addEventListener("click", function () {
        const clickedHour = col.getAttribute("data-hour");
        state.selectedHour = clickedHour;
        renderCrowdAndGemSection(monument, state.lang);
      });
    });

    const isCrowded = statusCategory === "High" || statusCategory === "Peak";
    if (isCrowded && monument.nearbyGem) {
      nearbyGemContainer.classList.remove("hidden");
      const gem = monument.nearbyGem;
      nearbyGemContainer.innerHTML = `
        <div class="gem-badge-col">
          <span class="gem-pill">${lang === "hi" ? "शांत विकल्प" : "Quieter Alternative"}</span>
          <span class="gem-icon" aria-hidden="true">🌿</span>
        </div>
        <div class="gem-content">
          <div class="gem-title-row">
            <h3 class="gem-title">${gem.name[lang]}</h3>
            <span class="gem-distance">${gem.distance[lang]}</span>
          </div>
          <p class="gem-desc">${gem.description[lang]}</p>
        </div>
        <div class="gem-action-col">
          <a
            href="${gem.mapsUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-maps"
            aria-label="Open ${gem.name.en} in Google Maps"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${lang === "hi" ? "मैप्स पर देखें" : "Open in Maps"}</span>
          </a>
        </div>
      `;
    } else {
      nearbyGemContainer.classList.add("hidden");
      nearbyGemContainer.innerHTML = "";
    }
  }

  // ========================================================================
  // Feature 5: Safety Section & Interactive Checklist (Preserved)
  // ========================================================================
  function renderSafetySection(monument, lang) {
    if (lang === "hi") {
      safetyHeading.textContent = "सुरक्षा और तैयारी गाइड";
      safetySubheading.textContent = "आपातकालीन नंबर, निकटतम सहायता केंद्र और यात्रा चेकलिस्ट।";
      helplinesTitle.textContent = "24×7 आपातकालीन वन-टैप हेल्पलाइन";
      helplinesDesc.textContent = "सहायता के लिए सीधे किसी भी नंबर पर टैप करके कॉल करें।";
      checklistTitle.textContent = "स्मारक प्रवेश चेकलिस्ट";
      checklistDesc.textContent = "मुख्य गेट पर पहुंचने से पहले सभी आवश्यक चीज़ों की जांच करें।";
    } else {
      safetyHeading.textContent = "Visitor Safety & Readiness";
      safetySubheading.textContent = "One-tap emergency helplines, nearest assistance centres, and an interactive pre-visit checklist.";
      helplinesTitle.textContent = "24×7 Emergency Tap-to-Call Helplines";
      helplinesDesc.textContent = "Tap any button below on your phone to dial official national and tourist support lines immediately.";
      checklistTitle.textContent = "Monument Visit Checklist";
      checklistDesc.textContent = "Tick off each item before heading to the entry gate.";
    }

    nearestFacilities.innerHTML = `
      <div class="facility-item">
        <svg class="facility-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <div class="facility-text">
          <span class="facility-label">${lang === "hi" ? "निकटतम पुलिस सहायता:" : "Nearest Police Station:"}</span>
          <span class="facility-name">${monument.safety.police[lang]}</span>
        </div>
      </div>
      <div class="facility-item">
        <svg class="facility-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
        <div class="facility-text">
          <span class="facility-label">${lang === "hi" ? "निकटतम आपातकालीन अस्पताल:" : "Nearest Hospital & Emergency:"}</span>
          <span class="facility-name">${monument.safety.hospital[lang]}</span>
        </div>
      </div>
    `;

    const checklistItems = monument.safety.checklist[lang];
    if (!state.checkedItems[monument.id]) {
      state.checkedItems[monument.id] = {};
    }
    const currentChecked = state.checkedItems[monument.id];

    let checkedCount = 0;
    for (let i = 0; i < checklistItems.length; i++) {
      if (currentChecked[i]) checkedCount++;
    }

    checklistProgress.textContent =
      lang === "hi"
        ? `${checkedCount} / ${checklistItems.length} तैयार`
        : `${checkedCount} / ${checklistItems.length} Ready`;

    visitChecklist.innerHTML = checklistItems
      .map(function (itemText, index) {
        const isChecked = !!currentChecked[index];
        return `
          <label class="checklist-item ${isChecked ? "item-checked" : ""}">
            <input
              type="checkbox"
              class="checklist-checkbox"
              data-item-index="${index}"
              ${isChecked ? "checked" : ""}
            />
            <span class="checklist-item-text">${itemText}</span>
          </label>
        `;
      })
      .join("");

    const checkboxes = visitChecklist.querySelectorAll(".checklist-checkbox");
    checkboxes.forEach(function (cb) {
      cb.addEventListener("change", function () {
        const idx = parseInt(cb.getAttribute("data-item-index"), 10);
        state.checkedItems[monument.id][idx] = cb.checked;
        renderSafetySection(monument, state.lang);
      });
    });
  }

  // ========================================================================
  // Feature 6: Fair-Fare Range Table (Preserved)
  // ========================================================================
  function renderFareTableSection(monument, lang) {
    if (lang === "hi") {
      fareHeading.textContent = "उचित किराया गाइड (Fair-Fare Guide)";
      fareSubheading.textContent = "अनुमानित स्थानीय किराया जिससे पर्यटकों से अतिरिक्त वसूली न हो सके।";
      thRoute.textContent = "रूट / यात्रा";
      thMode.textContent = "साधन";
      thDistance.textContent = "दूरी";
      thFare.textContent = "उचित किराया दायरा";
    } else {
      fareHeading.textContent = "Fair-Fare Range Guide";
      fareSubheading.textContent = "Estimated local transit fare ranges to help you negotiate fairly and avoid tourist overcharging.";
      thRoute.textContent = "Route";
      thMode.textContent = "Transit Mode";
      thDistance.textContent = "Distance";
      thFare.textContent = "Fair-Fare Range";
    }

    fareTableBody.innerHTML = monument.fares
      .map(function (fare) {
        return `
          <tr>
            <td>
              <span class="route-name">${fare.route[lang]}</span>
            </td>
            <td>
              <span class="mode-pill">${fare.mode[lang]}</span>
            </td>
            <td>
              <span class="distance-text">${fare.distance}</span>
            </td>
            <td>
              <span class="fare-badge">${fare.fairRange}</span>
            </td>
          </tr>
        `;
      })
    // Render Live Travel App Comparison Chart (Rapido, Ola, Uber, Local Auto)
    renderAppComparisonSection(monument, lang);
  }

  // ========================================================================
  // Live Travel App Comparison (Rapido, Ola, Uber, Local Auto)
  // ========================================================================
  function parseBaseKmFromDistance(distStr) {
    if (!distStr) return 5;
    const match = distStr.match(/([\d\.]+)/);
    return match ? parseFloat(match[1]) : 5;
  }

  function renderAppComparisonSection(monument, lang) {
    if (!appCardsGrid || !monument) return;

    const fares = monument.fares || [];
    if (fares.length === 0) {
      if (document.getElementById("app-comparison-section")) {
        document.getElementById("app-comparison-section").classList.add("hidden");
      }
      return;
    }

    if (document.getElementById("app-comparison-section")) {
      document.getElementById("app-comparison-section").classList.remove("hidden");
    }

    // Bilingual headers
    if (lang === "hi") {
      if (appComparisonTitle) appComparisonTitle.textContent = "कैब एवं बाइक ऐप तुलना · Uber vs. Ola vs. Rapido";
      if (appComparisonDesc) appComparisonDesc.textContent = "इस स्मारक रूट के लिए वास्तविक अनुमानित किराया, मांग उछाल (Surge), और आगमन समय (ETA) की सीधी तुलना।";
      if (appRouteLabel) appRouteLabel.textContent = "सफ़र रूट चुनें:";
      if (appComparisonNote) {
        appComparisonNote.innerHTML = "💡 <strong>स्मार्ट यात्री सलाह:</strong> ट्रैफिक और संकरी गलियों में अकेले सफ़र के लिए Rapido Bike सबसे तेज़ और किफायती है। अधिक दूरी के लिए Uber व Ola Go मीटर का मानक है।";
      }
    } else {
      if (appComparisonTitle) appComparisonTitle.textContent = "Cab & Bike App Comparison · Uber vs. Ola vs. Rapido";
      if (appComparisonDesc) appComparisonDesc.textContent = "Live estimated price benchmarks, surge trends, and ETA across major ride-hailing platforms for this monument route.";
      if (appRouteLabel) appRouteLabel.textContent = "Select Travel Route:";
      if (appComparisonNote) {
        appComparisonNote.innerHTML = "💡 <strong>Smart Traveler Tip:</strong> Rapido Bike is optimal for solo travelers cutting through tourist traffic. Uber & Ola Auto/Go serve as regulated benchmarks to negotiate fairly.";
      }
    }

    // Populate route selector dropdown
    if (appRouteSelect) {
      const currentRouteIdx = state.selectedRouteIdx !== undefined && state.selectedRouteIdx < fares.length
        ? state.selectedRouteIdx
        : 0;

      appRouteSelect.innerHTML = fares.map(function (fare, idx) {
        const isSel = idx === currentRouteIdx ? "selected" : "";
        return `<option value="${idx}" ${isSel}>${fare.route[lang]} (${fare.distance})</option>`;
      }).join("");

      appRouteSelect.onchange = function () {
        state.selectedRouteIdx = parseInt(appRouteSelect.value, 10);
        renderAppComparisonSection(monument, state.lang);
      };
    }

    const selectedRoute = fares[state.selectedRouteIdx !== undefined && state.selectedRouteIdx < fares.length ? state.selectedRouteIdx : 0] || fares[0];
    const km = parseBaseKmFromDistance(selectedRoute.distance);

    // Compute realistic prices calibrated to Indian metro & heritage city aggregators
    const rapidoPrice = Math.max(35, Math.round(25 + km * 11));
    const rapidoAutoPrice = Math.max(45, Math.round(30 + km * 15));
    const olaAutoPrice = Math.max(50, Math.round(35 + km * 16));
    const uberGoPrice = Math.max(90, Math.round(65 + km * 22));
    const olaCabPrice = Math.max(95, Math.round(70 + km * 23));

    const estMinutes = Math.max(5, Math.round(km * 3.5 + 4));

    const providers = [
      {
        id: "rapido",
        name: "Rapido Bike",
        category: lang === "hi" ? "बाइक टैक्सी · सबसे तेज़" : "Bike Taxi · Fastest",
        icon: "🛵",
        iconClass: "brand-icon-rapido",
        price: `₹${rapidoPrice}`,
        eta: `2-4 ${lang === "hi" ? "मिनट" : "mins"}`,
        surge: "normal",
        surgeText: lang === "hi" ? "सामान्य दर (No Surge)" : "Standard Rate",
        features: [
          lang === "hi" ? "हेलमेट उपलब्ध" : "Sanitized Helmet",
          lang === "hi" ? `${estMinutes - 4} मिनट यात्रा` : `~${estMinutes - 4} mins trip`,
          lang === "hi" ? "अकेले यात्री के लिए उत्तम" : "Best for Solo Travelers"
        ],
        btnClass: "btn-rapido",
        badge: lang === "hi" ? "सबसे सस्ता" : "Lowest Fare",
        isBest: true,
        bookUrl: "https://www.rapido.bike"
      },
      {
        id: "rapido-auto",
        name: "Rapido / Ola Auto",
        category: lang === "hi" ? "ऑटो-रिक्शा" : "Auto-Rickshaw",
        icon: "🛺",
        iconClass: "brand-icon-auto",
        price: `₹${rapidoAutoPrice} – ₹${olaAutoPrice}`,
        eta: `3-6 ${lang === "hi" ? "मिनट" : "mins"}`,
        surge: "normal",
        surgeText: lang === "hi" ? "मीटर आधारित" : "App Metered",
        features: [
          lang === "hi" ? "3 सवारी तक" : "Up to 3 passengers",
          lang === "hi" ? `${estMinutes} मिनट यात्रा` : `~${estMinutes} mins trip`,
          lang === "hi" ? "मोलभाव की जरूरत नहीं" : "No Bargaining Hassle"
        ],
        btnClass: "btn-ola",
        badge: null,
        isBest: false,
        bookUrl: "https://www.olacabs.com"
      },
      {
        id: "uber-go",
        name: "Uber Go",
        category: lang === "hi" ? "एसी हैचबैक कैब" : "AC Hatchback Cab",
        icon: "🚗",
        iconClass: "brand-icon-uber",
        price: `₹${uberGoPrice} – ₹${uberGoPrice + 35}`,
        eta: `4-7 ${lang === "hi" ? "मिनट" : "mins"}`,
        surge: "normal",
        surgeText: lang === "hi" ? "सुरक्षित जीपीएस" : "Live GPS Tracked",
        features: [
          lang === "hi" ? "फुल एसी कम्फर्ट" : "Air-Conditioned Comfort",
          lang === "hi" ? "4 सवारी + सामान" : "4 Seats + Luggage",
          lang === "hi" ? "परिवार के लिए अनुशंसित" : "Recommended for Families"
        ],
        btnClass: "btn-uber",
        badge: lang === "hi" ? "सबसे आरामदायक" : "Most Comfortable",
        isBest: false,
        bookUrl: "https://m.uber.com"
      },
      {
        id: "ola-prime",
        name: "Ola Prime / Sedan",
        category: lang === "hi" ? "प्रीमियम सेडान कैब" : "Prime Sedan",
        icon: "🚘",
        iconClass: "brand-icon-ola",
        price: `₹${olaCabPrice} – ₹${olaCabPrice + 45}`,
        eta: `5-8 ${lang === "hi" ? "मिनट" : "mins"}`,
        surge: "normal",
        surgeText: lang === "hi" ? "उच्च रेटिंग ड्राइवर" : "Top Rated Drivers",
        features: [
          lang === "hi" ? "एक्स्ट्रा लेगस्पेस" : "Extra Legroom",
          lang === "hi" ? "मुफ्त वाईफाई / संगीत" : "In-Cab Entertainment",
          lang === "hi" ? "लंबी दूरी हेतु उत्तम" : "Great for Long Distance"
        ],
        btnClass: "btn-ola",
        badge: null,
        isBest: false,
        bookUrl: "https://www.olacabs.com"
      }
    ];

    appCardsGrid.innerHTML = providers.map(function (p) {
      return `
        <div class="ride-card ${p.isBest ? "card-featured" : ""}">
          ${p.badge ? `<span class="ride-tag-best">${p.badge}</span>` : ""}
          <div class="ride-card-top">
            <div class="ride-brand-info">
              <div class="ride-brand-icon ${p.iconClass}">${p.icon}</div>
              <div>
                <div class="ride-brand-name">${p.name}</div>
                <div class="ride-service-type">${p.category}</div>
              </div>
            </div>
            <span class="ride-eta-badge">⏱️ ${p.eta}</span>
          </div>

          <div class="ride-price-block">
            <span class="ride-price-val">${p.price}</span>
            <span class="ride-surge-badge ${p.surge === "normal" ? "surge-normal" : "surge-moderate"}">
              ✓ ${p.surgeText}
            </span>
          </div>

          <ul class="ride-features-list">
            ${p.features.map(function (feat) { return `<li>• ${feat}</li>`; }).join("")}
          </ul>

          <a
            href="${p.bookUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="ride-action-link ${p.btnClass}"
            aria-label="Open ${p.name} booking site"
          >
            <span>${lang === "hi" ? p.name + " देखें" : "Open " + p.name}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      `;
    }).join("");
  }

  // ========================================================================
  // Devanagari to Romanized Phonetic Fallback Transliteration
  // Used when the host OS has NO native Hindi TTS installed, enabling English voices
  // to speak clear, authentic Hindi pronunciation instead of staying silent.
  // ========================================================================
  const HINDI_PHONETIC_DICT = {
    "ताज महल": "Taj Mahal",
    "हवा महल": "Hawa Mahal",
    "क़ुतुब मीनार": "Qutub Minar",
    "कुतुब मीनार": "Qutub Minar",
    "हम्पी": "Hampi",
    "लाल क़िला": "Lal Qila",
    "लाल किला": "Lal Qila",
    "आमेर क़िला": "Amer Qila",
    "आमेर किला": "Amer Qila",
    "गेटवे ऑफ़ इंडिया": "Gateway of India",
    "कोणार्क सूर्य मंदिर": "Konark Surya Mandir",
    "मीनाक्षी अम्मन मंदिर": "Meenakshi Amman Mandir",
    "अजंता की गुफ़ाएं": "Ajanta Caves",
    "अजंता गुफाएं": "Ajanta Caves",
    "नमस्ते": "Namaste",
    "सफ़र सारथी": "Safar Saarthi",
    "सुनाया जा रहा है": "Sunaaya ja raha hai",
    "सभी कहानियां": "Sabhi kahaniyan",
    "पुरुष स्वर": "Purush swar",
    "स्त्री स्वर": "Stree swar",
    "डार्क मोड सक्रिय कर दिया गया है।": "Dark mode sakriya kar diya gaya hai.",
    "लाइट मोड सक्रिय कर दिया गया है।": "Light mode sakriya kar diya gaya hai.",
    "नमस्ते, अब मैं पुरुष स्वर में आपके लिए कहानियां सुनाऊंगा।": "Namaste! Ab main purush swar mein aapke liye kahaniyan sunaaoonga.",
    "नमस्ते, अब मैं महिला स्वर में आपके लिए कहानियां सुनाऊंगी।": "Namaste! Ab main mahila swar mein aapke liye kahaniyan sunaaongi.",
    "भाषा हिन्दी में बदल दी गई है। आप किस स्मारक के बारे में जानना चाहते हैं?": "Bhasha Hindi mein badal di gayi hai. Aap kis smarak ke baare mein jaanna chahte hain?"
  };

  function transliterateHindi(text) {
    if (!text) return "";
    let clean = text;
    // Replace dictionary phrases first
    for (const [hi, roman] of Object.entries(HINDI_PHONETIC_DICT)) {
      if (clean.includes(hi)) {
        clean = clean.split(hi).join(roman);
      }
    }
    // If text still has Devanagari characters (U+0900 to U+097F), romanize character by character
    if (/[\u0900-\u097F]/.test(clean)) {
      const charMap = {
        'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ee', 'उ': 'u', 'ऊ': 'oo', 'ऋ': 'ri',
        'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au', 'अं': 'am', 'अः': 'ah',
        'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ng',
        'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ञ': 'ny',
        'ट': 't', 'ठ': 'th', 'ड': 'd', 'ढ': 'dh', 'ण': 'n',
        'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
        'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
        'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v', 'श': 'sh', 'ष': 'sh', 'स': 's', 'ह': 'h',
        'क़': 'q', 'ख़': 'kh', 'ग़': 'gh', 'ज़': 'z', 'ड़': 'r', 'ढ़': 'rh', 'फ़': 'f',
        'ा': 'aa', 'ि': 'i', 'ी': 'ee', 'ु': 'u', 'ू': 'oo', 'ृ': 'ri',
        'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ं': 'n', 'ँ': 'n', '्': '',
        '।': '.', '॥': '.'
      };
      clean = clean.split('').map(function (ch) {
        return charMap[ch] !== undefined ? charMap[ch] : ch;
      }).join('');
    }
    return clean;
  }

  // ========================================================================
  // Humanized Web Speech API Voice Engine (Male & Female)
  // ========================================================================
  function pickBestVoice(lang, gender) {
    if (!("speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const isFemale = gender === "female";
    const isHi = lang === "hi";

    // Keywords identifying female and male voices
    const femaleKeywords = ["female", "zira", "hazel", "heera", "kalpana", "susan", "samantha", "victoria", "karen", "catherine", "aria", "jenny", "neerja", "natural", "हिन्दी"];
    const maleKeywords = ["male", "david", "mark", "george", "ravi", "hemant", "guy", "prabhat", "madhav", "richard", "james"];

    // 1. Try matching language AND requested gender
    for (let i = 0; i < voices.length; i++) {
      const v = voices[i];
      const vLang = (v.lang || "").toLowerCase();
      const vName = (v.name || "").toLowerCase();

      const langMatch = isHi
        ? (vLang.includes("hi") || vLang.includes("hin"))
        : (vLang.includes("en") || vLang.startsWith("en"));

      if (langMatch) {
        if (isFemale) {
          const isKnownFemale = femaleKeywords.some(function (k) { return vName.includes(k); });
          const isKnownMale = maleKeywords.some(function (k) { return vName.includes(k); });
          if (isKnownFemale || (!isKnownMale && !vName.includes("david") && !vName.includes("ravi") && !vName.includes("male"))) {
            return v;
          }
        } else {
          const isKnownMale = maleKeywords.some(function (k) { return vName.includes(k); });
          if (isKnownMale) {
            return v;
          }
        }
      }
    }

    // 2. Fallback: match requested gender across any voice
    if (isFemale) {
      const anyFemale = voices.find(function (v) {
        const vName = (v.name || "").toLowerCase();
        return femaleKeywords.some(function (k) { return vName.includes(k); });
      });
      if (anyFemale) return anyFemale;
    } else {
      const anyMale = voices.find(function (v) {
        const vName = (v.name || "").toLowerCase();
        return maleKeywords.some(function (k) { return vName.includes(k); });
      });
      if (anyMale) return anyMale;
    }

    // 3. Fallback: match language only
    const langVoice = voices.find(function (v) {
      const vLang = (v.lang || "").toLowerCase();
      return isHi ? (vLang.includes("hi") || vLang.includes("hin")) : vLang.includes("en");
    });
    if (langVoice) return langVoice;

    // 4. Default fallback: first available voice
    return voices[0];
  }

  function stopSpeech() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (window._speechTimer) {
      clearTimeout(window._speechTimer);
      window._speechTimer = null;
    }
    state.speakingStoryId = null;
    updateSpeechUI();
    if (speechStatusBar) speechStatusBar.classList.add("hidden");
  }

  // Updates buttons and visual states smoothly without destroying page DOM
  function updateSpeechUI() {
    if (listenAllBtn && listenAllText) {
      if (state.speakingStoryId === "ALL") {
        listenAllBtn.classList.add("speaking");
        listenAllText.textContent = state.lang === "hi" ? "सुनाया जा रहा है..." : "Narrating All...";
      } else {
        listenAllBtn.classList.remove("speaking");
        listenAllText.textContent = state.lang === "hi" ? "सभी कहानियां सुनें" : "Listen to All Stories";
      }
    }

    if (stopSpeechBtn) {
      if (state.speakingStoryId) {
        stopSpeechBtn.classList.remove("hidden");
      } else {
        stopSpeechBtn.classList.add("hidden");
      }
    }

    const storyCards = document.querySelectorAll(".story-card");
    storyCards.forEach(function (card) {
      const btn = card.querySelector(".btn-story-listen");
      if (!btn) return;
      const sId = btn.getAttribute("data-story-id");
      const isThisSpeaking = state.speakingStoryId === sId;
      card.classList.toggle("story-speaking", isThisSpeaking);
      btn.classList.toggle("active-audio", isThisSpeaking);
      const span = btn.querySelector("span");
      if (span) {
        span.textContent = isThisSpeaking
          ? (state.lang === "hi" ? "रोकें" : "Stop")
          : (state.lang === "hi" ? "सुनें (Listen)" : "Listen");
      }
    });
  }

  // Speaks text with humanized pitch, cadence, and breath modulation
  function speakText(textToSpeak, statusMessage, activeId) {
    if (!("speechSynthesis" in window)) {
      if (speechStatusBar && speechStatusText) {
        speechStatusBar.classList.remove("hidden");
        speechStatusText.textContent = "Web Speech API is not supported in this browser.";
      }
      return;
    }

    // Cancel prior speech
    window.speechSynthesis.cancel();
    if (window._speechTimer) {
      clearTimeout(window._speechTimer);
      window._speechTimer = null;
    }

    const isFemale = state.voiceGender === "female";
    const chosenVoice = pickBestVoice(state.lang, state.voiceGender);

    const isHi = state.lang === "hi";
    let textToActuallySpeak = textToSpeak;

    // Check if the chosen voice supports Hindi (e.g. Google Hindi, Microsoft Heera/Kalpana, hi-IN)
    const voiceLang = chosenVoice ? (chosenVoice.lang || "").toLowerCase() : "";
    const hasNativeHindiSupport = voiceLang.includes("hi") || voiceLang.includes("hin");

    // If Hindi text was requested but the voice is an English TTS engine (Windows SAPI Zira/David/Hazel etc.),
    // SAPI completely rejects Devanagari Unicode. Transliterate to phonetic Romanized Hindi or use English text!
    if (isHi && !hasNativeHindiSupport) {
      const mon = getCurrentMonument();
      if (mon && activeId) {
        if (activeId === "ALL") {
          textToActuallySpeak = mon.stories.map(function (s) {
            return (state.kidsMode ? s.kids.en : s.standard.en);
          }).join(" ... ");
        } else {
          const st = mon.stories.find(function (s) { return s.id === activeId; });
          if (st) {
            textToActuallySpeak = (state.kidsMode ? st.kids.en : st.standard.en);
          } else {
            textToActuallySpeak = transliterateHindi(textToSpeak);
          }
        }
      } else {
        textToActuallySpeak = transliterateHindi(textToSpeak);
      }
    }

    const utterance = new SpeechSynthesisUtterance(textToActuallySpeak);

    if (chosenVoice) {
      utterance.voice = chosenVoice;
      // MUST match the voice's actual language code (e.g. en-US, en-GB, hi-IN) so browser/OS synthesizer accepts it
      utterance.lang = chosenVoice.lang;
    } else {
      utterance.lang = (isHi && hasNativeHindiSupport) ? "hi-IN" : "en-US";
    }

    // Humanized Pitch and Rate Modulation
    if (isFemale) {
      utterance.pitch = state.kidsMode ? 1.15 : 1.05;
      utterance.rate = state.kidsMode ? 0.98 : 0.94;
    } else {
      // For male voice:
      // If voice is a true male voice (David/George/Mark/Ravi), set pitch to 0.88
      // If voice is a female hardware fallback (Zira/Hazel), pitch-shift down to 0.72 to synthesize a masculine baritone
      const isFemaleHardware = chosenVoice && ["zira", "hazel", "heera", "kalpana", "susan", "female", "natural"].some(function (k) {
        return (chosenVoice.name || "").toLowerCase().includes(k);
      });
      utterance.pitch = isFemaleHardware ? 0.72 : (state.kidsMode ? 0.94 : 0.86);
      utterance.rate = state.kidsMode ? 0.94 : 0.90;
    }

    state.speakingStoryId = activeId;
    updateSpeechUI();

    if (speechStatusBar && speechStatusText) {
      speechStatusBar.classList.remove("hidden");
      speechStatusText.textContent = statusMessage;
    }

    utterance.onend = function () {
      state.speakingStoryId = null;
      updateSpeechUI();
      if (speechStatusBar) speechStatusBar.classList.add("hidden");
      window._activeUtterance = null;
    };

    utterance.onerror = function (event) {
      console.warn("SpeechSynthesis error:", event.error);
      state.speakingStoryId = null;
      updateSpeechUI();
      if (speechStatusBar) speechStatusBar.classList.add("hidden");
      window._activeUtterance = null;
    };

    // Prevent Chromium cancel() race condition & garbage collection bug
    window._speechTimer = setTimeout(function () {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        window._activeUtterance = utterance; // Prevent garbage collection mid-speech
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn("SpeechSynthesis speak exception:", err);
      }
    }, 60);
  }

  function toggleSingleStorySpeech(storyId) {
    const monument = getCurrentMonument();
    if (!monument) return;

    if (state.speakingStoryId === storyId) {
      stopSpeech();
      return;
    }

    const story = monument.stories.find(function (s) { return s.id === storyId; });
    if (!story) return;

    const lang = state.lang;
    const titleText = story.title[lang];
    const bodyText = state.kidsMode ? story.kids[lang] : story.standard[lang];
    const genderLabel = state.voiceGender === "female" ? (lang === "hi" ? "स्त्री स्वर" : "Female Voice") : (lang === "hi" ? "पुरुष स्वर" : "Male Voice");
    const statusMsg = `${lang === "hi" ? "सुनाया जा रहा है (" + genderLabel + "): " : "Narrating (" + genderLabel + "): "} ${titleText}`;

    speakText(titleText + ". " + bodyText, statusMsg, storyId);
  }

  function toggleAllStoriesSpeech() {
    const monument = getCurrentMonument();
    if (!monument) return;

    if (state.speakingStoryId === "ALL") {
      stopSpeech();
      return;
    }

    const lang = state.lang;
    const combinedText = monument.stories
      .map(function (story) {
        const body = state.kidsMode ? story.kids[lang] : story.standard[lang];
        return story.title[lang] + ". " + body;
      })
      .join(" ... ");

    const genderLabel = state.voiceGender === "female" ? (lang === "hi" ? "स्त्री स्वर" : "Female Voice") : (lang === "hi" ? "पुरुष स्वर" : "Male Voice");
    const statusMsg = `${lang === "hi" ? monument.name.hi + " की सभी कहानियां सुनाई जा रही हैं (" + genderLabel + ")..." : "Narrating all stories for " + monument.name.en + " (" + genderLabel + ")..."}`;

    speakText(combinedText, statusMsg, "ALL");
  }

  // ========================================================================
  // Conversational Voice Assistant (🎙️ Safar Voice Guide)
  // ========================================================================
  let speechRecognizer = null;

  function initSpeechRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) return null;

    const recognizer = new SpeechRec();
    recognizer.continuous = false;
    recognizer.interimResults = false;
    recognizer.lang = state.lang === "hi" ? "hi-IN" : "en-IN";

    recognizer.onstart = function () {
      state.isListeningVoice = true;
      if (assistantMicBtn) assistantMicBtn.classList.add("recording");
      if (openVoiceAssistantBtn) openVoiceAssistantBtn.classList.add("listening");
      if (assistantPromptText) {
        assistantPromptText.textContent = state.lang === "hi" ? "सुन रहा हूँ... बोलिए" : "Listening... speak now";
      }
    };

    recognizer.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      handleVoiceAssistantQuery(transcript);
    };

    recognizer.onerror = function (event) {
      console.warn("Speech recognition error:", event.error);
      stopVoiceRecognition();
      if (assistantPromptText) {
        assistantPromptText.textContent = state.lang === "hi"
          ? "माइक से आवाज नहीं मिली। नीचे दिए गए विकल्पों पर टैप करें।"
          : "Could not capture audio. Tap any example query below.";
      }
    };

    recognizer.onend = function () {
      stopVoiceRecognition();
    };

    return recognizer;
  }

  function startVoiceRecognition() {
    if (!speechRecognizer) {
      speechRecognizer = initSpeechRecognition();
    }
    if (!speechRecognizer) {
      alert("Speech recognition is not supported in this browser. You can click any example query below!");
      return;
    }
    speechRecognizer.lang = state.lang === "hi" ? "hi-IN" : "en-IN";
    try {
      speechRecognizer.start();
    } catch (e) {
      console.warn("Speech recognition already running");
    }
  }

  function stopVoiceRecognition() {
    state.isListeningVoice = false;
    if (assistantMicBtn) assistantMicBtn.classList.remove("recording");
    if (openVoiceAssistantBtn) openVoiceAssistantBtn.classList.remove("listening");
    if (assistantPromptText) {
      assistantPromptText.textContent = state.lang === "hi"
        ? "माइक दबाएं और बोलें"
        : "Tap the microphone and speak in English or Hindi";
    }
  }

  function openVoiceAssistant() {
    if (!voiceAssistantModal) return;
    voiceAssistantModal.classList.remove("hidden");
    setVoiceGender(state.voiceGender);
  }

  function closeVoiceAssistant() {
    if (!voiceAssistantModal) return;
    stopSpeech();
    if (speechRecognizer) {
      try { speechRecognizer.stop(); } catch (e) {}
    }
    stopVoiceRecognition();
    voiceAssistantModal.classList.add("hidden");
  }

  // Processes conversational spoken input
  function handleVoiceAssistantQuery(query) {
    if (!query) return;

    // Display user speech bubble
    if (assistantDialogueBox) {
      const userBubble = document.createElement("div");
      userBubble.className = "user-speech-bubble";
      userBubble.textContent = `"${query}"`;
      assistantDialogueBox.appendChild(userBubble);
    }

    const q = query.toLowerCase().trim();
    let replyText = "";
    const isHi = state.lang === "hi" || /[\u0900-\u097F]/.test(query);

    // Intent 1: Toggle Dark/Light Mode
    if (q.includes("dark mode") || q.includes("डार्क मोड") || q.includes("light mode") || q.includes("लाइट मोड") || q.includes("थीम")) {
      toggleTheme();
      replyText = state.theme === "dark"
        ? (isHi ? "डार्क मोड सक्रिय कर दिया गया है।" : "Dark mode has been enabled for comfortable evening browsing.")
        : (isHi ? "लाइट मोड सक्रिय कर दिया गया है।" : "Light mode has been enabled.");
    }
    // Intent 2: Switch to Male/Female Voice
    else if (q.includes("male voice") || q.includes("पुरुष") || q.includes("आदमी")) {
      setVoiceGender("male");
      replyText = isHi
        ? "नमस्ते, अब मैं पुरुष स्वर में आपके लिए कहानियां सुनाऊंगा।"
        : "Male voice selected. I will now narrate with a deep, natural cadence.";
    } else if (q.includes("female voice") || q.includes("महिला") || q.includes("स्त्री")) {
      setVoiceGender("female");
      replyText = isHi
        ? "नमस्ते, अब मैं महिला स्वर में आपके लिए कहानियां सुनाऊंगी।"
        : "Female voice selected. Ready to narrate with a natural, melodic docent tone.";
    }
    // Intent 3: Switch Language
    else if (q.includes("hindi") || q.includes("हिन्दी")) {
      state.lang = "hi";
      replyText = "भाषा हिन्दी में बदल दी गई है। आप किस स्मारक के बारे में जानना चाहते हैं?";
      if (state.currentMonumentId) renderMonumentPage(); else renderHomeCards();
    } else if (q.includes("english")) {
      state.lang = "en";
      replyText = "Switched language to English. Which heritage site would you like to explore?";
      if (state.currentMonumentId) renderMonumentPage(); else renderHomeCards();
    }
    // Intent 4: Plan Trip
    else if (q.includes("plan") || q.includes("trip") || q.includes("योजना") || q.includes("सफ़र")) {
      const daysMatch = q.match(/\d+/);
      const days = daysMatch ? parseInt(daysMatch[0], 10) : 3;
      state.plannerDays = days;
      closeVoiceAssistant();
      openPlanner();
      generateItinerary(days, "golden-triangle", "cultural", "current");
      replyText = isHi
        ? `आपके लिए ${days} दिनों की सफ़र योजना तैयार की गई है।`
        : `Generated an intelligent ${days}-day heritage itinerary tailored to weather and crowd patterns.`;
    }
    // Intent 5: Weather inquiry
    else if (q.includes("weather") || q.includes("मौसम") || q.includes("rain") || q.includes("heat")) {
      const mon = getCurrentMonument() || window.MONUMENTS[0];
      const cache = state.weatherCache[mon.id];
      const temp = cache && cache.current ? Math.round(cache.current.temperature_2m) : 26;
      replyText = isHi
        ? `${mon.name.hi} में वर्तमान तापमान लगभग ${temp} डिग्री सेल्सियस है। मौसम भ्रमण के लिए अनुकूल है।`
        : `The current temperature at ${mon.name.en} is around ${temp}°C with comfortable heat conditions. Morning or late afternoon is recommended.`;
    }
    // Intent 6: Crowd inquiry
    else if (q.includes("crowd") || q.includes("भीड़") || q.includes("rush")) {
      const mon = getCurrentMonument() || window.MONUMENTS[0];
      replyText = isHi
        ? `${mon.name.hi} पर सुबह 8 से 10 बजे भीड़ सबसे कम रहती है। दोपहर में भीड़ अधिक होने पर शांत निकटतम विकल्प उपलब्ध है।`
        : `Crowd levels at ${mon.name.en} are lowest between 8 AM and 10 AM. If it gets busy, check the quieter nearby gem.`;
    }
    // Intent 7: Read stories
    else if (q.includes("read") || q.includes("story") || q.includes("कहा") || q.includes("सुन")) {
      const mon = getCurrentMonument() || window.MONUMENTS[0];
      closeVoiceAssistant();
      if (!state.currentMonumentId) openMonumentPage(mon.id);
      toggleAllStoriesSpeech();
      return;
    }
    // Intent 8: Open specific monument by name
    else {
      let matchedMonument = null;
      if (window.MONUMENTS) {
        matchedMonument = window.MONUMENTS.find(function (m) {
          const nameEn = m.name.en.toLowerCase();
          const nameHi = m.name.hi.toLowerCase();
          const cityEn = m.city.en.toLowerCase();
          return q.includes(nameEn) || q.includes(nameHi) || q.includes(cityEn) ||
            (q.includes("taj") && m.id === "taj-mahal") ||
            (q.includes("hawa") && m.id === "hawa-mahal") ||
            (q.includes("qutub") && m.id === "qutub-minar") ||
            (q.includes("hampi") && m.id === "hampi-chariot") ||
            (q.includes("red fort") && m.id === "red-fort") ||
            (q.includes("amer") && m.id === "amer-fort") ||
            (q.includes("gateway") && m.id === "gateway-india") ||
            (q.includes("konark") && m.id === "konark-sun-temple") ||
            (q.includes("meenakshi") && m.id === "meenakshi-temple") ||
            (q.includes("ajanta") && m.id === "ajanta-caves");
        });
      }

      if (matchedMonument) {
        closeVoiceAssistant();
        openMonumentPage(matchedMonument.id);
        replyText = isHi
          ? `प्रस्तुत है ${matchedMonument.name.hi}। आप यहां इसके इतिहास, मौसम और ऑडियो कहानियां देख सकते हैं।`
          : `Opening ${matchedMonument.name.en}. You can explore its stories, live weather radar, and crowd forecast.`;
      } else {
        replyText = isHi
          ? `मैंने सुना: "${query}"। आप ताजमहल, हवा महल, लाल किला, लाइव मौसम या 3 दिन की यात्रा योजना के बारे में पूछ सकते हैं।`
          : `I heard: "${query}". You can ask about monuments like Taj Mahal or Red Fort, live weather, or planning a trip!`;
      }
    }

    // Display Assistant Speech Bubble
    if (assistantDialogueBox) {
      const assistantBubble = document.createElement("div");
      assistantBubble.className = "assistant-speech-bubble";
      assistantBubble.textContent = replyText;
      assistantDialogueBox.appendChild(assistantBubble);
      assistantDialogueBox.scrollTop = assistantDialogueBox.scrollHeight;
    }

    // Speak reply back using chosen humanized voice!
    speakAssistantResponse(replyText, isHi ? "hi" : "en");
  }

  function speakAssistantResponse(text, lang) {
    if (!("speechSynthesis" in window) || !text) return;
    window.speechSynthesis.cancel();

    const isFemale = state.voiceGender === "female";
    const voice = pickBestVoice(lang, state.voiceGender);
    const voiceLang = voice ? (voice.lang || "").toLowerCase() : "";
    const hasNativeHindiSupport = voiceLang.includes("hi") || voiceLang.includes("hin");

    let speechText = text;
    if (lang === "hi" && !hasNativeHindiSupport) {
      speechText = transliterateHindi(text);
    }

    const utterance = new SpeechSynthesisUtterance(speechText);

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = (lang === "hi" && hasNativeHindiSupport) ? "hi-IN" : "en-US";
    }

    if (isFemale) {
      utterance.pitch = 1.05;
      utterance.rate = 0.95;
    } else {
      const isFemaleHardware = voice && ["zira", "hazel", "heera", "kalpana", "susan", "female", "natural"].some(function (k) {
        return (voice.name || "").toLowerCase().includes(k);
      });
      utterance.pitch = isFemaleHardware ? 0.72 : 0.86;
      utterance.rate = 0.91;
    }

    window._activeUtterance = utterance;
    setTimeout(function () {
      try {
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn("Assistant speech error:", e);
      }
    }, 50);
  }

  // ========================================================================
  // NEW FEATURE: Safar AI Tour Planning Agent
  // ========================================================================
  function openPlanner() {
    if (!plannerModal) return;
    plannerModal.classList.remove("hidden");
  }

  function closePlanner() {
    if (!plannerModal) return;
    plannerModal.classList.add("hidden");
  }

  function generateItinerary(days, hub, pace, season) {
    const lang = state.lang;
    const allM = window.MONUMENTS || [];

    let selectedSites = [];
    if (hub === "delhi") {
      selectedSites = allM.filter(function (m) { return ["red-fort", "qutub-minar"].includes(m.id); });
    } else if (hub === "rajasthan") {
      selectedSites = allM.filter(function (m) { return ["amer-fort", "hawa-mahal"].includes(m.id); });
    } else if (hub === "south-india") {
      selectedSites = allM.filter(function (m) { return ["hampi-chariot", "meenakshi-temple"].includes(m.id); });
    } else if (hub === "west-india") {
      selectedSites = allM.filter(function (m) { return ["gateway-india", "ajanta-caves"].includes(m.id); });
    } else if (hub === "east-india") {
      selectedSites = allM.filter(function (m) { return ["konark-sun-temple"].includes(m.id); });
    } else {
      selectedSites = allM.filter(function (m) { return ["taj-mahal", "amer-fort", "hawa-mahal", "red-fort", "qutub-minar"].includes(m.id); });
    }

    if (selectedSites.length === 0) selectedSites = allM.slice(0, 4);

    const daysPlan = [];
    const totalDays = Math.max(1, Math.min(14, days));

    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
      const siteIdx = (dayNum - 1) % selectedSites.length;
      const site = selectedSites[siteIdx];

      const morningBlock = {
        time: "07:30 – 10:30 AM",
        title: `Sunrise & Heritage Exploration: ${site.name[lang]}`,
        desc: `Beat midday heat and crowds with an early arrival. Enjoy soft light for photography and peaceful audio narration.`,
        tip: `Entry tip: book tickets online on the ASI portal beforehand.`
      };

      const afternoonBlock = {
        time: "12:00 – 03:00 PM",
        title: pace === "family" ? `Shaded Rest & Museum Pavilions` : `Indoor Chambers & Local Culinary Discovery`,
        desc: `Avoid intense midday sun. Explore shaded corridors, the Diwan-i-Khas marble pavilion, or nearby air-conditioned artisan craft centers.`,
        tip: `Hydration reminder: Keep 1L mineral water and an electrolyte pack.`
      };

      const eveningBlock = {
        time: "04:30 – 07:00 PM",
        title: site.nearbyGem ? `Sunset View at ${site.nearbyGem.name[lang]}` : `Golden Hour & Heritage Bazaar Walk`,
        desc: site.nearbyGem
          ? `Visit the quieter gem: ${site.nearbyGem.description[lang].slice(0, 140)}...`
          : `Walk through surrounding historic market streets and admire illuminated facade reflections.`,
        tip: `Fair-fare transit tip: negotiate auto-rickshaw for ₹70–₹120.`
      };

      daysPlan.push({
        dayNumber: dayNum,
        monument: site,
        morning: morningBlock,
        afternoon: afternoonBlock,
        evening: eveningBlock,
        estimatedFare: "₹180 – ₹280",
        weatherAdvice: season === "summer" ? "High UV noon: strictly outdoor morning" : "Ideal walking day: UV moderate"
      });
    }

    renderPlannerOutput(daysPlan, totalDays, pace, hub);
  }

  function renderPlannerOutput(daysPlan, totalDays, pace, hub) {
    if (!plannerResults) return;
    plannerResults.classList.remove("hidden");

    const totalEstFare = totalDays * 220;
    const paceLabel = pace === "family" ? "👨‍👩‍👧 Family Paced" : pace === "explorer" ? "⚡ Fast Explorer" : "🌿 Relaxed Cultural";

    plannerResults.innerHTML = `
      <div class="planner-summary-header">
        <div>
          <h3 class="planner-summary-title">${totalDays}-Day Smart Heritage Itinerary</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">Tailored for ${paceLabel} with Mausam-X weather timing.</p>
        </div>
        <div class="planner-actions-row">
          <button type="button" class="btn-planner-tool" id="btn-copy-itinerary">
            📋 Copy Text
          </button>
          <button type="button" class="btn-planner-tool" id="btn-print-itinerary">
            🖨️ Print / PDF
          </button>
        </div>
      </div>

      <div class="itinerary-meta-badges">
        <span class="meta-pill meta-pill-weather">☀️ Weather: Morning/Evening Focused</span>
        <span class="meta-pill meta-pill-budget">💰 Fair-Fare Transit: ~₹${totalEstFare} Total</span>
        <span class="meta-pill meta-pill-pace">${paceLabel}</span>
      </div>

      <div class="itinerary-days-container">
        ${daysPlan
          .map(function (d) {
            return `
              <div class="itinerary-day-box">
                <div class="day-box-header">
                  <span class="day-box-title">Day ${d.dayNumber}: ${d.monument.name.en} & Surroundings</span>
                  <span class="day-box-tag">📍 ${d.monument.city.en.split(",")[0]}</span>
                </div>
                <div class="day-slots-list">
                  <div class="slot-item">
                    <span class="slot-time-badge">${d.morning.time}</span>
                    <div class="slot-content">
                      <h4 class="slot-heading">${d.morning.title}</h4>
                      <p class="slot-desc">${d.morning.desc}</p>
                      <div class="slot-tips">💡 ${d.morning.tip}</div>
                    </div>
                  </div>

                  <div class="slot-item">
                    <span class="slot-time-badge">${d.afternoon.time}</span>
                    <div class="slot-content">
                      <h4 class="slot-heading">${d.afternoon.title}</h4>
                      <p class="slot-desc">${d.afternoon.desc}</p>
                      <div class="slot-tips">☀️ ${d.afternoon.tip}</div>
                    </div>
                  </div>

                  <div class="slot-item">
                    <span class="slot-time-badge">${d.evening.time}</span>
                    <div class="slot-content">
                      <h4 class="slot-heading">${d.evening.title}</h4>
                      <p class="slot-desc">${d.evening.desc}</p>
                      <div class="slot-tips">🚗 ${d.evening.tip}</div>
                    </div>
                  </div>
                </div>
                <div class="day-footer-transit">
                  <span>🚗 Local Transit Fair-Fare: ${d.estimatedFare}</span>
                  <span aria-hidden="true">·</span>
                  <span>🌤️ ${d.weatherAdvice}</span>
                  <button type="button" class="btn-top-secondary" style="margin-left:auto; font-size:0.75rem; padding:0.25rem 0.6rem;" data-jump-monument-id="${d.monument.id}">
                    Open Monument Guide →
                  </button>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;

    const copyBtn = document.getElementById("btn-copy-itinerary");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        const textSummary = daysPlan.map(function (d) {
          return `=== Day ${d.dayNumber}: ${d.monument.name.en} ===\nMorning: ${d.morning.title}\nAfternoon: ${d.afternoon.title}\nEvening: ${d.evening.title}\nTransit: ${d.estimatedFare}\n`;
        }).join("\n");

        if (navigator.clipboard) {
          navigator.clipboard.writeText(`SafarSaarthi Tour Itinerary (${totalDays} Days):\n\n` + textSummary).then(function () {
            copyBtn.textContent = "✓ Copied to Clipboard!";
            setTimeout(function () { copyBtn.textContent = "📋 Copy Text"; }, 2500);
          });
        }
      });
    }

    const printBtn = document.getElementById("btn-print-itinerary");
    if (printBtn) {
      printBtn.addEventListener("click", function () {
        window.print();
      });
    }

    plannerResults.querySelectorAll("[data-jump-monument-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const mId = btn.getAttribute("data-jump-monument-id");
        closePlanner();
        openMonumentPage(mId);
      });
    });

    plannerResults.scrollIntoView({ behavior: "smooth" });
  }

  // ========================================================================
  // Wire Up Event Listeners
  // ========================================================================
  function initEventListeners() {
    // Theme Toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", toggleTheme);
    }

    // Voice Gender Controls in Toolbar
    if (voiceFemaleBtn) {
      voiceFemaleBtn.addEventListener("click", function () {
        setVoiceGender("female");
      });
    }
    if (voiceMaleBtn) {
      voiceMaleBtn.addEventListener("click", function () {
        setVoiceGender("male");
      });
    }

    // Voice Assistant Triggers
    if (openVoiceAssistantBtn) {
      openVoiceAssistantBtn.addEventListener("click", openVoiceAssistant);
    }
    if (closeAssistantBtn) {
      closeAssistantBtn.addEventListener("click", closeVoiceAssistant);
    }
    if (assistantMicBtn) {
      assistantMicBtn.addEventListener("click", function () {
        if (state.isListeningVoice) {
          stopVoiceRecognition();
        } else {
          startVoiceRecognition();
        }
      });
    }

    // Voice Suggestion Chips
    assistantChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        const cmd = chip.getAttribute("data-voice-cmd");
        handleVoiceAssistantQuery(cmd);
      });
    });

    // Navigation
    if (brandLink) {
      brandLink.addEventListener("click", function (e) {
        e.preventDefault();
        showHomeScreen();
      });
    }
    if (homeNavBtn) {
      homeNavBtn.addEventListener("click", function () {
        showHomeScreen();
      });
    }
    if (backHomeBtn) {
      backHomeBtn.addEventListener("click", function () {
        showHomeScreen();
      });
    }

    // Location Buttons
    if (geoLocationBtn) {
      geoLocationBtn.addEventListener("click", requestUserLocation);
    }
    if (changeLocBtn) {
      changeLocBtn.addEventListener("click", openLocationModal);
    }
    if (closeLocModalBtn) {
      closeLocModalBtn.addEventListener("click", closeLocationModal);
    }
    if (modalDetectGpsBtn) {
      modalDetectGpsBtn.addEventListener("click", function () {
        closeLocationModal();
        requestUserLocation();
      });
    }

    // Region Filter Chips
    filterChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        filterChips.forEach(function (c) {
          c.classList.remove("active");
          c.setAttribute("aria-selected", "false");
        });
        chip.classList.add("active");
        chip.setAttribute("aria-selected", "true");
        state.activeFilter = chip.getAttribute("data-filter");
        renderHomeCards();
      });
    });

    // Search Bar
    if (searchInput) {
      searchInput.addEventListener("input", handleSearchInput);
      searchInput.addEventListener("focus", function () {
        if (searchInput.value.trim().length > 0) {
          renderSearchDropdown(searchInput.value);
        }
      });
    }
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", function () {
        clearSearch();
        if (searchInput) searchInput.focus();
      });
    }
    if (resetHomeSearchBtn) {
      resetHomeSearchBtn.addEventListener("click", function () {
        clearSearch();
      });
    }

    document.addEventListener("click", function (e) {
      if (
        searchDropdown &&
        !searchDropdown.contains(e.target) &&
        e.target !== searchInput
      ) {
        searchDropdown.classList.add("hidden");
      }
      if (locationModal && e.target === locationModal) {
        closeLocationModal();
      }
      if (plannerModal && e.target === plannerModal) {
        closePlanner();
      }
      if (imageLightbox && e.target === imageLightbox) {
        closeLightbox();
      }
      if (voiceAssistantModal && e.target === voiceAssistantModal) {
        closeVoiceAssistant();
      }
    });

    // Language Toggles
    if (langEnBtn) {
      langEnBtn.addEventListener("click", function () {
        if (state.lang === "en") return;
        stopSpeech();
        state.lang = "en";
        renderMonumentPage();
      });
    }
    if (langHiBtn) {
      langHiBtn.addEventListener("click", function () {
        if (state.lang === "hi") return;
        stopSpeech();
        state.lang = "hi";
        renderMonumentPage();
      });
    }

    // Kids Mode Toggle
    if (kidsModeBtn) {
      kidsModeBtn.addEventListener("click", function () {
        stopSpeech();
        state.kidsMode = !state.kidsMode;
        renderMonumentPage();
      });
    }

    // Audio Buttons
    if (listenAllBtn) {
      listenAllBtn.addEventListener("click", toggleAllStoriesSpeech);
    }
    if (stopSpeechBtn) {
      stopSpeechBtn.addEventListener("click", function () {
        stopSpeech();
        renderMonumentPage();
      });
    }

    // Feature 3: Time Slot Dropdown
    if (timeSlotSelect) {
      timeSlotSelect.addEventListener("change", function () {
        state.selectedHour = timeSlotSelect.value;
        const monument = getCurrentMonument();
        if (monument) {
          renderCrowdAndGemSection(monument, state.lang);
        }
      });
    }

    // Safar AI Tour Planner Events
    if (openPlannerBtn) {
      openPlannerBtn.addEventListener("click", openPlanner);
    }
    if (closePlannerBtn) {
      closePlannerBtn.addEventListener("click", closePlanner);
    }

    // Day Presets
    dayPresetBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        dayPresetBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        const days = parseInt(btn.getAttribute("data-days"), 10);
        state.plannerDays = days;
        if (plannerDaysInput) plannerDaysInput.value = days;
      });
    });

    if (plannerDaysInput) {
      plannerDaysInput.addEventListener("input", function () {
        const val = parseInt(plannerDaysInput.value, 10);
        if (val >= 1 && val <= 14) {
          state.plannerDays = val;
          dayPresetBtns.forEach(function (b) {
            b.classList.toggle("active", parseInt(b.getAttribute("data-days"), 10) === val);
          });
        }
      });
    }

    if (generateItineraryBtn) {
      generateItineraryBtn.addEventListener("click", function () {
        const days = state.plannerDays || 3;
        const hub = plannerHubSelect ? plannerHubSelect.value : "delhi";
        const pace = plannerPaceSelect ? plannerPaceSelect.value : "cultural";
        const season = plannerSeasonSelect ? plannerSeasonSelect.value : "current";
        generateItinerary(days, hub, pace, season);
      });
    }

    // Lightbox Close
    if (closeLightboxBtn) {
      closeLightboxBtn.addEventListener("click", closeLightbox);
    }

    // Speech voice preloading
    if ("speechSynthesis" in window && window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = function () {
        window.speechSynthesis.getVoices();
      };
    }
  }

  // Initialize
  initTheme();
  updateLocationDisplay();
  renderHomeCards();
  initEventListeners();
})();
