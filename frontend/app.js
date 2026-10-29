// ==========================================================================
// Safar Saarthi (सफ़र सारथी) — Heritage Companion (app.js)
// Zero-build, pure client-side vanilla JavaScript architecture
// Works 100% offline, on file:/// protocol, and static hosting
// ==========================================================================

(function () {
  'use strict';

  // Verify dataset availability with fallback guard
  const MONUMENTS_DATA = (typeof MONUMENTS !== 'undefined' && Array.isArray(MONUMENTS)) ? MONUMENTS : [
    {
      id: "taj-mahal",
      shortId: "taj",
      name: { en: "Taj Mahal", hi: "ताज महल" },
      city: { en: "Agra, Uttar Pradesh", hi: "आगरा, उत्तर प्रदेश" },
      era: { en: "Built 1632–1653 CE · Mughal Era", hi: "निर्माण 1632–1653 ईस्वी · मुग़ल काल" },
      shortSummary: {
        en: "An ivory-white Makrana marble mausoleum on the banks of the Yamuna River, celebrated for its symmetry and pietra dura floral inlays.",
        hi: "यमुना नदी के तट पर स्थित मकराना के सफ़ेद संगमरमर का भव्य स्मारक, जो अपनी सममित वास्तुकला और पच्चीकारी के लिए प्रसिद्ध है।"
      },
      coords: { lat: 27.1751, lon: 78.0421 },
      stories: [
        {
          id: "taj-1",
          readTime: "01:30",
          title: { en: "Chapter 1: The Geometry of Grief & Marble", hi: "अध्याय 1: संगमरमर और विरह का ज्यामितीय वैभव" },
          standard: {
            en: "Quarried over 300 kilometres away in Makrana, Rajasthan, the translucent white marble of the Taj Mahal reacts dynamically to atmospheric light. It appears soft rose at sunrise, dazzling white under the midday sun, and warm golden-bronze as twilight settles over the Yamuna.",
            hi: "राजस्थान के मकराना से 300 किलोमीटर दूर से लाया गया यह अर्ध-पारदर्शी सफ़ेद संगमरमर सूरज की रोशनी के साथ अपना रंग बदलता हुआ प्रतीत होता है। सूर्योदय के समय यह हल्का गुलाबी, दोपहर में चमकदार सफ़ेद और शाम के समय सुनहरा दिखाई देता है।"
          },
          kids: {
            en: "Did you know the Taj Mahal is like a giant mood ring? Even though it is made of white stone, it looks pink when the sun wakes up, bright white at lunchtime, and golden yellow at bedtime!",
            hi: "क्या आप जानते हैं कि ताज महल जादुई पत्थर जैसा है? यह सुबह सूरज उगने पर गुलाबी दिखता है, दोपहर में बिल्कुल दूध जैसा सफ़ेद, और शाम को सोने जैसा पीला चमकता है!"
          }
        }
      ],
      secretFact: {
        title: { en: "Antiseismic Architecture", hi: "भूकंपरोधी वास्तुकला" },
        en: "The four minarets are angled slightly outwards by precisely 3 degrees so that in the event of a catastrophic earthquake, they fall away from the sacred central dome rather than crushing it.",
        hi: "चारों मीनारें बाहर की ओर ठीक 3 डिग्री झुकी हुई हैं ताकि किसी भीषण भूकंप की स्थिति में वे मुख्य गुंबद पर न गिरकर बाहर की तरफ गिरें।"
      },
      crowdByHour: [
        { hour: "8 AM", level: 22, status: "Low" },
        { hour: "9 AM", level: 34, status: "Low" },
        { hour: "10 AM", level: 55, status: "Moderate" },
        { hour: "11 AM", level: 68, status: "Moderate" },
        { hour: "12 PM", level: 88, status: "High" },
        { hour: "1 PM", level: 92, status: "High" },
        { hour: "2 PM", level: 89, status: "High" },
        { hour: "3 PM", level: 72, status: "Moderate" },
        { hour: "4 PM", level: 60, status: "Moderate" },
        { hour: "5 PM", level: 40, status: "Low" },
        { hour: "6 PM", level: 30, status: "Low" }
      ],
      sisterGem: {
        name: { en: "Mehtab Bagh", hi: "मेहताब बाग" },
        tagline: { en: "The Moonlight Garden across the Yamuna River", hi: "यमुना नदी के पार चांदनी बाग" },
        distance: "1.8 km away",
        crowd: "18%",
        wait: "0 min",
        highlight: "Sunset Prime Reflection",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
        mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Mehtab+Bagh+Agra"
      },
      safety: {
        police: { en: "Taj Ganj Police Booth (220m from East Gate Corridor)", hi: "ताजगंज पुलिस बूथ (पूर्वी गेट से 220 मीटर)" },
        hospital: { en: "District Hospital Agra (2.4 km away, Trauma Unit)", hi: "जिला अस्पताल आगरा (2.4 किमी, आपातकालीन वार्ड)" }
      },
      images: [
        { url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80", title: "Taj Mahal" }
      ]
    }
  ];

  // ========================================================================
  // Weather API Configuration — reads from gitignored config.js
  // Supports Weatherstack, OpenWeatherMap, WeatherAPI, and Open-Meteo
  // ========================================================================
  const WEATHER_CONFIG = {
    apiKey: (window.APP_CONFIG && window.APP_CONFIG.weatherApiKey) ? String(window.APP_CONFIG.weatherApiKey).trim() : "",
    provider: (window.APP_CONFIG && window.APP_CONFIG.weatherProvider) ? String(window.APP_CONFIG.weatherProvider).toLowerCase().trim() : "openmeteo"
  };

  // Application State
  const state = {
    currentTab: 'home',            // 'home' | 'monuments' | 'emergency' | 'feedback'
    currentMonumentId: 'taj-mahal',
    currentStoryIdx: 0,
    lang: 'en',                    // 'en' | 'hi'
    kidsMode: false,
    voiceGender: 'female',         // 'female' | 'male'
    theme: 'light',                // 'light' | 'dark'
    viewportMode: 'mobile',        // 'mobile' | 'desktop'
    isSurgeActive: false,          // ⚡ Live Demo Surge Mode
    selectedHour: '10 AM',
    isPlayingAudio: false,
    speechUtterance: null,
    eqInterval: null,
    visualMode: 'photo',           // 'photo' | 'art'
    starRating: 4,
    feedbackCrowd: 'accurate',
    feedbackAudio: 'good',
    plannerDays: 3,
    plannerPace: 'contemplative',
    weatherCache: {},
    fairFareKm: 6.2,
    isNightFare: false,
    userCoords: { lat: 27.1751, lon: 78.0421, name: 'Taj Mahal Precinct, Agra · 27.1751° N', isGps: false }
  };

  // Translations Dictionary for complete bilingual polish
  const UI_TEXT = {
    en: {
      brandSub: "सफ़र सारथी",
      homeEyebrow: "Intelligent Heritage Companion",
      homeHeroTitle: 'Explore India with <span class="italic font-normal">Quiet Dignity</span>',
      homeHeroSub: "Real-time microclimate forecasting, AI crowd dispersal, and verified ASI cultural narratives.",
      nearMe: "Near Me",
      fieldDispatchTag: "Field Dispatch #104",
      fieldDispatchHead: "Morning mist dissipating over Yamuna terrace · Agra Circuit",
      radarTitle: "Mausam-X Radar",
      radarLiveFeed: "Live Feed",
      heatIndex: "Heat Index",
      heatTipNormal: "Perceived comfort",
      heatTipWarm: "Wear light cotton & sunglasses",
      humidity: "Rel. Humidity",
      uvExposure: "UV Exposure",
      surfaceWind: "Surface Wind",
      rainProbTitle: "Rain Probability & Thermal Window",
      optimalTag: "Optimal Visiting Window Today",
      optimalHours: "8:00 AM – 10:30 AM",
      optimalDesc: "Low solar intensity · 22% average crowd density · Expected wait < 7 mins at Eastern Gate.",
      planBtn: "Plan Multi-Day Tour",
      planSub: "Calculates UNESCO corridors & ASI certified routes",
      audioWalk: "Audio Walk",
      audioWalkSub: "Curated ASI lore",
      transitShield: "Transit Shield",
      transitShieldSub: "Prepaid meters",
      scamRadar: "Scam Radar",
      scamRadarSub: "Official guide list",
      craftTitle: "Craft Heritage Insight",
      craftSub: "Empanelled guild ateliers on Fatehabad Rd",
      monumentsEyebrow: "ARCHITECTURAL ARCHIVE & FOOTFALL",
      monumentsTitle: "Monuments of Wonder",
      verifiedAsiBadge: "Verified ASI & Footfall Dataset",
      liveTelemetry: "Live Telemetry",
      historicalChronicle: "Historical Chronicle",
      revealSecret: "Reveal Secret Fact (Tap to Flip)",
      crowdEyebrow: "Live & Projected Traffic",
      crowdTitle: "Hourly Footfall Density",
      peakWindowTag: "Peak Window",
      demoSurgeBtn: "⚡ Demo Surge (95%)",
      resetSurgeBtn: "⚡ Reset Normal",
      surgeAlertTitle: "⚠️ High Footfall Surge Detected (95%)",
      surgeAlertDesc: "Congestion delay >45m. De-densification engine recommends quieter alternative gem nearby.",
      sisterTag: "Quieter Alternative Nearby",
      mapsBtnText: "Open in Google Maps & Directions",
      emergencyEyebrow: "SAFETY SENTINEL & MOBILITY",
      emergencyTitle: "Transit Shield & Helplines",
      emergencySub: "Fair-price benchmarks, instant police assistance, and verified tourist corridors.",
      callPost: "Call Post",
      ambulance: "Ambulance",
      feedbackEyebrow: "Crowdsourced Safety & Quality",
      feedbackTitle: "Visitor Feedback & Safety Report",
      feedbackSub: "Help protect fellow travelers. Every review trains our AI crowd predictions and flags predatory tout activities directly to the tourism board."
    },
    hi: {
      brandSub: "Heritage Companion",
      homeEyebrow: "स्मार्ट सांस्कृतिक सारथी",
      homeHeroTitle: 'भारत की विरासत का <span class="italic font-normal">सुकून भरा अनुभव</span>',
      homeHeroSub: "सटीक मौसम पूर्वानुमान, लाइव भीड़ नियंत्रण एवं भारतीय पुरातत्व सर्वेक्षण प्रमाणित कथाएं।",
      nearMe: "निकटतम",
      fieldDispatchTag: "फ़ील्ड डायरी #104",
      fieldDispatchHead: "यमुना तट पर छंटता सुबह का कोहरा · आगरा परिपथ",
      radarTitle: "मौसम-X रडार",
      radarLiveFeed: "लाइव उपग्रह रडार",
      heatIndex: "ताप सूचकांक",
      heatTipNormal: "अनुकूल मौसम",
      heatTipWarm: "हल्के सूती कपड़े व चश्मा पहनें",
      humidity: "सापेक्ष आर्द्रता",
      uvExposure: "पराबैंगनी किरणें",
      surfaceWind: "हवा की गति",
      rainProbTitle: "वर्षा संभावना एवं मौसम का समय",
      optimalTag: "आज भ्रमण हेतु सर्वोत्तम समय",
      optimalHours: "प्रातः 8:00 AM – 10:30 AM",
      optimalDesc: "धूप का कम प्रभाव · केवल 22% सामान्य भीड़ · पूर्वी गेट पर 7 मिनट से कम प्रतीक्षा।",
      planBtn: "बहु-दिवसीय यात्रा बनाएं",
      planSub: "यूनेस्को प्रमाणित कॉरिडोर और सुरक्षित मार्ग",
      audioWalk: "ध्वनि यात्रा",
      audioWalkSub: "प्रामाणिक इतिहास",
      transitShield: "सफ़र सुरक्षा",
      transitShieldSub: "मीटर किराया दर",
      scamRadar: "ठगी रक्षक",
      scamRadarSub: "प्रमाणित गाइड सूची",
      craftTitle: "शिल्प विरासत अंतर्दृष्टि",
      craftSub: "फतेहाबाद रोड पर पंजीकृत पच्चीकारी कार्यशालाएं",
      monumentsEyebrow: "वास्तुकला संग्रह एवं भीड़ निगरानी",
      monumentsTitle: "भारत के अद्भुत स्मारक",
      verifiedAsiBadge: "एएसआई एवं लाइव फुटफॉल डेटा",
      liveTelemetry: "लाइव निगरानी",
      historicalChronicle: "ऐतिहासिक गाथा",
      revealSecret: "रहस्य उजागर करें (टैप करें)",
      crowdEyebrow: "लाइव एवं अनुमानित आवागमन",
      crowdTitle: "प्रति घंटा भीड़ घनत्व",
      peakWindowTag: "चरम भीड़ समय",
      demoSurgeBtn: "⚡ 95% भीड़ सिमुलेशन",
      resetSurgeBtn: "⚡ सामान्य स्थिति",
      surgeAlertTitle: "⚠️ अत्यधिक भीड़ चेतावनी (95%)",
      surgeAlertDesc: "45 मिनट से अधिक कतार। डिस्पर्शन इंजन पास के शांत दर्शनीय स्थल की सलाह देता है।",
      sisterTag: "समीप का शांत वैकल्पिक स्थल",
      mapsBtnText: "गूगल मैप्स पर रास्ता देखें",
      emergencyEyebrow: "सुरक्षा पहरी एवं सुगम यात्रा",
      emergencyTitle: "ट्रांजिट शील्ड व हेल्पलाइन",
      emergencySub: "उचित किराया मानक, त्वरित पुलिस सहायता एवं सत्यापित पर्यटन क्षेत्र।",
      callPost: "पुलिस को कॉल करें",
      ambulance: "एम्बुलेंस",
      feedbackEyebrow: "जनसहयोग आधारित सुरक्षा व गुणवत्ता",
      feedbackTitle: "यात्री अनुभव व सुरक्षा रिपोर्ट",
      feedbackSub: "सह-यात्रियों की रक्षा करें। आपकी प्रत्येक समीक्षा हमारे एआई को प्रशिक्षित करती है और पर्यटकों को सुरक्षित बनाती है।"
    }
  };

  // Helper: Find monument by ID or shortId
  function getMonument(idOrShort) {
    if (!idOrShort) return MONUMENTS_DATA[0];
    const match = MONUMENTS_DATA.find(m => m.id === idOrShort || m.shortId === idOrShort);
    return match || MONUMENTS_DATA[0];
  }

  // ========================================================================
  // DOM References Initialization
  // ========================================================================
  const views = {
    home: document.getElementById('view-home'),
    monuments: document.getElementById('view-monuments'),
    emergency: document.getElementById('view-emergency'),
    feedback: document.getElementById('view-feedback')
  };

  const navTabBtns = document.querySelectorAll('.nav-tab-btn');

  // Header Elements
  const langEnBtn = document.getElementById('lang-en-btn');
  const langHiBtn = document.getElementById('lang-hi-btn');
  const voiceGenderBtn = document.getElementById('voice-gender-btn');
  const voiceGenderIcon = document.getElementById('voice-gender-icon');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const viewportToggleBtn = document.getElementById('viewport-toggle-btn');
  const viewportToggleIcon = document.getElementById('viewport-toggle-icon');
  const viewportToggleLabel = document.getElementById('viewport-toggle-label');
  const globalSearchInput = document.getElementById('global-search-input');
  const searchDropdown = document.getElementById('search-dropdown');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  // Home Elements
  const detectGpsBtn = document.getElementById('detect-gps-btn');
  const currentLocationText = document.getElementById('current-location-text');
  const openPlannerBtn = document.getElementById('open-planner-btn');
  const quickAudioWalk = document.getElementById('quick-audio-walk');
  const quickTransitShield = document.getElementById('quick-transit-shield');
  const quickScamRadar = document.getElementById('quick-scam-radar');

  // Monuments Elements
  const monumentCarousel = document.getElementById('monument-carousel');
  const monumentHeroImg = document.getElementById('monument-hero-img');
  const monumentSvgBox = document.getElementById('monument-svg-box');
  const togglePhotoMode = document.getElementById('toggle-photo-mode');
  const toggleArtMode = document.getElementById('toggle-art-mode');
  const monumentEraCaption = document.getElementById('monument-era-caption');
  const voiceSunita = document.getElementById('voice-sunita');
  const voiceVikram = document.getElementById('voice-vikram');
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const currentStoryTitle = document.getElementById('current-story-title');
  const storyDurationTag = document.getElementById('story-duration-tag');
  const storyChipsRow = document.getElementById('story-chips-row');
  const audioProgressBar = document.getElementById('audio-progress-bar');
  const kidsToggle = document.getElementById('kids-toggle');
  const kidsIndicator = document.getElementById('kids-indicator');
  const kidsLabel = document.getElementById('kids-label');
  const loreBody = document.getElementById('lore-body');
  const loreHeadline = document.getElementById('lore-headline');
  const loreCategoryTag = document.getElementById('lore-category-tag');
  const secretBtn = document.getElementById('secret-btn');
  const secretDrawer = document.getElementById('secret-drawer');
  const secretChevron = document.getElementById('secret-chevron');
  const secretFactTitle = document.getElementById('secret-fact-title');
  const secretFactBody = document.getElementById('secret-fact-body');
  const surgeDemoBtn = document.getElementById('surge-demo-btn');
  const surgeAlertBanner = document.getElementById('surge-alert-banner');
  const crowdBarsContainer = document.getElementById('crowd-bars-container');
  const sisterGemCard = document.getElementById('sister-gem-card');
  const sisterName = document.getElementById('sister-name');
  const sisterTagline = document.getElementById('sister-tagline');
  const sisterDistance = document.getElementById('sister-distance');
  const sisterCrowd = document.getElementById('sister-crowd');
  const sisterWait = document.getElementById('sister-wait');
  const sisterHighlight = document.getElementById('sister-highlight');
  const sisterImg = document.getElementById('sister-img');
  const sisterMapsLink = document.getElementById('sister-maps-link');

  // Emergency Elements
  const fareSlider = document.getElementById('fare-slider');
  const fareSliderVal = document.getElementById('fare-slider-val');
  const nightRateToggle = document.getElementById('night-rate-toggle');
  const fareBikePrice = document.getElementById('fare-bike-price');
  const fareAutoPrice = document.getElementById('fare-auto-price');
  const fareCabPrice = document.getElementById('fare-cab-price');
  const fareSedanPrice = document.getElementById('fare-sedan-price');
  const supportPoliceTitle = document.getElementById('support-police-title');
  const supportPoliceDist = document.getElementById('support-police-dist');
  const supportPoliceDesc = document.getElementById('support-police-desc');
  const supportPolicePhone = document.getElementById('support-police-phone');
  const supportPoliceCallBtn = document.getElementById('support-police-call-btn');
  const supportHospitalTitle = document.getElementById('support-hospital-title');
  const supportHospitalDist = document.getElementById('support-hospital-dist');
  const supportHospitalDesc = document.getElementById('support-hospital-desc');

  // Feedback Elements
  const feedbackMonumentSelect = document.getElementById('feedback-monument-select');
  const feedbackMonumentImg = document.getElementById('feedback-monument-img');
  const feedbackMonumentName = document.getElementById('feedback-monument-name');
  const feedbackMonumentMeta = document.getElementById('feedback-monument-meta');
  const starBtns = document.querySelectorAll('.star-btn');
  const starScoreText = document.getElementById('star-score-text');
  const starScoreLabel = document.getElementById('star-score-label');
  const crowdChips = document.querySelectorAll('.crowd-chip');
  const audioPills = document.querySelectorAll('.audio-pill');
  const successToast = document.getElementById('success-toast');
  const toastHashText = document.getElementById('toast-hash-text');

  // Planner Modal Elements
  const plannerModal = document.getElementById('planner-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const confirmPlanBtn = document.getElementById('confirm-plan-btn');
  const plannerResults = document.getElementById('planner-results');
  const plannerDayBtns = document.querySelectorAll('.planner-day-btn');
  const plannerPaceBtns = document.querySelectorAll('.planner-pace-btn');

  // Equalizer Bars
  const eqBars = [
    document.getElementById('eq-1'),
    document.getElementById('eq-2'),
    document.getElementById('eq-3'),
    document.getElementById('eq-4'),
    document.getElementById('eq-5'),
    document.getElementById('eq-6')
  ];

  // ========================================================================
  // Core Tab Routing
  // ========================================================================
  function switchTab(tabName) {
    if (!views[tabName]) return;
    state.currentTab = tabName;

    // Toggle views visibility
    Object.keys(views).forEach(key => {
      if (key === tabName) {
        views[key].classList.remove('hidden');
        views[key].classList.add('flex');
      } else {
        views[key].classList.add('hidden');
        views[key].classList.remove('flex');
      }
    });

    // Update bottom navigation active styles
    navTabBtns.forEach(btn => {
      const bTab = btn.getAttribute('data-tab');
      if (bTab === tabName) {
        btn.classList.add('text-primary', 'font-medium');
        btn.classList.remove('text-secondary');
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.classList.remove('text-primary', 'font-medium');
        btn.classList.add('text-secondary');
        btn.removeAttribute('aria-current');
      }
    });

    // Update desktop header navigation active styles (Stitch Desktop)
    const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');
    desktopNavLinks.forEach(link => {
      const lTab = link.getAttribute('data-tab');
      if (lTab === tabName) {
        link.className = 'desktop-nav-link px-4 py-1.5 rounded-full font-ui text-[13px] transition-all bg-secondary-fixed text-on-secondary-fixed font-button shadow-sm';
        link.setAttribute('aria-current', 'page');
      } else {
        link.className = 'desktop-nav-link px-4 py-1.5 rounded-full font-ui text-[13px] text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all';
        link.removeAttribute('aria-current');
      }
    });

    // Stop audio if navigating away from monuments
    if (tabName !== 'monuments' && state.isPlayingAudio) {
      pauseAudio();
    }

    // Smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Bind Bottom Nav Tabs
  navTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Bind Desktop Header Nav Tabs (Stitch Desktop)
  document.querySelectorAll('.desktop-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Bind Quick Utilities to Tabs
  if (quickAudioWalk) {
    quickAudioWalk.addEventListener('click', () => switchTab('monuments'));
  }
  if (quickTransitShield) {
    quickTransitShield.addEventListener('click', () => switchTab('emergency'));
  }
  if (quickScamRadar) {
    quickScamRadar.addEventListener('click', () => switchTab('emergency'));
  }

  // ========================================================================
  // Monument Rendering Engine
  // ========================================================================
  function renderActiveMonument() {
    const monument = getMonument(state.currentMonumentId);
    const lang = state.lang;
    const isHi = lang === 'hi';

    // 1. Update Carousel Buttons Active State
    const carouselBtns = monumentCarousel.querySelectorAll('button[data-monument]');
    carouselBtns.forEach(btn => {
      const mId = btn.getAttribute('data-monument');
      const isMatch = (mId === monument.shortId || mId === monument.id);
      if (isMatch) {
        btn.className = 'shrink-0 px-space-md py-space-xs rounded-full bg-ink-band text-surface font-ui text-caption font-medium shadow-sm transition-transform active:scale-95';
        // Auto-scroll button into view inside horizontal carousel
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        btn.className = 'shrink-0 px-space-md py-space-xs rounded-full bg-surface-container text-secondary font-ui text-caption hover:text-on-surface transition-colors';
      }
    });

    // 2. Hero Visuals (Photo vs SVG Art)
    if (monument.images && monument.images.length > 0) {
      monumentHeroImg.src = monument.images[0].url;
      monumentHeroImg.alt = monument.name[lang];
    }
    if (monument.svgIllustration) {
      monumentSvgBox.innerHTML = monument.svgIllustration;
    }
    updateVisualMode();

    // 3. Era & Architecture Caption
    monumentEraCaption.textContent = `${monument.era[lang]} · ${monument.city[lang]}`;

    // 4. Story Chapters & Selection
    renderStoryChapters(monument);

    // 5. Secret Fact Drawer
    renderSecretFact(monument);

    // 6. Crowd Footfall Chart & Dispersal
    renderCrowdChart(monument);

    // 7. Sister Gem Recommendation
    renderSisterGem(monument);

    // 8. Update Emergency Support Info for Active Monument
    renderEmergencySupport(monument);

    // 9. Update Feedback Monument Select
    renderFeedbackMonument(monument);

    // 10. Update Home Radar Context
    updateMausamRadar(monument);

    // 11. Update Desktop Scrim Bar Precinct Tag (Stitch Desktop)
    const desktopPrecinctTag = document.getElementById('desktop-precinct-tag');
    if (desktopPrecinctTag) {
      desktopPrecinctTag.textContent = `Telemetry Grid Sync: National Precinct #${monument.id.toUpperCase()} • ${monument.city[state.lang]}`;
    }
  }

  // Toggle Photo vs SVG Art Mode
  function updateVisualMode() {
    if (state.visualMode === 'photo') {
      monumentHeroImg.classList.remove('hidden');
      monumentSvgBox.classList.add('hidden');
      togglePhotoMode.className = 'px-2 py-0.5 rounded-full bg-white text-ink-band font-medium';
      toggleArtMode.className = 'px-2 py-0.5 rounded-full text-white/80 hover:text-white';
    } else {
      monumentHeroImg.classList.add('hidden');
      monumentSvgBox.classList.remove('hidden');
      toggleArtMode.className = 'px-2 py-0.5 rounded-full bg-white text-ink-band font-medium';
      togglePhotoMode.className = 'px-2 py-0.5 rounded-full text-white/80 hover:text-white';
    }
  }

  if (togglePhotoMode && toggleArtMode) {
    togglePhotoMode.addEventListener('click', () => {
      state.visualMode = 'photo';
      updateVisualMode();
    });
    toggleArtMode.addEventListener('click', () => {
      state.visualMode = 'art';
      updateVisualMode();
    });
  }

  // Render Story Chapters
  function renderStoryChapters(monument) {
    const lang = state.lang;
    const stories = monument.stories || [];
    if (stories.length === 0) return;

    if (state.currentStoryIdx >= stories.length) {
      state.currentStoryIdx = 0;
    }

    const currentStory = stories[state.currentStoryIdx];
    currentStoryTitle.textContent = currentStory.title[lang];
    storyDurationTag.textContent = currentStory.readTime || '01:30';

    // Story chips for chapters
    storyChipsRow.innerHTML = '';
    stories.forEach((st, idx) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      const isCurrent = idx === state.currentStoryIdx;
      chip.className = isCurrent
        ? 'px-2.5 py-0.5 rounded-full bg-ink-band text-surface text-[11px] font-medium shrink-0 shadow-xs'
        : 'px-2.5 py-0.5 rounded-full bg-surface text-secondary hover:text-on-surface text-[11px] shrink-0 border border-hairline/60';
      chip.textContent = `${lang === 'hi' ? 'भाग' : 'Part'} ${idx + 1}`;
      chip.addEventListener('click', () => {
        state.currentStoryIdx = idx;
        if (state.isPlayingAudio) pauseAudio();
        renderActiveStoryContent(monument);
      });
      storyChipsRow.appendChild(chip);
    });

    renderActiveStoryContent(monument);
  }

  // Render Active Story Content (handles Kids Mode swap)
  function renderActiveStoryContent(monument) {
    const lang = state.lang;
    const stories = monument.stories || [];
    const story = stories[state.currentStoryIdx] || stories[0];

    loreHeadline.textContent = story.title[lang];
    loreCategoryTag.textContent = state.kidsMode
      ? (lang === 'hi' ? '✨ बच्चों के लिए जादुई कथा' : '✨ Enchanting Kids Tale')
      : (lang === 'hi' ? 'वास्तुकला एवं ऐतिहासिक विवरण' : 'Architecture & Royal Chronicle');

    if (state.kidsMode && story.kids) {
      loreBody.textContent = story.kids[lang];
    } else {
      loreBody.textContent = story.standard[lang];
    }
  }

  // Render Secret Fact
  function renderSecretFact(monument) {
    const lang = state.lang;
    const fact = monument.secretFact || {
      title: { en: "Architectural Marvel", hi: "वास्तुकला का आश्चर्य" },
      en: monument.shortSummary.en,
      hi: monument.shortSummary.hi
    };

    secretFactTitle.textContent = fact.title[lang];
    secretFactBody.textContent = fact[lang];
  }

  // Secret Drawer Toggle
  if (secretBtn && secretDrawer && secretChevron) {
    secretBtn.addEventListener('click', () => {
      const isHidden = secretDrawer.classList.contains('hidden');
      if (isHidden) {
        secretDrawer.classList.remove('hidden');
        secretChevron.style.transform = 'rotate(180deg)';
      } else {
        secretDrawer.classList.add('hidden');
        secretChevron.style.transform = 'rotate(0deg)';
      }
    });
  }

  // Kids Mode Toggle
  if (kidsToggle && kidsIndicator && kidsLabel) {
    kidsToggle.addEventListener('change', (e) => {
      state.kidsMode = e.target.checked;
      const lang = state.lang;

      if (state.kidsMode) {
        kidsIndicator.classList.remove('bg-silver');
        kidsIndicator.classList.add('bg-tertiary-container');
        kidsLabel.classList.remove('text-secondary');
        kidsLabel.classList.add('text-tertiary-container', 'font-semibold');
      } else {
        kidsIndicator.classList.remove('bg-tertiary-container');
        kidsIndicator.classList.add('bg-silver');
        kidsLabel.classList.remove('text-tertiary-container', 'font-semibold');
        kidsLabel.classList.add('text-secondary');
      }

      const monument = getMonument(state.currentMonumentId);
      renderActiveStoryContent(monument);

      if (state.isPlayingAudio) {
        pauseAudio();
        playAudio();
      }
    });
  }

  // ========================================================================
  // Crowd Footfall Density & Dispersal Engine
  // ========================================================================
  function renderCrowdChart(monument) {
    const hours = monument.crowdByHour || [];
    crowdBarsContainer.innerHTML = '';

    hours.forEach((slot) => {
      const isSurged = state.isSurgeActive && (slot.hour === '12 PM' || slot.hour === '1 PM' || slot.hour === '2 PM' || slot.hour === state.selectedHour);
      const level = isSurged ? 95 : slot.level;

      // Color coding: Low (<45%: Forest), Moderate (45-84%: Gold Deep), High (85%+: Error Red)
      let barColor = 'bg-forest';
      if (level >= 85) barColor = 'bg-error';
      else if (level >= 45) barColor = 'bg-gold-deep';

      const isSelected = slot.hour === state.selectedHour;

      const col = document.createElement('div');
      col.className = 'flex-1 flex flex-col items-center h-full justify-end group cursor-pointer';
      col.setAttribute('data-hour', slot.hour);

      col.innerHTML = `
        <span class="font-caption text-[10px] ${level >= 85 ? 'text-error font-bold' : 'text-secondary'} opacity-0 group-hover:opacity-100 transition-opacity mb-1">${level}%</span>
        <div class="w-full ${barColor} rounded-t transition-all duration-300 ${isSelected ? 'ring-2 ring-primary ring-offset-1' : ''}" style="height: ${level}%;"></div>
        <span class="font-caption text-[10px] ${isSelected ? 'text-on-surface font-semibold' : 'text-secondary'} mt-1">${slot.hour.replace(' ', '').toLowerCase()}</span>
      `;

      col.addEventListener('click', () => {
        state.selectedHour = slot.hour;
        renderCrowdChart(monument);
      });

      crowdBarsContainer.appendChild(col);
    });

    // Surge Alert Banner visibility
    const currentLevel = state.isSurgeActive ? 95 : (hours.find(h => h.hour === state.selectedHour)?.level || 55);
    if (currentLevel >= 85 || state.isSurgeActive) {
      surgeAlertBanner.classList.remove('hidden');
      sisterGemCard.classList.add('ring-2', 'ring-forest', 'shadow-md');
    } else {
      surgeAlertBanner.classList.add('hidden');
      sisterGemCard.classList.remove('ring-2', 'ring-forest', 'shadow-md');
    }
  }

  // ⚡ Live Demo Surge Button for Hackathon Judges
  if (surgeDemoBtn) {
    surgeDemoBtn.addEventListener('click', () => {
      state.isSurgeActive = !state.isSurgeActive;
      const lang = state.lang;
      const surgeBtnText = document.getElementById('surge-btn-text');

      if (state.isSurgeActive) {
        surgeBtnText.textContent = UI_TEXT[lang].resetSurgeBtn;
        surgeDemoBtn.classList.remove('bg-error-container', 'text-on-error-container');
        surgeDemoBtn.classList.add('bg-error', 'text-white');
      } else {
        surgeBtnText.textContent = UI_TEXT[lang].demoSurgeBtn;
        surgeDemoBtn.classList.remove('bg-error', 'text-white');
        surgeDemoBtn.classList.add('bg-error-container', 'text-on-error-container');
      }

      const monument = getMonument(state.currentMonumentId);
      renderCrowdChart(monument);
    });
  }

  // Render Sister Gem Card
  function renderSisterGem(monument) {
    const lang = state.lang;
    const gem = monument.sisterGem;
    if (!gem) return;

    sisterName.textContent = gem.name[lang];
    sisterTagline.textContent = gem.tagline[lang];
    sisterDistance.textContent = gem.distance;
    sisterCrowd.textContent = gem.crowd || '15%';
    sisterWait.textContent = gem.wait || '0 min';
    sisterHighlight.textContent = gem.highlight || 'Tranquil';
    sisterImg.src = gem.image || (monument.images[0] ? monument.images[0].url : '');
    sisterMapsLink.href = gem.mapsUrl || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(gem.name.en + ' ' + monument.city.en.split(',')[0])}`;
  }

  // ========================================================================
  // Speech Synthesis Narration Engine (Sunita & Vikram)
  // ========================================================================
  function pickVoice(lang, gender) {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const isHi = lang === 'hi';
    const isFemale = gender === 'female';

    // 1. Precise Language + Gender Match
    const femaleKeywords = ['female', 'zira', 'kalpana', 'susan', 'samantha', 'victoria', 'heera', 'neerja', 'aria', 'jenny', 'हिन्दी'];
    const maleKeywords = ['male', 'david', 'mark', 'ravi', 'hemant', 'guy', 'prabhat', 'madhav', 'george', 'richard'];

    for (let i = 0; i < voices.length; i++) {
      const v = voices[i];
      const vLang = (v.lang || '').toLowerCase();
      const vName = (v.name || '').toLowerCase();

      const langMatch = isHi
        ? (vLang.includes('hi') || vLang.includes('hin'))
        : (vLang.includes('en') || vLang.startsWith('en'));

      if (langMatch) {
        if (isFemale && femaleKeywords.some(k => vName.includes(k))) return v;
        if (!isFemale && maleKeywords.some(k => vName.includes(k))) return v;
      }
    }

    // 2. Fallback: match language only
    const langMatch = voices.find(v => {
      const l = (v.lang || '').toLowerCase();
      return isHi ? (l.includes('hi') || l.includes('hin')) : (l.includes('en') || l.startsWith('en'));
    });
    if (langMatch) return langMatch;

    return voices[0];
  }

  function playAudio() {
    if (!('speechSynthesis' in window)) {
      alert("Your browser does not support Web Speech audio. Please use modern Chrome, Edge, or Safari.");
      return;
    }

    window.speechSynthesis.cancel();

    const monument = getMonument(state.currentMonumentId);
    const stories = monument.stories || [];
    const story = stories[state.currentStoryIdx] || stories[0];
    const lang = state.lang;

    const textToSpeak = state.kidsMode && story.kids ? story.kids[lang] : story.standard[lang];

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.pitch = state.kidsMode ? 1.15 : (state.voiceGender === 'male' ? 0.9 : 1.0);
    utterance.rate = 0.92; // Serene, calm archival pacing

    const voice = pickVoice(lang, state.voiceGender);
    if (voice) utterance.voice = voice;

    utterance.onstart = () => {
      state.isPlayingAudio = true;
      playIcon.textContent = 'pause';
      startEqualizer();
    };

    utterance.onend = () => {
      resetAudioState();
    };

    utterance.onerror = () => {
      resetAudioState();
    };

    state.speechUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function pauseAudio() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    resetAudioState();
  }

  function resetAudioState() {
    state.isPlayingAudio = false;
    playIcon.textContent = 'play_arrow';
    stopEqualizer();
  }

  function startEqualizer() {
    stopEqualizer();
    state.eqInterval = setInterval(() => {
      const heights = ['0.375rem', '0.625rem', '0.875rem', '1rem', '0.5rem', '0.75rem'];
      eqBars.forEach(b => {
        if (b) b.style.height = heights[Math.floor(Math.random() * heights.length)];
      });
    }, 140);
  }

  function stopEqualizer() {
    if (state.eqInterval) {
      clearInterval(state.eqInterval);
      state.eqInterval = null;
    }
    const defaults = ['0.5rem', '0.875rem', '0.375rem', '1rem', '0.625rem', '0.75rem'];
    eqBars.forEach((b, idx) => {
      if (b) b.style.height = defaults[idx];
    });
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (state.isPlayingAudio) {
        pauseAudio();
      } else {
        playAudio();
      }
    });
  }

  // Voice Narrator Buttons (Sunita vs Vikram)
  function updateVoiceNarratorUI() {
    if (state.voiceGender === 'female') {
      voiceSunita.className = 'px-space-xs py-0.5 rounded-full text-caption font-ui font-medium bg-ink-band text-surface transition-all';
      voiceVikram.className = 'px-space-xs py-0.5 rounded-full text-caption font-ui text-secondary transition-all';
      voiceGenderIcon.textContent = '👩';
    } else {
      voiceVikram.className = 'px-space-xs py-0.5 rounded-full text-caption font-ui font-medium bg-ink-band text-surface transition-all';
      voiceSunita.className = 'px-space-xs py-0.5 rounded-full text-caption font-ui text-secondary transition-all';
      voiceGenderIcon.textContent = '👨';
    }
  }

  if (voiceSunita && voiceVikram) {
    voiceSunita.addEventListener('click', () => {
      state.voiceGender = 'female';
      updateVoiceNarratorUI();
      if (state.isPlayingAudio) { pauseAudio(); playAudio(); }
    });
    voiceVikram.addEventListener('click', () => {
      state.voiceGender = 'male';
      updateVoiceNarratorUI();
      if (state.isPlayingAudio) { pauseAudio(); playAudio(); }
    });
  }

  if (voiceGenderBtn) {
    voiceGenderBtn.addEventListener('click', () => {
      state.voiceGender = (state.voiceGender === 'female') ? 'male' : 'female';
      updateVoiceNarratorUI();
      if (state.isPlayingAudio) { pauseAudio(); playAudio(); }
    });
  }

  // Ensure speech synthesis voices are populated in modern browsers
  if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  // ========================================================================
  // Mausam-X Live Weather Radar Engine
  // Supports Weatherstack / OpenWeatherMap / WeatherAPI / Open-Meteo
  // ========================================================================

  function updateMausamRadar(monument) {
    const coords = monument.coords || { lat: 27.1751, lon: 78.0421 };
    const city = monument.city[state.lang].split(',')[0];
    const radarSiteLabel = document.getElementById('radar-site-label');
    const radarUpdatedTag = document.getElementById('radar-updated-tag');
    if (radarSiteLabel) radarSiteLabel.textContent = `Precinct Microclimate Node · ${city}`;

    const providerKey = (WEATHER_CONFIG.apiKey && WEATHER_CONFIG.apiKey.trim().length > 0) ? WEATHER_CONFIG.provider : 'openmeteo';
    const cacheKey = `${monument.id}_${providerKey}`;

    if (state.weatherCache[cacheKey]) {
      renderRadarMetrics(state.weatherCache[cacheKey]);
      return;
    }

    // 1. Weatherstack
    if (WEATHER_CONFIG.apiKey && WEATHER_CONFIG.provider === 'weatherstack') {
      fetchWeatherstack(coords, cacheKey, monument, radarUpdatedTag);
      return;
    }

    // 2. OpenWeatherMap
    if (WEATHER_CONFIG.apiKey && (WEATHER_CONFIG.provider === 'openweathermap' || WEATHER_CONFIG.provider === 'openweather')) {
      fetchOpenWeather(coords, cacheKey, monument, radarUpdatedTag);
      return;
    }

    // 3. WeatherAPI.com
    if (WEATHER_CONFIG.apiKey && (WEATHER_CONFIG.provider === 'weatherapi' || WEATHER_CONFIG.provider === 'weather-api')) {
      fetchWeatherAPI(coords, cacheKey, monument, radarUpdatedTag);
      return;
    }

    // 4. Default Keyless Satellite Engine: Open-Meteo
    fetchOpenMeteo(coords, cacheKey, monument, radarUpdatedTag);
  }

  function fetchWeatherstack(coords, cacheKey, monument, radarUpdatedTag) {
    const wsKey = encodeURIComponent(WEATHER_CONFIG.apiKey);
    const cityName = (monument.city && monument.city.en) ? monument.city.en.split(',')[0].trim() : 'Agra';
    // Weatherstack free tier only supports City names (e.g. "Agra, India").
    // Passing Lat/Lon coordinates on free tier triggers automatic fallback to caller ISP IP address.
    const queryTarget = encodeURIComponent(`${cityName}, India`);
    const wsUrlHttps = `https://api.weatherstack.com/current?access_key=${wsKey}&query=${queryTarget}`;
    const wsUrlHttp = `http://api.weatherstack.com/current?access_key=${wsKey}&query=${queryTarget}`;

    const handlePayload = (data) => {
      if (data && data.success === false && data.error) {
        throw new Error(data.error.info || `Weatherstack error ${data.error.code}`);
      }
      // If Weatherstack reverted to caller IP (e.g. Faridabad), reject it and use exact GPS Open-Meteo satellite feed
      if (data && data.request && data.request.type === 'IP') {
        console.warn(`Weatherstack reverted to caller IP (${data.location?.name || 'Local'}). Using exact GPS Open-Meteo satellite feed for ${cityName}.`);
        fetchOpenMeteo(coords, cacheKey, monument, radarUpdatedTag);
        return true;
      }
      if (data && data.current) {
        const cur = data.current;
        const locName = data.location && data.location.name ? data.location.name : cityName;
        const parsed = {
          current: {
            temperature_2m: cur.temperature,
            apparent_temperature: cur.feelslike !== undefined ? cur.feelslike : cur.temperature + 2,
            relative_humidity_2m: cur.humidity,
            wind_speed_10m: Math.round(cur.wind_speed || 0),
            uv_index: cur.uv_index !== undefined ? cur.uv_index : 6,
            condition_text: (cur.weather_descriptions && cur.weather_descriptions[0]) ? cur.weather_descriptions[0] : "Clear"
          },
          location_name: locName,
          source: "Weatherstack"
        };
        state.weatherCache[cacheKey] = parsed;
        renderRadarMetrics(parsed);
        if (radarUpdatedTag) radarUpdatedTag.textContent = `Live Weatherstack (${locName})`;
        return true;
      }
      throw new Error('Weatherstack returned unexpected payload structure');
    };

    fetch(wsUrlHttps)
      .then(res => res.json())
      .then(data => {
        // Free tier accounts on Weatherstack restrict HTTPS with code 105
        if (data && data.error && (data.error.code === 105 || data.error.type === 'https_access_restricted')) {
          if (window.location.protocol !== 'https:') {
            return fetch(wsUrlHttp).then(r => r.json()).then(handlePayload);
          }
        }
        return handlePayload(data);
      })
      .catch(err => {
        console.warn('Weatherstack notice, attempting resilient fallback:', err.message);
        // Smart fallback: try OpenWeatherMap in case key belongs to OWM, or fall back to Open-Meteo
        fetchOpenWeather(coords, cacheKey, monument, radarUpdatedTag, true);
      });
  }

  function fetchOpenWeather(coords, cacheKey, monument, radarUpdatedTag, isFallback = false) {
    if (!WEATHER_CONFIG.apiKey) {
      fetchOpenMeteo(coords, cacheKey, monument, radarUpdatedTag);
      return;
    }
    const owmUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${encodeURIComponent(WEATHER_CONFIG.apiKey)}&units=metric`;
    fetch(owmUrl)
      .then(res => {
        if (!res.ok) throw new Error(`OpenWeather status ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (data && data.main) {
          const parsed = {
            current: {
              temperature_2m: data.main.temp,
              apparent_temperature: data.main.feels_like,
              relative_humidity_2m: data.main.humidity,
              wind_speed_10m: Math.round((data.wind?.speed || 0) * 3.6),
              condition_text: (data.weather && data.weather[0]) ? data.weather[0].main : "Clear"
            },
            source: "OpenWeatherMap"
          };
          state.weatherCache[cacheKey] = parsed;
          renderRadarMetrics(parsed);
          if (radarUpdatedTag) radarUpdatedTag.textContent = 'Live OpenWeather';
        }
      })
      .catch(err => {
        if (!isFallback) console.warn('OpenWeatherMap fallback to Open-Meteo:', err.message);
        fetchOpenMeteo(coords, cacheKey, monument, radarUpdatedTag);
      });
  }

  function fetchWeatherAPI(coords, cacheKey, monument, radarUpdatedTag) {
    if (!WEATHER_CONFIG.apiKey) {
      fetchOpenMeteo(coords, cacheKey, monument, radarUpdatedTag);
      return;
    }
    const wapiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${encodeURIComponent(WEATHER_CONFIG.apiKey)}&q=${coords.lat},${coords.lon}&days=1&aqi=no`;
    fetch(wapiUrl)
      .then(res => {
        if (!res.ok) throw new Error(`WeatherAPI status ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (data && data.current) {
          const parsed = {
            current: {
              temperature_2m: data.current.temp_c,
              apparent_temperature: data.current.feelslike_c,
              relative_humidity_2m: data.current.humidity,
              wind_speed_10m: Math.round(data.current.wind_kph || 0),
              uv_index: data.current.uv,
              condition_text: data.current.condition ? data.current.condition.text : "Pleasant"
            },
            source: "WeatherAPI"
          };
          state.weatherCache[cacheKey] = parsed;
          renderRadarMetrics(parsed);
          if (radarUpdatedTag) radarUpdatedTag.textContent = 'Live WeatherAPI';
        }
      })
      .catch(err => {
        console.warn('WeatherAPI fallback to Open-Meteo:', err.message);
        fetchOpenMeteo(coords, cacheKey, monument, radarUpdatedTag);
      });
  }

  function fetchOpenMeteo(coords, cacheKey, monument, radarUpdatedTag) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&hourly=precipitation_probability,uv_index&timezone=auto`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data && data.current) {
          state.weatherCache[cacheKey] = data;
          renderRadarMetrics(data);
          if (radarUpdatedTag) radarUpdatedTag.textContent = 'Live Satellite';
        }
      })
      .catch(() => {
        // Offline fallback
        const fallback = generateSeasonalWeather(monument);
        renderRadarMetrics(fallback);
        if (radarUpdatedTag) radarUpdatedTag.textContent = 'Offline Radar';
      });
  }

  function generateSeasonalWeather(monument) {
    return {
      current: {
        temperature_2m: 28,
        apparent_temperature: 30,
        relative_humidity_2m: 42,
        wind_speed_10m: 12,
        weather_code: 1
      },
      hourly: {
        precipitation_probability: [10, 15, 40, 25, 10, 5],
        uv_index: [2, 5, 8, 7, 4, 1]
      }
    };
  }

  function renderRadarMetrics(data) {
    const cur = data.current || {};
    const temp = Math.round(cur.temperature_2m !== undefined ? cur.temperature_2m : 28);
    const feels = Math.round(cur.apparent_temperature !== undefined ? cur.apparent_temperature : temp + 2);
    const hum = Math.round(cur.relative_humidity_2m !== undefined ? cur.relative_humidity_2m : 42);
    const wind = Math.round(cur.wind_speed_10m !== undefined ? cur.wind_speed_10m : 12);
    const uvVal = cur.uv_index !== undefined ? Number(cur.uv_index) : (data.hourly && data.hourly.uv_index ? Number(data.hourly.uv_index[2] || 6) : 6);
    const uv = Math.round(uvVal);

    const radarTemp = document.getElementById('radar-temp');
    const radarHeatIndex = document.getElementById('radar-heat-index');
    const radarHumidity = document.getElementById('radar-humidity');
    const radarWind = document.getElementById('radar-wind');
    const radarCondition = document.getElementById('radar-condition');
    const radarUv = document.getElementById('radar-uv');
    const radarWeatherIconWrap = document.getElementById('radar-weather-icon-wrap');

    if (radarTemp) radarTemp.textContent = temp;
    if (radarHeatIndex) radarHeatIndex.textContent = `${feels}°C`;
    if (radarHumidity) radarHumidity.textContent = `${hum}%`;
    if (radarWind) radarWind.innerHTML = `${wind} <span class="font-ui text-caption font-normal">km/h</span>`;
    if (radarCondition && cur.condition_text) {
      radarCondition.textContent = `${cur.condition_text} · Microclimate`;
    }

    if (radarUv) {
      let uvLabel = 'Moderate';
      if (uv <= 2) uvLabel = 'Low';
      else if (uv <= 5) uvLabel = 'Moderate';
      else if (uv <= 7) uvLabel = 'High';
      else if (uv <= 10) uvLabel = 'Very High';
      else uvLabel = 'Extreme';
      radarUv.innerHTML = `${uv} <span class="font-ui text-caption font-normal">(${uvLabel})</span>`;
    }

    if (radarWeatherIconWrap && cur.condition_text) {
      const cond = String(cur.condition_text).toLowerCase();
      let icon = 'wb_sunny';
      if (cond.includes('rain') || cond.includes('drizzle')) icon = 'rainy';
      else if (cond.includes('thunder') || cond.includes('storm')) icon = 'thunderstorm';
      else if (cond.includes('cloud') || cond.includes('overcast')) icon = 'cloud';
      else if (cond.includes('haze') || cond.includes('fog') || cond.includes('mist') || cond.includes('smoke')) icon = 'foggy';
      else if (cond.includes('snow')) icon = 'ac_unit';
      else if (cond.includes('sunny') || cond.includes('clear')) icon = 'wb_sunny';
      else icon = 'filter_drama';
      radarWeatherIconWrap.innerHTML = `<span class="material-symbols-outlined text-[32px]">${icon}</span>`;
    }
  }

  // ========================================================================
  // Transit Shield: Fare Benchmark & Interactive Fair-Fare Calculator
  // ========================================================================
  function calculateFares() {
    const km = parseFloat(fareSlider.value) || 6.2;
    fareSliderVal.textContent = `${km.toFixed(1)} km`;

    const isNight = nightRateToggle.checked;
    const nightMultiplier = isNight ? 1.25 : 1.0;

    // RTO-regulated Fare Algorithm:
    // Bike: ₹20 base + ₹6/km
    const bike = Math.round((20 + km * 6) * nightMultiplier);
    // Auto: ₹30 base (first 1.5km) + ₹11/km
    const auto = Math.round((30 + Math.max(0, km - 1.5) * 11) * nightMultiplier);
    // Cab (Hatch): ₹60 base + ₹14/km
    const cab = Math.round((60 + km * 14) * nightMultiplier);
    // Sedan: ₹80 base + ₹18/km
    const sedan = Math.round((80 + km * 18) * nightMultiplier);

    fareBikePrice.textContent = `₹${bike}`;
    fareAutoPrice.textContent = `₹${auto}`;
    fareCabPrice.textContent = `₹${cab}`;
    fareSedanPrice.textContent = `₹${sedan}`;
  }

  if (fareSlider) {
    fareSlider.addEventListener('input', calculateFares);
  }
  if (nightRateToggle) {
    nightRateToggle.addEventListener('change', calculateFares);
  }

  function renderEmergencySupport(monument) {
    const lang = state.lang;
    const safety = monument.safety || {};

    if (safety.police) {
      supportPoliceTitle.textContent = safety.police[lang].split('(')[0].trim();
      supportPoliceDesc.textContent = safety.police[lang];
    }
    if (safety.hospital) {
      supportHospitalTitle.textContent = safety.hospital[lang].split('(')[0].trim();
      supportHospitalDesc.textContent = safety.hospital[lang];
    }

    const fareRouteName = document.getElementById('fare-route-name');
    if (fareRouteName) {
      fareRouteName.textContent = `${monument.city[lang].split(',')[0]} Cantt ➔ ${monument.name[lang]}`;
    }
  }

  // ========================================================================
  // Visitor Feedback & Incident Report
  // ========================================================================
  function renderFeedbackMonument(monument) {
    const lang = state.lang;
    feedbackMonumentName.textContent = monument.name[lang];
    feedbackMonumentMeta.textContent = `${monument.city[lang]} • UNESCO Heritage`;
    if (monument.images && monument.images.length > 0) {
      feedbackMonumentImg.src = monument.images[0].url;
    }

    // Populate feedback select dropdown
    feedbackMonumentSelect.innerHTML = '';
    MONUMENTS_DATA.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = `${m.name[lang]} (${m.city[lang].split(',')[0]})`;
      if (m.id === monument.id) opt.selected = true;
      feedbackMonumentSelect.appendChild(opt);
    });
  }

  if (feedbackMonumentSelect) {
    feedbackMonumentSelect.addEventListener('change', (e) => {
      selectMonument(e.target.value);
    });
  }

  // Tactile Star Selector
  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.getAttribute('data-value'), 10);
      state.starRating = val;
      starScoreText.textContent = `${val.toFixed(1)} / 5.0`;

      const labels = {
        1: { en: "Needs Review", hi: "सुधार आवश्यक" },
        2: { en: "Average", hi: "सामान्य" },
        3: { en: "Good", hi: "संतोषजनक" },
        4: { en: "Delightful", hi: "उत्कृष्ट" },
        5: { en: "Extraordinary", hi: "अविश्वसनीय" }
      };
      starScoreLabel.textContent = labels[val][state.lang];

      starBtns.forEach(b => {
        const bVal = parseInt(b.getAttribute('data-value'), 10);
        const icon = b.querySelector('.material-symbols-outlined');
        if (bVal <= val) {
          b.classList.remove('text-ash');
          b.classList.add('text-ochre');
          icon.style.fontVariationSettings = "'FILL' 1";
        } else {
          b.classList.remove('text-ochre');
          b.classList.add('text-ash');
          icon.style.fontVariationSettings = "'FILL' 0";
        }
      });
    });
  });

  // Crowd Radio Chips
  crowdChips.forEach(chip => {
    chip.addEventListener('click', () => {
      crowdChips.forEach(c => {
        c.classList.remove('bg-surface-container');
        c.classList.add('bg-surface-container-low');
        const title = c.querySelector('.font-ui');
        if (title) title.classList.remove('text-on-surface', 'font-medium');
      });
      chip.classList.remove('bg-surface-container-low');
      chip.classList.add('bg-surface-container');
      const activeTitle = chip.querySelector('.font-ui');
      if (activeTitle) activeTitle.classList.add('text-on-surface', 'font-medium');
    });
  });

  // Audio Radio Pills
  audioPills.forEach(pill => {
    pill.addEventListener('click', () => {
      audioPills.forEach(p => {
        p.classList.remove('bg-surface-container');
        p.classList.add('bg-surface-container-low');
        const title = p.querySelector('.font-ui');
        if (title) title.classList.remove('text-on-surface', 'font-medium');
      });
      pill.classList.remove('bg-surface-container-low');
      pill.classList.add('bg-surface-container');
      const activeTitle = pill.querySelector('.font-ui');
      if (activeTitle) activeTitle.classList.add('text-on-surface', 'font-medium');
    });
  });

  // Form Submission Handler
  window.handleFeedbackSubmit = function () {
    const monument = getMonument(state.currentMonumentId);
    const city = monument.city.en.split(',')[0].replace(/\s+/g, '').toUpperCase();
    const hash = `#ASI-${city}-${Math.floor(1000 + Math.random() * 9000)}`;

    toastHashText.textContent = `Hash ${hash} created. Thank you for protecting peers!`;
    successToast.classList.remove('hidden');

    setTimeout(() => {
      successToast.classList.add('hidden');
    }, 4500);

    // Reset textarea
    const narrative = document.getElementById('tout-narrative');
    const veh = document.getElementById('vehicle-reg');
    const flag = document.getElementById('police-flag');
    if (narrative) narrative.value = '';
    if (veh) veh.value = '';
    if (flag) flag.checked = false;
  };

  // ========================================================================
  // AI Multi-Day Tour Planner Modal
  // ========================================================================
  function generateItinerary(days, pace) {
    const list = MONUMENTS_DATA.slice(0, Math.min(days * 2, MONUMENTS_DATA.length));
    let html = '';

    for (let d = 1; d <= days; d++) {
      const m1 = list[(d - 1) * 2 % list.length];
      const m2 = list[((d - 1) * 2 + 1) % list.length];

      html += `
        <div class="p-2.5 rounded-lg bg-surface-container-low border border-hairline/60 flex flex-col gap-1">
          <div class="flex items-center justify-between">
            <span class="font-eyebrow text-eyebrow text-tertiary font-bold uppercase">Day ${d}</span>
            <span class="font-caption text-[11px] text-forest">8:00 AM – 11:00 AM Window</span>
          </div>
          <span class="font-ui text-[13px] font-semibold text-on-surface">🏛️ ${m1.name[state.lang]}</span>
          <span class="font-caption text-[11px] text-secondary">Optimal sunrise entry · Crowd < 30%</span>
          ${pace === 'express' ? `
            <div class="pt-1 mt-1 border-t border-hairline/40">
              <span class="font-ui text-[13px] font-semibold text-on-surface">🌿 ${m2 ? m2.name[state.lang] : 'Sister Gem'}</span>
              <span class="font-caption text-[11px] text-secondary">Afternoon de-densification stop</span>
            </div>
          ` : `
            <span class="font-caption text-[11px] text-tertiary">🌿 Sunset Alternative: ${m1.sisterGem.name[state.lang]}</span>
          `}
        </div>
      `;
    }

    plannerResults.innerHTML = html;
  }

  if (openPlannerBtn && plannerModal && closeModalBtn) {
    openPlannerBtn.addEventListener('click', () => {
      plannerModal.classList.remove('hidden');
      plannerModal.classList.add('flex');
      generateItinerary(state.plannerDays, state.plannerPace);
    });

    closeModalBtn.addEventListener('click', () => {
      plannerModal.classList.add('hidden');
      plannerModal.classList.remove('flex');
    });

    plannerModal.addEventListener('click', (e) => {
      if (e.target === plannerModal) {
        plannerModal.classList.add('hidden');
        plannerModal.classList.remove('flex');
      }
    });
  }

  plannerDayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      plannerDayBtns.forEach(b => {
        b.className = 'planner-day-btn py-1.5 rounded-lg bg-surface-container text-caption font-ui font-medium text-secondary hover:text-on-surface';
      });
      btn.className = 'planner-day-btn py-1.5 rounded-lg bg-ink-band text-surface text-caption font-ui font-medium shadow-xs';
      state.plannerDays = parseInt(btn.getAttribute('data-days'), 10);
      generateItinerary(state.plannerDays, state.plannerPace);
    });
  });

  plannerPaceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      plannerPaceBtns.forEach(b => {
        b.className = 'planner-pace-btn p-2 rounded-lg bg-surface-container border border-hairline text-left flex flex-col';
        const span = b.querySelector('.font-ui');
        if (span) span.className = 'font-ui text-[12px] font-semibold text-secondary';
      });
      btn.className = 'planner-pace-btn p-2 rounded-lg bg-tertiary-fixed/40 border border-tertiary text-left flex flex-col';
      const activeSpan = btn.querySelector('.font-ui');
      if (activeSpan) activeSpan.className = 'font-ui text-[12px] font-semibold text-tertiary';
      state.plannerPace = btn.getAttribute('data-pace');
      generateItinerary(state.plannerDays, state.plannerPace);
    });
  });

  if (confirmPlanBtn) {
    confirmPlanBtn.addEventListener('click', () => {
      confirmPlanBtn.innerHTML = '<span>Compiling Itinerary...</span>';
      setTimeout(() => {
        confirmPlanBtn.innerHTML = '<span>Itinerary Ready · Open in Dossier</span>';
        setTimeout(() => {
          plannerModal.classList.add('hidden');
          plannerModal.classList.remove('flex');
          confirmPlanBtn.innerHTML = '<span>Generate Archival Itinerary</span><span class="material-symbols-outlined text-[18px]">auto_awesome</span>';
        }, 800);
      }, 900);
    });
  }

  // ========================================================================
  // Global Search Engine with Autocomplete
  // ========================================================================
  if (globalSearchInput && searchDropdown && clearSearchBtn) {
    globalSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        searchDropdown.classList.add('hidden');
        clearSearchBtn.classList.add('hidden');
        return;
      }

      clearSearchBtn.classList.remove('hidden');

      const matches = MONUMENTS_DATA.filter(m => {
        const nameEn = m.name.en.toLowerCase();
        const nameHi = m.name.hi.toLowerCase();
        const cityEn = m.city.en.toLowerCase();
        const cityHi = m.city.hi.toLowerCase();
        return nameEn.includes(q) || nameHi.includes(q) || cityEn.includes(q) || cityHi.includes(q);
      });

      if (matches.length === 0) {
        searchDropdown.innerHTML = `<div class="p-3 text-center text-secondary text-[12px]">${state.lang === 'hi' ? 'कोई स्मारक नहीं मिला' : 'No monuments found'}</div>`;
        searchDropdown.classList.remove('hidden');
        return;
      }

      let html = '';
      matches.slice(0, 5).forEach(m => {
        html += `
          <div class="flex items-center gap-2 p-2 hover:bg-surface-container rounded-lg cursor-pointer transition-colors" data-search-id="${m.id}">
            <img class="w-8 h-8 rounded object-cover" src="${m.images && m.images[0] ? m.images[0].url : ''}" alt="${m.name[state.lang]}"/>
            <div class="flex flex-col min-w-0 flex-1">
              <span class="font-ui text-[12px] font-semibold text-on-surface truncate">${m.name[state.lang]}</span>
              <span class="font-caption text-[10px] text-secondary truncate">${m.city[state.lang]}</span>
            </div>
            <span class="text-[10px] text-forest font-semibold shrink-0">Open</span>
          </div>
        `;
      });

      searchDropdown.innerHTML = html;
      searchDropdown.classList.remove('hidden');

      // Bind result clicks
      searchDropdown.querySelectorAll('[data-search-id]').forEach(el => {
        el.addEventListener('click', () => {
          const mId = el.getAttribute('data-search-id');
          selectMonument(mId);
          switchTab('monuments');
          searchDropdown.classList.add('hidden');
          globalSearchInput.value = '';
          clearSearchBtn.classList.add('hidden');
        });
      });
    });

    clearSearchBtn.addEventListener('click', () => {
      globalSearchInput.value = '';
      searchDropdown.classList.add('hidden');
      clearSearchBtn.classList.add('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!globalSearchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.add('hidden');
      }
    });
  }

  // ========================================================================
  // Geolocation & Distance Calculation Engine (Haversine Formula)
  // ========================================================================
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  if (detectGpsBtn) {
    detectGpsBtn.addEventListener('click', () => {
      const gpsLabel = document.getElementById('gps-label');
      const gpsIcon = document.getElementById('gps-icon');

      gpsLabel.textContent = 'Scanning...';
      gpsIcon.classList.add('animate-spin');

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const uLat = pos.coords.latitude;
            const uLon = pos.coords.longitude;

            // Find closest monument
            let closest = MONUMENTS_DATA[0];
            let minDist = Infinity;

            MONUMENTS_DATA.forEach(m => {
              const d = calculateDistance(uLat, uLon, m.coords.lat, m.coords.lon);
              if (d < minDist) {
                minDist = d;
                closest = m;
              }
            });

            currentLocationText.textContent = `${closest.name[state.lang]} (${minDist.toFixed(1)} km) · ${uLat.toFixed(4)}° N`;
            gpsIcon.classList.remove('animate-spin');
            gpsLabel.textContent = 'Locked';

            selectMonument(closest.id);

            setTimeout(() => {
              gpsLabel.textContent = UI_TEXT[state.lang].nearMe;
            }, 3000);
          },
          () => {
            // Permission denied or file:/// restriction fallback
            currentLocationText.textContent = `Agra Fort Corridor · 27.1795° N`;
            gpsIcon.classList.remove('animate-spin');
            gpsLabel.textContent = 'Agra Fixed';
            setTimeout(() => {
              gpsLabel.textContent = UI_TEXT[state.lang].nearMe;
            }, 3000);
          },
          { timeout: 4000 }
        );
      } else {
        gpsIcon.classList.remove('animate-spin');
        gpsLabel.textContent = 'Agra Fixed';
      }
    });
  }

  // ========================================================================
  // Bilingual (EN / HI) Language Engine
  // ========================================================================
  function setLanguage(lang) {
    state.lang = lang;
    const t = UI_TEXT[lang];

    // Toggle button styles
    if (lang === 'en') {
      langEnBtn.className = 'px-2 py-0.5 rounded-full text-on-surface font-ui text-[11px] font-semibold bg-surface shadow-xs transition-all';
      langHiBtn.className = 'px-2 py-0.5 rounded-full text-secondary font-ui text-[11px] font-medium transition-all hover:text-on-surface';
    } else {
      langHiBtn.className = 'px-2 py-0.5 rounded-full text-on-surface font-ui text-[11px] font-semibold bg-surface shadow-xs transition-all';
      langEnBtn.className = 'px-2 py-0.5 rounded-full text-secondary font-ui text-[11px] font-medium transition-all hover:text-on-surface';
    }

    // Translate Home UI
    const homeEyebrow = document.getElementById('home-eyebrow');
    const homeHeroTitle = document.getElementById('home-hero-title');
    const homeHeroSubtitle = document.getElementById('home-hero-subtitle');
    const gpsLabel = document.getElementById('gps-label');
    const plannerBtnText = document.getElementById('planner-btn-text');

    if (homeEyebrow) homeEyebrow.textContent = t.homeEyebrow;
    if (homeHeroTitle) homeHeroTitle.innerHTML = t.homeHeroTitle;
    if (homeHeroSubtitle) homeHeroSubtitle.textContent = t.homeHeroSub;
    if (gpsLabel) gpsLabel.textContent = t.nearMe;
    if (plannerBtnText) plannerBtnText.textContent = t.planBtn;

    // Translate Tab Dock Labels
    document.querySelector('[data-tab-label="home"]').textContent = lang === 'hi' ? 'होम' : 'Home';
    document.querySelector('[data-tab-label="monuments"]').textContent = lang === 'hi' ? 'स्मारक' : 'Monuments';
    document.querySelector('[data-tab-label="emergency"]').textContent = lang === 'hi' ? 'आपातकाल' : 'Emergency';
    document.querySelector('[data-tab-label="feedback"]').textContent = lang === 'hi' ? 'प्रतिक्रिया' : 'Feedback';

    // Re-render active view
    renderActiveMonument();
    calculateFares();
  }

  if (langEnBtn) langEnBtn.addEventListener('click', () => setLanguage('en'));
  if (langHiBtn) langHiBtn.addEventListener('click', () => setLanguage('hi'));

  // ========================================================================
  // Dark / Light Theme Engine
  // ========================================================================
  function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
      themeToggleIcon.textContent = 'dark_mode';
    } else {
      document.documentElement.classList.remove('dark');
      themeToggleIcon.textContent = 'light_mode';
    }
    try {
      localStorage.setItem('safarsaarthi_theme', state.theme);
    } catch (_) {}
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Restore Theme from localStorage
  try {
    const saved = localStorage.getItem('safarsaarthi_theme');
    if (saved === 'dark') toggleTheme();
  } catch (_) {}

  // ========================================================================
  // Viewport Switcher: Mobile Phone vs Desktop Broadsheet Mode
  // ========================================================================
  function setViewportMode(mode) {
    state.viewportMode = mode;
    if (mode === 'desktop') {
      document.body.classList.add('desktop-mode');
      if (viewportToggleIcon) viewportToggleIcon.textContent = 'smartphone';
      if (viewportToggleLabel) viewportToggleLabel.textContent = 'Mobile';
      if (viewportToggleBtn) viewportToggleBtn.setAttribute('title', 'Switch to Mobile View');
    } else {
      document.body.classList.remove('desktop-mode');
      if (viewportToggleIcon) viewportToggleIcon.textContent = 'desktop_windows';
      if (viewportToggleLabel) viewportToggleLabel.textContent = 'Desktop';
      if (viewportToggleBtn) viewportToggleBtn.setAttribute('title', 'Switch to Desktop View');
    }
    try {
      localStorage.setItem('safarsaarthi_viewport_mode', mode);
    } catch (_) {}
  }

  function toggleViewportMode() {
    const nextMode = state.viewportMode === 'mobile' ? 'desktop' : 'mobile';
    setViewportMode(nextMode);
  }

  if (viewportToggleBtn) {
    viewportToggleBtn.addEventListener('click', toggleViewportMode);
  }

  // Restore Viewport Mode from localStorage
  try {
    const savedViewport = localStorage.getItem('safarsaarthi_viewport_mode');
    if (savedViewport === 'desktop') {
      setViewportMode('desktop');
    } else {
      setViewportMode('mobile');
    }
  } catch (_) {
    setViewportMode('mobile');
  }

  // ========================================================================
  // Monument Selection Handler
  // ========================================================================
  function selectMonument(idOrShort) {
    const monument = getMonument(idOrShort);
    state.currentMonumentId = monument.id;
    state.currentStoryIdx = 0;

    if (state.isPlayingAudio) {
      pauseAudio();
    }

    renderActiveMonument();
  }

  // Bind Carousel Buttons
  monumentCarousel.querySelectorAll('button[data-monument]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-monument');
      selectMonument(targetId);
    });
  });

  // ========================================================================
  // Initialize Application on Page Load
  // ========================================================================
  function initApp() {
    renderActiveMonument();
    calculateFares();
    updateVoiceNarratorUI();

    // Check URL Hash for Deep Linking (#monuments, #emergency, #feedback)
    const hash = window.location.hash.replace('#', '');
    if (views[hash]) {
      switchTab(hash);
    } else {
      switchTab('home');
    }

    console.log("SafarSaarthi 2.0 initialized with 10 UNESCO flagship monuments.");
  }

  // Run upon DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();

