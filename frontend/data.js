// ==========================================================================
// SafarSaarthi (सफ़र सारथी) — Enriched Monument Dataset (data.js)
// 10 Flagship UNESCO Heritage Monuments with Stories, Hourly Footfall, Safety & Sister Gems
// ==========================================================================

const MONUMENTS = [
  {
    "id": "taj-mahal",
    "name": {
      "en": "Taj Mahal",
      "hi": "ताज महल"
    },
    "city": {
      "en": "Agra, Uttar Pradesh",
      "hi": "आगरा, उत्तर प्रदेश"
    },
    "era": {
      "en": "Built 1632–1653 CE · Mughal Era",
      "hi": "निर्माण 1632–1653 ईस्वी · मुग़ल काल"
    },
    "shortSummary": {
      "en": "An ivory-white Makrana marble mausoleum on the banks of the Yamuna River, celebrated for its symmetry and pietra dura floral inlays.",
      "hi": "यमुना नदी के तट पर स्थित मकराना के सफ़ेद संगमरमर का भव्य स्मारक, जो अपनी सममित वास्तुकला और पच्चीकारी के लिए प्रसिद्ध है।"
    },
    "svgIllustration": "\n      <svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Illustrated silhouette of Taj Mahal at sunrise\">\n        <defs>\n          <linearGradient id=\"sky-taj\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#0F2B5B\"/>\n            <stop offset=\"60%\" stop-color=\"#9A3412\"/>\n            <stop offset=\"100%\" stop-color=\"#FF9933\"/>\n          </linearGradient>\n        </defs>\n        <rect width=\"600\" height=\"320\" fill=\"url(#sky-taj)\"/>\n        <circle cx=\"300\" cy=\"150\" r=\"95\" fill=\"#FDE68A\" opacity=\"0.22\"/>\n        <!-- Left & Right Minarets -->\n        <rect x=\"95\" y=\"105\" width=\"14\" height=\"155\" fill=\"#FFFBEB\"/>\n        <circle cx=\"102\" cy=\"100\" r=\"9\" fill=\"#FFFBEB\"/>\n        <rect x=\"491\" y=\"105\" width=\"14\" height=\"155\" fill=\"#FFFBEB\"/>\n        <circle cx=\"498\" cy=\"100\" r=\"9\" fill=\"#FFFBEB\"/>\n        <!-- Inner Minarets -->\n        <rect x=\"150\" y=\"125\" width=\"11\" height=\"135\" fill=\"#FEF3C7\"/>\n        <rect x=\"439\" y=\"125\" width=\"11\" height=\"135\" fill=\"#FEF3C7\"/>\n        <!-- Main Mausoleum Base & Dome -->\n        <rect x=\"190\" y=\"155\" width=\"220\" height=\"105\" rx=\"4\" fill=\"#FFFFFF\"/>\n        <path d=\"M245 155 C245 95, 300 72, 300 55 C300 72, 355 95, 355 155 Z\" fill=\"#FFFFFF\"/>\n        <!-- Side Chhatri Domes -->\n        <path d=\"M205 155 C205 125, 225 115, 225 105 C225 115, 245 125, 245 155 Z\" fill=\"#FEF3C7\"/>\n        <path d=\"M355 155 C355 125, 375 115, 375 105 C375 115, 395 125, 395 155 Z\" fill=\"#FEF3C7\"/>\n        <!-- Central Archway (Iwan) -->\n        <path d=\"M270 260 L270 190 C270 172, 330 172, 330 190 L330 260 Z\" fill=\"#0F2B5B\"/>\n        <path d=\"M212 260 L212 212 C212 202, 242 202, 242 212 L242 260 Z\" fill=\"#1E3A8A\"/>\n        <path d=\"M358 260 L358 212 C358 202, 388 202, 388 212 L388 260 Z\" fill=\"#1E3A8A\"/>\n        <!-- Finial -->\n        <line x1=\"300\" y1=\"38\" x2=\"300\" y2=\"56\" stroke=\"#FF9933\" stroke-width=\"3\"/>\n        <!-- Yamuna Reflection Base -->\n        <rect x=\"0\" y=\"260\" width=\"600\" height=\"60\" fill=\"#0A1D3D\"/>\n        <rect x=\"255\" y=\"268\" width=\"90\" height=\"4\" rx=\"2\" fill=\"#FF9933\" opacity=\"0.6\"/>\n        <rect x=\"270\" y=\"280\" width=\"60\" height=\"3\" rx=\"1.5\" fill=\"#FFFBEB\" opacity=\"0.4\"/>\n      </svg>\n    ",
    "stories": [
      {
        "id": "taj-1",
        "readTime": "1 min listen",
        "title": {
          "en": "01. The Changing Colours of Makrana Marble",
          "hi": "01. मकराना संगमरमर के बदलते रंग"
        },
        "standard": {
          "en": "Quarried over 300 kilometres away in Makrana, Rajasthan, the translucent white marble of the Taj Mahal reacts dynamically to atmospheric light. It appears soft rose at sunrise, dazzling white under the midday sun, and warm golden-bronze as twilight settles over the Yamuna.",
          "hi": "राजस्थान के मकराना से 300 किलोमीटर दूर से लाया गया यह अर्ध-पारदर्शी सफ़ेद संगमरमर सूरज की रोशनी के साथ अपना रंग बदलता हुआ प्रतीत होता है। सूर्योदय के समय यह हल्का गुलाबी, दोपहर में चमकदार सफ़ेद और शाम के समय सुनहरा दिखाई देता है।"
        },
        "kids": {
          "en": "Did you know the Taj Mahal is like a giant mood ring? Even though it is made of white stone, it looks pink when the sun wakes up, bright white at lunchtime, and golden yellow at bedtime!",
          "hi": "क्या आप जानते हैं कि ताज महल जादुई पत्थर जैसा है? यह सुबह सूरज उगने पर गुलाबी दिखता है, दोपहर में बिल्कुल दूध जैसा सफ़ेद, और शाम को सोने जैसा पीला चमकता है!"
        }
      },
      {
        "id": "taj-2",
        "readTime": "1 min listen",
        "title": {
          "en": "02. Pietra Dura: Flowers Carved in Precious Stone",
          "hi": "02. पच्चीकारी: कीमती पत्थरों से बने फूल"
        },
        "standard": {
          "en": "Look closely at the marble walls and you will see delicate floral vines. These are not painted—artisans used a technique called Pietra Dura (Parchin Kari), slicing lapis lazuli, jade, turquoise, and carnelian into paper-thin petals and fitting up to 60 stones into a single flower.",
          "hi": "दीवारों को ध्यान से देखने पर आपको सुंदर फूल-पत्तियां दिखेंगी। इन्हें पेंट नहीं किया गया है—कारीगरों ने 'परचिन कारी' तकनीक से लाजवर्द, जेड, फ़िरोज़ा और अकीक जैसे कीमती पत्थरों को तराश कर एक-एक फूल में 60 तक टुकड़े जड़े हैं।"
        },
        "kids": {
          "en": "None of the pretty flowers on the walls are painted with a brush! Master artists cut tiny pieces of sparkly gems—like blue turquoise and red stones—and fitted them together like a jigsaw puzzle inside the marble.",
          "hi": "दीवारों पर बने सुंदर फूल किसी ब्रश या रंग से नहीं बनाए गए हैं! कलाकारों ने रंग-बिरंगे चमकीले रत्नों के छोटे-छोटे टुकड़े काटकर पहेली (जिगसॉ पज़ल) की तरह पत्थर के अंदर जड़े हैं।"
        }
      },
      {
        "id": "taj-3",
        "readTime": "1 min listen",
        "title": {
          "en": "03. The Clever Tilt of the Four Minarets",
          "hi": "03. चारों मीनारों का समझदारी भरा झुकाव"
        },
        "standard": {
          "en": "The four 40-metre towers framing the mausoleum are not standing perfectly straight. Seventeenth-century engineers intentionally built each minaret with a slight outward tilt so that, in the event of a major earthquake, the towers would fall away from the central tomb rather than onto it.",
          "hi": "मुख्य गुंबद के चारों ओर खड़ी 40 मीटर ऊंची मीनारें एकदम सीधी नहीं हैं। 17वीं सदी के इंजीनियरों ने इन्हें जानबूझकर बाहर की तरफ हल्का सा झुकाकर बनाया था, ताकि भूकंप आने पर ये मुख्य गुंबद पर न गिरकर बाहर की ओर गिरें।"
        },
        "kids": {
          "en": "The four tall towers at the corners have a secret superpower! The builders leaned them slightly outward on purpose so if the ground ever shakes, they will never fall on top of the main dome.",
          "hi": "कोनों पर खड़ी चारों ऊंची मीनारों में एक अनोखा राज़ छिपा है! इन्हें बनाने वालों ने इन्हें थोड़ा बाहर की तरफ झुकाकर बनाया, ताकि अगर कभी धरती हिले तो ये मुख्य भवन के ऊपर न गिरें।"
        }
      },
      {
        "id": "taj-4",
        "readTime": "1 min listen",
        "title": {
          "en": "04. The Optical Trick of the Royal Gate",
          "hi": "04. शाही दरवाज़े का अनोखा दृष्टि भ्रम"
        },
        "standard": {
          "en": "As you first step into the grand red sandstone Darwaza-i-Rauza (Great Gate), the Taj Mahal appears huge and right in front of you. Yet as you walk closer toward it along the framed archway, the monument seems to shrink—a deliberate perspective illusion created by the gate's proportions.",
          "hi": "जब आप लाल बलुआ पत्थर से बने मुख्य दरवाज़े (दरवाज़ा-ए-रौज़ा) में प्रवेश करते हैं, तो ताज महल बहुत बड़ा और पास दिखाई देता है। लेकिन जैसे-जैसे आप इसके करीब चलते हैं, यह छोटा होता प्रतीत होता है—यह मेहराब के अनुपात का कमाल है।"
        },
        "kids": {
          "en": "Try this fun eye trick at the main gate! When you stand far back inside the big red arch, the Taj Mahal looks giant. As you walk forward toward it, it actually looks like it is getting smaller!",
          "hi": "मुख्य लाल दरवाज़े पर अपनी आंखों का यह मज़ेदार खेल ज़रूर देखें! जब आप दरवाज़े में दूर खड़े होते हैं तो ताज महल बहुत विशाल दिखता है, और जैसे-जैसे पास जाते हैं, वह छोटा दिखने लगता है!"
        }
      }
    ],
    "crowdByHour": [
      {
        "hour": "8 AM",
        "level": 35,
        "status": "Low",
        "pct": 35
      },
      {
        "hour": "9 AM",
        "level": 58,
        "status": "Moderate",
        "pct": 58
      },
      {
        "hour": "10 AM",
        "level": 82,
        "status": "High",
        "pct": 82
      },
      {
        "hour": "11 AM",
        "level": 92,
        "status": "Peak",
        "pct": 92
      },
      {
        "hour": "12 PM",
        "level": 74,
        "status": "High",
        "pct": 74
      },
      {
        "hour": "1 PM",
        "level": 62,
        "status": "Moderate",
        "pct": 62
      },
      {
        "hour": "2 PM",
        "level": 55,
        "status": "Moderate",
        "pct": 55
      },
      {
        "hour": "3 PM",
        "level": 68,
        "status": "Moderate",
        "pct": 68
      },
      {
        "hour": "4 PM",
        "level": 88,
        "status": "Peak",
        "pct": 88
      },
      {
        "hour": "5 PM",
        "level": 95,
        "status": "Peak",
        "pct": 95
      },
      {
        "hour": "6 PM",
        "level": 40,
        "status": "Low",
        "pct": 40
      }
    ],
    "nearbyGem": {
      "name": {
        "en": "Tomb of Itimad-ud-Daulah (Baby Taj)",
        "hi": "एतमादुद्दौला का मक़बरा (बेबी ताज)"
      },
      "distance": {
        "en": "5.2 km across the Yamuna · ~15 min drive",
        "hi": "यमुना पार 5.2 किमी दूर · लगभग 15 मिनट का रास्ता"
      },
      "description": {
        "en": "Often called the 'Jewel Box' or Baby Taj, this serene riverside marble mausoleum was the very first Mughal structure built completely of white marble with intricate lattice screens—with a fraction of the crowds.",
        "hi": "'ज्वेल बॉक्स' या बेबी ताज के नाम से प्रसिद्ध यह शांत मक़बरा पूर्णतः सफ़ेद संगमरमर और बारीक जाली के काम से बना पहला मुग़ल स्मारक है, जहां भीड़ बहुत कम रहती है।"
      },
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tomb+of+Itimad-ud-Daulah+Agra"
    },
    "safety": {
      "police": {
        "en": "Tajganj Tourist Police Station (450 m from West Gate, Shilpgram Road)",
        "hi": "ताजगंज पर्यटक पुलिस स्टेशन (पश्चिमी गेट से 450 मीटर, शिल्पग्राम रोड)"
      },
      "hospital": {
        "en": "S.N. Medical College & Emergency Hospital, Mantola, Agra (4.2 km)",
        "hi": "एस.एन. मेडिकल कॉलेज और आपातकालीन अस्पताल, मंटोला, आगरा (4.2 किमी)"
      },
      "checklist": {
        "en": [
          "Carry original government photo ID (Passport / Aadhaar) matching your ticket.",
          "Collect shoe covers (overshoes) at the turnstile before ascending the main marble mausoleum.",
          "Leave drones, tripods, power banks, earphones, eatables, and tobacco in the cloakroom.",
          "Note that the Taj Mahal remains closed to visitors every Friday for afternoon prayers."
        ],
        "hi": [
          "टिकट के साथ अपना मूल सरकारी फोटो पहचान पत्र (आधार / पासपोर्ट) अवश्य साथ रखें।",
          "मुख्य संगमरमर के चबूतरे पर जाने से पहले शू-कवर (जूतों के कवर) ज़रूर पहनें।",
          "ड्रोन, ट्राइपॉड, पावर बैंक, ईयरफ़ोन, खाने का सामान और तंबाकू क्लोकरूम में जमा करें।",
          "ध्यान रहे कि ताज महल हर शुक्रवार को पर्यटकों के लिए बंद रहता है।"
        ]
      }
    },
    "fares": [
      {
        "route": {
          "en": "Agra Cantt Railway Station → Taj Mahal",
          "hi": "आगरा कैंट रेलवे स्टेशन → ताज महल"
        },
        "mode": {
          "en": "Prepaid Auto / E-Rickshaw",
          "hi": "प्रीपेड ऑटो / ई-रिक्शा"
        },
        "distance": "6.5 km",
        "fairRange": "₹120 – ₹160"
      },
      {
        "route": {
          "en": "Agra Cantt Railway Station → Taj Mahal",
          "hi": "आगरा कैंट रेलवे स्टेशन → ताज महल"
        },
        "mode": {
          "en": "AC App Cab / Hatch Taxi",
          "hi": "एसी कैब / टैक्सी"
        },
        "distance": "6.5 km",
        "fairRange": "₹220 – ₹280"
      },
      {
        "route": {
          "en": "Shilpgram Parking → East Gate Entry",
          "hi": "शिल्पग्राम पार्किंग → पूर्वी गेट प्रवेश"
        },
        "mode": {
          "en": "ADA Battery Golf Cart (Per Seat)",
          "hi": "बैटरी गोल्फ़ कार्ट (प्रति व्यक्ति)"
        },
        "distance": "1.0 km",
        "fairRange": "₹20 – ₹30"
      },
      {
        "route": {
          "en": "Taj Mahal → Agra Fort",
          "hi": "ताज महल → आगरा क़िला"
        },
        "mode": {
          "en": "Auto-Rickshaw",
          "hi": "ऑटो-रिक्शा"
        },
        "distance": "2.8 km",
        "fairRange": "₹70 – ₹100"
      }
    ],
    "coords": {
      "lat": 27.1751,
      "lon": 78.0421
    },
    "lat": 27.1751,
    "lon": 78.0421,
    "images": [
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg",
        "title": "Front View with Reflecting Pool",
        "caption": {
          "en": "The iconic white marble dome and four minarets reflected across the charbagh watercourse at sunrise.",
          "hi": "सूर्योदय के समय चारबाग जलधारा में परिलक्षित ताज महल का भव्य मुख्य गुंबद और चार मीनारें।"
        },
        "credit": "Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        "url": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
        "title": "Pietra Dura & Marble Archways",
        "caption": {
          "en": "Intricate floral inlays crafted from precious jasper, jade, and lapis lazuli embedded in white marble.",
          "hi": "सफ़ेद संगमरमर में जड़े कीमती पत्थरों और पच्चीकारी की नक्काशीदार मेहराबें।"
        },
        "credit": "Unsplash"
      },
      {
        "url": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "title": "Sunset Across Yamuna River",
        "caption": {
          "en": "Golden hour reflection of the Taj Mahal viewed from Mehtab Bagh across the tranquil Yamuna river.",
          "hi": "मेहताब बाग से यमुना नदी के पार सुनहरी शाम में ताज महल का मनोरम दृश्य।"
        },
        "credit": "Unsplash"
      }
    ],
    "shortId": "taj",
    "secretFact": {
      "title": {
        "en": "Antiseismic Architecture",
        "hi": "भूकंपरोधी वास्तुकला"
      },
      "en": "The four minarets are angled slightly outwards by precisely 3 degrees so that in the event of a catastrophic earthquake, they fall away from the sacred central dome rather than crushing it.",
      "hi": "चारों मीनारें बाहर की ओर ठीक 3 डिग्री झुकी हुई हैं ताकि किसी भीषण भूकंप की स्थिति में वे मुख्य गुंबद पर न गिरकर बाहर की तरफ गिरें।"
    },
    "sisterGem": {
      "name": {
        "en": "Mehtab Bagh",
        "hi": "मेहताब बाग"
      },
      "tagline": {
        "en": "The Moonlight Garden across the Yamuna River",
        "hi": "यमुना नदी के पार चांदनी बाग"
      },
      "distance": "1.8 km away",
      "crowd": "18%",
      "wait": "0 min",
      "highlight": "Sunset Prime Reflection",
      "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=Mehtab+Bagh+Agra"
    }
  },
  {
    "id": "hawa-mahal",
    "name": {
      "en": "Hawa Mahal",
      "hi": "हवा महल"
    },
    "city": {
      "en": "Jaipur, Rajasthan",
      "hi": "जयपुर, राजस्थान"
    },
    "era": {
      "en": "Built 1799 CE · Kachwaha Rajput",
      "hi": "निर्माण 1799 ईस्वी · कछवाहा राजपूत"
    },
    "shortSummary": {
      "en": "Jaipur's five-storey 'Palace of Winds' crafted from pink and red sandstone with 953 honeycomb lattice windows that create natural air conditioning.",
      "hi": "जयपुर का पांच मंज़िला 'पैलेस ऑफ़ विंड्स', जिसमें 953 नक्काशीदार झरोखे हैं जो बिना बिजली के ठंडी हवा का प्रवाह बनाए रखते हैं।"
    },
    "svgIllustration": "\n      <svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Illustrated facade of Hawa Mahal Jaipur\">\n        <defs>\n          <linearGradient id=\"sky-hawa\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#0F2B5B\"/>\n            <stop offset=\"100%\" stop-color=\"#D97706\"/>\n          </linearGradient>\n        </defs>\n        <rect width=\"600\" height=\"320\" fill=\"url(#sky-hawa)\"/>\n        <!-- Pyramid 5-Storey Crown Structure -->\n        <rect x=\"130\" y=\"215\" width=\"340\" height=\"90\" fill=\"#E15B48\"/>\n        <rect x=\"160\" y=\"165\" width=\"280\" height=\"52\" fill=\"#EC6B56\"/>\n        <rect x=\"195\" y=\"120\" width=\"210\" height=\"47\" fill=\"#F27D68\"/>\n        <rect x=\"230\" y=\"80\" width=\"140\" height=\"42\" fill=\"#F78E79\"/>\n        <path d=\"M265 80 C265 45, 300 35, 300 30 C300 35, 335 45, 335 80 Z\" fill=\"#FF9933\"/>\n        <!-- Honeycomb Jharokha Windows Pattern -->\n        <g fill=\"#FFFBEB\" opacity=\"0.88\">\n          <rect x=\"285\" y=\"55\" width=\"30\" height=\"18\" rx=\"9\"/>\n          <rect x=\"245\" y=\"92\" width=\"22\" height=\"20\" rx=\"6\"/>\n          <rect x=\"289\" y=\"92\" width=\"22\" height=\"20\" rx=\"6\"/>\n          <rect x=\"333\" y=\"92\" width=\"22\" height=\"20\" rx=\"6\"/>\n          <rect x=\"210\" y=\"132\" width=\"22\" height=\"22\" rx=\"6\"/>\n          <rect x=\"250\" y=\"132\" width=\"22\" height=\"22\" rx=\"6\"/>\n          <rect x=\"289\" y=\"132\" width=\"22\" height=\"22\" rx=\"6\"/>\n          <rect x=\"328\" y=\"132\" width=\"22\" height=\"22\" rx=\"6\"/>\n          <rect x=\"368\" y=\"132\" width=\"22\" height=\"22\" rx=\"6\"/>\n          <rect x=\"178\" y=\"178\" width=\"22\" height=\"24\" rx=\"6\"/>\n          <rect x=\"218\" y=\"178\" width=\"22\" height=\"24\" rx=\"6\"/>\n          <rect x=\"258\" y=\"178\" width=\"22\" height=\"24\" rx=\"6\"/>\n          <rect x=\"298\" y=\"178\" width=\"22\" height=\"24\" rx=\"6\"/>\n          <rect x=\"338\" y=\"178\" width=\"22\" height=\"24\" rx=\"6\"/>\n          <rect x=\"378\" y=\"178\" width=\"22\" height=\"24\" rx=\"6\"/>\n          <rect x=\"405\" y=\"178\" width=\"20\" height=\"24\" rx=\"6\"/>\n        </g>\n        <rect x=\"0\" y=\"285\" width=\"600\" height=\"35\" fill=\"#0F2B5B\"/>\n      </svg>\n    ",
    "stories": [
      {
        "id": "hawa-1",
        "readTime": "1 min listen",
        "title": {
          "en": "01. 953 Windows and the Venturi Breeze",
          "hi": "01. 953 झरोखे और प्राकृतिक ठंडी हवा"
        },
        "standard": {
          "en": "Designed by architect Lal Chand Ustad in 1799, Hawa Mahal features 953 tiny carved windows called jharokhas. Using the physics of the Venturi effect, warm desert air accelerates as it passes through the narrow lattice openings, cooling the interior chambers even in peak Rajasthan summers.",
          "hi": "1799 में वास्तुकार लाल चंद उस्ताद द्वारा डिज़ाइन किए गए हवा महल में 953 छोटे नक्काशीदार झरोखे हैं। वेंचुरी प्रभाव (Venturi Effect) के कारण जब गर्म रेगिस्तानी हवा इन बारीक जालियों से गुज़रती है, तो वह ठंडी हो जाती है।"
        },
        "kids": {
          "en": "Count the windows if you can—there are 953 of them! Even on super hot desert days, these tiny windows squeeze the wind just like blowing air through pursed lips, turning hot breeze into natural air conditioning.",
          "hi": "क्या आप इसकी खिड़कियां गिन सकते हैं? इसमें कुल 953 छोटी खिड़कियां हैं! भयंकर गर्मी में भी जब हवा इन छोटी जालियों से होकर आती है, तो वह अपने-आप ठंडी हो जाती है—बिल्कुल बिना बिजली के एसी की तरह!"
        }
      },
      {
        "id": "hawa-2",
        "readTime": "1 min listen",
        "title": {
          "en": "02. Shaped Like Lord Krishna's Crown",
          "hi": "02. भगवान श्रीकृष्ण के मुकुट जैसा आकार"
        },
        "standard": {
          "en": "Maharaja Sawai Pratap Singh was a devoted follower of Lord Krishna and a poet himself. He instructed the royal architect to shape the five-storey street facade like the ornate jewel-studded crown (mukut) of Krishna rising above the bustling Sireh Deori Bazaar.",
          "hi": "महाराजा सवाई प्रताप सिंह भगवान श्रीकृष्ण के अनन्य भक्त और स्वयं एक कवि थे। उन्होंने वास्तुकार को निर्देश दिया था कि इस पांच मंज़िला इमारत का बाहरी हिस्सा श्रीकृष्ण के राजमुकुट के आकार का बनाया जाए।"
        },
        "kids": {
          "en": "Step across the street and look at the whole building from top to bottom. Notice how it curves up to a point? The King loved Lord Krishna so much that he asked his builders to shape the palace like Krishna's royal crown!",
          "hi": "सड़क के उस पार से इस पूरी इमारत को ऊपर से नीचे तक देखिए। राजा को भगवान श्रीकृष्ण से इतना लगाव था कि उन्होंने इस महल को बिल्कुल श्रीकृष्ण के सुंदर मुकुट के आकार में बनवाया!"
        }
      },
      {
        "id": "hawa-3",
        "readTime": "1 min listen",
        "title": {
          "en": "03. The Tallest Building Without a Deep Foundation",
          "hi": "03. बिना गहरी नींव की पांच मंज़िला इमारत"
        },
        "standard": {
          "en": "At 15 metres (50 feet) tall, Hawa Mahal is considered one of the tallest historical buildings in the world erected without a conventional deep foundation. It stays upright thanks to its curved semi-octagonal profile and an 87-degree backward lean that balances its narrow walls.",
          "hi": "50 फीट ऊंचा हवा महल बिना किसी पारंपरिक गहरी नींव के खड़ी दुनिया की सबसे ऊंची ऐतिहासिक इमारतों में से एक है। इसका घुमावदार आकार और 87 डिग्री का झुकाव इसकी पतली दीवारों को मज़बूती से संतुलित रखता है।"
        },
        "kids": {
          "en": "Most tall buildings have deep roots underground, and they have stairs inside. Hawa Mahal has neither! It balances because it curves like a honeycomb, and instead of stairs, you walk up sloped ramps!",
          "hi": "ज़्यादातर ऊंची इमारतों की ज़मीन के नीचे गहरी नींव होती है और अंदर सीढ़ियां होती हैं। हवा महल में दोनों नहीं हैं! यह अपने घुमावदार आकार से टिका है और ऊपर जाने के लिए सीढ़ियों की जगह ढलान वाले रास्ते (रैंप) बने हैं!"
        }
      }
    ],
    "crowdByHour": [
      {
        "hour": "8 AM",
        "level": 28,
        "status": "Low",
        "pct": 28
      },
      {
        "hour": "9 AM",
        "level": 48,
        "status": "Moderate",
        "pct": 48
      },
      {
        "hour": "10 AM",
        "level": 76,
        "status": "High",
        "pct": 76
      },
      {
        "hour": "11 AM",
        "level": 88,
        "status": "Peak",
        "pct": 88
      },
      {
        "hour": "12 PM",
        "level": 72,
        "status": "High",
        "pct": 72
      },
      {
        "hour": "1 PM",
        "level": 54,
        "status": "Moderate",
        "pct": 54
      },
      {
        "hour": "2 PM",
        "level": 50,
        "status": "Moderate",
        "pct": 50
      },
      {
        "hour": "3 PM",
        "level": 64,
        "status": "Moderate",
        "pct": 64
      },
      {
        "hour": "4 PM",
        "level": 81,
        "status": "High",
        "pct": 81
      },
      {
        "hour": "5 PM",
        "level": 90,
        "status": "Peak",
        "pct": 90
      },
      {
        "hour": "6 PM",
        "level": 38,
        "status": "Low",
        "pct": 38
      }
    ],
    "nearbyGem": {
      "name": {
        "en": "Panna Meena Ka Kund Stepwell",
        "hi": "पन्ना मीना का कुंड (प्राचीन बावड़ी)"
      },
      "distance": {
        "en": "7.8 km towards Amer · ~18 min drive",
        "hi": "आमेर की ओर 7.8 किमी · लगभग 18 मिनट का रास्ता"
      },
      "description": {
        "en": "An eight-storey 16th-century geometric stepwell with criss-crossing symmetrical staircases and octagonal gazebos where locals once gathered for cool water and conversation.",
        "hi": "16वीं सदी की आठ मंज़िला ज्यामितीय बावड़ी, जिसकी सममित सीढ़ियां और शांत वातावरण भीड़-भाड़ से दूर एक अद्भुत अनुभव देते हैं।"
      },
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Panna+Meena+Ka+Kund+Jaipur"
    },
    "safety": {
      "police": {
        "en": "Manak Chowk Police Station, Badi Chaupar (200 m from Hawa Mahal Gate)",
        "hi": "माणक चौक पुलिस स्टेशन, बड़ी चौपड़ (हवा महल गेट से 200 मीटर)"
      },
      "hospital": {
        "en": "SMS (Sawai Man Singh) Government Hospital, JLN Marg, Jaipur (3.1 km)",
        "hi": "एसएमएस (सवाई मान सिंह) अस्पताल, जेएलएन मार्ग, जयपुर (3.1 किमी)"
      },
      "checklist": {
        "en": [
          "Enter from the rear courtyard through Tripolia Bazaar (the front street facade has no entry door).",
          "Wear grippy footwear for climbing the steep stone ramps between the five levels.",
          "Visit between 8:30 AM and 9:30 AM when morning sunlight streams through the stained-glass windows.",
          "Carry a water bottle and sun hat; upper terraces are open to the sun."
        ],
        "hi": [
          "प्रवेश पीछे की तरफ त्रिपोलिया बाज़ार वाले रास्ते से होता है (सामने की सड़क से दरवाज़ा नहीं है)।",
          "ऊपरी मंज़िलों के ढलान वाले रैंप पर चलने के लिए आरामदायक और ग्रिप वाले जूते पहनें।",
          "सुबह 8:30 से 9:30 बजे के बीच आएं जब रंगीन कांच की खिड़कियों से सुनहरी धूप अंदर आती है।",
          "साथ में पानी की बोतल और टोपी रखें; ऊपरी छतें खुली हैं।"
        ]
      }
    },
    "fares": [
      {
        "route": {
          "en": "Jaipur Junction Railway Station → Hawa Mahal",
          "hi": "जयपुर जंक्शन रेलवे स्टेशन → हवा महल"
        },
        "mode": {
          "en": "Auto-Rickshaw",
          "hi": "ऑटो-रिक्शा"
        },
        "distance": "5.2 km",
        "fairRange": "₹100 – ₹130"
      },
      {
        "route": {
          "en": "Sindhi Camp Bus Stand → Badi Chaupar (Hawa Mahal)",
          "hi": "सिंधी कैंप बस स्टैंड → बड़ी चौपड़ (हवा महल)"
        },
        "mode": {
          "en": "Jaipur Metro (Pink Line)",
          "hi": "जयपुर मेट्रो (पिंक लाइन)"
        },
        "distance": "3.4 km",
        "fairRange": "₹12 – ₹18"
      },
      {
        "route": {
          "en": "Badi Chaupar → Amer Fort",
          "hi": "बड़ी चौपड़ → आमेर क़िला"
        },
        "mode": {
          "en": "Auto-Rickshaw / Cab",
          "hi": "ऑटो-रिक्शा / कैब"
        },
        "distance": "8.5 km",
        "fairRange": "₹160 – ₹240"
      },
      {
        "route": {
          "en": "Walled Pink City Heritage Loop",
          "hi": "पिंक सिटी हेरिटेज बाज़ार राउंड"
        },
        "mode": {
          "en": "Pink E-Rickshaw (Shared / Private)",
          "hi": "पिंक ई-रिक्शा"
        },
        "distance": "2.0 km",
        "fairRange": "₹40 – ₹80"
      }
    ],
    "coords": {
      "lat": 26.9239,
      "lon": 75.8267
    },
    "lat": 26.9239,
    "lon": 75.8267,
    "images": [
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
        "title": "Honeycomb Facade & 953 Jharokhas",
        "caption": {
          "en": "Five-storey pink sandstone facade shaped like Lord Krishna's crown with 953 filigree lattice windows.",
          "hi": "भगवान कृष्ण के मुकुट जैसी 5 मंजिला गुलाबी बलुआ पत्थर की इमारत जिसमें 953 बारीक झरोखे हैं।"
        },
        "credit": "Wikimedia Commons"
      },
      {
        "url": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
        "title": "Pink City Street Panorama",
        "caption": {
          "en": "View from the bustling Badi Chaupar street showing the unique pyramidal lattice structure.",
          "hi": "बड़ी चौपड़ बाज़ार से हवा महल की प्रसिद्ध पिरामिड जैसी जालीदार वास्तुकला।"
        },
        "credit": "Unsplash"
      }
    ],
    "shortId": "hawa",
    "secretFact": {
      "title": {
        "en": "The Venturi Cooling Miracle",
        "hi": "वेंचुरी शीतलन प्रभाव"
      },
      "en": "The 953 jharokhas (casements) act on the Venturi effect: wind passing through narrow apertures speeds up and cools down, keeping royal women comfortable in 44°C Jaipur heat without any power.",
      "hi": "हवा महल के 953 झरोखे वेंचुरी प्रभाव पर काम करते हैं। संकरे झरोखों से गुजरती हवा ठंडी होकर महलों के तापमान को 44 डिग्री गर्मी में भी शीतल बनाए रखती थी।"
    },
    "sisterGem": {
      "name": {
        "en": "Panna Meena Ka Kund",
        "hi": "पन्ना मीना का कुंड"
      },
      "tagline": {
        "en": "Geometrical 16th-century stepwell with zero tourist crush",
        "hi": "16वीं सदी की शांत ज्यामितीय बावड़ी"
      },
      "distance": "11.5 km away",
      "crowd": "12%",
      "wait": "0 min",
      "highlight": "Symmetrical Staircase Photography",
      "image": "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=Panna+Meena+Ka+Kund+Amer+Jaipur"
    }
  },
  {
    "id": "qutub-minar",
    "name": {
      "en": "Qutub Minar",
      "hi": "क़ुतुब मीनार"
    },
    "city": {
      "en": "Mehrauli, New Delhi",
      "hi": "महरौली, नई दिल्ली"
    },
    "era": {
      "en": "Begun 1199 CE · Delhi Sultanate",
      "hi": "निर्माण 1199 ईस्वी से · दिल्ली सल्तनत"
    },
    "shortSummary": {
      "en": "A 72.5-metre victory tower of fluted red sandstone and marble, standing alongside the 1,600-year-old rust-resistant Iron Pillar of Delhi.",
      "hi": "लाल बलुआ पत्थर और संगमरमर से बनी 72.5 मीटर ऊंची विजय मीनार, जिसके प्रांगण में 1,600 साल पुराना जंग-रोधी लौह स्तंभ भी खड़ा है।"
    },
    "svgIllustration": "\n      <svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Illustrated Qutub Minar tower and arches\">\n        <defs>\n          <linearGradient id=\"sky-qutub\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#0F2B5B\"/>\n            <stop offset=\"100%\" stop-color=\"#1E3A8A\"/>\n          </linearGradient>\n        </defs>\n        <rect width=\"600\" height=\"320\" fill=\"url(#sky-qutub)\"/>\n        <circle cx=\"420\" cy=\"90\" r=\"45\" fill=\"#FF9933\" opacity=\"0.85\"/>\n        <!-- Towering Fluted Qutub Minar -->\n        <polygon points=\"245,285 315,285 296,35 264,35\" fill=\"#C2410C\"/>\n        <!-- 5 Balconies / Storeys -->\n        <rect x=\"242\" y=\"215\" width=\"76\" height=\"8\" rx=\"3\" fill=\"#FF9933\"/>\n        <rect x=\"248\" y=\"155\" width=\"64\" height=\"7\" rx=\"3\" fill=\"#FF9933\"/>\n        <rect x=\"254\" y=\"105\" width=\"52\" height=\"7\" rx=\"3\" fill=\"#FFFBEB\"/>\n        <rect x=\"258\" y=\"65\" width=\"44\" height=\"6\" rx=\"3\" fill=\"#FFFBEB\"/>\n        <!-- Top Marble Storeys -->\n        <polygon points=\"258,105 302,105 296,35 264,35\" fill=\"#FEF3C7\"/>\n        <!-- Iron Pillar beside the tower -->\n        <rect x=\"170\" y=\"175\" width=\"10\" height=\"110\" fill=\"#94A3B8\"/>\n        <circle cx=\"175\" cy=\"172\" r=\"8\" fill=\"#CBD5E1\"/>\n        <!-- Heritage Garden Foliage -->\n        <circle cx=\"95\" cy=\"270\" r=\"42\" fill=\"#138808\"/>\n        <circle cx=\"495\" cy=\"265\" r=\"50\" fill=\"#138808\"/>\n        <rect x=\"0\" y=\"285\" width=\"600\" height=\"35\" fill=\"#0A1D3D\"/>\n      </svg>\n    ",
    "stories": [
      {
        "id": "qutub-1",
        "readTime": "1 min listen",
        "title": {
          "en": "01. Five Storeys Built Across Three Centuries",
          "hi": "01. तीन सदियों में बनीं पांच मंज़िलें"
        },
        "standard": {
          "en": "Standing 72.5 metres high with 379 spiral steps inside, Qutub Minar was not built by a single ruler. Qutb-ud-din Aibak laid only the base storey in 1199; his successor Iltutmish added three more red sandstone levels, and Firoz Shah Tughlaq completed the top floors in white marble in 1368 after lightning struck.",
          "hi": "72.5 मीटर ऊंची और अंदर से 379 घुमावदार सीढ़ियों वाली यह मीनार किसी एक शासक ने नहीं बनाई। 1199 में क़ुतुबुद्दीन ऐबक ने पहली मंज़िल बनवाई, इल्तुतमिश ने तीन और मंज़िलें जोड़ीं, और 1368 में फ़िरोज़ शाह तुग़लक़ ने ऊपरी संगमरमर की मंज़िलें बनवाईं।"
        },
        "kids": {
          "en": "Look closely at the top of the tower—notice how the colour changes from red to white? That is because three different kings worked on it over 170 years! Inside, there are 379 curly stairs going all the way to the top.",
          "hi": "मीनार के ऊपरी हिस्से को ध्यान से देखिए—क्या आपको लाल पत्थर के ऊपर सफ़ेद रंग दिखा? ऐसा इसलिए है क्योंकि इसे तीन अलग-अलग राजाओं ने मिलकर कई सालों में पूरा किया! इसके अंदर ऊपर जाने के लिए 379 घुमावदार सीढ़ियां हैं।"
        }
      },
      {
        "id": "qutub-2",
        "readTime": "1 min listen",
        "title": {
          "en": "02. The 1,600-Year-Old Pillar That Refuses to Rust",
          "hi": "02. 1,600 साल पुराना स्तंभ जिस पर जंग नहीं लगता"
        },
        "standard": {
          "en": "Right in the courtyard stands a 7.2-metre, six-tonne wrought-iron pillar forged during the Gupta Empire under Chandragupta II (c. 402 CE). Because ancient Indian metallurgists preserved high phosphorus content in the iron, a microscopic protective film called 'misawite' prevents it from rusting in the open rain.",
          "hi": "प्रांगण में खड़ा 7.2 मीटर ऊंचा और 6 टन वज़नी यह लौह स्तंभ गुप्त काल (लगभग 402 ईस्वी) में ढाला गया था। प्राचीन भारतीय धातुकर्मियों द्वारा लोहे में फ़ॉस्फ़ोरस की सटीक मात्रा रखने से इस पर एक सुरक्षात्मक परत बन गई, जिससे 1,600 साल बाद भी इस पर जंग नहीं लगा।"
        },
        "kids": {
          "en": "Leave a bicycle out in the rain and it gets rusty, right? In the courtyard stands an iron pole made 1,600 years ago that has stood in the sun and monsoon rain without rusting! Ancient Indian scientists used a secret iron recipe.",
          "hi": "अगर हम लोहे की किसी चीज़ को बारिश में छोड़ दें तो उस पर जंग लग जाता है, है ना? लेकिन यहां आंगन में खड़ा लोहे का खंभा 1,600 साल से धूप और बारिश में खड़ा है, फिर भी आज तक इस पर जंग नहीं लगा!"
        }
      },
      {
        "id": "qutub-3",
        "readTime": "1 min listen",
        "title": {
          "en": "03. Alai Minar: The Giant Rival That Stopped at Floor One",
          "hi": "03. अलाई मीनार: दोगुनी ऊंची मीनार का अधूरा सपना"
        },
        "standard": {
          "en": "Just north of Qutub Minar sits a massive circular stone rubble core. In 1311, Sultan Alauddin Khilji began constructing the Alai Minar, intending it to be twice the height and circumference of Qutub Minar. After his death in 1316, the ambitious 24.5-metre first stage was left forever unfinished.",
          "hi": "क़ुतुब मीनार के ठीक उत्तर में पत्थरों का एक विशाल गोल ढांचा खड़ा है। 1311 में सुल्तान अलाउद्दीन ख़िलजी ने क़ुतुब मीनार से दोगुनी ऊंची 'अलाई मीनार' बनवानी शुरू की थी, लेकिन 1316 में उनकी मृत्यु के बाद यह पहली मंज़िल पर ही अधूरी रह गई।"
        },
        "kids": {
          "en": "Walk a little further in the park and you will see a giant rocky stump. A king once wanted to build a tower TWICE as big as Qutub Minar, but builders only finished the bottom part before work stopped forever!",
          "hi": "पार्क में थोड़ा आगे चलने पर आपको पत्थरों का एक बहुत चौड़ा चबूतरा दिखेगा। एक सुल्तान क़ुतुब मीनार से दोगुनी ऊंची मीनार बनाना चाहते थे, लेकिन उसका सिर्फ़ नीचे का हिस्सा ही बन पाया!"
        }
      }
    ],
    "crowdByHour": [
      {
        "hour": "8 AM",
        "level": 24,
        "status": "Low",
        "pct": 24
      },
      {
        "hour": "9 AM",
        "level": 42,
        "status": "Low",
        "pct": 42
      },
      {
        "hour": "10 AM",
        "level": 68,
        "status": "Moderate",
        "pct": 68
      },
      {
        "hour": "11 AM",
        "level": 78,
        "status": "High",
        "pct": 78
      },
      {
        "hour": "12 PM",
        "level": 64,
        "status": "Moderate",
        "pct": 64
      },
      {
        "hour": "1 PM",
        "level": 52,
        "status": "Moderate",
        "pct": 52
      },
      {
        "hour": "2 PM",
        "level": 56,
        "status": "Moderate",
        "pct": 56
      },
      {
        "hour": "3 PM",
        "level": 74,
        "status": "High",
        "pct": 74
      },
      {
        "hour": "4 PM",
        "level": 89,
        "status": "Peak",
        "pct": 89
      },
      {
        "hour": "5 PM",
        "level": 94,
        "status": "Peak",
        "pct": 94
      },
      {
        "hour": "6 PM",
        "level": 60,
        "status": "Moderate",
        "pct": 60
      }
    ],
    "nearbyGem": {
      "name": {
        "en": "Mehrauli Archaeological Park & Rajon Ki Baoli",
        "hi": "महरौली पुरातत्व पार्क और राजों की बावली"
      },
      "distance": {
        "en": "600 m walk adjacent to Qutub Complex · ~7 min walk",
        "hi": "क़ुतुब परिसर के ठीक बगल में 600 मीटर · 7 मिनट पैदल"
      },
      "description": {
        "en": "Spread over 200 acres of shaded woodland right beside Qutub Minar, this peaceful park holds 16th-century stepwells (Rajon Ki Baoli), Jamali Kamali Tomb, and Balban's Tomb with free entry and tranquil trails.",
        "hi": "क़ुतुब मीनार के ठीक बगल में 200 एकड़ के हरे-भरे क्षेत्र में फैला यह शांत पार्क 16वीं सदी की 'राजों की बावली' और जमाली-कमाली मक़बरे के लिए प्रसिद्ध है।"
      },
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Mehrauli+Archaeological+Park+Delhi"
    },
    "safety": {
      "police": {
        "en": "Mehrauli Police Station, Aurobindo Marg (650 m from Qutub Entry Gate)",
        "hi": "महरौली पुलिस स्टेशन, अरबिंदो मार्ग (प्रवेश द्वार से 650 मीटर)"
      },
      "hospital": {
        "en": "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj / AIIMS Trauma Centre (4.5 km)",
        "hi": "फ़ोर्टिस अस्पताल, वसंत कुंज / एम्स ट्रॉमा सेंटर (4.5 किमी)"
      },
      "checklist": {
        "en": [
          "Book your QR entry ticket online via the official ASI portal to skip the counter queue.",
          "Interior stairways of the Qutub Minar tower are permanently closed for public safety.",
          "Wear comfortable walking shoes as the complex spans uneven historic stone pathways.",
          "Evening architectural illumination stays open after sunset—check closing hours at entry."
        ],
        "hi": [
          "लंबी कतार से बचने के लिए आधिकारिक ASI पोर्टल से क्यूआर (QR) टिकट ऑनलाइन बुक करें।",
          "सुरक्षा कारणों से मीनार के अंदर की सीढ़ियों पर जाना स्थायी रूप से बंद है।",
          "पूरे परिसर में पुराने पत्थर के रास्ते हैं, इसलिए आरामदायक जूते पहनें।",
          "शाम के समय स्मारक पर विशेष लाइटिंग होती है जो सूर्यास्त के बाद बहुत सुंदर दिखती है।"
        ]
      }
    },
    "fares": [
      {
        "route": {
          "en": "Qutab Minar Metro Station (Yellow Line) → Monument Gate",
          "hi": "क़ुतुब मीनार मेट्रो स्टेशन (येलो लाइन) → स्मारक गेट"
        },
        "mode": {
          "en": "Shared Auto / E-Rickshaw (Per Seat)",
          "hi": "शेयरिंग ऑटो / ई-रिक्शा (प्रति सीट)"
        },
        "distance": "1.8 km",
        "fairRange": "₹20 – ₹30"
      },
      {
        "route": {
          "en": "Qutab Minar Metro Station → Monument Gate",
          "hi": "क़ुतुब मीनार मेट्रो स्टेशन → स्मारक गेट"
        },
        "mode": {
          "en": "Private Auto-Rickshaw",
          "hi": "प्राइवेट ऑटो-रिक्शा"
        },
        "distance": "1.8 km",
        "fairRange": "₹50 – ₹70"
      },
      {
        "route": {
          "en": "Connaught Place (New Delhi) → Qutub Minar",
          "hi": "कनॉट प्लेस (नई दिल्ली) → क़ुतुब मीनार"
        },
        "mode": {
          "en": "Delhi Metro (Yellow Line)",
          "hi": "दिल्ली मेट्रो (येलो लाइन)"
        },
        "distance": "14.5 km",
        "fairRange": "₹40"
      },
      {
        "route": {
          "en": "IGI Airport (T3) → Qutub Minar",
          "hi": "आईजीआई एयरपोर्ट (T3) → क़ुतुब मीनार"
        },
        "mode": {
          "en": "Prepaid Taxi / App Cab",
          "hi": "प्रीपेड टैक्सी / कैब"
        },
        "distance": "13.0 km",
        "fairRange": "₹300 – ₹420"
      }
    ],
    "coords": {
      "lat": 28.5244,
      "lon": 77.1855
    },
    "lat": 28.5244,
    "lon": 77.1855,
    "images": [
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Qutb_Minar_2022.jpg/1280px-Qutb_Minar_2022.jpg",
        "title": "Towering 72.5m Victory Fluted Tower",
        "caption": {
          "en": "Five tapering storeys of red and buff sandstone with Quranic calligraphic bands and intricate balconies.",
          "hi": "लाल और हल्के पीले बलुआ पत्थर की 72.5 मीटर ऊंची पांच मंजिला मीनार जिस पर सुलेख और नक्काशीदार बालकनियां हैं।"
        },
        "credit": "Wikimedia Commons"
      },
      {
        "url": "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1200&q=80",
        "title": "Rust-Resistant Iron Pillar & Cloisters",
        "caption": {
          "en": "The ancient 4th-century CE metallurgical marvel Iron Pillar standing rust-free in the central courtyard.",
          "hi": "परिसर के बीचों-बीच स्थित चौथी शताब्दी का प्राचीन लौह स्तंभ जो सदियों से बिना जंग लगे खड़ा है।"
        },
        "credit": "Unsplash"
      }
    ],
    "shortId": "qutub",
    "secretFact": {
      "title": {
        "en": "1,600-Year Rustproof Iron Pillar",
        "hi": "1600 वर्ष पुराना जंगरोधी लौह स्तंभ"
      },
      "en": "The Iron Pillar in the courtyard has stood exposed to Delhi weather for over 16 centuries without rusting, thanks to a high phosphorus, low sulfur composition forming a protective misawite iron film.",
      "hi": "प्रांगण में खड़ा लौह स्तंभ 1600 वर्षों से धूप और बारिश में बिना जंग लगे अडिग खड़ा है। इसकी धातु में फॉस्फोरस की अनूठी परत इसे आज तक जंग से बचाती है।"
    },
    "sisterGem": {
      "name": {
        "en": "Mehrauli Archaeological Park",
        "hi": "महरौली पुरातत्व पार्क"
      },
      "tagline": {
        "en": "200 acres of 1,000-year Delhi ruins & Rajon Ki Baoli",
        "hi": "1000 वर्ष पुराने खंडहर और राजों की बावड़ी"
      },
      "distance": "850 m away",
      "crowd": "15%",
      "wait": "0 min",
      "highlight": "Ancient Forest Walking Trail",
      "image": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=Mehrauli+Archaeological+Park+New+Delhi"
    }
  },
  {
    "id": "hampi-chariot",
    "name": {
      "en": "Vittala Temple & Stone Chariot",
      "hi": "विट्ठल मंदिर और पत्थर का रथ"
    },
    "city": {
      "en": "Hampi, Karnataka",
      "hi": "हम्पी, कर्नाटक"
    },
    "era": {
      "en": "Built 16th Century CE · Vijayanagara Empire",
      "hi": "निर्माण 16वीं शताब्दी · विजयनगर साम्राज्य"
    },
    "shortSummary": {
      "en": "Iconic Dravidian granite chariot shrine and 56 musical stone pillars that ring like classical instruments in the boulder-strewn capital of Vijayanagara.",
      "hi": "विजयनगर साम्राज्य की राजधानी हम्पी में ग्रेनाइट पत्थरों से तराशा गया प्रसिद्ध रथ और 56 संगीतमय स्तंभ, जिन्हें थपथपाने पर संगीत के सुर निकलते हैं।"
    },
    "svgIllustration": "\n      <svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Illustrated Hampi Stone Chariot\">\n        <defs>\n          <linearGradient id=\"sky-hampi\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#0F2B5B\"/>\n            <stop offset=\"65%\" stop-color=\"#B45309\"/>\n            <stop offset=\"100%\" stop-color=\"#FF9933\"/>\n          </linearGradient>\n        </defs>\n        <rect width=\"600\" height=\"320\" fill=\"url(#sky-hampi)\"/>\n        <!-- Hampi Granite Hills in Background -->\n        <path d=\"M0 285 Q120 190 240 285 Z\" fill=\"#1E293B\" opacity=\"0.5\"/>\n        <path d=\"M360 285 Q480 180 600 285 Z\" fill=\"#1E293B\" opacity=\"0.5\"/>\n        <!-- Stone Chariot Body -->\n        <rect x=\"215\" y=\"135\" width=\"170\" height=\"115\" rx=\"6\" fill=\"#FDE68A\"/>\n        <polygon points=\"230,135 370,135 340,75 260,75\" fill=\"#F59E0B\"/>\n        <rect x=\"275\" y=\"160\" width=\"50\" height=\"65\" rx=\"4\" fill=\"#0F2B5B\"/>\n        <!-- Carved Stone Wheels -->\n        <circle cx=\"245\" cy=\"255\" r=\"32\" fill=\"#D97706\" stroke=\"#FFFBEB\" stroke-width=\"5\"/>\n        <circle cx=\"245\" cy=\"255\" r=\"8\" fill=\"#0F2B5B\"/>\n        <circle cx=\"355\" cy=\"255\" r=\"32\" fill=\"#D97706\" stroke=\"#FFFBEB\" stroke-width=\"5\"/>\n        <circle cx=\"355\" cy=\"255\" r=\"8\" fill=\"#0F2B5B\"/>\n        <!-- Ground Base -->\n        <rect x=\"0\" y=\"285\" width=\"600\" height=\"35\" fill=\"#0F2B5B\"/>\n      </svg>\n    ",
    "stories": [
      {
        "id": "hampi-1",
        "readTime": "1 min listen",
        "title": {
          "en": "01. A Chariot Built Like a Giant Jigsaw Puzzle",
          "hi": "01. विशाल पत्थरों को जोड़कर बना रथ"
        },
        "standard": {
          "en": "Wait before assuming the Hampi Stone Chariot is carved from a single boulder! Unlike monolithic rock temples, this Garuda shrine was assembled from giant interlocking granite blocks. Sculptors cleverly hid every joint behind decorative floral moldings and once rotatable stone wheels.",
          "hi": "अक्सर लोग सोचते हैं कि हम्पी का यह रथ एक ही चट्टान को काटकर बनाया गया है, लेकिन वास्तव में इसे कई विशाल ग्रेनाइट खंडों को आपस में जोड़कर बनाया गया है। शिल्पकारों ने जोड़ों को नक्काशीदार पट्टियों के पीछे इतनी खूबसूरती से छिपाया है कि यह एक ही पत्थर लगता है।"
        },
        "kids": {
          "en": "Look at the ₹50 note in someone's wallet—this famous Stone Chariot is right on it! It looks like it was carved out of one giant rock, but clever builders actually locked many blocks together and hid all the cracks behind carvings!",
          "hi": "अगर आप 50 रुपये का नया नोट देखेंगे, तो उस पर यही पत्थर का रथ छपा है! यह देखने में एक ही चट्टान जैसा लगता है, लेकिन कलाकारों ने कई पत्थरों को आपस में जोड़कर इसके जोड़ों को सुंदर डिज़ाइनों के पीछे छिपा दिया है!"
        }
      },
      {
        "id": "hampi-2",
        "readTime": "1 min listen",
        "title": {
          "en": "02. The 56 Saregama Musical Pillars",
          "hi": "02. सारेगामा के सुर छेड़ते 56 संगीतमय खंभे"
        },
        "standard": {
          "en": "Inside the Ranga Mantapa pavilion stand 56 granite pillars, each surrounded by seven smaller colonnettes. Because the craftsmen varied the thickness and mineral density of each stone shaft, gently tapping them with sandalwood sticks produced the seven notes of Indian classical music (Sa-Re-Ga-Ma).",
          "hi": "रंग मंडप के भीतर 56 ग्रेनाइट खंभे हैं, जिनमें से प्रत्येक के चारों ओर सात छोटे-छोटे स्तंभ बने हैं। कारीगरों ने पत्थर की मोटाई और घनत्व को इस तरह तराशा कि उन्हें हल्के से थपथपाने पर भारतीय शास्त्रीय संगीत के सात सुर (सा-रे-गा-मा) गूंज उठते थे।"
        },
        "kids": {
          "en": "Imagine playing music on solid rock! In the big hall next to the chariot, there are 56 stone pillars that ring like bells, drums, and violins when tapped, playing the musical notes Sa-Re-Ga-Ma!",
          "hi": "सोचिए, क्या ठोस पत्थर से भी संगीत बज सकता है? रथ के पास बने बड़े मंडप में 56 ऐसे जादुई खंभे हैं जिन्हें थपथपाने पर घंटी, तबले और वीणा जैसी आवाज़ें और 'सा-रे-गा-मा' के सुर निकलते हैं!"
        }
      },
      {
        "id": "hampi-3",
        "readTime": "1 min listen",
        "title": {
          "en": "03. Why Elephants Pull a Chariot Built for Horses",
          "hi": "03. घोड़ों के स्थान पर पत्थर के हाथी क्यों हैं?"
        },
        "standard": {
          "en": "Look behind the two stone elephants standing in front of the chariot today—you can still spot the sculpted hindquarters and tails of galloping horses. The original Vijayanagara horses were damaged centuries ago, and restorers moved two carved stone elephants from a nearby mandapa to guard the front.",
          "hi": "आज रथ के आगे दो पत्थर के हाथी खड़े हैं, लेकिन अगर आप उनके ठीक पीछे ध्यान से देखेंगे तो आपको दौड़ते हुए घोड़ों की पूंछ और पिछले पैर दिखाई देंगे। मूल रूप से यहां पत्थर के घोड़े थे, जिनके क्षतिग्रस्त होने के बाद पास के मंडप से दो हाथी लाकर लगाए गए।"
        },
        "kids": {
          "en": "Here is a detective clue to spot when you visit! Two stone elephants stand in front of the chariot today, but peek right behind them—you can still see the tails and back legs of the original stone horses!",
          "hi": "जब आप यहां जाएं तो एक जासूस की तरह यह मज़ेदार चीज़ ज़रूर ढूंढें! रथ के आगे दो पत्थर के हाथी खड़े हैं, लेकिन उनके ठीक पीछे झांकने पर आपको पुराने पत्थर के घोड़ों की पूंछ और पैर आज भी दिखाई देंगे!"
        }
      }
    ],
    "crowdByHour": [
      {
        "hour": "8 AM",
        "level": 30,
        "status": "Low",
        "pct": 30
      },
      {
        "hour": "9 AM",
        "level": 55,
        "status": "Moderate",
        "pct": 55
      },
      {
        "hour": "10 AM",
        "level": 84,
        "status": "High",
        "pct": 84
      },
      {
        "hour": "11 AM",
        "level": 91,
        "status": "Peak",
        "pct": 91
      },
      {
        "hour": "12 PM",
        "level": 68,
        "status": "Moderate",
        "pct": 68
      },
      {
        "hour": "1 PM",
        "level": 44,
        "status": "Low",
        "pct": 44
      },
      {
        "hour": "2 PM",
        "level": 48,
        "status": "Moderate",
        "pct": 48
      },
      {
        "hour": "3 PM",
        "level": 72,
        "status": "High",
        "pct": 72
      },
      {
        "hour": "4 PM",
        "level": 88,
        "status": "Peak",
        "pct": 88
      },
      {
        "hour": "5 PM",
        "level": 79,
        "status": "High",
        "pct": 79
      },
      {
        "hour": "6 PM",
        "level": 32,
        "status": "Low",
        "pct": 32
      }
    ],
    "nearbyGem": {
      "name": {
        "en": "Achyutaraya Temple & Courtesans' Bazaar (Sule Bazaar)",
        "hi": "अच्युतराय मंदिर और सूले बाज़ार"
      },
      "distance": {
        "en": "1.4 km scenic boulder trail from Vittala · ~18 min walk",
        "hi": "विट्ठल मंदिर से 1.4 किमी का सुंदर पथरीला रास्ता · 18 मिनट पैदल"
      },
      "description": {
        "en": "Nestled quietly between Matanga Hill and Gandhamadana Hill, this grand 1534 CE temple complex and its colonnaded ancient stone marketplace remain blissfully uncrowded even during peak hours.",
        "hi": "मतंग पहाड़ी के पास छिपा 1534 ईस्वी का यह भव्य मंदिर और इसका प्राचीन स्तंभों वाला बाज़ार भीड़ के समय भी बेहद शांत और सुरम्य रहता है।"
      },
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Achyutaraya+Temple+Hampi"
    },
    "safety": {
      "police": {
        "en": "Hampi Tourist Police Station, near Virupaksha Temple Bazaar (2.8 km)",
        "hi": "हम्पी पर्यटक पुलिस स्टेशन, विरुपाक्ष मंदिर बाज़ार के पास (2.8 किमी)"
      },
      "hospital": {
        "en": "Government Primary Health Centre, Kamalapur / Hospet Sub-District Hospital (12 km)",
        "hi": "प्राथमिक स्वास्थ्य केंद्र, कमलापुर / होसपेट उप-जिला अस्पताल (12 किमी)"
      },
      "checklist": {
        "en": [
          "Private motor vehicles stop at Gejjala Mantapa checkpoint; use official battery buggies or walk 1 km to the temple.",
          "Carry at least 2 litres of drinking water, ORS, and sun protection—granite boulders radiate midday heat.",
          "Keep ₹10–₹50 cash notes handy as mobile network coverage is patchy inside the boulder valley.",
          "Do not climb on fragile carved mandapa pillars or ancient stone walls."
        ],
        "hi": [
          "निजी वाहन गेज्जला मंडप चेकपॉइंट तक ही जाते हैं; वहां से 1 किमी बैटरी गाड़ी या पैदल जाना होता है।",
          "कम से कम 2 लीटर पानी, ओआरएस और छाता/टोपी साथ रखें—ग्रेनाइट चट्टानें दोपहर में तेज़ गर्म हो जाती हैं।",
          "मोबाइल नेटवर्क कम होने के कारण ₹10–₹50 के नकद नोट अपने पास रखें।",
          "प्राचीन नक्काशीदार खंभों और दीवारों पर न चढ़ें।"
        ]
      }
    },
    "fares": [
      {
        "route": {
          "en": "Hosapete Junction Railway Station → Hampi Bazaar",
          "hi": "होसपेट जंक्शन रेलवे स्टेशन → हम्पी बाज़ार"
        },
        "mode": {
          "en": "Auto-Rickshaw",
          "hi": "ऑटो-रिक्शा"
        },
        "distance": "13.0 km",
        "fairRange": "₹200 – ₹250"
      },
      {
        "route": {
          "en": "Hosapete Bus Stand → Hampi",
          "hi": "होसपेट बस स्टैंड → हम्पी"
        },
        "mode": {
          "en": "KSRTC Express Bus (Per Ticket)",
          "hi": "केएसआरटीसी बस (प्रति टिकट)"
        },
        "distance": "13.0 km",
        "fairRange": "₹20 – ₹25"
      },
      {
        "route": {
          "en": "Gejjala Mantapa Parking → Vittala Temple Gate",
          "hi": "गेज्जला मंडप पार्किंग → विट्ठल मंदिर गेट"
        },
        "mode": {
          "en": "Battery Operated Buggy (Round Trip)",
          "hi": "बैटरी बग्गी (आना-जाना)"
        },
        "distance": "1.0 km",
        "fairRange": "₹20"
      },
      {
        "route": {
          "en": "Full-Day Hampi Sacred & Royal Centre Circuit",
          "hi": "पूरे दिन का हम्पी दर्शनीय स्थल भ्रमण"
        },
        "mode": {
          "en": "Local Auto Charter (Full Day)",
          "hi": "लोकल ऑटो बुकिंग (पूरा दिन)"
        },
        "distance": "25.0 km",
        "fairRange": "₹800 – ₹1,100"
      }
    ],
    "coords": {
      "lat": 15.335,
      "lon": 76.46
    },
    "lat": 15.335,
    "lon": 76.46,
    "images": [
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg/1280px-Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg",
        "title": "Sacred Tungabhadra River & Temple Gopuram",
        "caption": {
          "en": "The monolithic granite boulders, boulder-strewn hills, and sacred temple spires of Vijayanagara empire.",
          "hi": "विजयनगर साम्राज्य के विशाल ग्रेनाइट पत्थरों और तुंगभद्रा नदी के तट पर स्थित भव्य गोपुरम।"
        },
        "credit": "Wikimedia Commons"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
        "title": "Stone Chariot at Vittala Temple",
        "caption": {
          "en": "Shrine dedicated to Garuda carved as an ornate stone chariot with moveable rotating wheels.",
          "hi": "भगवान गरुड़ को समर्पित प्रसिद्ध पत्थर का रथ जिसके पहिये कभी घूमते थे।"
        },
        "credit": "Unsplash"
      }
    ],
    "shortId": "hampi",
    "secretFact": {
      "title": {
        "en": "Acoustic Musical Pillars",
        "hi": "ध्वनिक संगीतमय स्तंभ"
      },
      "en": "The 56 stone pillars of the Vittala Temple complex are acoustic marvels; when gently tapped with fingertips, they resonate with the 7 fundamental notes (Sa-Re-Ga-Ma-Pa-Dha-Ni) of Indian classical music.",
      "hi": "विट्ठल मंदिर परिसर के 56 पाषाण स्तंभ उंगलियों से थपथपाने पर भारतीय शास्त्रीय संगीत के सातों सुर (सा-रे-गा-मा-पा-धा-नि) उत्पन्न करते हैं।"
    },
    "sisterGem": {
      "name": {
        "en": "Achyutaraya Temple & Courtesan Street",
        "hi": "अच्युतराय मंदिर व नर्तकी मार्ग"
      },
      "tagline": {
        "en": "Hidden behind Gandhamadana hill with tranquil courtyards",
        "hi": "गंधमादन पहाड़ी के पीछे एकांत मंदिर"
      },
      "distance": "1.4 km away",
      "crowd": "8%",
      "wait": "0 min",
      "highlight": "Solitary Boulder Landscapes",
      "image": "https://images.unsplash.com/photo-1600100397608-f010e4219b16?auto=format&fit=crop&w=800&q=80",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=Achyutaraya+Temple+Hampi"
    }
  },
  {
    "id": "red-fort",
    "name": {
      "en": "Red Fort (Lal Qila)",
      "hi": "लाल क़िला"
    },
    "city": {
      "en": "Old Delhi, National Capital Region",
      "hi": "पुरानी दिल्ली, राष्ट्रीय राजधानी क्षेत्र"
    },
    "coords": {
      "lat": 28.6562,
      "lon": 77.241
    },
    "lat": 28.6562,
    "lon": 77.241,
    "era": {
      "en": "Built 1638–1648 CE · Mughal Architecture",
      "hi": "निर्माण 1638–1648 ईस्वी · मुग़ल वास्तुकला"
    },
    "shortSummary": {
      "en": "The monumental red sandstone citadel from which Mughal emperors ruled and where India's Prime Minister hoists the national flag on Independence Day.",
      "hi": "लाल बलुआ पत्थर का वह विशाल ऐतिहासिक दुर्ग जहां से मुग़ल सम्राट शासन करते थे और जहां स्वतंत्रता दिवस पर प्रधानमंत्री तिरंगा फहराते हैं।"
    },
    "images": [
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/1280px-Delhi_fort.jpg",
        "title": "Lahori Gate & Imposing Red Sandstone Ramparts",
        "caption": {
          "en": "The towering Lahori Gate entrance overlooking Chandni Chowk, flanked by monumental octagonal towers.",
          "hi": "चांदनी चौक की ओर खुलने वाला भव्य लाहौरी गेट और अष्टकोणीय मीनारों वाली विशाल प्राचीर।"
        },
        "credit": "Wikimedia Commons"
      }
    ],
    "svgIllustration": "\n      <svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Silhouette of Red Fort Delhi\">\n        <defs>\n          <linearGradient id=\"sky-redfort\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#1E1B4B\"/>\n            <stop offset=\"60%\" stop-color=\"#7C2D12\"/>\n            <stop offset=\"100%\" stop-color=\"#EA580C\"/>\n          </linearGradient>\n        </defs>\n        <rect width=\"600\" height=\"320\" fill=\"url(#sky-redfort)\"/>\n        <circle cx=\"300\" cy=\"110\" r=\"70\" fill=\"#FEF08A\" opacity=\"0.25\"/>\n        <rect x=\"50\" y=\"160\" width=\"500\" height=\"120\" fill=\"#991B1B\" rx=\"4\"/>\n        <rect x=\"80\" y=\"120\" width=\"40\" height=\"150\" fill=\"#7F1D1D\"/>\n        <polygon points=\"100,80 75,120 125,120\" fill=\"#991B1B\"/>\n        <rect x=\"480\" y=\"120\" width=\"40\" height=\"150\" fill=\"#7F1D1D\"/>\n        <polygon points=\"500,80 475,120 525,120\" fill=\"#991B1B\"/>\n        <rect x=\"230\" y=\"130\" width=\"140\" height=\"140\" fill=\"#B91C1C\"/>\n        <path d=\"M255 130 C255 90, 345 90, 345 130 Z\" fill=\"#FFFFFF\"/>\n        <path d=\"M275 270 L275 190 C275 160, 325 160, 325 190 L325 270 Z\" fill=\"#1E1B4B\"/>\n        <rect x=\"0\" y=\"270\" width=\"600\" height=\"50\" fill=\"#18181B\"/>\n      </svg>\n    ",
    "stories": [
      {
        "id": "rf-1",
        "readTime": "1 min listen",
        "title": {
          "en": "01. The Epicentre of Mughal Power",
          "hi": "01. मुग़ल सत्ता का ऐतिहासिक केंद्र"
        },
        "standard": {
          "en": "Commissioned by Emperor Shah Jahan when he shifted the imperial capital from Agra to Shahjahanabad, the Red Fort represented the zenith of Mughal creativity and symmetry.",
          "hi": "जब शाहजहां ने अपनी राजधानी आगरा से शाहजहांनाबाद स्थानांतरित की, तब लाल क़िले का निर्माण कराया। यह मुग़ल वास्तुकला और भव्यता का चरम प्रतीक है।"
        },
        "kids": {
          "en": "Imagine a giant red castle big enough to hold an entire town! It had gardens, markets, palaces, and even a stream flowing through the rooms called the Stream of Paradise!",
          "hi": "सोचिए इतना बड़ा लाल क़िला जिसके अंदर पूरा शहर समा जाए! इसमें बाज़ार, महल और कमरों के बीच बहने वाली सुंदर नहर भी थी!"
        }
      },
      {
        "id": "rf-2",
        "readTime": "1 min listen",
        "title": {
          "en": "02. Diwan-i-Khas & the Peacock Throne",
          "hi": "02. दीवान-ए-ख़ास और मयूर सिंहासन"
        },
        "standard": {
          "en": "Inside the marble Diwan-i-Khas stood the legendary jeweled Peacock Throne (Takht-e-Taus), studded with the Koh-i-Noor diamond and rubies.",
          "hi": "दीवान-ए-ख़ास में विश्व प्रसिद्ध मयूर सिंहासन रखा था, जिसमें कोहिनूर हीरा और बेशकीमती रत्न जड़े हुए थे।"
        },
        "kids": {
          "en": "The king had a throne decorated like two dancing peacocks with sparkly feathers made of pure emeralds and blue sapphires!",
          "hi": "राजा का सिंहासन सोने और मोतियों से बना था, जिस पर नाचते हुए मोरों जैसी चमकीली कलाकृतियां थीं!"
        }
      },
      {
        "id": "rf-3",
        "readTime": "1 min listen",
        "title": {
          "en": "03. The Ramparts of Independent India",
          "hi": "03. आज़ाद भारत का प्रतीक"
        },
        "standard": {
          "en": "On 15 August 1947, Jawaharlal Nehru unfurled the tricolour from the Lahori Gate ramparts, inaugurating a timeless tradition that continues every Independence Day.",
          "hi": "15 अगस्त 1947 को पंडित जवाहरलाल नेहरू ने लाहौरी गेट की प्राचीर से तिरंगा फहराया था, जो परंपरा आज भी हर स्वतंत्रता दिवस पर निभाई जाती है।"
        },
        "kids": {
          "en": "Every year on 15 August, India celebrates Independence Day right here, hoisting our flag high into the sky!",
          "hi": "हर साल 15 अगस्त को हमारे देश के प्रधानमंत्री यहीं से राष्ट्रीय ध्वज तिरंगा फहराते हैं!"
        }
      }
    ],
    "crowdByHour": [
      {
        "hour": "8 AM",
        "pct": 18,
        "level": 18,
        "status": "Low"
      },
      {
        "hour": "9 AM",
        "pct": 32,
        "level": 32,
        "status": "Low"
      },
      {
        "hour": "10 AM",
        "pct": 54,
        "level": 54,
        "status": "Moderate"
      },
      {
        "hour": "11 AM",
        "pct": 76,
        "level": 76,
        "status": "High"
      },
      {
        "hour": "12 PM",
        "pct": 84,
        "level": 84,
        "status": "High"
      },
      {
        "hour": "1 PM",
        "pct": 82,
        "level": 82,
        "status": "High"
      },
      {
        "hour": "2 PM",
        "pct": 78,
        "level": 78,
        "status": "High"
      },
      {
        "hour": "3 PM",
        "pct": 74,
        "level": 74,
        "status": "High"
      },
      {
        "hour": "4 PM",
        "pct": 62,
        "level": 62,
        "status": "Moderate"
      },
      {
        "hour": "5 PM",
        "pct": 45,
        "level": 45,
        "status": "Moderate"
      },
      {
        "hour": "6 PM",
        "pct": 25,
        "level": 25,
        "status": "Low"
      }
    ],
    "nearbyGem": {
      "name": {
        "en": "Salimgarh Fort & River Island Gateway",
        "hi": "सलीमगढ़ क़िला"
      },
      "distance": {
        "en": "800 m connected via north bridge · ~10 min walk",
        "hi": "उत्तरी पुल से 800 मीटर दूर · लगभग 10 मिनट की पैदल दूरी"
      },
      "description": {
        "en": "An older 1546 CE fortress built by Sher Shah Suri's son on an island of the Yamuna, featuring serene brick arches and historical barracks with virtually zero crowd.",
        "hi": "शेरशाह सूरी के बेटे द्वारा 1546 में यमुना के एक द्वीप पर बनाया गया शांत क़िला, जहां ऐतिहासिक मेहराबें और बेहद कम भीड़ है।"
      },
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Salimgarh+Fort+Delhi"
    },
    "safety": {
      "police": {
        "en": "Kotwali Police Station, Daryaganj / Red Fort Post (300 m)",
        "hi": "कोतवाली पुलिस स्टेशन, दरियागंज / लाल क़िला चौकी (300 मीटर)"
      },
      "hospital": {
        "en": "Lok Nayak Jai Prakash (LNJP) Civil Hospital, Delhi Gate (1.8 km)",
        "hi": "एलएनजेपी अस्पताल, दिल्ली गेट (1.8 किमी)"
      },
      "checklist": {
        "en": [
          "Book your entry ticket online on the ASI portal to bypass long lines at the gate.",
          "Closed on Mondays for weekly maintenance and sanitation.",
          "Electronic security screening is mandatory at Lahori Gate.",
          "Wear comfortable walking shoes as the fort complex covers over 250 acres."
        ],
        "hi": [
          "भीड़ से बचने के लिए एएसआई पोर्टल से ऑनलाइन टिकट पहले ही बुक कर लें।",
          "सोमवार को लाल क़िला पर्यटकों के लिए बंद रहता है।",
          "लाहौरी गेट पर सुरक्षा जांच अनिवार्य है।",
          "परिसर बहुत बड़ा है (250 एकड़), इसलिए आरामदायक जूते पहनकर आएं।"
        ]
      }
    },
    "fares": [
      {
        "route": {
          "en": "Lal Quila Metro Station (Gate 4) → Red Fort Entrance",
          "hi": "लाल क़िला मेट्रो स्टेशन → मुख्य प्रवेश द्वार"
        },
        "mode": {
          "en": "Walking via Pedestrian Subway",
          "hi": "पैदल रास्ता"
        },
        "distance": "200 m",
        "fairRange": "₹0 (Free Walk)"
      },
      {
        "route": {
          "en": "New Delhi Railway Station → Red Fort",
          "hi": "नई दिल्ली रेलवे स्टेशन → लाल क़िला"
        },
        "mode": {
          "en": "Yellow/Violet Line Metro",
          "hi": "दिल्ली मेट्रो"
        },
        "distance": "4.5 km",
        "fairRange": "₹20 – ₹30"
      },
      {
        "route": {
          "en": "New Delhi Railway Station → Red Fort",
          "hi": "नई दिल्ली रेलवे स्टेशन → लाल क़िला"
        },
        "mode": {
          "en": "Auto-Rickshaw (Metered)",
          "hi": "ऑटो-रिक्शा (मीटर से)"
        },
        "distance": "4.5 km",
        "fairRange": "₹80 – ₹120"
      }
    ],
    "shortId": "redfort",
    "secretFact": {
      "title": {
        "en": "The Stream of Paradise (Nahr-i-Bihisht)",
        "hi": "स्वर्ग की नहर (नहर-ए-बिहिश्त)"
      },
      "en": "Water diverted from the Yamuna was lifted by hydraulic Persian wheels to flow directly through marble channels in the royal pavilions, acting as 17th-century evaporative air conditioning.",
      "hi": "यमुना नदी का जल रहट प्रणाली द्वारा उठाकर शाही महलों के संगमरमरी फर्शों के बीच नहरों में बहाया जाता था, जो 17वीं सदी में प्राकृतिक एयर कंडीशनिंग का काम करता था।"
    },
    "sisterGem": {
      "name": {
        "en": "Salimgarh Fort & River Island Gate",
        "hi": "सलीमगढ़ दुर्ग व नदी द्वीप"
      },
      "tagline": {
        "en": "1546 CE island fortress connected via British arch bridge",
        "hi": "1546 ईस्वी का शांत द्वीप दुर्ग"
      },
      "distance": "450 m away",
      "crowd": "10%",
      "wait": "0 min",
      "highlight": "INA Freedom Fighters Cell",
      "image": "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=Salimgarh+Fort+Old+Delhi"
    }
  },
  {
    "id": "amer-fort",
    "name": {
      "en": "Amber Palace (Amer Fort)",
      "hi": "आमेर का क़िला"
    },
    "city": {
      "en": "Amer, Jaipur, Rajasthan",
      "hi": "आमेर, जयपुर, राजस्थान"
    },
    "coords": {
      "lat": 26.9855,
      "lon": 75.8513
    },
    "lat": 26.9855,
    "lon": 75.8513,
    "era": {
      "en": "Built 1592 CE · Raja Man Singh I",
      "hi": "निर्माण 1592 ईस्वी · राजा मान सिंह प्रथम"
    },
    "shortSummary": {
      "en": "A majestic hilltop fortress of yellow and pink sandstone overlooking Maota Lake, famous for its dazzling Sheesh Mahal mirror mosaic.",
      "hi": "मावठा झील के किनारे ऊंची पहाड़ी पर स्थित पीले और गुलाबी बलुआ पत्थर का भव्य दुर्ग, जो अपने शीश महल और नक्काशी के लिए जगप्रसिद्ध है।"
    },
    "images": [
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg/1280px-20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg",
        "title": "Hilltop Amber Palace Overlooking Maota Lake",
        "caption": {
          "en": "Sweeping ramparts, ornate gateways, and the tranquil waters of Maota Lake reflecting the fortress.",
          "hi": "पहाड़ी पर फैली विशाल प्राचीर और मावठा झील में दिखाई देता आमेर महल का प्रतिबिंब।"
        },
        "credit": "Wikimedia Commons"
      }
    ],
    "svgIllustration": "\n      <svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Silhouette of Amer Fort atop hills\">\n        <defs>\n          <linearGradient id=\"sky-amer\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#0F172A\"/>\n            <stop offset=\"50%\" stop-color=\"#B45309\"/>\n            <stop offset=\"100%\" stop-color=\"#FBBF24\"/>\n          </linearGradient>\n        </defs>\n        <rect width=\"600\" height=\"320\" fill=\"url(#sky-amer)\"/>\n        <polygon points=\"0,220 180,140 320,180 500,120 600,190 600,320 0,320\" fill=\"#78350F\"/>\n        <rect x=\"220\" y=\"110\" width=\"160\" height=\"80\" fill=\"#D97706\" rx=\"3\"/>\n        <path d=\"M240 110 C240 85, 270 85, 270 110 Z\" fill=\"#FDE68A\"/>\n        <path d=\"M330 110 C330 85, 360 85, 360 110 Z\" fill=\"#FDE68A\"/>\n        <line x1=\"160\" y1=\"160\" x2=\"440\" y2=\"140\" stroke=\"#F59E0B\" stroke-width=\"4\"/>\n        <rect x=\"0\" y=\"260\" width=\"600\" height=\"60\" fill=\"#1E293B\"/>\n        <circle cx=\"300\" cy=\"285\" r=\"40\" fill=\"#FDE68A\" opacity=\"0.3\"/>\n      </svg>\n    ",
    "stories": [
      {
        "id": "af-1",
        "readTime": "1 min listen",
        "title": {
          "en": "01. Sheesh Mahal: Hall of a Thousand Stars",
          "hi": "01. शीश महल: तारों भरी रात का जादू"
        },
        "standard": {
          "en": "The Sheesh Mahal is adorned with thousands of imported Belgian concave mirrors. When a single candle was lit at night, its flame reflected in every mirror facet, creating the illusion of a sky brimming with stars.",
          "hi": "शीश महल में बेल्जियम के उत्तल दर्पणों से दीवारों को सजाया गया है। रात में केवल एक मोमबत्ती जलाने पर ऐसा प्रतीत होता है मानो पूरा आसमान तारों से भर गया हो।"
        },
        "kids": {
          "en": "In this magical room, lighting just one tiny candle makes the whole ceiling look like a sky filled with sparkling twinkle-stars!",
          "hi": "इस जादुई कमरे में सिर्फ एक मोमबत्ती जलाने से पूरी छत पर लाखों चमकते हुए तारे दिखाई देने लगते हैं!"
        }
      },
      {
        "id": "af-2",
        "readTime": "1 min listen",
        "title": {
          "en": "02. Secret Tunnels to Jaigarh Fort",
          "hi": "02. जयगढ़ क़िले तक गुप्त सुरंग"
        },
        "standard": {
          "en": "A 2-kilometre subterranean escape tunnel connects Amer Fort directly to the military stronghold of Jaigarh Fort high above, designed for royal family evacuation during sieges.",
          "hi": "आमेर क़िले से ऊपर स्थित सैन्य दुर्ग जयगढ़ तक 2 किलोमीटर लंबी गुप्त भूमिगत सुरंग बनाई गई थी, ताकि आपातकाल में राजपरिवार सुरक्षित निकल सके।"
        },
        "kids": {
          "en": "There is a secret underground tunnel hidden inside the mountain that leads straight up to the fort with the world's biggest cannon!",
          "hi": "पहाड़ के अंदर एक गुप्त सुरंग छिपी है जो सीधे ऊपर उस क़िले तक जाती है जहां दुनिया की सबसे बड़ी तोप रखी है!"
        }
      }
    ],
    "crowdByHour": [
      {
        "hour": "8 AM",
        "pct": 20,
        "level": 20,
        "status": "Low"
      },
      {
        "hour": "9 AM",
        "pct": 40,
        "level": 40,
        "status": "Low"
      },
      {
        "hour": "10 AM",
        "pct": 68,
        "level": 68,
        "status": "Moderate"
      },
      {
        "hour": "11 AM",
        "pct": 85,
        "level": 85,
        "status": "Peak"
      },
      {
        "hour": "12 PM",
        "pct": 88,
        "level": 88,
        "status": "Peak"
      },
      {
        "hour": "1 PM",
        "pct": 79,
        "level": 79,
        "status": "High"
      },
      {
        "hour": "2 PM",
        "pct": 75,
        "level": 75,
        "status": "High"
      },
      {
        "hour": "3 PM",
        "pct": 70,
        "level": 70,
        "status": "High"
      },
      {
        "hour": "4 PM",
        "pct": 55,
        "level": 55,
        "status": "Moderate"
      },
      {
        "hour": "5 PM",
        "pct": 38,
        "level": 38,
        "status": "Low"
      },
      {
        "hour": "6 PM",
        "pct": 22,
        "level": 22,
        "status": "Low"
      }
    ],
    "nearbyGem": {
      "name": {
        "en": "Panna Meena ka Kund Stepwell",
        "hi": "पन्ना मीना का कुंड"
      },
      "distance": {
        "en": "1.1 km east of Amer Fort · ~4 min drive",
        "hi": "आमेर क़िले से 1.1 किमी पूर्व · लगभग 4 मिनट का रास्ता"
      },
      "description": {
        "en": "A 16th-century eight-storey geometric stepwell with interlocking criss-cross staircases that create mesmerizing visual symmetry without tourist crowds.",
        "hi": "16वीं सदी की अष्टकोणीय सीढ़ीदार बावड़ी जिसकी आकर्षक ज्यामितीय सीढ़ियां मंत्रमुग्ध कर देती हैं, जहां शांति रहती है।"
      },
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Panna+Meena+ka+Kund+Jaipur"
    },
    "safety": {
      "police": {
        "en": "Amer Police Station, Main Market Road (700 m)",
        "hi": "आमेर पुलिस स्टेशन, मुख्य बाज़ार रोड (700 मीटर)"
      },
      "hospital": {
        "en": "Amer Community Health Centre (CH Hospital) (1.2 km)",
        "hi": "आमेर सामुदायिक स्वास्थ्य केंद्र (1.2 किमी)"
      },
      "checklist": {
        "en": [
          "Arrive before 9:00 AM to explore before the Rajasthan desert sun gets intense.",
          "Keep tickets safe; composite tickets include Hawa Mahal and Jantar Mantar.",
          "Jeeps are available from the base parking to the palace gate.",
          "Evening Light and Sound show is hosted in English and Hindi at 7:00 PM."
        ],
        "hi": [
          "तेज़ धूप से बचने के लिए सुबह 9 बजे से पहले पहुंचना सबसे अच्छा रहता है।",
          "कंपोजिट टिकट लेने पर आप हवा महल और जंतर-मंतर भी देख सकते हैं।",
          "नीचे पार्किंग से क़िले तक जीप की सुविधा उपलब्ध है।",
          "शाम 7 बजे यहां हिंदी और अंग्रेजी में लाइट एंड साउंड शो होता है।"
        ]
      }
    },
    "fares": [
      {
        "route": {
          "en": "Jaipur City Palace → Amer Fort",
          "hi": "जयपुर सिटी पैलेस → आमेर क़िला"
        },
        "mode": {
          "en": "AC Low Floor Bus (Route 5)",
          "hi": "लो-फ्लोर सरकारी बस"
        },
        "distance": "11.0 km",
        "fairRange": "₹25 – ₹35"
      },
      {
        "route": {
          "en": "Jaipur Junction Railway Station → Amer Fort",
          "hi": "जयपुर रेलवे स्टेशन → आमेर क़िला"
        },
        "mode": {
          "en": "App Cab / Taxi",
          "hi": "ऐप कैब / टैक्सी"
        },
        "distance": "13.5 km",
        "fairRange": "₹280 – ₹380"
      },
      {
        "route": {
          "en": "Amer Base Car Park → Fort Main Suraj Pol",
          "hi": "आमेर पार्किंग → मुख्य सूरज पोल"
        },
        "mode": {
          "en": "Authorized Tourist Jeep (Return)",
          "hi": "पर्यटक जीप (आना-जाना)"
        },
        "distance": "1.2 km",
        "fairRange": "₹450 – ₹550 (Full Jeep)"
      }
    ],
    "shortId": "amer",
    "secretFact": {
      "title": {
        "en": "Subterranean Escape Tunnels",
        "hi": "भूमिगत गुप्त सुरंगें"
      },
      "en": "A 2-kilometer underground secret tunnel connects Amer Palace to the mountaintop Jaigarh Fort, designed as an impenetrable escape route for the royal family during siege warfare.",
      "hi": "आमेर महल से जयगढ़ दुर्ग तक 2 किलोमीटर लंबी भूमिगत गुप्त सुरंग बनी है, जिसे युद्ध के समय राजपरिवार की सुरक्षित निकासी के लिए तैयार किया गया था।"
    },
    "sisterGem": {
      "name": {
        "en": "Anokhi Museum of Hand Printing",
        "hi": "अनोखी हस्त मुद्रण संग्रहालय"
      },
      "tagline": {
        "en": "Restored haveli dedicated to block print artisans",
        "hi": "हस्तशिल्प और ब्लॉक प्रिंटिंग की पुरानी हवेली"
      },
      "distance": "1.2 km away",
      "crowd": "14%",
      "wait": "0 min",
      "highlight": "Live Artisan Craft Workshop",
      "image": "https://images.unsplash.com/photo-1609137144822-0a4401886105?auto=format&fit=crop&w=800&q=80",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=Anokhi+Museum+of+Hand+Printing+Amer"
    }
  },
  {
    "id": "gateway-india",
    "name": {
      "en": "Gateway of India",
      "hi": "गेटवे ऑफ़ इंडिया"
    },
    "city": {
      "en": "Apollo Bunder, Colaba, Mumbai",
      "hi": "अपोलो बंदर, कोलाबा, मुंबई"
    },
    "coords": {
      "lat": 18.922,
      "lon": 72.8347
    },
    "lat": 18.922,
    "lon": 72.8347,
    "era": {
      "en": "Built 1911–1924 CE · Indo-Saracenic Architecture",
      "hi": "निर्माण 1911–1924 ईस्वी · इंडो-सारसेनिक वास्तुकला"
    },
    "shortSummary": {
      "en": "An imposing 26-metre yellow basalt triumphal arch confronting the Arabian Sea, serving as the symbolic seaside portal to Mumbai.",
      "hi": "अरब सागर के तट पर स्थित 26 मीटर ऊंचा पीले बेसाल्ट पत्थर का विशाल मेहराबदार द्वार, जो मुंबई का प्रमुख ऐतिहासिक प्रतीक है।"
    },
    "images": [
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/1280px-Mumbai_03-2016_30_Gateway_of_India.jpg",
        "title": "Basalt Arch Overlooking Mumbai Harbour",
        "caption": {
          "en": "The 26m archway flanked by the Arabian Sea where ferries depart for Elephanta Caves.",
          "hi": "अरब सागर की लहरों के सामने स्थित 26 मीटर ऊंचा द्वार जहां से एलीफेंटा गुफाओं के लिए नावें चलती हैं।"
        },
        "credit": "Wikimedia Commons"
      }
    ],
    "svgIllustration": "\n      <svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Silhouette of Gateway of India on harbor\">\n        <defs>\n          <linearGradient id=\"sky-gateway\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#0284C7\"/>\n            <stop offset=\"60%\" stop-color=\"#38BDF8\"/>\n            <stop offset=\"100%\" stop-color=\"#FCD34D\"/>\n          </linearGradient>\n        </defs>\n        <rect width=\"600\" height=\"320\" fill=\"url(#sky-gateway)\"/>\n        <rect x=\"180\" y=\"110\" width=\"240\" height=\"150\" fill=\"#78350F\" rx=\"4\"/>\n        <path d=\"M250 260 L250 170 C250 135, 350 135, 350 170 L350 260 Z\" fill=\"#0C4A6E\"/>\n        <circle cx=\"210\" cy=\"100\" r=\"14\" fill=\"#FDE68A\"/>\n        <circle cx=\"390\" cy=\"100\" r=\"14\" fill=\"#FDE68A\"/>\n        <rect x=\"0\" y=\"260\" width=\"600\" height=\"60\" fill=\"#0369A1\"/>\n      </svg>\n    ",
    "stories": [
      {
        "id": "gw-1",
        "readTime": "1 min listen",
        "title": {
          "en": "01. Portal to an Empire & Departure Point",
          "hi": "01. ब्रिटिश राज का प्रवेश और विदाई द्वार"
        },
        "standard": {
          "en": "Erected to commemorate King George V and Queen Mary's landing in 1911, it ironically witnessed the final departure of British troops on 28 February 1948.",
          "hi": "1911 में जॉर्ज पंचम के स्वागत के लिए बना यह द्वार 28 फरवरी 1948 को अंतिम ब्रिटिश सैन्य टुकड़ी की भारत से विदाई का भी ऐतिहासिक साक्षी बना।"
        },
        "kids": {
          "en": "This giant gate welcomed kings from across the oceans, and it was also the exact spot from which the last colonial soldiers boarded their ships to go home!",
          "hi": "समुद्र के किनारे बना यह विशाल दरवाज़ा जहाजों से आने वाले राजाओं का स्वागत करता था और यहीं से अंतिम विदेशी सैनिक अपने वतन लौटे थे!"
        }
      }
    ],
    "crowdByHour": [
      {
        "hour": "8 AM",
        "pct": 25,
        "level": 25,
        "status": "Low"
      },
      {
        "hour": "9 AM",
        "pct": 35,
        "level": 35,
        "status": "Low"
      },
      {
        "hour": "10 AM",
        "pct": 50,
        "level": 50,
        "status": "Moderate"
      },
      {
        "hour": "11 AM",
        "pct": 65,
        "level": 65,
        "status": "Moderate"
      },
      {
        "hour": "12 PM",
        "pct": 70,
        "level": 70,
        "status": "High"
      },
      {
        "hour": "1 PM",
        "pct": 68,
        "level": 68,
        "status": "Moderate"
      },
      {
        "hour": "2 PM",
        "pct": 72,
        "level": 72,
        "status": "High"
      },
      {
        "hour": "3 PM",
        "pct": 78,
        "level": 78,
        "status": "High"
      },
      {
        "hour": "4 PM",
        "pct": 85,
        "level": 85,
        "status": "Peak"
      },
      {
        "hour": "5 PM",
        "pct": 92,
        "level": 92,
        "status": "Peak"
      },
      {
        "hour": "6 PM",
        "pct": 88,
        "level": 88,
        "status": "Peak"
      }
    ],
    "nearbyGem": {
      "name": {
        "en": "Sassoon Docks & Art District",
        "hi": "ससून डॉक्स और आर्ट डिस्ट्रिक्ट"
      },
      "distance": {
        "en": "1.6 km south along Colaba · ~15 min walk",
        "hi": "कोलाबा में 1.6 किमी दक्षिण · लगभग 15 मिनट की पैदल दूरी"
      },
      "description": {
        "en": "Built in 1875 as Mumbai's first wet dock, now home to lively morning fish auctions and world-class murals by street artists from across the globe.",
        "hi": "1875 में बनी मुंबई की पहली गोदी, जहां सुबह की ताज़ा मछलियों की नीलामी और विश्वस्तरीय रंग-बिरंगी वॉल पेंटिंग्स देखने योग्य हैं।"
      },
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sassoon+Docks+Mumbai"
    },
    "safety": {
      "police": {
        "en": "Colaba Police Station, Shahid Bhagat Singh Road (550 m)",
        "hi": "कोलाबा पुलिस स्टेशन, शहीद भगत सिंह रोड (550 मीटर)"
      },
      "hospital": {
        "en": "St. George Hospital, P D'Mello Road, Fort (2.3 km)",
        "hi": "सेंट जॉर्ज अस्पताल, फोर्ट, मुंबई (2.3 किमी)"
      },
      "checklist": {
        "en": [
          "Free public entry to the promenade with security frisking at entry gates.",
          "Board authorized ferries only from official counters for Elephanta Island.",
          "Colaba Causeway market is adjacent for shopping and classic Irani cafes.",
          "Evenings (5 PM - 7 PM) bring cool sea breezes but highest visitor density."
        ],
        "hi": [
          "गेटवे देखने के लिए प्रवेश बिल्कुल मुफ़्त है, गेट पर सुरक्षा जांच होती है।",
          "एलीफेंटा गुफा जाने के लिए केवल अधिकृत काउंटर से ही नौका टिकट खरीदें।",
          "पास ही प्रसिद्ध कोलाबा कॉजवे बाज़ार और ईरानी कैफ़े स्थित हैं।",
          "शाम के समय समुद्र की ठंडी हवा चलती है पर भीड़ सबसे ज़्यादा रहती है।"
        ]
      }
    },
    "fares": [
      {
        "route": {
          "en": "Chhatrapati Shivaji Maharaj Terminus (CSMT) → Gateway",
          "hi": "सीएसएमटी स्टेशन → गेटवे ऑफ़ इंडिया"
        },
        "mode": {
          "en": "BEST Electric AC Bus (Route 111 / 112)",
          "hi": "बेस्ट एसी इलेक्ट्रिक बस"
        },
        "distance": "2.5 km",
        "fairRange": "₹6 – ₹10"
      },
      {
        "route": {
          "en": "Churchgate Railway Station → Gateway of India",
          "hi": "चर्चगेट स्टेशन → गेटवे ऑफ़ इंडिया"
        },
        "mode": {
          "en": "Black & Yellow Meter Taxi (Kaali Peeli)",
          "hi": "काली-पीली टैक्सी (मीटर से)"
        },
        "distance": "2.8 km",
        "fairRange": "₹45 – ₹60"
      },
      {
        "route": {
          "en": "Gateway Jetty → Elephanta Caves Island",
          "hi": "गेटवे जेट्टी → एलीफेंटा गुफाएं"
        },
        "mode": {
          "en": "Harbour Passenger Launch Ferry (Return)",
          "hi": "समुद्री नाव (आना-जाना)"
        },
        "distance": "10.0 km",
        "fairRange": "₹200 – ₹260"
      }
    ],
    "shortId": "gateway",
    "secretFact": {
      "title": {
        "en": "The Final British Departure",
        "hi": "ब्रिटिश साम्राज्य की अंतिम विदाई"
      },
      "en": "Though built to welcome King George V in 1911, the Gateway became the historic ceremonial exit through which the last British regiment (First Battalion Somerset Light Infantry) marched out on 28 Feb 1948.",
      "hi": "यद्यपि इसका निर्माण 1911 में जॉर्ज पंचम के स्वागत में हुआ था, किंतु 28 फरवरी 1948 को इसी प्रवेश द्वार से अंतिम ब्रिटिश सैनिक टुकड़ी ने भारत से विदाई ली थी।"
    },
    "sisterGem": {
      "name": {
        "en": "Sassoon Docks Art District",
        "hi": "ससून डॉक कला केंद्र"
      },
      "tagline": {
        "en": "Historic 1875 docklands transformed into quiet art halls",
        "hi": "1875 का ऐतिहासिक डॉकयार्ड और कला दीर्घा"
      },
      "distance": "1.6 km away",
      "crowd": "20%",
      "wait": "0 min",
      "highlight": "Koli Maritime Heritage",
      "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=Sassoon+Dock+Colaba+Mumbai"
    }
  },
  {
    "id": "konark-sun-temple",
    "name": {
      "en": "Konark Sun Temple",
      "hi": "कोणार्क सूर्य मंदिर"
    },
    "city": {
      "en": "Konark, Puri District, Odisha",
      "hi": "कोणार्क, पुरी ज़िला, ओडिशा"
    },
    "coords": {
      "lat": 19.8876,
      "lon": 86.0945
    },
    "lat": 19.8876,
    "lon": 86.0945,
    "era": {
      "en": "Built 1250 CE · King Narasimhadeva I",
      "hi": "निर्माण 1250 ईस्वी · राजा नरसिंहदेव प्रथम"
    },
    "shortSummary": {
      "en": "A monumental 13th-century chariot of the Sun God Surya carved from Khondalite stone with 24 giant stone sundial wheels pulled by seven galloping steeds.",
      "hi": "13वीं सदी का विशाल सूर्य रथ, जिसे खोंडालाइट पत्थर से तराश कर 24 विशाल सूर्य-घड़ी पहियों और 7 घोड़ों के साथ निर्मित किया गया है।"
    },
    "images": [
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1280px-Konarka_Temple.jpg",
        "title": "Great Chariot & Intricately Carved Wheel",
        "caption": {
          "en": "One of the 24 astronomical sundials capable of telling time to the exact minute by shadow cast.",
          "hi": "24 खगोलीय चक्रों में से एक जो सूर्य की परछाई से मिनट की सटीकता तक समय बताता है।"
        },
        "credit": "Wikimedia Commons"
      }
    ],
    "svgIllustration": "\n      <svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Silhouette of Konark Sun Temple chariot wheel\">\n        <defs>\n          <linearGradient id=\"sky-konark\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#431407\"/>\n            <stop offset=\"50%\" stop-color=\"#9A3412\"/>\n            <stop offset=\"100%\" stop-color=\"#F97316\"/>\n          </linearGradient>\n        </defs>\n        <rect width=\"600\" height=\"320\" fill=\"url(#sky-konark)\"/>\n        <circle cx=\"300\" cy=\"180\" r=\"90\" stroke=\"#FEF08A\" stroke-width=\"12\" fill=\"none\"/>\n        <circle cx=\"300\" cy=\"180\" r=\"25\" fill=\"#FEF08A\"/>\n        <line x1=\"300\" y1=\"90\" x2=\"300\" y2=\"270\" stroke=\"#FEF08A\" stroke-width=\"6\"/>\n        <line x1=\"210\" y1=\"180\" x2=\"390\" y2=\"180\" stroke=\"#FEF08A\" stroke-width=\"6\"/>\n        <rect x=\"0\" y=\"270\" width=\"600\" height=\"50\" fill=\"#292524\"/>\n      </svg>\n    ",
    "stories": [
      {
        "id": "kn-1",
        "readTime": "1 min listen",
        "title": {
          "en": "01. The Architectural Sundial That Tells Time",
          "hi": "01. पत्थरों पर बना सटीक टाइम क्लॉक"
        },
        "standard": {
          "en": "Each of the 24 stone wheels is an active sundial. The 8 primary spokes divide the day into three-hour prahar periods, allowing exact time measurement down to minutes.",
          "hi": "मंदिर के 24 पहिये वास्तव में सूर्य-घड़ियां हैं। इनके 8 मुख्य आरे दिन के 8 प्रहरों को दर्शाते हैं, जिनसे धूप की दिशा देखकर सटीक समय बताया जा सकता है।"
        },
        "kids": {
          "en": "These giant stone wheels are ancient clocks! Before wristwatches or phones were invented, people looked at the shadow on the wheel to know when it was lunch time!",
          "hi": "ये बड़े-बड़े पत्थर के पहिये प्राचीन घड़ियां हैं! जब घड़ी या फोन नहीं होते थे, तब लोग इस पर पड़ने वाली परछाई देखकर समय बताते थे!"
        }
      }
    ],
    "crowdByHour": [
      {
        "hour": "8 AM",
        "pct": 15,
        "level": 15,
        "status": "Low"
      },
      {
        "hour": "9 AM",
        "pct": 30,
        "level": 30,
        "status": "Low"
      },
      {
        "hour": "10 AM",
        "pct": 60,
        "level": 60,
        "status": "Moderate"
      },
      {
        "hour": "11 AM",
        "pct": 82,
        "level": 82,
        "status": "High"
      },
      {
        "hour": "12 PM",
        "pct": 80,
        "level": 80,
        "status": "High"
      },
      {
        "hour": "1 PM",
        "pct": 75,
        "level": 75,
        "status": "High"
      },
      {
        "hour": "2 PM",
        "pct": 70,
        "level": 70,
        "status": "High"
      },
      {
        "hour": "3 PM",
        "pct": 65,
        "level": 65,
        "status": "Moderate"
      },
      {
        "hour": "4 PM",
        "pct": 50,
        "level": 50,
        "status": "Moderate"
      },
      {
        "hour": "5 PM",
        "pct": 35,
        "level": 35,
        "status": "Low"
      },
      {
        "hour": "6 PM",
        "pct": 20,
        "level": 20,
        "status": "Low"
      }
    ],
    "nearbyGem": {
      "name": {
        "en": "Chandrabhaga Beach & Sacred Estuary",
        "hi": "चंद्रभागा समुद्र तट"
      },
      "distance": {
        "en": "3.2 km east along Marine Drive · ~6 min drive",
        "hi": "मरीन ड्राइव पर 3.2 किमी पूर्व · लगभग 6 मिनट का रास्ता"
      },
      "description": {
        "en": "A pristine Blue Flag certified golden sand beach where the sacred Chandrabhaga river meets the Bay of Bengal, famous for dramatic sunrises.",
        "hi": "ब्लू फ्लैग प्रमाणित खूबसूरत रेतीला समुद्र तट जहां चंद्रभागा नदी बंगाल की खाड़ी से मिलती है, जो सूर्योदय के लिए विख्यात है।"
      },
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Chandrabhaga+Beach+Konark"
    },
    "safety": {
      "police": {
        "en": "Konark Police Station, Puri-Konark Marine Drive (800 m)",
        "hi": "कोणार्क पुलिस स्टेशन, पुरी-कोणार्क मरीन ड्राइव (800 मीटर)"
      },
      "hospital": {
        "en": "Konark Community Health Centre (CHC Hospital) (1.0 km)",
        "hi": "कोणार्क सामुदायिक स्वास्थ्य केंद्र (1.0 किमी)"
      },
      "checklist": {
        "en": [
          "Coastal humidity can be high; carry drinking water and sun umbrellas.",
          "Authorized audio guides are available near the ASI ticket counter.",
          "Visit the modern Interpretation Centre near the entrance for 3D scale models.",
          "Annual Konark Dance Festival is held every December against the temple backdrop."
        ],
        "hi": [
          "तटीय नमी ज़्यादा रहती है, पीने का पानी और धूप का छाता ज़रूर साथ रखें।",
          "एएसआई काउंटर के पास अधिकृत ऑडियो गाइड उपलब्ध हैं।",
          "मंदिर के पास बने इंटरप्रिटेशन सेंटर में मंदिर के 3D मॉडल देख सकते हैं।",
          "दिसंबर में यहां भव्य कोणार्क नृत्य महोत्सव का आयोजन होता है।"
        ]
      }
    },
    "fares": [
      {
        "route": {
          "en": "Puri Railway Station → Konark Sun Temple",
          "hi": "पुरी रेलवे स्टेशन → कोणार्क सूर्य मंदिर"
        },
        "mode": {
          "en": "OTDC Tourist AC Coach / Bus",
          "hi": "ओटीडीसी एसी बस"
        },
        "distance": "35.0 km",
        "fairRange": "₹60 – ₹90"
      },
      {
        "route": {
          "en": "Bhubaneswar Airport (BBI) → Konark",
          "hi": "भुवनेश्वर एयरपोर्ट → कोणार्क"
        },
        "mode": {
          "en": "Prepaid Cab / App Taxi",
          "hi": "प्रीपेड टैक्सी"
        },
        "distance": "65.0 km",
        "fairRange": "₹1,400 – ₹1,800"
      }
    ],
    "shortId": "konark",
    "secretFact": {
      "title": {
        "en": "Chronometric Sun Dials",
        "hi": "सूर्य घड़ी के सटीक पहिये"
      },
      "en": "The 24 carved stone chariot wheels are scientific sundials. By observing the shadow cast on the spoke beads, temple astronomers calculated the exact time down to a single minute.",
      "hi": "कोणार्क के 24 विशाल रथ चक्र वैज्ञानिक सूर्य घड़ियां हैं। तीलियों पर पड़ने वाली छाया को देखकर प्राचीन खगोलशास्त्री मिनट की सटीकता से समय मापते थे।"
    },
    "sisterGem": {
      "name": {
        "en": "Chandrabhaga Beach & Estuary",
        "hi": "चंद्रभागा समुद्र तट"
      },
      "tagline": {
        "en": "Pristine coastal grove where Sun God cured Samba",
        "hi": "शांत समुद्र तट और पावन नदी संगम"
      },
      "distance": "3.1 km away",
      "crowd": "16%",
      "wait": "0 min",
      "highlight": "Untouched Marine Horizon",
      "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=Chandrabhaga+Beach+Konark"
    }
  },
  {
    "id": "meenakshi-temple",
    "name": {
      "en": "Meenakshi Amman Temple",
      "hi": "मीनाक्षी अम्मन मंदिर"
    },
    "city": {
      "en": "Madurai, Tamil Nadu",
      "hi": "मदुरै, तमिलनाडु"
    },
    "coords": {
      "lat": 9.9195,
      "lon": 78.1193
    },
    "lat": 9.9195,
    "lon": 78.1193,
    "era": {
      "en": "6th Century CE / Rebuilt 16th–17th CE · Nayaka Dynasty",
      "hi": "छठी सदी / पुनर्निर्माण 16वीं-17वीं सदी · नायक राजवंश"
    },
    "shortSummary": {
      "en": "A spiritual wonder in the historic temple city of Madurai, renowned for 14 towering gopurams encrusted with thousands of painted stucco sculptures and the Hall of 1,000 Pillars.",
      "hi": "प्राचीन सांस्कृतिक नगरी मदुरै का विख्यात मंदिर, जो 14 गगनचुंबी रंग-बिरंगे गोपुरमों और 1,000 खंभों वाले संगीत मंडप के लिए प्रसिद्ध है।"
    },
    "images": [
      {
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg/1280px-An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg",
        "title": "Aerial View of Temple City Spire",
        "caption": {
          "en": "The towering South Gopuram soaring 52 metres high over the ancient concentric lotus grid of Madurai.",
          "hi": "मदुरै शहर के मध्य 52 मीटर ऊंचा दक्षिणी गोपुरम जिसकी दीवारों पर हज़ारों मूर्तियां तराशी गई हैं।"
        },
        "credit": "Wikimedia Commons"
      }
    ],
    "svgIllustration": "\n      <svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Silhouette of Dravidian Temple Gopuram\">\n        <defs>\n          <linearGradient id=\"sky-madurai\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#064E3B\"/>\n            <stop offset=\"60%\" stop-color=\"#047857\"/>\n            <stop offset=\"100%\" stop-color=\"#FCD34D\"/>\n          </linearGradient>\n        </defs>\n        <rect width=\"600\" height=\"320\" fill=\"url(#sky-madurai)\"/>\n        <polygon points=\"300,50 200,260 400,260\" fill=\"#B45309\"/>\n        <line x1=\"220\" y1=\"210\" x2=\"380\" y2=\"210\" stroke=\"#FEF08A\" stroke-width=\"4\"/>\n        <line x1=\"240\" y1=\"160\" x2=\"360\" y2=\"160\" stroke=\"#FEF08A\" stroke-width=\"4\"/>\n        <line x1=\"265\" y1=\"110\" x2=\"335\" y2=\"110\" stroke=\"#FEF08A\" stroke-width=\"4\"/>\n        <rect x=\"0\" y=\"260\" width=\"600\" height=\"60\" fill=\"#1C1917\"/>\n      </svg>\n    ",
    "stories": [
      {
        "id": "mk-1",
        "readTime": "1 min listen",
        "title": {
          "en": "01. Hall of a Thousand Pillars & Musical Columns",
          "hi": "01. हज़ार खंभों का मंडप और संगीतमय स्तंभ"
        },
        "standard": {
          "en": "The Aayiram Kaal Mandapam houses 985 meticulously carved granite pillars. Nearby stand monolithic acoustic pillars that produce distinct musical notes (swaras) when gently tapped.",
          "hi": "मंदिर के 'आयिरम काल मंडपम' में 985 नक्काशीदार खंभे हैं। पास ही स्थित संगीत स्तंभों को थपथपाने पर भारतीय संगीत के अलग-अलग सुर सुनाई देते हैं।"
        },
        "kids": {
          "en": "Did you know there are rock pillars here that sing music when you tap on them like a xylophone made of stone?",
          "hi": "क्या आप जानते हैं कि यहां ऐसे पत्थर के खंभे हैं जिन्हें थपथपाने पर बांसुरी और सितार जैसी सुरीली आवाज़ें निकलती हैं!"
        }
      }
    ],
    "crowdByHour": [
      {
        "hour": "8 AM",
        "pct": 45,
        "level": 45,
        "status": "Moderate"
      },
      {
        "hour": "9 AM",
        "pct": 60,
        "level": 60,
        "status": "Moderate"
      },
      {
        "hour": "10 AM",
        "pct": 75,
        "level": 75,
        "status": "High"
      },
      {
        "hour": "11 AM",
        "pct": 80,
        "level": 80,
        "status": "High"
      },
      {
        "hour": "12 PM",
        "pct": 40,
        "level": 40,
        "status": "Low"
      },
      {
        "hour": "1 PM",
        "pct": 15,
        "level": 15,
        "status": "Low"
      },
      {
        "hour": "2 PM",
        "pct": 20,
        "level": 20,
        "status": "Low"
      },
      {
        "hour": "3 PM",
        "pct": 35,
        "level": 35,
        "status": "Low"
      },
      {
        "hour": "4 PM",
        "pct": 65,
        "level": 65,
        "status": "Moderate"
      },
      {
        "hour": "5 PM",
        "pct": 85,
        "level": 85,
        "status": "Peak"
      },
      {
        "hour": "6 PM",
        "pct": 90,
        "level": 90,
        "status": "Peak"
      }
    ],
    "nearbyGem": {
      "name": {
        "en": "Thirumalai Nayakkar Mahal",
        "hi": "तिरुमलाई नायक महल"
      },
      "distance": {
        "en": "1.8 km south-east · ~7 min drive",
        "hi": "1.8 किमी दक्षिण-पूर्व · लगभग 7 मिनट का रास्ता"
      },
      "description": {
        "en": "A 17th-century Italian-Dravidian palace celebrated for its massive stucco-plastered circular white pillars over 20 metres high and cool interior courtyards.",
        "hi": "17वीं सदी का भव्य महल जो 20 मीटर ऊंचे गोल सफ़ेद खंभों और इंडो-इतालवी स्थापत्य कला के लिए प्रसिद्ध है।"
      },
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Thirumalai+Nayakkar+Mahal+Madurai"
    },
    "safety": {
      "police": {
        "en": "Madurai Temple Police Station, East Tower Street (200 m)",
        "hi": "मदुरै मंदिर पुलिस थाना, ईस्ट टावर स्ट्रीट (200 मीटर)"
      },
      "hospital": {
        "en": "Government Rajaji Hospital, Panagal Road, Madurai (1.5 km)",
        "hi": "राजकीय राजाजी अस्पताल, मदुरै (1.5 किमी)"
      },
      "checklist": {
        "en": [
          "Strict dress code applies: shoulders and knees must be respectfully covered.",
          "Mobile phones and smart watches are restricted inside the inner sanctum.",
          "Temple closes between 12:30 PM and 4:00 PM for afternoon rituals.",
          "Footwear must be deposited at the free official shoe counter outside any gopuram."
        ],
        "hi": [
          "मंदिर में पारंपरिक पोशाक अनिवार्य है (कंधे और घुटने ढके होने चाहिए)।",
          "गर्भगृह के अंदर मोबाइल फोन और स्मार्ट घड़ियां ले जाना प्रतिबंधित है।",
          "दोपहर 12:30 से शाम 4:00 बजे तक मंदिर दर्शन के लिए बंद रहता है।",
          "जूते-चप्पल बाहर अधिकृत काउंटर पर जमा करें।"
        ]
      }
    },
    "fares": [
      {
        "route": {
          "en": "Madurai Junction Railway Station → Meenakshi Temple",
          "hi": "मदुरै रेलवे स्टेशन → मीनाक्षी मंदिर"
        },
        "mode": {
          "en": "Auto-Rickshaw / E-Cart",
          "hi": "ऑटो-रिक्शा / ई-कार्ट"
        },
        "distance": "1.8 km",
        "fairRange": "₹50 – ₹80"
      },
      {
        "route": {
          "en": "Madurai Airport (IXM) → Temple East Gate",
          "hi": "मदुरै एयरपोर्ट → मंदिर पूर्वी गेट"
        },
        "mode": {
          "en": "Prepaid Taxi",
          "hi": "प्रीपेड टैक्सी"
        },
        "distance": "12.0 km",
        "fairRange": "₹350 – ₹450"
      }
    ],
    "shortId": "meenakshi",
    "secretFact": {
      "title": {
        "en": "33,000 Polychrome Stucco Sculptures",
        "hi": "33,000 रंगीन मूर्तियां"
      },
      "en": "The 14 towering gopurams contain an astounding 33,000 hand-carved stucco sculptures of celestial beings, restored and repainted with natural mineral pigments every 12 years.",
      "hi": "मीनाक्षी मंदिर के 14 गोपुरमों पर 33,000 से अधिक हाथ से तराशी गई देवी-देवताओं की मूर्तियां हैं, जिन्हें हर 12 साल में प्राकृतिक रंगों से पुनः सजाया जाता है।"
    },
    "sisterGem": {
      "name": {
        "en": "Thirumalai Nayakkar Mahal",
        "hi": "तिरुमलाई नायक महल"
      },
      "tagline": {
        "en": "Stunning Indo-Saracenic royal palace with giant stucco pillars",
        "hi": "विशाल खंभों वाला भव्य 17वीं सदी का महल"
      },
      "distance": "1.9 km away",
      "crowd": "22%",
      "wait": "0 min",
      "highlight": "Acoustic Palace Dome",
      "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=Thirumalai+Nayakkar+Mahal+Madurai"
    }
  },
  {
    "id": "ajanta-caves",
    "name": {
      "en": "Ajanta Caves",
      "hi": "अजन्ता की गुफ़ाएं"
    },
    "city": {
      "en": "Chhatrapati Sambhajinagar (Aurangabad), Maharashtra",
      "hi": "छत्रपति संभाजीनगर (औरंगाबाद), महाराष्ट्र"
    },
    "coords": {
      "lat": 20.5519,
      "lon": 75.7033
    },
    "lat": 20.5519,
    "lon": 75.7033,
    "era": {
      "en": "2nd Century BCE – 480 CE · Satavahana & Vakataka Dynasties",
      "hi": "दूसरी सदी ईसा पूर्व – 480 ईस्वी · सातवाहन एवं वाकाटक राजवंश"
    },
    "shortSummary": {
      "en": "Thirty rock-cut Buddhist cave monuments excavated into a horseshoe-shaped cliff above the Waghora River, world-renowned for exquisite ancient mural paintings.",
      "hi": "वाघोरा नदी की घुमावदार घाटी में चट्टानों को काटकर बनाई गई 30 बौद्ध गुफाएं, जो अपनी प्राचीन भित्ति-चित्रकला और जातक कथाओं के लिए जगविख्यात हैं।"
    },
    "images": [
      {
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ajanta_%2863%29.jpg",
        "title": "Horseshoe Gorge & Rock-Cut Cave Facades",
        "caption": {
          "en": "The semicircular volcanic basalt cliff housing 30 ancient viharas and chaityas overlooking the serene canyon.",
          "hi": "अर्धचंद्राकार पहाड़ी चट्टान जिसमें 30 प्राचीन बौद्ध विहार और चैत्य घाटी के सामने बने हुए हैं।"
        },
        "credit": "Wikimedia Commons"
      }
    ],
    "svgIllustration": "\n      <svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Silhouette of horseshoe gorge Ajanta Caves\">\n        <defs>\n          <linearGradient id=\"sky-ajanta\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#14532D\"/>\n            <stop offset=\"60%\" stop-color=\"#15803D\"/>\n            <stop offset=\"100%\" stop-color=\"#86EFAC\"/>\n          </linearGradient>\n        </defs>\n        <rect width=\"600\" height=\"320\" fill=\"url(#sky-ajanta)\"/>\n        <path d=\"M0 240 Q150 140 300 220 T600 200 L600 320 L0 320 Z\" fill=\"#27272A\"/>\n        <circle cx=\"150\" cy=\"230\" r=\"12\" fill=\"#FDE68A\"/>\n        <circle cx=\"250\" cy=\"240\" r=\"12\" fill=\"#FDE68A\"/>\n        <circle cx=\"350\" cy=\"235\" r=\"12\" fill=\"#FDE68A\"/>\n        <circle cx=\"450\" cy=\"225\" r=\"12\" fill=\"#FDE68A\"/>\n        <rect x=\"0\" y=\"280\" width=\"600\" height=\"40\" fill=\"#18181B\"/>\n      </svg>\n    ",
    "stories": [
      {
        "id": "aj-1",
        "readTime": "1 min listen",
        "title": {
          "en": "01. Padmapani: The Masterpiece of Ancient Indian Art",
          "hi": "01. पद्मपाणि: प्राचीन भारतीय चित्रकला का शिखर"
        },
        "standard": {
          "en": "In Cave 1, the graceful mural of Bodhisattva Padmapani holding a blue lotus displays timeless serenity, rendered using natural mineral pigments like lapis, ochre, and malachite.",
          "hi": "गुफा संख्या 1 में हाथ में नीला कमल लिए बोधिसत्व पद्मपाणि का चित्र प्राकृतिक रंगों जैसे लाजवर्द और गेरू से बना है, जिसकी सौम्य भाव-भंगिमा विश्वप्रसिद्ध है।"
        },
        "kids": {
          "en": "Monks lived and painted inside dark caves using natural colors made from real crushed blue rocks, yellow earth, and green leaves!",
          "hi": "हज़ारों साल पहले बौद्ध भिक्षुओं ने इन गुफाओं में रहकर पिसे हुए नीले पत्थरों और जड़ी-बूटियों के रंगों से सुंदर चित्र बनाए थे!"
        }
      }
    ],
    "crowdByHour": [
      {
        "hour": "8 AM",
        "pct": 15,
        "level": 15,
        "status": "Low"
      },
      {
        "hour": "9 AM",
        "pct": 28,
        "level": 28,
        "status": "Low"
      },
      {
        "hour": "10 AM",
        "pct": 55,
        "level": 55,
        "status": "Moderate"
      },
      {
        "hour": "11 AM",
        "pct": 75,
        "level": 75,
        "status": "High"
      },
      {
        "hour": "12 PM",
        "pct": 82,
        "level": 82,
        "status": "High"
      },
      {
        "hour": "1 PM",
        "pct": 78,
        "level": 78,
        "status": "High"
      },
      {
        "hour": "2 PM",
        "pct": 70,
        "level": 70,
        "status": "High"
      },
      {
        "hour": "3 PM",
        "pct": 58,
        "level": 58,
        "status": "Moderate"
      },
      {
        "hour": "4 PM",
        "pct": 40,
        "level": 40,
        "status": "Low"
      },
      {
        "hour": "5 PM",
        "pct": 20,
        "level": 20,
        "status": "Low"
      },
      {
        "hour": "6 PM",
        "pct": 10,
        "level": 10,
        "status": "Low"
      }
    ],
    "nearbyGem": {
      "name": {
        "en": "Ajanta Viewpoint across Waghora Gorge",
        "hi": "अजन्ता व्यूपॉइंट"
      },
      "distance": {
        "en": "4.5 km by cliffside track · ~12 min drive",
        "hi": "घाटी के पार 4.5 किमी · लगभग 12 मिनट का रास्ता"
      },
      "description": {
        "en": "The exact vantage point on the upper plateau from where British officer John Smith first spotted Cave 10 while tiger hunting in 1819.",
        "hi": "ऊंची पहाड़ी का वह स्थान जहां से 1819 में ब्रिटिश अधिकारी जॉन स्मिथ ने पहली बार घने जंगलों में छिपी इन गुफाओं को देखा था।"
      },
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ajanta+View+Point"
    },
    "safety": {
      "police": {
        "en": "Ajanta Police Chowki, T-Junction Bus Terminal (3.5 km)",
        "hi": "अजन्ता पुलिस चौकी, टी-पॉइंट बस टर्मिनल (3.5 किमी)"
      },
      "hospital": {
        "en": "Rural Hospital Fardapur, Jalgaon Road (4.0 km)",
        "hi": "ग्रामीण अस्पताल फरदापुर (4.0 किमी)"
      },
      "checklist": {
        "en": [
          "Ajanta Caves are strictly closed on Mondays for conservation work.",
          "Flash photography and tripods are strictly prohibited inside the caves.",
          "Eco-friendly MSRTC shuttle buses operate between T-Point and the caves.",
          "Carry a small torch or phone light to view dimly lit cave murals."
        ],
        "hi": [
          "अजन्ता गुफ़ाएं हर सोमवार को संरक्षण कार्य हेतु बंद रहती हैं।",
          "गुफ़ाओं के अंदर फ़्लैश लाइट और ट्राइपॉड का उपयोग पूरी तरह वर्जित है।",
          "टी-पॉइंट पार्किंग से गुफाओं तक केवल पर्यावरण अनुकूल शटल बसें चलती हैं।",
          "दीवारों के चित्र देखने के लिए हल्की टॉर्च साथ रख सकते हैं।"
        ]
      }
    },
    "fares": [
      {
        "route": {
          "en": "T-Point Visitor Center → Ajanta Caves Entrance",
          "hi": "टी-पॉइंट पार्किंग → मुख्य गुफ़ा प्रवेश"
        },
        "mode": {
          "en": "MSRTC Green AC Shuttle Bus",
          "hi": "हरित एसी शटल बस"
        },
        "distance": "4.0 km",
        "fairRange": "₹25 – ₹30"
      },
      {
        "route": {
          "en": "Chhatrapati Sambhajinagar (Aurangabad) Station → Ajanta",
          "hi": "औरंगाबाद स्टेशन → अजन्ता गुफ़ाएं"
        },
        "mode": {
          "en": "State Transport Bus / App Taxi",
          "hi": "सरकारी बस / टैक्सी"
        },
        "distance": "102.0 km",
        "fairRange": "₹150 (Bus) – ₹2,200 (Cab)"
      }
    ],
    "shortId": "ajanta",
    "secretFact": {
      "title": {
        "en": "Mirror-Lit Fresco Painting Technique",
        "hi": "दर्पण से रोशन भित्ति चित्र"
      },
      "en": "Buddhist monks painted the subterranean cave ceiling frescoes without oil lamps—which would leave soot—by using polished bronze mirrors and white sheet reflectors to redirect outside sunlight.",
      "hi": "गुफाओं में अंधेरे के बावजूद भिक्षुओं ने बिना मशाल (जिससे कालिख जमती) के केवल पॉलिश किए कांस्य दर्पणों से धूप परावर्तित करके इन अमूल्य चित्रों को बनाया था।"
    },
    "sisterGem": {
      "name": {
        "en": "Ajanta Viewpoint across Waghora Gorge",
        "hi": "अजंता व्यूप्वाइंट (वाघोरा घाटी)"
      },
      "tagline": {
        "en": "The horseshoe clifftop where John Smith rediscovered caves in 1819",
        "hi": "पहाड़ी की चोटी जहां से संपूर्ण अजंता का विहंगम दृश्य दिखता है"
      },
      "distance": "2.5 km away",
      "crowd": "5%",
      "wait": "0 min",
      "highlight": "Breathtaking Gorge Panorama",
      "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=Ajanta+View+Point+Lenapur"
    }
  }
];


// ==========================================================================
// SafarSaarthi Metro Transit Networks & Station Directory (METRO_NETWORKS)
// ==========================================================================
const METRO_NETWORKS = [
  {
    "id": "delhi-ncr",
    "name": {
      "en": "Delhi NCR Metro (DMRC)",
      "hi": "दिल्ली एनसीआर मेट्रो (DMRC)"
    },
    "tagline": {
      "en": "Connecting Delhi, Faridabad, Gurugram & Noida",
      "hi": "दिल्ली, फरीदाबाद, गुरुग्राम एवं नोएडा नेटवर्क"
    },
    "cities": [
      "Delhi",
      "Faridabad",
      "Gurugram",
      "Noida"
    ],
    "totalStations": 288,
    "linesCount": "12 Lines · 393 km Network",
    "timings": "05:30 AM – 11:30 PM",
    "fare": "₹10 – ₹60 (NCMC & Smart Card 10% off)",
    "officialMapUrl": "https://www.delhimetrorail.com/network_map",
    "officialPortalUrl": "https://www.delhimetrorail.com/",
    "svgMap": "<svg viewBox=\"0 0 800 480\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto select-none font-sans\">\n      <defs>\n        <filter id=\"shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"2\" flood-opacity=\"0.15\"/></filter>\n      </defs>\n      <!-- Background Grid -->\n      <rect width=\"800\" height=\"480\" fill=\"#faf7f2\" rx=\"12\"/>\n      <path d=\"M 0 120 L 800 120 M 0 240 L 800 240 M 0 360 L 800 360 M 200 0 L 200 480 M 400 0 L 400 480 M 600 0 L 600 480\" stroke=\"#eee8de\" stroke-width=\"1\" stroke-dasharray=\"4,6\"/>\n      \n      <!-- Yamuna River Ribbon -->\n      <path d=\"M 450 0 C 470 120, 500 220, 480 340 C 470 410, 490 480, 510 480\" fill=\"none\" stroke=\"#dbeafe\" stroke-width=\"26\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n      <text x=\"500\" y=\"240\" fill=\"#60a5fa\" font-size=\"11\" font-weight=\"600\" transform=\"rotate(75, 500, 240)\" letter-spacing=\"3\">YAMUNA RIVER</text>\n\n      <!-- Lines -->\n      <!-- Red Line (Line 1) -->\n      <line x1=\"80\" y1=\"80\" x2=\"720\" y2=\"80\" stroke=\"#ef4444\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n      \n      <!-- Yellow Line (Line 2) -->\n      <path d=\"M 230 30 L 370 80 L 330 140 L 300 200 L 300 260 L 250 330 L 190 400 L 120 450\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      \n      <!-- Blue Line (Line 3/4) -->\n      <path d=\"M 60 270 L 200 240 L 300 200 L 430 200 L 590 240 L 730 260\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      \n      <!-- Violet Line (Line 6 - Faridabad Corridor) -->\n      <path d=\"M 370 80 L 420 130 L 400 180 L 300 260 L 370 320 L 410 360 L 440 395 L 470 430 L 500 465\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n\n      <!-- Airport Express Line -->\n      <path d=\"M 330 140 L 220 220 L 140 290 L 80 350\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"4\" stroke-dasharray=\"6,4\" stroke-linecap=\"round\"/>\n\n      <!-- Interchange Stations Rings -->\n      <!-- Kashmere Gate (Red/Yellow/Violet) -->\n      <circle cx=\"370\" cy=\"80\" r=\"10\" fill=\"#ffffff\" stroke=\"#1c1b1a\" stroke-width=\"3\"/>\n      <text x=\"370\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#1c1b1a\">Kashmere Gate 🔄</text>\n\n      <!-- Rajiv Chowk (Yellow/Blue) -->\n      <circle cx=\"300\" cy=\"200\" r=\"10\" fill=\"#ffffff\" stroke=\"#1c1b1a\" stroke-width=\"3\"/>\n      <text x=\"290\" y=\"190\" text-anchor=\"end\" font-size=\"11\" font-weight=\"bold\" fill=\"#1c1b1a\">Rajiv Chowk (CP) 🔄</text>\n\n      <!-- Central Secretariat (Yellow/Violet) -->\n      <circle cx=\"300\" cy=\"260\" r=\"9\" fill=\"#ffffff\" stroke=\"#1c1b1a\" stroke-width=\"2.5\"/>\n      <text x=\"285\" y=\"264\" text-anchor=\"end\" font-size=\"10\" font-weight=\"bold\" fill=\"#1c1b1a\">Central Sectt 🔄</text>\n\n      <!-- Heritage Stations & Callouts -->\n      <!-- Lal Qila Station (Violet Line) -->\n      <circle cx=\"420\" cy=\"130\" r=\"6\" fill=\"#8b5cf6\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <g filter=\"url(#shadow)\">\n        <rect x=\"432\" y=\"118\" width=\"130\" height=\"24\" rx=\"12\" fill=\"#ffffff\" stroke=\"#8b5cf6\" stroke-width=\"1.5\"/>\n        <text x=\"442\" y=\"134\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#8b5cf6\">🏛️ Lal Qila (Red Fort)</text>\n      </g>\n\n      <!-- Chandni Chowk Station (Yellow Line) -->\n      <circle cx=\"330\" cy=\"140\" r=\"5\" fill=\"#eab308\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <text x=\"320\" y=\"136\" text-anchor=\"end\" font-size=\"9.5\" font-weight=\"600\" fill=\"#5a544c\">Chandni Chowk</text>\n\n      <!-- Qutub Minar Station (Yellow Line) -->\n      <circle cx=\"190\" cy=\"400\" r=\"6\" fill=\"#eab308\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <g filter=\"url(#shadow)\">\n        <rect x=\"55\" y=\"388\" width=\"124\" height=\"24\" rx=\"12\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>\n        <text x=\"65\" y=\"404\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#854d0e\">🗼 Qutub Minar</text>\n      </g>\n\n      <!-- FARIDABAD CORRIDOR HIGHLIGHTS (Violet Line) -->\n      <!-- Badkal Mor -->\n      <circle cx=\"410\" cy=\"360\" r=\"5\" fill=\"#8b5cf6\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <text x=\"422\" y=\"364\" font-size=\"9\" font-weight=\"600\" fill=\"#4c1d95\">Badkal Mor (Faridabad)</text>\n\n      <!-- Old Faridabad -->\n      <circle cx=\"440\" cy=\"395\" r=\"5\" fill=\"#8b5cf6\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <text x=\"452\" y=\"399\" font-size=\"9\" font-weight=\"600\" fill=\"#4c1d95\">Old Faridabad Stn</text>\n\n      <!-- Bata Chowk (User Location Landmark) -->\n      <circle cx=\"470\" cy=\"430\" r=\"7\" fill=\"#7c3aed\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>\n      <g filter=\"url(#shadow)\">\n        <rect x=\"484\" y=\"418\" width=\"150\" height=\"24\" rx=\"12\" fill=\"#7c3aed\"/>\n        <text x=\"494\" y=\"434\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#ffffff\">📍 Bata Chowk (Faridabad)</text>\n      </g>\n\n      <!-- Raja Nahar Singh (Ballabhgarh Terminus) -->\n      <circle cx=\"500\" cy=\"465\" r=\"5\" fill=\"#8b5cf6\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <text x=\"512\" y=\"469\" font-size=\"9\" font-weight=\"600\" fill=\"#4c1d95\">Raja Nahar Singh (Ballabhgarh)</text>\n\n      <!-- Legend -->\n      <g transform=\"translate(20, 20)\" font-size=\"10\" font-weight=\"600\">\n        <rect width=\"180\" height=\"120\" rx=\"8\" fill=\"#ffffff\" stroke=\"#e1dcd3\" filter=\"url(#shadow)\"/>\n        <text x=\"12\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#1c1b1a\">Delhi NCR Metro Lines</text>\n        <circle cx=\"20\" cy=\"38\" r=\"4\" fill=\"#8b5cf6\"/><text x=\"32\" y=\"41\" fill=\"#4c1d95\">Violet Line (Faridabad - Delhi)</text>\n        <circle cx=\"20\" cy=\"56\" r=\"4\" fill=\"#eab308\"/><text x=\"32\" y=\"59\" fill=\"#854d0e\">Yellow Line (Gurugram - Delhi)</text>\n        <circle cx=\"20\" cy=\"74\" r=\"4\" fill=\"#3b82f6\"/><text x=\"32\" y=\"77\" fill=\"#1e3a8a\">Blue Line (Dwarka - Noida)</text>\n        <circle cx=\"20\" cy=\"92\" r=\"4\" fill=\"#ef4444\"/><text x=\"32\" y=\"95\" fill=\"#991b1b\">Red Line (Rithala - Ghaziabad)</text>\n        <line x1=\"14\" y1=\"108\" x2=\"26\" y2=\"108\" stroke=\"#f97316\" stroke-width=\"3\" stroke-dasharray=\"3,2\"/><text x=\"32\" y=\"111\" fill=\"#c2410c\">Airport Express (IGI T3)</text>\n      </g>\n    </svg>",
    "stations": [
      {
        "id": "bata-chowk",
        "name": {
          "en": "Bata Chowk",
          "hi": "बाटा चौक"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.3752,
        "lon": 77.3168,
        "city": "Faridabad",
        "landmark": "Faridabad Heritage & Industrial Hub",
        "gate": "Gate 1 (Mathura Rd)"
      },
      {
        "id": "old-faridabad",
        "name": {
          "en": "Old Faridabad",
          "hi": "ओल्ड फरीदाबाद"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.4116,
        "lon": 77.3147,
        "city": "Faridabad",
        "landmark": "Old Faridabad Rail Terminus",
        "gate": "Gate 2 (Railway Stn)"
      },
      {
        "id": "neelam-chowk",
        "name": {
          "en": "Neelam Chowk Ajronda",
          "hi": "नीलम चौक अज्रोंडा"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.3962,
        "lon": 77.316,
        "city": "Faridabad",
        "landmark": "Central Faridabad Commercial",
        "gate": "Gate 1 (Ajronda Chowk)"
      },
      {
        "id": "badkal-mor",
        "name": {
          "en": "Badkal Mor",
          "hi": "बड़खल मोड़"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.4285,
        "lon": 77.3121,
        "city": "Faridabad",
        "landmark": "Badkhal Lake Eco Corridor",
        "gate": "Gate 1 (Badkhal Rd)"
      },
      {
        "id": "sector-28",
        "name": {
          "en": "Sector 28",
          "hi": "सेक्टर 28"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.4447,
        "lon": 77.3101,
        "city": "Faridabad",
        "landmark": "Faridabad North",
        "gate": "Gate 2 (NH-19)"
      },
      {
        "id": "mewala-maharajpur",
        "name": {
          "en": "Mewala Maharajpur",
          "hi": "मेवला महाराजपुर"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.4608,
        "lon": 77.3079,
        "city": "Faridabad",
        "landmark": "Sector 31 Corridor",
        "gate": "Gate 1"
      },
      {
        "id": "nhpc-chowk",
        "name": {
          "en": "NHPC Chowk",
          "hi": "एनएचपीसी चौक"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.4777,
        "lon": 77.3061,
        "city": "Faridabad",
        "landmark": "Surajkund Crafts Mela Feeder",
        "gate": "Gate 1 (Surajkund Rd)"
      },
      {
        "id": "sarai",
        "name": {
          "en": "Sarai",
          "hi": "सराय"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.4975,
        "lon": 77.3042,
        "city": "Faridabad",
        "landmark": "Delhi-Faridabad Toll Border",
        "gate": "Gate 2"
      },
      {
        "id": "escorts-mujesar",
        "name": {
          "en": "Escorts Mujesar",
          "hi": "एस्कॉर्ट्स मुजेसर"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.3562,
        "lon": 77.319,
        "city": "Faridabad",
        "landmark": "YMCA Univ & Sector 11",
        "gate": "Gate 1"
      },
      {
        "id": "raja-nahar-singh",
        "name": {
          "en": "Raja Nahar Singh (Ballabhgarh)",
          "hi": "राजा नाहर सिंह (बल्लभगढ़)"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.337,
        "lon": 77.3228,
        "city": "Faridabad",
        "landmark": "Ballabhgarh Palace & Bus Port",
        "gate": "Gate 3 (Ballabhgarh Bus Stand)"
      },
      {
        "id": "lal-qila",
        "name": {
          "en": "Lal Qila (Red Fort)",
          "hi": "लाल किला"
        },
        "line": "Violet Line (Line 6)",
        "color": "#8B5CF6",
        "lat": 28.656,
        "lon": 77.2384,
        "city": "Delhi",
        "landmark": "Red Fort & Meena Bazaar",
        "gate": "Gate 4 (Direct to Lahori Gate)",
        "monumentMatch": "red-fort"
      },
      {
        "id": "chandni-chowk",
        "name": {
          "en": "Chandni Chowk",
          "hi": "चाँदनी चौक"
        },
        "line": "Yellow Line (Line 2)",
        "color": "#EAB308",
        "lat": 28.6578,
        "lon": 77.2302,
        "city": "Delhi",
        "landmark": "Sis Ganj Gurudwara & Old Delhi",
        "gate": "Gate 1 (Town Hall)"
      },
      {
        "id": "qutub-minar",
        "name": {
          "en": "Qutub Minar",
          "hi": "क़ुतुब मीनार"
        },
        "line": "Yellow Line (Line 2)",
        "color": "#EAB308",
        "lat": 28.5135,
        "lon": 77.1856,
        "city": "Delhi",
        "landmark": "Qutub Minar UNESCO Complex (900m)",
        "gate": "Gate 2 (Feeder E-Rickshaw)",
        "monumentMatch": "qutub-minar"
      },
      {
        "id": "rajiv-chowk",
        "name": {
          "en": "Rajiv Chowk",
          "hi": "राजीव चौक"
        },
        "line": "Yellow / Blue Interchange",
        "color": "#3B82F6",
        "lat": 28.6328,
        "lon": 77.2195,
        "city": "Delhi",
        "landmark": "Connaught Place Heritage Colonnade",
        "gate": "Gate 7 (Central Park)"
      },
      {
        "id": "kashmere-gate",
        "name": {
          "en": "Kashmere Gate",
          "hi": "कश्मीरी गेट"
        },
        "line": "Red / Yellow / Violet Interchange",
        "color": "#EF4444",
        "lat": 28.6675,
        "lon": 77.2285,
        "city": "Delhi",
        "landmark": "Historic Kashmere Gate & ISBT",
        "gate": "Gate 3"
      },
      {
        "id": "central-sec",
        "name": {
          "en": "Central Secretariat",
          "hi": "केंद्रीय सचिवालय"
        },
        "line": "Yellow / Violet Interchange",
        "color": "#EAB308",
        "lat": 28.6147,
        "lon": 77.2119,
        "city": "Delhi",
        "landmark": "National Museum & India Gate",
        "gate": "Gate 3 (Kartavya Path)"
      }
    ]
  },
  {
    "id": "agra",
    "name": {
      "en": "Agra Metro (UPMRC)",
      "hi": "आगरा मेट्रो (UPMRC)"
    },
    "tagline": {
      "en": "Priority Heritage Corridor connecting Taj Mahal & Fort",
      "hi": "ताज महल व आगरा किला हेरिटेज कॉरिडोर"
    },
    "cities": [
      "Agra"
    ],
    "totalStations": 6,
    "linesCount": "Priority Yellow Line · 6 km Operational",
    "timings": "06:00 AM – 10:00 PM",
    "fare": "₹10 – ₹30 (NCMC & UPI QR enabled)",
    "officialMapUrl": "https://www.upmetrorail.com/page.php?id=agra-metro",
    "officialPortalUrl": "https://www.upmetrorail.com/",
    "svgMap": "<svg viewBox=\"0 0 700 320\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto select-none font-sans\">\n      <defs>\n        <filter id=\"shadow-ag\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"2\" flood-opacity=\"0.15\"/></filter>\n      </defs>\n      <rect width=\"700\" height=\"320\" fill=\"#faf7f2\" rx=\"12\"/>\n      \n      <!-- Yamuna River Curve in Agra -->\n      <path d=\"M 0 60 C 200 40, 360 80, 480 170 C 560 230, 640 280, 700 290\" fill=\"none\" stroke=\"#dbeafe\" stroke-width=\"32\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n      <text x=\"250\" y=\"52\" fill=\"#60a5fa\" font-size=\"11\" font-weight=\"600\" letter-spacing=\"2\">YAMUNA RIVER (AGRA)</text>\n\n      <!-- Yellow Line Route -->\n      <path d=\"M 90 90 L 210 130 L 330 170 L 440 200 L 530 230 L 610 260\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n\n      <!-- Stations -->\n      <!-- 1. Mankameshwar -->\n      <circle cx=\"90\" cy=\"90\" r=\"7\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n      <text x=\"90\" y=\"72\" text-anchor=\"middle\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1c1b1a\">Mankameshwar Mandir</text>\n      <text x=\"90\" y=\"112\" text-anchor=\"middle\" font-size=\"9\" fill=\"#854d0e\">मनकामेश्वर (जामा मस्जिद)</text>\n\n      <!-- 2. Agra Fort Metro -->\n      <circle cx=\"210\" cy=\"130\" r=\"8\" fill=\"#ca8a04\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>\n      <g filter=\"url(#shadow-ag)\">\n        <rect x=\"145\" y=\"145\" width=\"130\" height=\"24\" rx=\"12\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>\n        <text x=\"155\" y=\"161\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#854d0e\">🏰 Agra Fort Metro</text>\n      </g>\n\n      <!-- 3. Taj Mahal Metro -->\n      <circle cx=\"330\" cy=\"170\" r=\"7\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n      <text x=\"330\" y=\"152\" text-anchor=\"middle\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1c1b1a\">Taj Mahal Metro</text>\n      <text x=\"330\" y=\"192\" text-anchor=\"middle\" font-size=\"9\" fill=\"#854d0e\">पुरानी मंडी चौराहा</text>\n\n      <!-- 4. Fatehabad Road -->\n      <circle cx=\"440\" cy=\"200\" r=\"7\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n      <text x=\"440\" y=\"182\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#1c1b1a\">Fatehabad Road</text>\n      <text x=\"440\" y=\"222\" text-anchor=\"middle\" font-size=\"9\" fill=\"#854d0e\">हस्तशिल्प बाज़ार</text>\n\n      <!-- 5. Capt. Shubham Gupta -->\n      <circle cx=\"530\" cy=\"230\" r=\"6\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"2.5\"/>\n      <text x=\"530\" y=\"212\" text-anchor=\"middle\" font-size=\"9.5\" font-weight=\"600\" fill=\"#1c1b1a\">Capt. Shubham Gupta</text>\n\n      <!-- 6. Taj East Gate (Flagship) -->\n      <circle cx=\"610\" cy=\"260\" r=\"9\" fill=\"#eab308\" stroke=\"#ffffff\" stroke-width=\"3\"/>\n      <g filter=\"url(#shadow-ag)\">\n        <rect x=\"525\" y=\"278\" width=\"165\" height=\"26\" rx=\"13\" fill=\"#eab308\"/>\n        <text x=\"535\" y=\"295\" font-size=\"11\" font-weight=\"bold\" fill=\"#1c1b1a\">🕌 Taj East Gate (1.2 km)</text>\n      </g>\n    </svg>",
    "stations": [
      {
        "id": "taj-east-gate",
        "name": {
          "en": "Taj East Gate",
          "hi": "ताज ईस्ट गेट"
        },
        "line": "Yellow Line (Priority)",
        "color": "#EAB308",
        "lat": 27.1685,
        "lon": 78.056,
        "city": "Agra",
        "landmark": "Taj Mahal Eastern Gate (1.2 km)",
        "gate": "Gate 1 (E-Cart Feeder)",
        "monumentMatch": "taj-mahal"
      },
      {
        "id": "capt-shubham-gupta",
        "name": {
          "en": "Captain Shubham Gupta",
          "hi": "कैप्टन शुभम गुप्ता"
        },
        "line": "Yellow Line (Priority)",
        "color": "#EAB308",
        "lat": 27.1642,
        "lon": 78.0425,
        "city": "Agra",
        "landmark": "Basai Corridor",
        "gate": "Gate 2"
      },
      {
        "id": "fatehabad-road",
        "name": {
          "en": "Fatehabad Road",
          "hi": "फतेहाबाद रोड"
        },
        "line": "Yellow Line (Priority)",
        "color": "#EAB308",
        "lat": 27.1601,
        "lon": 78.0335,
        "city": "Agra",
        "landmark": "Hotel & Artisan Inlay Guilds",
        "gate": "Gate 1 (Fatehabad Rd)"
      },
      {
        "id": "taj-mahal-metro",
        "name": {
          "en": "Taj Mahal Metro (Purani Mandi)",
          "hi": "ताज महल मेट्रो (पुरानी मंडी)"
        },
        "line": "Yellow Line (Priority)",
        "color": "#EAB308",
        "lat": 27.172,
        "lon": 78.038,
        "city": "Agra",
        "landmark": "Taj Western Gate Walkway",
        "gate": "Gate 2 (Shilpgram E-Cart)"
      },
      {
        "id": "agra-fort-metro",
        "name": {
          "en": "Agra Fort Metro",
          "hi": "आगरा किला मेट्रो"
        },
        "line": "Yellow Line (Priority)",
        "color": "#EAB308",
        "lat": 27.1795,
        "lon": 78.021,
        "city": "Agra",
        "landmark": "Agra Fort & Diwan-i-Am",
        "gate": "Gate 1 (Amar Singh Gate)"
      },
      {
        "id": "mankameshwar",
        "name": {
          "en": "Mankameshwar Mandir",
          "hi": "मनकामेश्वर मंदिर"
        },
        "line": "Yellow Line (Priority)",
        "color": "#EAB308",
        "lat": 27.1855,
        "lon": 78.016,
        "city": "Agra",
        "landmark": "Historic Jama Masjid & Rawatpara",
        "gate": "Gate 1"
      }
    ]
  },
  {
    "id": "jaipur",
    "name": {
      "en": "Jaipur Metro (JMRC)",
      "hi": "जयपुर मेट्रो (JMRC)"
    },
    "tagline": {
      "en": "Pink Line Walled City UNESCO Heritage Route",
      "hi": "गुलाबी नगर परकोटा यूनेस्को हेरिटेज मार्ग"
    },
    "cities": [
      "Jaipur"
    ],
    "totalStations": 11,
    "linesCount": "Pink Line · 12 km Network",
    "timings": "06:20 AM – 09:49 PM",
    "fare": "₹6 – ₹22",
    "officialMapUrl": "https://transport.rajasthan.gov.in/content/transportportal/en/metro/Route-and-Fare.html",
    "officialPortalUrl": "https://transport.rajasthan.gov.in/jmrc",
    "svgMap": "<svg viewBox=\"0 0 700 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto select-none font-sans\">\n      <defs>\n        <filter id=\"shadow-jp\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"2\" flood-opacity=\"0.15\"/></filter>\n      </defs>\n      <rect width=\"700\" height=\"280\" fill=\"#faf7f2\" rx=\"12\"/>\n      \n      <!-- Walled Pink City Perimeter Scrim -->\n      <rect x=\"420\" y=\"30\" width=\"260\" height=\"220\" rx=\"8\" fill=\"#fdf2f8\" stroke=\"#fbcfe8\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n      <text x=\"435\" y=\"50\" fill=\"#db2777\" font-size=\"10\" font-weight=\"bold\" letter-spacing=\"1\">UNESCO WALLED CITY (PARKOTA)</text>\n\n      <!-- Pink Line Track -->\n      <path d=\"M 60 190 L 160 160 L 260 140 L 360 120 L 460 100 L 540 85 L 630 70\" fill=\"none\" stroke=\"#ec4899\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n\n      <!-- Stations -->\n      <circle cx=\"60\" cy=\"190\" r=\"6\" fill=\"#ffffff\" stroke=\"#db2777\" stroke-width=\"2.5\"/>\n      <text x=\"60\" y=\"210\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"600\" fill=\"#1c1b1a\">Mansarovar</text>\n\n      <circle cx=\"160\" cy=\"160\" r=\"6\" fill=\"#ffffff\" stroke=\"#db2777\" stroke-width=\"2.5\"/>\n      <text x=\"160\" y=\"180\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"600\" fill=\"#1c1b1a\">Civil Lines</text>\n\n      <circle cx=\"260\" cy=\"140\" r=\"7\" fill=\"#ffffff\" stroke=\"#db2777\" stroke-width=\"3\"/>\n      <text x=\"260\" y=\"122\" text-anchor=\"middle\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#1c1b1a\">🚆 Railway Station</text>\n\n      <circle cx=\"360\" cy=\"120\" r=\"7\" fill=\"#ffffff\" stroke=\"#db2777\" stroke-width=\"3\"/>\n      <text x=\"360\" y=\"102\" text-anchor=\"middle\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#1c1b1a\">🚌 Sindhi Camp (ISBT)</text>\n\n      <circle cx=\"460\" cy=\"100\" r=\"7\" fill=\"#ffffff\" stroke=\"#db2777\" stroke-width=\"3\"/>\n      <text x=\"460\" y=\"122\" text-anchor=\"middle\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#1c1b1a\">Chandpole Gate</text>\n\n      <circle cx=\"540\" cy=\"85\" r=\"7\" fill=\"#ffffff\" stroke=\"#db2777\" stroke-width=\"3\"/>\n      <text x=\"540\" y=\"107\" text-anchor=\"middle\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#1c1b1a\">Chhoti Chaupar</text>\n\n      <circle cx=\"630\" cy=\"70\" r=\"9\" fill=\"#ec4899\" stroke=\"#ffffff\" stroke-width=\"3\"/>\n      <g filter=\"url(#shadow-jp)\">\n        <rect x=\"520\" y=\"18\" width=\"168\" height=\"26\" rx=\"13\" fill=\"#ec4899\"/>\n        <text x=\"530\" y=\"35\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\">🌸 Badi Chaupar (Hawa Mahal)</text>\n      </g>\n    </svg>",
    "stations": [
      {
        "id": "badi-chaupar",
        "name": {
          "en": "Badi Chaupar",
          "hi": "बड़ी चौपड़"
        },
        "line": "Pink Line",
        "color": "#EC4899",
        "lat": 26.9238,
        "lon": 75.8285,
        "city": "Jaipur",
        "landmark": "Hawa Mahal (200m) & Jantar Mantar",
        "gate": "Gate 1 (Direct to Hawa Mahal Bazaar)",
        "monumentMatch": "hawa-mahal"
      },
      {
        "id": "chhoti-chaupar",
        "name": {
          "en": "Chhoti Chaupar",
          "hi": "छोटी चौपड़"
        },
        "line": "Pink Line",
        "color": "#EC4899",
        "lat": 26.923,
        "lon": 75.819,
        "city": "Jaipur",
        "landmark": "Kishanpole & Gangaur Ghat Bazaar",
        "gate": "Gate 2"
      },
      {
        "id": "chandpole",
        "name": {
          "en": "Chandpole",
          "hi": "चांदपोल"
        },
        "line": "Pink Line",
        "color": "#EC4899",
        "lat": 26.9248,
        "lon": 75.8055,
        "city": "Jaipur",
        "landmark": "Historic Chandpole Gateway",
        "gate": "Gate 1"
      },
      {
        "id": "sindhi-camp",
        "name": {
          "en": "Sindhi Camp",
          "hi": "सिंधी कैंप"
        },
        "line": "Pink Line",
        "color": "#EC4899",
        "lat": 26.9205,
        "lon": 75.7972,
        "city": "Jaipur",
        "landmark": "ISBT Inter-State Bus Terminal",
        "gate": "Gate 2 (Bus Terminus)"
      },
      {
        "id": "railway-station-jaipur",
        "name": {
          "en": "Railway Station",
          "hi": "रेलवे स्टेशन (जयपुर)"
        },
        "line": "Pink Line",
        "color": "#EC4899",
        "lat": 26.9189,
        "lon": 75.7876,
        "city": "Jaipur",
        "landmark": "Jaipur Junction Main Station",
        "gate": "Gate 1 (Platform 1 Exit)"
      }
    ]
  },
  {
    "id": "mumbai",
    "name": {
      "en": "Mumbai Metro & Suburban",
      "hi": "मुंबई मेट्रो एवं उपनगरीय"
    },
    "tagline": {
      "en": "Aqua Line 3 & Western/Central Railway Heritage Corridors",
      "hi": "एक्वा लाइन 3 व ऐतिहासिक रेलवे नेटवर्क"
    },
    "cities": [
      "Mumbai"
    ],
    "totalStations": 38,
    "linesCount": "Aqua Line 3, Line 1 & Suburban Core",
    "timings": "04:30 AM – 01:00 AM",
    "fare": "₹10 – ₹50",
    "officialMapUrl": "https://mmrcl.com/",
    "officialPortalUrl": "https://mmrda.maharashtra.gov.in/",
    "svgMap": "<svg viewBox=\"0 0 700 340\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto select-none font-sans\">\n      <defs><filter id=\"shadow-mb\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"2\" flood-opacity=\"0.15\"/></filter></defs>\n      <rect width=\"700\" height=\"340\" fill=\"#faf7f2\" rx=\"12\"/>\n      \n      <!-- Arabian Sea Outline -->\n      <path d=\"M 0 0 L 220 0 C 230 100, 260 200, 310 340 L 0 340 Z\" fill=\"#eff6ff\" opacity=\"0.6\"/>\n      <text x=\"80\" y=\"160\" fill=\"#93c5fd\" font-size=\"12\" font-weight=\"bold\" letter-spacing=\"3\">ARABIAN SEA</text>\n\n      <!-- Aqua Line 3 (Underground Metro) -->\n      <path d=\"M 490 30 L 440 90 L 410 160 L 400 220 L 380 270 L 350 310\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      \n      <!-- Western Railway Suburban -->\n      <path d=\"M 450 30 L 410 90 L 380 160 L 360 230 L 340 280\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n\n      <!-- Central Railway Suburban -->\n      <path d=\"M 540 30 L 490 100 L 450 170 L 430 220\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n\n      <!-- Stations -->\n      <circle cx=\"430\" cy=\"220\" r=\"9\" fill=\"#ffffff\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n      <g filter=\"url(#shadow-mb)\">\n        <rect x=\"445\" y=\"206\" width=\"165\" height=\"24\" rx=\"12\" fill=\"#ffffff\" stroke=\"#ef4444\" stroke-width=\"1.5\"/>\n        <text x=\"455\" y=\"222\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#b91c1c\">🏛️ CSMT Terminus</text>\n      </g>\n\n      <circle cx=\"340\" cy=\"280\" r=\"8\" fill=\"#ffffff\" stroke=\"#3b82f6\" stroke-width=\"3\"/>\n      <text x=\"325\" y=\"284\" text-anchor=\"end\" font-size=\"10\" font-weight=\"bold\" fill=\"#1e3a8a\">Churchgate</text>\n\n      <circle cx=\"350\" cy=\"310\" r=\"9\" fill=\"#06b6d4\" stroke=\"#ffffff\" stroke-width=\"3\"/>\n      <g filter=\"url(#shadow-mb)\">\n        <rect x=\"365\" y=\"296\" width=\"185\" height=\"26\" rx=\"13\" fill=\"#06b6d4\"/>\n        <text x=\"375\" y=\"313\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\">⛵ Vidhan Bhavan (Gateway 1.5km)</text>\n      </g>\n    </svg>",
    "stations": [
      {
        "id": "csmt-mumbai",
        "name": {
          "en": "CSMT Terminus",
          "hi": "सीएसएमटी टर्मिनस"
        },
        "line": "Aqua Line 3 / Central Line",
        "color": "#06B6D4",
        "lat": 18.94,
        "lon": 72.8353,
        "city": "Mumbai",
        "landmark": "CSMT UNESCO Victorian Terminus (300m)",
        "gate": "Subway to Main Concourse"
      },
      {
        "id": "churchgate",
        "name": {
          "en": "Churchgate",
          "hi": "चर्चगेट"
        },
        "line": "Aqua Line 3 / Western Line",
        "color": "#3B82F6",
        "lat": 18.9322,
        "lon": 72.8264,
        "city": "Mumbai",
        "landmark": "Marine Drive & Oval Maidan Art Deco",
        "gate": "Eros Cinema Subway"
      },
      {
        "id": "vidhan-bhavan",
        "name": {
          "en": "Vidhan Bhavan",
          "hi": "विधान भवन"
        },
        "line": "Aqua Line 3",
        "color": "#06B6D4",
        "lat": 18.927,
        "lon": 72.8235,
        "city": "Mumbai",
        "landmark": "Gateway of India (1.5 km)",
        "gate": "Gate 1 (Nariman Point)",
        "monumentMatch": "gateway-india"
      },
      {
        "id": "hutatma-chowk",
        "name": {
          "en": "Hutatma Chowk (Flora Fountain)",
          "hi": "हुतात्मा चौक"
        },
        "line": "Aqua Line 3",
        "color": "#06B6D4",
        "lat": 18.9325,
        "lon": 72.8322,
        "city": "Mumbai",
        "landmark": "Fort Heritage Precinct & Flora Fountain",
        "gate": "Gate 2 (MG Road)"
      }
    ]
  },
  {
    "id": "kolkata",
    "name": {
      "en": "Kolkata Metro",
      "hi": "कोलकाता मेट्रो"
    },
    "tagline": {
      "en": "India's First Metro & Underwater Hooghly River Tunnel",
      "hi": "भारत की प्रथम मेट्रो व हुगली नदी जलमग्न सुरंग"
    },
    "cities": [
      "Kolkata"
    ],
    "totalStations": 40,
    "linesCount": "Blue Line (Line 1) & Green Line (Line 2)",
    "timings": "06:45 AM – 10:00 PM",
    "fare": "₹5 – ₹30",
    "officialMapUrl": "https://mtp.indianrailways.gov.in/",
    "officialPortalUrl": "https://mtp.indianrailways.gov.in/",
    "svgMap": "<svg viewBox=\"0 0 700 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto select-none font-sans\">\n      <defs><filter id=\"shadow-kl\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"2\" flood-opacity=\"0.15\"/></filter></defs>\n      <rect width=\"700\" height=\"280\" fill=\"#faf7f2\" rx=\"12\"/>\n      \n      <!-- Hooghly River -->\n      <path d=\"M 330 0 C 340 90, 310 180, 320 280\" fill=\"none\" stroke=\"#dbeafe\" stroke-width=\"36\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n      <text x=\"325\" y=\"140\" fill=\"#60a5fa\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(85, 325, 140)\" letter-spacing=\"2\">HOOGHLY RIVER</text>\n\n      <!-- Blue Line (North-South) -->\n      <line x1=\"420\" y1=\"20\" x2=\"420\" y2=\"260\" stroke=\"#2563eb\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n\n      <!-- Green Line (East-West Underwater Tunnel) -->\n      <path d=\"M 120 120 L 230 120 L 420 120 L 580 120\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n\n      <!-- Underwater Tunnel Highlight Indicator -->\n      <rect x=\"250\" y=\"108\" width=\"130\" height=\"24\" rx=\"12\" fill=\"#047857\"/>\n      <text x=\"315\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\">🌊 Underwater Tunnel (520m)</text>\n\n      <!-- Stations -->\n      <circle cx=\"230\" cy=\"120\" r=\"7\" fill=\"#ffffff\" stroke=\"#10b981\" stroke-width=\"3\"/>\n      <text x=\"215\" y=\"104\" text-anchor=\"middle\" font-size=\"9.5\" font-weight=\"bold\" fill=\"#1c1b1a\">🚆 Howrah Station</text>\n\n      <circle cx=\"420\" cy=\"120\" r=\"10\" fill=\"#ffffff\" stroke=\"#1c1b1a\" stroke-width=\"3\"/>\n      <text x=\"435\" y=\"112\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1c1b1a\">Esplanade 🔄</text>\n\n      <circle cx=\"420\" cy=\"170\" r=\"6\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n      <text x=\"435\" y=\"174\" font-size=\"9.5\" font-weight=\"600\" fill=\"#1c1b1a\">Park Street</text>\n\n      <circle cx=\"420\" cy=\"220\" r=\"8\" fill=\"#2563eb\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>\n      <g filter=\"url(#shadow-kl)\">\n        <rect x=\"435\" y=\"206\" width=\"175\" height=\"26\" rx=\"13\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n        <text x=\"445\" y=\"223\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1d4ed8\">🏛️ Maidan (Victoria Memorial)</text>\n      </g>\n    </svg>",
    "stations": [
      {
        "id": "maidan-kolkata",
        "name": {
          "en": "Maidan",
          "hi": "मैदान"
        },
        "line": "Blue Line (Line 1)",
        "color": "#2563EB",
        "lat": 22.5458,
        "lon": 88.3496,
        "city": "Kolkata",
        "landmark": "Victoria Memorial (600m)",
        "gate": "Gate 2 (Jawaharlal Nehru Rd)"
      },
      {
        "id": "park-street",
        "name": {
          "en": "Park Street",
          "hi": "पार्क स्ट्रीट"
        },
        "line": "Blue Line (Line 1)",
        "color": "#2563EB",
        "lat": 22.5532,
        "lon": 88.3512,
        "city": "Kolkata",
        "landmark": "Indian Museum & Heritage Arcade",
        "gate": "Gate 1 (Museum Gate)"
      },
      {
        "id": "esplanade-kol",
        "name": {
          "en": "Esplanade",
          "hi": "एस्प्लेनेड"
        },
        "line": "Blue / Green Interchange",
        "color": "#10B981",
        "lat": 22.5645,
        "lon": 88.3518,
        "city": "Kolkata",
        "landmark": "Raj Bhavan & New Market",
        "gate": "Gate 4 (Curzon Park)"
      },
      {
        "id": "howrah-kol",
        "name": {
          "en": "Howrah Metro",
          "hi": "हावड़ा मेट्रो"
        },
        "line": "Green Line (Underwater Tunnel)",
        "color": "#10B981",
        "lat": 22.5855,
        "lon": 88.343,
        "city": "Kolkata",
        "landmark": "Howrah Bridge & Historic Station",
        "gate": "Subway to Howrah Junction"
      }
    ]
  },
  {
    "id": "bengaluru",
    "name": {
      "en": "Bengaluru Namma Metro",
      "hi": "बेंगलुरु नम्मा मेट्रो"
    },
    "tagline": {
      "en": "Purple & Green Lines Connecting Garden City Heritage",
      "hi": "पर्पल एवं ग्रीन लाइन हेरिटेज कनेक्टिविटी"
    },
    "cities": [
      "Bengaluru"
    ],
    "totalStations": 66,
    "linesCount": "Purple Line & Green Line · 73 km",
    "timings": "05:00 AM – 11:00 PM",
    "fare": "₹10 – ₹60",
    "officialMapUrl": "https://english.bmrc.co.in/",
    "officialPortalUrl": "https://english.bmrc.co.in/",
    "svgMap": "<svg viewBox=\"0 0 700 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto select-none font-sans\">\n      <defs><filter id=\"shadow-blr\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"2\" flood-opacity=\"0.15\"/></filter></defs>\n      <rect width=\"700\" height=\"280\" fill=\"#faf7f2\" rx=\"12\"/>\n      \n      <!-- Purple Line (East-West) -->\n      <line x1=\"80\" y1=\"140\" x2=\"620\" y2=\"140\" stroke=\"#a855f7\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n\n      <!-- Green Line (North-South) -->\n      <line x1=\"340\" y1=\"30\" x2=\"340\" y2=\"250\" stroke=\"#10b981\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n\n      <!-- Majestic Interchange -->\n      <circle cx=\"340\" cy=\"140\" r=\"10\" fill=\"#ffffff\" stroke=\"#1c1b1a\" stroke-width=\"3\"/>\n      <text x=\"325\" y=\"130\" text-anchor=\"end\" font-size=\"11\" font-weight=\"bold\" fill=\"#1c1b1a\">Majestic 🔄</text>\n\n      <!-- Vidhana Soudha -->\n      <circle cx=\"430\" cy=\"140\" r=\"8\" fill=\"#a855f7\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>\n      <g filter=\"url(#shadow-blr)\">\n        <rect x=\"380\" y=\"80\" width=\"160\" height=\"26\" rx=\"13\" fill=\"#ffffff\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n        <text x=\"390\" y=\"97\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#7e22ce\">🏛️ Vidhana Soudha</text>\n      </g>\n\n      <!-- Cubbon Park -->\n      <circle cx=\"510\" cy=\"140\" r=\"7\" fill=\"#ffffff\" stroke=\"#a855f7\" stroke-width=\"2.5\"/>\n      <text x=\"510\" y=\"165\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#1c1b1a\">🌳 Cubbon Park</text>\n\n      <!-- MG Road -->\n      <circle cx=\"580\" cy=\"140\" r=\"6\" fill=\"#ffffff\" stroke=\"#a855f7\" stroke-width=\"2.5\"/>\n      <text x=\"580\" y=\"165\" text-anchor=\"middle\" font-size=\"9.5\" font-weight=\"600\" fill=\"#1c1b1a\">MG Road</text>\n    </svg>",
    "stations": [
      {
        "id": "vidhana-soudha",
        "name": {
          "en": "Dr. B.R. Ambedkar Vidhana Soudha",
          "hi": "विधान सौध"
        },
        "line": "Purple Line",
        "color": "#A855F7",
        "lat": 12.9798,
        "lon": 77.5908,
        "city": "Bengaluru",
        "landmark": "Vidhana Soudha Neo-Dravidian Palace",
        "gate": "Gate 1 (High Court)"
      },
      {
        "id": "cubbon-park",
        "name": {
          "en": "Cubbon Park",
          "hi": "कब्बन पार्क"
        },
        "line": "Purple Line",
        "color": "#A855F7",
        "lat": 12.9815,
        "lon": 77.599,
        "city": "Bengaluru",
        "landmark": "Cubbon Park & State Central Library",
        "gate": "Gate 2 (Chinnaswamy Stadium)"
      },
      {
        "id": "mg-road",
        "name": {
          "en": "Mahatma Gandhi Road",
          "hi": "एमजी रोड"
        },
        "line": "Purple Line",
        "color": "#A855F7",
        "lat": 12.9754,
        "lon": 77.6066,
        "city": "Bengaluru",
        "landmark": "Colonial Boulevard & Brigade Rd",
        "gate": "Gate 1"
      },
      {
        "id": "majestic-blr",
        "name": {
          "en": "Nadaprabhu Kempegowda (Majestic)",
          "hi": "मैजेस्टिक"
        },
        "line": "Purple / Green Interchange",
        "color": "#10B981",
        "lat": 12.9756,
        "lon": 77.5728,
        "city": "Bengaluru",
        "landmark": "Central Railway & KSRTC Bus Hub",
        "gate": "Gate 4 (City Railway Station)"
      }
    ]
  }
];


// ==========================================================================
// SafarSaarthi — Enriched Metro/Transit & Local Civic News Data
// Covers all 10 UNESCO Flagship Monuments (EN / HI Bilingual)
// ==========================================================================

const MONUMENT_ENRICHMENTS = {
  "taj-mahal": {
    nearbyMetro: [
      {
        id: "taj-east-gate-metro",
        name: { en: "Taj East Gate Metro Station", hi: "ताज पूर्वी गेट मेट्रो स्टेशन" },
        line: { en: "Agra Metro · Yellow Line (Priority Corridor)", hi: "आगरा मेट्रो · येलो लाइन (प्रायोरिटी कॉरिडोर)" },
        lineColor: "#eab308",
        lineTextColor: "#1c1b1a",
        distance: "0.6 km",
        exitGateTip: {
          en: "Exit Gate 1 leads directly to Shilpgram ADA Golf Cart shuttle plaza",
          hi: "गेट 1 से बाहर निकलें — शिल्पग्राम बैटरी गोल्फ़ कार्ट शटल प्लाज़ा सीधा सामने है"
        },
        lastMileTime: {
          en: "3 min golf cart / 8 min pedestrian shaded walkway",
          hi: "3 मिनट गोल्फ़ कार्ट / 8 मिनट पैदल छायादार पथ"
        },
        estimatedFare: { en: "₹20 (Golf Cart) / Free Walk", hi: "₹20 (गोल्फ़ कार्ट) / पैदल निःशुल्क" },
        lat: 27.1695,
        lon: 78.0532
      },
      {
        id: "taj-mahal-metro",
        name: { en: "Taj Mahal Metro Station (Purani Mandi)", hi: "ताज महल मेट्रो स्टेशन (पुरानी मंडी)" },
        line: { en: "Agra Metro · Yellow Line Underground", hi: "आगरा मेट्रो · येलो लाइन भूमिगत" },
        lineColor: "#ca8a04",
        lineTextColor: "#ffffff",
        distance: "0.9 km",
        exitGateTip: {
          en: "Exit Gate 2 for West Gate ticket counters & Fatehabad Road heritage walk",
          hi: "पश्चिमी गेट टिकट काउंटर और फतेहाबाद रोड के लिए गेट 2 से निकलें"
        },
        lastMileTime: {
          en: "4 min E-Rickshaw / 10 min walk to West Gate",
          hi: "4 मिनट ई-रिक्शा / पश्चिमी गेट तक 10 मिनट पैदल"
        },
        estimatedFare: { en: "₹15 – ₹20 (E-Rickshaw)", hi: "₹15 – ₹20 (ई-रिक्शा)" },
        lat: 27.1722,
        lon: 78.0345
      },
      {
        id: "agra-fort-metro",
        name: { en: "Mankameshwar / Agra Fort Metro Station", hi: "मनकामेश्वर / आगरा फोर्ट मेट्रो स्टेशन" },
        line: { en: "Agra Metro · Yellow Line Hub", hi: "आगरा मेट्रो · येलो लाइन हब" },
        lineColor: "#eab308",
        lineTextColor: "#1c1b1a",
        distance: "2.4 km",
        exitGateTip: {
          en: "Exit Gate 3 for Yamuna Kinara corridor & direct transit to Agra Fort",
          hi: "यमुना किनारा रोड और आगरा किले से सीधे संपर्क के लिए गेट 3 चुनें"
        },
        lastMileTime: {
          en: "6 min Metro ride to Taj East Gate (₹20 token)",
          hi: "ताज पूर्वी गेट तक 6 मिनट मेट्रो यात्रा (₹20 टोकन)"
        },
        estimatedFare: { en: "₹20 (Metro Token)", hi: "₹20 (मेट्रो टोकन)" },
        lat: 27.1812,
        lon: 78.0218
      }
    ],
    localNews: [
      {
        id: "taj-news-1",
        category: "traffic",
        severity: "high",
        timestamp: { en: "Updated 45 mins ago", hi: "45 मिनट पहले अपडेट किया गया" },
        source: { en: "Agra Traffic Police Advisory", hi: "आगरा यातायात पुलिस सूचना" },
        headline: {
          en: "Zero-Emission Zone Enforced 500m Around Taj East & West Gates",
          hi: "ताज के पूर्वी और पश्चिमी गेट के 500 मीटर दायरे में पेट्रोल/डीज़ल वाहन प्रतिबंधित"
        },
        summary: {
          en: "All private cabs and petrol autos must drop passengers at Shilpgram (East) or Amrood Ka Teela (West) parking plazas. Only ADA electric golf carts and Agra Metro operate inside the eco-zone.",
          hi: "सभी निजी कैब और ऑटो को शिल्पग्राम (पूर्व) या अमरूद का टीला (पश्चिम) पार्किंग पर रुकना होगा। इको-ज़ोन के भीतर केवल इलेक्ट्रिक गोल्फ़ कार्ट और मेट्रो उपलब्ध हैं।"
        },
        actionTip: {
          en: "Take Agra Metro Yellow Line to Taj East Gate Station to skip the 800m parking barrier.",
          hi: "पार्किंग बैरियर से बचने के लिए आगरा मेट्रो येलो लाइन से सीधे ताज पूर्वी गेट स्टेशन उतरें।"
        }
      },
      {
        id: "taj-news-2",
        category: "monument",
        severity: "advisory",
        timestamp: { en: "Updated 2 hours ago", hi: "2 घंटे पहले अपडेट किया गया" },
        source: { en: "ASI Agra Circle Notice", hi: "एएसआई आगरा मंडल सूचना" },
        headline: {
          en: "Separate ₹200 Mausoleum Inner Chamber Token Mandatory Alongside Entry Ticket",
          hi: "मुख्य गुंबद कक्ष में प्रवेश हेतु ₹200 का अतिरिक्त टोकन अनिवार्य"
        },
        summary: {
          en: "Visitors wishing to enter the central marble chamber housing the cenotaphs must select the Main Mausoleum add-on on the official ASI portal or East/West Gate QR kiosks.",
          hi: "मुख्य संगमरमर कक्ष में जाने के इच्छुक पर्यटकों को आधिकारिक एएसआई पोर्टल या गेट के क्यूआर कियोस्क से मुख्य मकबरा ऐड-ऑन टिकट लेना आवश्यक है।"
        },
        actionTip: {
          en: "Scan the ASI Fast-Track QR before 9:30 AM to avoid main dome queue bottlenecks.",
          hi: "मुख्य गुंबद की कतार से बचने के लिए सुबह 9:30 बजे से पहले क्यूआर टिकट बुक करें।"
        }
      },
      {
        id: "taj-news-3",
        category: "weather",
        severity: "info",
        timestamp: { en: "Updated 3 hours ago", hi: "3 घंटे पहले अपडेट किया गया" },
        source: { en: "Mausam-X & UPPCB Air Bulletin", hi: "मौसम-X एवं पर्यावरण बुलेटिन" },
        headline: {
          en: "Clear Morning Visibility Across Yamuna Terrace; Midday Marble Glare High",
          hi: "यमुना तट पर सुबह साफ़ दृश्यता; दोपहर में संगमरमर पर तेज़ धूप की चमक"
        },
        summary: {
          en: "Morning mist clears by 7:15 AM offering crisp photography conditions. White marble surface temperature rises rapidly after 11:30 AM.",
          hi: "सुबह 7:15 बजे तक हल्का कोहरा छंट जाएगा जिससे फोटोग्राफी के लिए बेहतरीन दृश्य मिलेंगे। 11:30 बजे के बाद संगमरमर का फर्श गर्म हो सकता है।"
        },
        actionTip: {
          en: "Carry polarized sunglasses and collect complimentary shoe covers at the Chameli Farsh ramp.",
          hi: "धूप का चश्मा साथ रखें और चमेली फ़र्श रैंप से शू-कवर अवश्य लें।"
        }
      },
      {
        id: "taj-news-4",
        category: "events",
        severity: "info",
        timestamp: { en: "Updated Today", hi: "आज अपडेट किया गया" },
        source: { en: "UP Tourism Cultural Desk", hi: "उत्तर प्रदेश पर्यटन सांस्कृतिक प्रकोष्ठ" },
        headline: {
          en: "Evening Parchin Kari Marble Inlay Live Demonstration at Shilpgram Guild",
          hi: "शिल्पग्राम में शाम को परचिन कारी पच्चीकारी कला का लाइव प्रदर्शन"
        },
        summary: {
          en: "Master descendants of 17th-century Mughal artisans are hosting free 30-minute stone-inlay craft sessions at the government-empanelled Shilpgram complex from 4:30 PM to 6:30 PM.",
          hi: "17वीं सदी के मुग़ल कारीगरों के वंशज शाम 4:30 से 6:30 बजे तक शिल्पग्राम परिसर में निःशुल्क पच्चीकारी कला का लाइव प्रदर्शन कर रहे हैं।"
        },
        actionTip: {
          en: "Visit Shilpgram after sunset reflection viewing at Mehtab Bagh.",
          hi: "मेहताब बाग से सूर्यास्त देखने के बाद शिल्पग्राम की कार्यशाला का आनंद लें।"
        }
      }
    ]
  },
  "hawa-mahal": {
    nearbyMetro: [
      {
        id: "badi-chaupar-metro",
        name: { en: "Badi Chaupar Metro Station", hi: "बड़ी चौपड़ मेट्रो स्टेशन" },
        line: { en: "Jaipur Metro · Pink Line (Line 1)", hi: "जयपुर मेट्रो · पिंक लाइन (लाइन 1)" },
        lineColor: "#ec4899",
        lineTextColor: "#ffffff",
        distance: "0.25 km",
        exitGateTip: {
          en: "Exit Gate 2 (Sireh Deori Bazaar side) — Hawa Mahal facade is 200m straight ahead",
          hi: "गेट 2 (सिरेह ड्योढ़ी बाज़ार) से बाहर निकलें — हवा महल मात्र 200 मीटर आगे है"
        },
        lastMileTime: {
          en: "3 min heritage arcade walk",
          hi: "3 मिनट गुलाबी नगरी बरामदे में पैदल पथ"
        },
        estimatedFare: { en: "Free 3-min walk", hi: "पैदल 3 मिनट (निःशुल्क)" },
        lat: 26.9228,
        lon: 75.8261
      },
      {
        id: "chhoti-chaupar-metro",
        name: { en: "Chhoti Chaupar Metro Station", hi: "छोटी चौपड़ मेट्रो स्टेशन" },
        line: { en: "Jaipur Metro · Pink Line Underground", hi: "जयपुर मेट्रो · पिंक लाइन भूमिगत" },
        lineColor: "#db2777",
        lineTextColor: "#ffffff",
        distance: "1.1 km",
        exitGateTip: {
          en: "Exit Gate 1 for Tripolia Bazaar & City Palace royal courtyard route",
          hi: "त्रिपोलिया बाज़ार और सिटी पैलेस मार्ग के लिए गेट 1 से बाहर आएं"
        },
        lastMileTime: {
          en: "4 min Pink E-Rickshaw / 12 min bazaar walk",
          hi: "4 मिनट पिंक ई-रिक्शा / 12 मिनट बाज़ार वॉक"
        },
        estimatedFare: { en: "₹15 (Pink E-Rickshaw)", hi: "₹15 (पिंक ई-रिक्शा)" },
        lat: 26.9248,
        lon: 75.8165
      },
      {
        id: "chandpole-metro",
        name: { en: "Chandpole Metro Station", hi: "चांदपोल मेट्रो स्टेशन" },
        line: { en: "Jaipur Metro · Pink Line Interchange", hi: "जयपुर मेट्रो · पिंक लाइन स्टेशन" },
        lineColor: "#ec4899",
        lineTextColor: "#ffffff",
        distance: "2.2 km",
        exitGateTip: {
          en: "Direct 4-minute underground train to Badi Chaupar every 10 mins",
          hi: "हर 10 मिनट में बड़ी चौपड़ के लिए सीधी 4-मिनट भूमिगत मेट्रो"
        },
        lastMileTime: {
          en: "4 min Metro ride to Badi Chaupar",
          hi: "बड़ी चौपड़ तक 4 मिनट मेट्रो यात्रा"
        },
        estimatedFare: { en: "₹12 (Metro Token)", hi: "₹12 (मेट्रो टोकन)" },
        lat: 26.9265,
        lon: 75.8072
      }
    ],
    localNews: [
      {
        id: "hawa-news-1",
        category: "traffic",
        severity: "high",
        timestamp: { en: "Updated 1 hour ago", hi: "1 घंटे पहले अपडेट किया गया" },
        source: { en: "Jaipur Walled City Traffic Cell", hi: "जयपुर परकोटा यातायात प्रकोष्ठ" },
        headline: {
          en: "One-Way Heritage Traffic Loop Active on Sireh Deori Bazaar Road",
          hi: "सिरेह ड्योढ़ी बाज़ार मार्ग पर वन-वे यातायात व्यवस्था लागू"
        },
        summary: {
          en: "Four-wheelers are restricted between Badi Chaupar and Zorawar Singh Gate during peak morning hours (9:00 AM–12:30 PM) to protect pedestrian corridors.",
          hi: "सुबह के व्यस्त समय (9:00 AM–12:30 PM) में बड़ी चौपड़ और ज़ोरावर सिंह गेट के बीच चार-पहिया वाहनों का प्रवेश सीमित है।"
        },
        actionTip: {
          en: "Use Jaipur Metro Pink Line to Badi Chaupar Station (250m walk to Hawa Mahal entry).",
          hi: "हवा महल पहुंचने के लिए जयपुर मेट्रो पिंक लाइन से बड़ी चौपड़ स्टेशन उतरें (मात्र 250 मीटर पैदल)।"
        }
      },
      {
        id: "hawa-news-2",
        category: "monument",
        severity: "info",
        timestamp: { en: "Updated 2 hours ago", hi: "2 घंटे पहले अपडेट किया गया" },
        source: { en: "Rajasthan Archaeology & Museums Dept", hi: "राजस्थान पुरातत्व एवं संग्रहालय विभाग" },
        headline: {
          en: "Composite Jaipur Heritage Ticket Saves 40% Across 8 Royal Monuments",
          hi: "संयुक्त जयपुर हेरिटेज टिकट से 8 प्रमुख स्मारकों पर 40% की बचत"
        },
        summary: {
          en: "A single composite pass issued at Hawa Mahal rear courtyard covers Hawa Mahal, Jantar Mantar, Amer Fort, Nahargarh, and Albert Hall for 2 consecutive days.",
          hi: "हवा महल के पिछले प्रांगण से जारी संयुक्त टिकट 2 दिनों के लिए हवा महल, जंतर मंतर, आमेर किला, नाहरगढ़ और अल्बर्ट हॉल में मान्य है।"
        },
        actionTip: {
          en: "Enter Hawa Mahal from the quiet Tripolia side gate via Sarhad courtyard.",
          hi: "हवा महल में प्रवेश के लिए त्रिपोलिया बाज़ार की तरफ बने शांत पिछले द्वार का उपयोग करें।"
        }
      },
      {
        id: "hawa-news-3",
        category: "weather",
        severity: "advisory",
        timestamp: { en: "Updated 3 hours ago", hi: "3 घंटे पहले अपडेट किया गया" },
        source: { en: "Mausam-X Jaipur Node", hi: "मौसम-X जयपुर केंद्र" },
        headline: {
          en: "Golden Morning Sun Illuminates 953 Jharokhas Between 8:00 AM & 9:45 AM",
          hi: "सुबह 8:00 से 9:45 बजे के बीच 953 झरोखों पर सुनहरी धूप का अद्भुत दृश्य"
        },
        summary: {
          en: "East-facing sandstone latticework catches direct morning light and casts stained-glass patterns inside Sharad Mandir.",
          hi: "पूर्वमुखी लाल-गुलाबी बलुआ पत्थर के झरोखों से सुबह की किरणें शरद मंदिर के भीतर रंगीन कांच की आभा बिखेरती हैं।"
        },
        actionTip: {
          en: "Arrive by 8:30 AM for stained-glass interior photography with <30% crowd.",
          hi: "रंगीन कांच की रोशनी और कम भीड़ (<30%) के लिए सुबह 8:30 बजे तक पहुंचें।"
        }
      },
      {
        id: "hawa-news-4",
        category: "events",
        severity: "info",
        timestamp: { en: "Updated Today", hi: "आज अपडेट किया गया" },
        source: { en: "Pink City Heritage Foundation", hi: "पिंक सिटी हेरिटेज फाउंडेशन" },
        headline: {
          en: "Night Facade Illumination Active 7:00 PM – 9:30 PM Along Johari Bazaar",
          hi: "शाम 7:00 से रात 9:30 बजे तक हवा महल के बाहरी हिस्से की विशेष रोशनी"
        },
        summary: {
          en: "Warm architectural spotlights illuminate the five-storey honeycomb facade every evening, accompanied by heritage walking patrols by Women Pink Squad.",
          hi: "हर शाम पांच मंज़िला इमारत को गर्म सुनहरी रोशनी से सजाया जाता है और महिला पिंक स्क्वाड गश्त पर रहती है।"
        },
        actionTip: {
          en: "View the illuminated facade freely from the Badi Chaupar promenade after dusk.",
          hi: "सूर्यास्त के बाद बड़ी चौपड़ से जगमगाते हवा महल का निःशुल्क दीदार करें।"
        }
      }
    ]
  },
  "qutub-minar": {
    nearbyMetro: [
      {
        id: "qutab-minar-metro",
        name: { en: "Qutab Minar Metro Station", hi: "कुतुब मीनार मेट्रो स्टेशन" },
        line: { en: "Delhi Metro · Yellow Line (Line 2)", hi: "दिल्ली मेट्रो · येलो लाइन (लाइन 2)" },
        lineColor: "#eab308",
        lineTextColor: "#1c1b1a",
        distance: "1.6 km",
        exitGateTip: {
          en: "Exit Gate 1 for prepaid DMRC E-Rickshaw & feeder bus stand to Qutub Complex",
          hi: "कुतुब परिसर के लिए डीएमआरसी ई-रिक्शा और बस स्टैंड हेतु गेट 1 से बाहर निकलें"
        },
        lastMileTime: {
          en: "5 min DMRC E-Rickshaw / 18 min walk along Mehrauli Road",
          hi: "5 मिनट डीएमआरसी ई-रिक्शा / महरौली मार्ग से 18 मिनट पैदल"
        },
        estimatedFare: { en: "₹20 (Shared E-Rickshaw)", hi: "₹20 (शेयर्ड ई-रिक्शा)" },
        lat: 28.5130,
        lon: 77.1865
      },
      {
        id: "saket-metro",
        name: { en: "Saket Metro Station", hi: "साकेत मेट्रो स्टेशन" },
        line: { en: "Delhi Metro · Yellow Line Underground", hi: "दिल्ली मेट्रो · येलो लाइन भूमिगत" },
        lineColor: "#ca8a04",
        lineTextColor: "#ffffff",
        distance: "2.1 km",
        exitGateTip: {
          en: "Exit Gate 2 for Mehrauli Archaeological Park & Garden of Five Senses",
          hi: "महरौली पुरातत्व पार्क एवं गार्डन ऑफ़ फाइव सेंसेज़ के लिए गेट 2 चुनें"
        },
        lastMileTime: {
          en: "7 min Auto-Rickshaw via Anuvrat Marg",
          hi: "अणुव्रत मार्ग से 7 मिनट ऑटो-रिक्शा"
        },
        estimatedFare: { en: "₹40 – ₹50 (Auto)", hi: "₹40 – ₹50 (ऑटो)" },
        lat: 28.5206,
        lon: 77.2014
      },
      {
        id: "malviya-nagar-metro",
        name: { en: "Malviya Nagar Metro Station", hi: "मालवीय नगर मेट्रो स्टेशन" },
        line: { en: "Delhi Metro · Yellow Line", hi: "दिल्ली मेट्रो · येलो लाइन" },
        lineColor: "#eab308",
        lineTextColor: "#1c1b1a",
        distance: "2.6 km",
        exitGateTip: {
          en: "Exit Gate 3 for Press Enclave Road & Lal Kot Fort wall trail",
          hi: "प्रेस एन्क्लेव रोड और लाल कोट किला प्राचीर मार्ग के लिए गेट 3 से निकलें"
        },
        lastMileTime: {
          en: "8 min Auto / Cab to Qutub Institutional Area",
          hi: "कुतुब इंस्टीट्यूशनल एरिया तक 8 मिनट ऑटो/कैब"
        },
        estimatedFare: { en: "₹55 (Auto Meter)", hi: "₹55 (ऑटो मीटर)" },
        lat: 28.5284,
        lon: 77.2060
      }
    ],
    localNews: [
      {
        id: "qutub-news-1",
        category: "traffic",
        severity: "advisory",
        timestamp: { en: "Updated 1 hour ago", hi: "1 घंटे पहले अपडेट किया गया" },
        source: { en: "Delhi Traffic Police Southern Range", hi: "दिल्ली यातायात पुलिस दक्षिणी रेंज" },
        headline: {
          en: "Metro Phase-IV Construction Diversion Near Mehrauli-Badarpur T-Point",
          hi: "महरौली-बदरपुर टी-पॉइंट के पास मेट्रो फेज-IV निर्माण के कारण मार्ग परिवर्तन"
        },
        summary: {
          en: "Slow vehicular movement reported on Anuvrat Marg during peak hours due to Silver Line viaduct work. DMRC Yellow Line trains are running at 3-minute frequency.",
          hi: "सिल्वर लाइन निर्माण कार्य के कारण अणुव्रत मार्ग पर वाहनों की गति धीमी है। दिल्ली मेट्रो येलो लाइन हर 3 मिनट पर उपलब्ध है।"
        },
        actionTip: {
          en: "Alight at Qutab Minar Metro Station Gate 1 and take a ₹20 DMRC electric shuttle.",
          hi: "कुतुब मीनार मेट्रो स्टेशन के गेट 1 पर उतरें और ₹20 की डीएमआरसी इलेक्ट्रिक शटल लें।"
        }
      },
      {
        id: "qutub-news-2",
        category: "monument",
        severity: "info",
        timestamp: { en: "Updated 2 hours ago", hi: "2 घंटे पहले अपडेट किया गया" },
        source: { en: "ASI Delhi Circle", hi: "एएसआई दिल्ली मंडल" },
        headline: {
          en: "Architectural Floodlighting Extended Till 9:00 PM with Separate Evening Entry",
          hi: "कुतुब मीनार में रात 9:00 बजे तक विशेष आर्किटेक्चरल लाइटिंग और संध्या प्रवेश"
        },
        summary: {
          en: "Over 350 warm LED architectural lamps highlight the Arabic & Nagari calligraphy bands on the 72.5m victory tower every evening after sunset.",
          hi: "हर शाम सूर्यास्त के बाद 350 से अधिक वार्म एलईडी लाइटों से 72.5 मीटर ऊंचे विजय स्तंभ की नक्काशी को रोशन किया जाता है।"
        },
        actionTip: {
          en: "Visit between 6:30 PM and 8:00 PM for cooler temperatures and dramatic night views.",
          hi: "सुहावने मौसम और रात्रि रोशनी के लिए शाम 6:30 से 8:00 बजे के बीच भ्रमण करें।"
        }
      },
      {
        id: "qutub-news-3",
        category: "weather",
        severity: "info",
        timestamp: { en: "Updated 3 hours ago", hi: "3 घंटे पहले अपडेट किया गया" },
        source: { en: "Mausam-X Mehrauli Ridge Station", hi: "मौसम-X महरौली रिज केंद्र" },
        headline: {
          en: "Green Forest Canopy Keeps Mehrauli Archaeological Park 2.5°C Cooler",
          hi: "हरित वन क्षेत्र के कारण महरौली पुरातत्व पार्क का तापमान 2.5°C कम"
        },
        summary: {
          en: "Adjacent 200-acre woodland acts as a natural microclimate sink, offering shaded trails around Jamali Kamali and Rajon Ki Baoli stepwell.",
          hi: "समीपवर्ती 200 एकड़ का हरित क्षेत्र प्राकृतिक ठंडक प्रदान करता है, जिससे जमाली कमाली और राजों की बावली का रास्ता छायादार रहता है।"
        },
        actionTip: {
          en: "Combine your Qutub visit with the free shaded walk into Mehrauli Archaeological Park.",
          hi: "कुतुब मीनार के साथ महरौली पुरातत्व पार्क के छायादार पथ का निःशुल्क भ्रमण करें।"
        }
      },
      {
        id: "qutub-news-4",
        category: "events",
        severity: "info",
        timestamp: { en: "Updated Today", hi: "आज अपडेट किया गया" },
        source: { en: "Delhi Tourism & INTACH", hi: "दिल्ली पर्यटन एवं इनटैक" },
        headline: {
          en: "Guided Heritage Walk Covering Iron Pillar Metallurgy & Alai Darwaza",
          hi: "लौह स्तंभ धातु विज्ञान और अलाई दरवाज़ा पर विशेष हेरिटेज वॉक"
        },
        summary: {
          en: "Conservation historians lead weekend morning sessions explaining the high-phosphorus rust-free composition of the 4th-century Gupta Iron Pillar.",
          hi: "संरक्षण इतिहासकार चौथी सदी के जंग-रहित गुप्तकालीन लौह स्तंभ के रहस्य पर सुबह विशेष सत्र आयोजित कर रहे हैं।"
        },
        actionTip: {
          en: "Enable SafarSaarthi Audio Walk Chapter 2 at the Quwwat-ul-Islam courtyard.",
          hi: "कुव्वत-उल-इस्लाम प्रांगण में सफ़रसारथी ऑडियो वॉक का भाग 2 सुनें।"
        }
      }
    ]
  },
  "hampi-chariot": {
    nearbyMetro: [
      {
        id: "gejjala-mandapa-buggy",
        name: { en: "Gejjala Mandapa EV Buggy Terminal", hi: "गेज्जला मंडप ईवी बग्गी टर्मिनल" },
        line: { en: "Hampi World Heritage Area · Green EV Corridor", hi: "हम्पी विश्व धरोहर · ग्रीन ईवी कॉरिडोर" },
        lineColor: "#224228",
        lineTextColor: "#ffffff",
        distance: "0.9 km",
        exitGateTip: {
          en: "Boarding Bay A for continuous battery-operated buggies to Vittala Temple gate",
          hi: "विट्ठल मंदिर द्वार के लिए बैटरी चालित बग्गी बोर्डिंग बे A से मिलती है"
        },
        lastMileTime: {
          en: "4 min Eco-Buggy / 11 min Ancient Bazaar Trail walk",
          hi: "4 मिनट इको-बग्गी / प्राचीन बाज़ार पथ से 11 मिनट पैदल"
        },
        estimatedFare: { en: "₹20 Return Ticket", hi: "₹20 (आने-जाने का टिकट)" },
        lat: 15.3318,
        lon: 76.4535
      },
      {
        id: "kamalapura-transit",
        name: { en: "Kamalapura ASI Museum Transit Hub", hi: "कमलापुर एएसआई संग्रहालय ट्रांजिट हब" },
        line: { en: "Royal Enclosure & Vittala Feeder Route", hi: "रॉयल एनक्लोज़र एवं विट्ठल फीडर रूट" },
        lineColor: "#0284c7",
        lineTextColor: "#ffffff",
        distance: "4.2 km",
        exitGateTip: {
          en: "Stop 2 opposite ASI Archaeological Museum for shared autos to Vittala checkpost",
          hi: "एएसआई संग्रहालय के सामने स्टॉप 2 से विट्ठल चेकपोस्ट के लिए ऑटो उपलब्ध हैं"
        },
        lastMileTime: {
          en: "9 min Auto to Gejjala Mandapa EV plaza",
          hi: "गेज्जला मंडप ईवी प्लाज़ा तक 9 मिनट ऑटो"
        },
        estimatedFare: { en: "₹80 – ₹100 (Auto)", hi: "₹80 – ₹100 (ऑटो)" },
        lat: 15.3046,
        lon: 76.4728
      },
      {
        id: "hosapete-junction",
        name: { en: "Hosapete Junction Railway Hub (HPT)", hi: "होसपेट जंक्शन रेलवे हब (HPT)" },
        line: { en: "South Western Railway & KSRTC Hampi Express", hi: "दक्षिण पश्चिम रेलवे एवं हम्पी एक्सप्रेस बस हब" },
        lineColor: "#16a34a",
        lineTextColor: "#ffffff",
        distance: "13.0 km",
        exitGateTip: {
          en: "Exit Platform 1 East Plaza for KSRTC non-stop Hampi Heritage Shuttle",
          hi: "प्लेटफॉर्म 1 ईस्ट प्लाज़ा से बाहर निकलें — हम्पी हेरिटेज शटल बस तुरंत मिलती है"
        },
        lastMileTime: {
          en: "22 min KSRTC Shuttle / Prepaid Auto to Hampi Bazaar",
          hi: "हम्पी बाज़ार तक 22 मिनट केएसआरटीसी शटल / प्रीपेड ऑटो"
        },
        estimatedFare: { en: "₹25 (KSRTC Bus) / ₹220 (Auto)", hi: "₹25 (बस) / ₹220 (ऑटो)" },
        lat: 15.2792,
        lon: 76.3871
      }
    ],
    localNews: [
      {
        id: "hampi-news-1",
        category: "traffic",
        severity: "high",
        timestamp: { en: "Updated 1 hour ago", hi: "1 घंटे पहले अपडेट किया गया" },
        source: { en: "HWHAMA Heritage Transport Authority", hi: "हम्पी विश्व धरोहर परिवहन प्राधिकरण" },
        headline: {
          en: "Motor Vehicles Prohibited Past Gejjala Mandapa Checkpost (1 km Eco Buffer)",
          hi: "गेज्जला मंडप चेकपोस्ट के आगे पेट्रोल/डीज़ल वाहनों का प्रवेश पूर्णतः वर्जित"
        },
        summary: {
          en: "To protect the 16th-century Vijayanagara granite pavilions from vibration, only official HWHAMA battery buggies and pedestrians are permitted on the final 1 km approach to Vittala Temple.",
          hi: "16वीं सदी के विजयनगर ग्रेनाइट मंडपों को कंपन से बचाने के लिए अंतिम 1 किमी मार्ग पर केवल बैटरी बग्गी और पैदल यात्रियों को अनुमति है।"
        },
        actionTip: {
          en: "Board the ₹20 EV Buggy at Gejjala Mandapa or walk the scenic Kuduregombe Mantapa trail.",
          hi: "गेज्जला मंडप से ₹20 की ईवी बग्गी लें या प्राचीन कुदुरेगोम्बे मंडप पथ से पैदल चलें।"
        }
      },
      {
        id: "hampi-news-2",
        category: "monument",
        severity: "advisory",
        timestamp: { en: "Updated 2 hours ago", hi: "2 घंटे पहले अपडेट किया गया" },
        source: { en: "ASI Hampi Mini Circle", hi: "एएसआई हम्पी मंडल सूचना" },
        headline: {
          en: "Protective Acoustic Cordon Active Around Saptaswara Musical Pillars",
          hi: "सप्तस्वर संगीतमय स्तंभों के चारों ओर संरक्षण घेरा लागू"
        },
        summary: {
          en: "Visitors may view the 56 resonant granite pillars of the Ranga Mantapa up close, while physical tapping of the columns remains restricted to preserve structural integrity.",
          hi: "पर्यटक रंग मंडप के 56 संगीतमय ग्रेनाइट स्तंभों को करीब से देख सकते हैं, लेकिन संरक्षण हेतु उन्हें थपथपाने पर प्रतिबंध है।"
        },
        actionTip: {
          en: "Play SafarSaarthi Audio Chapter 2 to hear archival acoustic recordings of the pillars.",
          hi: "स्तंभों की प्रामाणिक संगीत ध्वनि सुनने के लिए सफ़रसारथी ऑडियो भाग 2 चलाएं।"
        }
      },
      {
        id: "hampi-news-3",
        category: "weather",
        severity: "advisory",
        timestamp: { en: "Updated 3 hours ago", hi: "3 घंटे पहले अपडेट किया गया" },
        source: { en: "Mausam-X Tungabhadra Basin", hi: "मौसम-X तुंगभद्रा बेसिन केंद्र" },
        headline: {
          en: "Granite Boulder Radiation Peaks 12:30 PM – 3:00 PM; Early Morning Ideal",
          hi: "दोपहर 12:30 से 3:00 बजे के बीच ग्रेनाइट चट्टानों में तेज़ गर्मी; सुबह का समय सर्वोत्तम"
        },
        summary: {
          en: "Exposed boulder landscapes around the Tungabhadra river absorb solar heat rapidly after noon. Morning breeze remains cool and pleasant until 11:00 AM.",
          hi: "तुंगभद्रा नदी के आसपास की चट्टानें दोपहर में जल्दी गर्म हो जाती हैं। सुबह 11:00 बजे तक ठंडी हवा रहती है।"
        },
        actionTip: {
          en: "Carry 1.5L water in reusable flasks and wear thick cotton socks for bare-foot temple courtyards.",
          hi: "पानी की बोतल साथ रखें और मंदिर प्रांगण के गर्म पत्थर पर चलने के लिए सूती मोज़े पहनें।"
        }
      },
      {
        id: "hampi-news-4",
        category: "events",
        severity: "info",
        timestamp: { en: "Updated Today", hi: "आज अपडेट किया गया" },
        source: { en: "Karnataka Tourism Guild", hi: "कर्नाटक पर्यटन प्रकोष्ठ" },
        headline: {
          en: "Traditional Coracle Boats Operating at Purandaradasa Mantapa River Crossing",
          hi: "पुरंदरदास मंडप नदी घाट पर पारंपरिक गोल टोकरी नाव (कोराकल) संचालन जारी"
        },
        summary: {
          en: "Licensed boatmen are operating calm Tungabhadra river coracle rides near the ancient Vijayanagara bridge ruins during morning and sunset hours.",
          hi: "सुबह और सूर्यास्त के समय प्राचीन विजयनगर पुल अवशेषों के पास तुंगभद्रा नदी में पारंपरिक कोराकल नाव की सवारी उपलब्ध है।"
        },
        actionTip: {
          en: "Walk 500m riverside from Vittala Temple towards Purandaradasa Mantapa at 4:30 PM.",
          hi: "शाम 4:30 बजे विट्ठल मंदिर से 500 मीटर नदी किनारे पुरंदरदास मंडप की ओर जाएं।"
        }
      }
    ]
  },
  "red-fort": {
    nearbyMetro: [
      {
        id: "lal-qila-metro",
        name: { en: "Lal Qila Metro Station", hi: "लाल किला मेट्रो स्टेशन" },
        line: { en: "Delhi Metro · Violet Line (Line 6)", hi: "दिल्ली मेट्रो · वायलेट लाइन (लाइन 6)" },
        lineColor: "#7c3aed",
        lineTextColor: "#ffffff",
        distance: "0.2 km",
        exitGateTip: {
          en: "Exit Gate 4 opens directly onto the pedestrian plaza facing Lahori Gate",
          hi: "गेट 4 से बाहर निकलें — लाहौरी गेट का पैदल प्लाज़ा बिल्कुल सामने है"
        },
        lastMileTime: {
          en: "2 min direct pedestrian walkway (No auto needed)",
          hi: "मात्र 2 मिनट सीधा पैदल पथ (ऑटो की आवश्यकता नहीं)"
        },
        estimatedFare: { en: "Free 2-min walk", hi: "पैदल 2 मिनट (निःशुल्क)" },
        lat: 28.6558,
        lon: 77.2372
      },
      {
        id: "jama-masjid-metro",
        name: { en: "Jama Masjid Metro Station", hi: "जामा मस्जिद मेट्रो स्टेशन" },
        line: { en: "Delhi Metro · Violet Line Underground", hi: "दिल्ली मेट्रो · वायलेट लाइन भूमिगत" },
        lineColor: "#6d28d9",
        lineTextColor: "#ffffff",
        distance: "0.75 km",
        exitGateTip: {
          en: "Exit Gate 3 for Delhi Gate (Southern entrance of Red Fort) & Daryaganj",
          hi: "लाल किले के दिल्ली गेट (दक्षिणी द्वार) के लिए गेट 3 से बाहर निकलें"
        },
        lastMileTime: {
          en: "4 min E-Rickshaw / 9 min walk via Netaji Subhash Marg",
          hi: "4 मिनट ई-रिक्शा / नेताजी सुभाष मार्ग से 9 मिनट पैदल"
        },
        estimatedFare: { en: "₹15 (E-Rickshaw)", hi: "₹15 (ई-रिक्शा)" },
        lat: 28.6502,
        lon: 77.2378
      },
      {
        id: "chandni-chowk-metro",
        name: { en: "Chandni Chowk Metro Station", hi: "चांदनी चौक मेट्रो स्टेशन" },
        line: { en: "Delhi Metro · Yellow Line (Line 2)", hi: "दिल्ली मेट्रो · येलो लाइन (लाइन 2)" },
        lineColor: "#eab308",
        lineTextColor: "#1c1b1a",
        distance: "0.95 km",
        exitGateTip: {
          en: "Exit Gate 5 onto vehicle-free Shahjahanabad granite boulevard straight to Red Fort",
          hi: "गेट 5 से बाहर निकलें और वाहन-मुक्त चांदनी चौक हेरिटेज पथ से सीधे लाल किला पहुंचें"
        },
        lastMileTime: {
          en: "5 min Cycle Rickshaw / 11 min promenade walk",
          hi: "5 मिनट रिक्शा / 11 मिनट हेरिटेज कॉरिडोर वॉक"
        },
        estimatedFare: { en: "₹30 (Rickshaw) / Free Walk", hi: "₹30 (रिक्शा) / पैदल निःशुल्क" },
        lat: 28.6578,
        lon: 77.2301
      }
    ],
    localNews: [
      {
        id: "redfort-news-1",
        category: "traffic",
        severity: "high",
        timestamp: { en: "Updated 30 mins ago", hi: "30 मिनट पहले अपडेट किया गया" },
        source: { en: "Delhi Traffic Police Central District", hi: "दिल्ली यातायात पुलिस मध्य जिला" },
        headline: {
          en: "Chandni Chowk Main Boulevard Pedestrian-Only 9:00 AM to 9:00 PM",
          hi: "चांदनी चौक मुख्य मार्ग सुबह 9:00 से रात 9:00 बजे तक केवल पैदल यात्रियों हेतु आरक्षित"
        },
        summary: {
          en: "Motorized traffic is barred on the revamped red-granite Chandni Chowk stretch facing Lahori Gate. Visitors arriving by cab must use the Parade Ground underground parking.",
          hi: "लाहौरी गेट के सामने पुनर्विकसित चांदनी चौक मार्ग पर मोटर वाहन प्रतिबंधित हैं। कैब से आने वाले पर्यटक परेड ग्राउंड भूमिगत पार्किंग का उपयोग करें।"
        },
        actionTip: {
          en: "Take Violet Line to Lal Qila Metro Station Exit Gate 4 (200m direct walk).",
          hi: "वायलेट लाइन के लाल किला मेट्रो स्टेशन के गेट 4 से निकलें (मात्र 200 मीटर पैदल)।"
        }
      },
      {
        id: "redfort-news-2",
        category: "monument",
        severity: "advisory",
        timestamp: { en: "Updated 2 hours ago", hi: "2 घंटे पहले अपडेट किया गया" },
        source: { en: "ASI Red Fort Directorate", hi: "एएसआई लाल किला निदेशालय" },
        headline: {
          en: "Yaad-e-Jallian & Subhash Chandra Bose Barrack Museums Open Inside Precinct",
          hi: "परिसर के भीतर याद-ए-जलियां और सुभाष चंद्र बोस संग्रहालय पर्यटकों के लिए खुले"
        },
        summary: {
          en: "Colonial-era barracks behind Mumtaz Mahal now house four interactive national freedom movement museums accessible via the museum combo e-ticket.",
          hi: "मुमताज़ महल के पीछे स्थित ऐतिहासिक बैरकों में चार आधुनिक स्वतंत्रता संग्राम संग्रहालय खुले हैं, जिनमें कॉम्बो ई-टिकट से प्रवेश मिलता है।"
        },
        actionTip: {
          en: "Select the ASI Museum Combo Ticket online to skip separate counter queues.",
          hi: "अलग कतार से बचने के लिए ऑनलाइन एएसआई म्यूज़ियम कॉम्बो टिकट चुनें।"
        }
      },
      {
        id: "redfort-news-3",
        category: "weather",
        severity: "info",
        timestamp: { en: "Updated 3 hours ago", hi: "3 घंटे पहले अपडेट किया गया" },
        source: { en: "Mausam-X Old Delhi Node", hi: "मौसम-X पुरानी दिल्ली केंद्र" },
        headline: {
          en: "Breezy Riverfront Conditions at Diwan-i-Khas; Open Courtyards Warm at Noon",
          hi: "दीवान-ए-ख़ास में सुहावनी हवा; दोपहर में खुले प्रांगणों में हल्की धूप"
        },
        summary: {
          en: "The covered bazaar arcade (Chhatta Chowk) and marble pavilions stay comfortable, while the 400m walk between Naubat Khana and Rang Mahal is unshaded.",
          hi: "छत्ता चौक का ढका हुआ बाज़ार और संगमरमर के महल ठंडे रहते हैं, जबकि नौबत खाना से रंग महल के बीच का खुला मैदान धूप वाला है।"
        },
        actionTip: {
          en: "Explore the open Diwan-i-Aam courtyard before 11:00 AM, then tour indoor museums at noon.",
          hi: "सुबह 11:00 बजे से पहले खुले प्रांगण देखें और दोपहर में वातानुकूलित संग्रहालयों का भ्रमण करें।"
        }
      },
      {
        id: "redfort-news-4",
        category: "events",
        severity: "info",
        timestamp: { en: "Updated Today", hi: "आज अपडेट किया गया" },
        source: { en: "Jai Hind Sound & Light Desk", hi: "जय हिंद साउंड एंड लाइट डेस्क" },
        headline: {
          en: "Jai Hind Projection Mapping & Live Performance Show Tonight at 7:00 PM",
          hi: "आज शाम 7:00 बजे जय हिंद प्रोजेक्शन मैपिंग और लाइट एंड साउंड शो"
        },
        summary: {
          en: "A 60-minute immersive projection show across Naubat Khana and Diwan-i-Aam narrates 350 years of Red Fort history in Hindi and English.",
          hi: "नौबत खाना और दीवान-ए-आम की दीवारों पर 60 मिनट का भव्य प्रोजेक्शन शो लाल किले के 350 वर्षों के इतिहास को जीवंत करता है।"
        },
        actionTip: {
          en: "Book evening show seats at Lahori Gate kiosk before 5:30 PM.",
          hi: "शाम के शो की सीटें शाम 5:30 बजे से पहले लाहौरी गेट कियोस्क से बुक करें।"
        }
      }
    ]
  },
  "amer-fort": {
    nearbyMetro: [
      {
        id: "maota-lake-golf-terminal",
        name: { en: "Maota Lake Lower Ramp & EV Shuttle Plaza", hi: "मावठा झील निचला रैंप एवं ईवी शटल प्लाज़ा" },
        line: { en: "Amer Fort Hilltop Ascent Corridor", hi: "आमेर किला पहाड़ी आरोहण कॉरिडोर" },
        lineColor: "#224228",
        lineTextColor: "#ffffff",
        distance: "0.35 km",
        exitGateTip: {
          en: "East Ramp Gate for cobble-stone walk to Suraj Pol, or rear Kheri Gate for EV Jeep",
          hi: "सूरज पोल पैदल रैंप के लिए पूर्वी द्वार, या ईवी जीप के लिए खेड़ी गेट चुनें"
        },
        lastMileTime: {
          en: "4 min EV Golf Cart / 12 min royal cobbled ramp walk",
          hi: "4 मिनट गोल्फ़ कार्ट / 12 मिनट शाही पत्थर के रैंप पर पैदल"
        },
        estimatedFare: { en: "₹50 (EV Shuttle) / Free Walk", hi: "₹50 (ईवी शटल) / पैदल निःशुल्क" },
        lat: 26.9838,
        lon: 75.8532
      },
      {
        id: "jal-mahal-transit-stop",
        name: { en: "Jal Mahal / Man Sagar Promenade Hub", hi: "जल महल / मान सागर ट्रांजिट स्टॉप" },
        line: { en: "Amer Road Heritage Transit Corridor", hi: "आमेर रोड हेरिटेज ट्रांजिट कॉरिडोर" },
        lineColor: "#0284c7",
        lineTextColor: "#ffffff",
        distance: "3.9 km",
        exitGateTip: {
          en: "Stop opposite Man Sagar Lake deck for frequent electric autos to Amer",
          hi: "मान सागर झील डेक के सामने से आमेर के लिए हर 3 मिनट में इलेक्ट्रिक ऑटो मिलते हैं"
        },
        lastMileTime: {
          en: "7 min Electric Auto to Amer Kheri Gate",
          hi: "आमेर खेड़ी गेट तक 7 मिनट इलेक्ट्रिक ऑटो"
        },
        estimatedFare: { en: "₹30 (Shared E-Auto)", hi: "₹30 (शेयर्ड ई-ऑटो)" },
        lat: 26.9535,
        lon: 75.8462
      },
      {
        id: "badi-chaupar-amer-feeder",
        name: { en: "Badi Chaupar Metro + AC Low-Floor Feeder #5", hi: "बड़ी चौपड़ मेट्रो + एसी लो-फ्लोर बस रूट #5" },
        line: { en: "Jaipur Metro Pink Line + JCTSL Heritage Bus", hi: "जयपुर मेट्रो पिंक लाइन + जेसीटीएसएल बस" },
        lineColor: "#ec4899",
        lineTextColor: "#ffffff",
        distance: "8.2 km",
        exitGateTip: {
          en: "Exit Gate 1 at Badi Chaupar to board direct JCTSL AC Bus #5 to Amer Maota Lake",
          hi: "बड़ी चौपड़ गेट 1 से निकलकर आमेर मावठा झील के लिए सीधी एसी बस #5 पकड़ें"
        },
        lastMileTime: {
          en: "18 min scenic ride past Jal Mahal to Amer Fort base",
          hi: "जल महल होते हुए आमेर किले तक 18 मिनट का सुरम्य सफ़र"
        },
        estimatedFare: { en: "₹25 (AC Bus) / ₹150 (Auto)", hi: "₹25 (एसी बस) / ₹150 (ऑटो)" },
        lat: 26.9228,
        lon: 75.8261
      }
    ],
    localNews: [
      {
        id: "amer-news-1",
        category: "traffic",
        severity: "high",
        timestamp: { en: "Updated 40 mins ago", hi: "40 मिनट पहले अपडेट किया गया" },
        source: { en: "Amer Traffic & Heritage Police", hi: "आमेर यातायात एवं पर्यटक पुलिस" },
        headline: {
          en: "Rear Kheri Gate Road Restricted to Registered Jeeps & EV Shuttles 8 AM – 1 PM",
          hi: "सुबह 8 से दोपहर 1 बजे तक खेड़ी गेट पहाड़ी मार्ग केवल पंजीकृत जीप व ईवी शटल हेतु आरक्षित"
        },
        summary: {
          en: "Private cars must park at the Maota Lake multi-level plaza. Visitors can ascend via the scenic Suraj Pol pedestrian ramp or official ₹50 electric golf carts.",
          hi: "निजी कारों को मावठा झील पार्किंग में खड़ा करना होगा। पर्यटक सूरज पोल पैदल रैंप या ₹50 की आधिकारिक इलेक्ट्रिक गोल्फ़ कार्ट से ऊपर जा सकते हैं।"
        },
        actionTip: {
          en: "Use the Suraj Pol cobbled ramp before 9:30 AM for panoramic Maota Lake views.",
          hi: "मावठा झील के सुंदर दृश्य के लिए सुबह 9:30 बजे से पहले सूरज पोल रैंप से ऊपर जाएं।"
        }
      },
      {
        id: "amer-news-2",
        category: "monument",
        severity: "info",
        timestamp: { en: "Updated 2 hours ago", hi: "2 घंटे पहले अपडेट किया गया" },
        source: { en: "Amer Development & Management Authority", hi: "आमेर विकास एवं प्रबंधन प्राधिकरण" },
        headline: {
          en: "Sheesh Mahal Mirror Palace Flow Regulated via One-Way Heritage Queue",
          hi: "शीश महल दर्पण कक्ष में सुगम दर्शन हेतु वन-वे कतार व्यवस्था लागू"
        },
        summary: {
          en: "To prevent crowding around the convex Belgian glass mosaics, stewards guide visitors through a continuous loop from Ganesh Pol to Sukh Niwas.",
          hi: "बेल्जियम कांच की बारीक पच्चीकारी के पास भीड़ रोकने के लिए गणेश पोल से सुख निवास तक एकतरफा लूप बनाया गया है।"
        },
        actionTip: {
          en: "After Sheesh Mahal, take the underground tunnel path directly to Jaigarh Fort or Panna Meena Kund.",
          hi: "शीश महल के बाद पन्ना मीना का कुंड (800 मीटर) का शांत भ्रमण अवश्य करें।"
        }
      },
      {
        id: "amer-news-3",
        category: "weather",
        severity: "info",
        timestamp: { en: "Updated 3 hours ago", hi: "3 घंटे पहले अपडेट किया गया" },
        source: { en: "Mausam-X Aravalli Ridge", hi: "मौसम-X अरावली पर्वत केंद्र" },
        headline: {
          en: "Pleasant Hilltop Breeze Across Jaleb Chowk; Clear Aravalli Ridgeline Views",
          hi: "जलेब चौक पर सुहावनी पहाड़ी हवा; अरावली की प्राचीर का साफ़ नज़ारा"
        },
        summary: {
          en: "Elevated Aravalli breezes keep Sukh Niwas and Diwan-i-Aam 2°C cooler than central Jaipur.",
          hi: "अरावली की ऊंचाई पर चलने वाली हवाओं से सुख निवास और दीवान-ए-आम का तापमान जयपुर शहर से 2°C कम है।"
        },
        actionTip: {
          en: "Best photography light on Ganesh Pol frescoes is between 8:15 AM and 10:15 AM.",
          hi: "गणेश पोल की चित्रकारी के लिए सुबह 8:15 से 10:15 बजे की रोशनी सर्वोत्तम है।"
        }
      },
      {
        id: "amer-news-4",
        category: "events",
        severity: "info",
        timestamp: { en: "Updated Today", hi: "आज अपडेट किया गया" },
        source: { en: "RTDC Cultural Wing", hi: "आरटीडीसी सांस्कृतिक प्रकोष्ठ" },
        headline: {
          en: "Kesar Kyari Musical Light & Sound Show Over Maota Lake at 6:30 PM",
          hi: "मावठा झील के केसर क्यारी बाग में शाम 6:30 बजे लाइट एंड साउंड शो"
        },
        summary: {
          en: "Evening narration of Kachwaha Rajput history echoed against the Aravalli hills with reflection across Maota Lake.",
          hi: "अरावली की पहाड़ियों और मावठा झील के प्रतिबिंब के बीच कछवाहा राजपूत इतिहास की संगीतमय प्रस्तुति।"
        },
        actionTip: {
          en: "Pair the evening show with sunset tea at Nahargarh or Panna Meena Stepwell.",
          hi: "शाम के शो से पहले पन्ना मीना कुंड पर सूर्यास्त का आनंद लें।"
        }
      }
    ]
  },
  "gateway-india": {
    nearbyMetro: [
      {
        id: "vidhan-bhavan-metro",
        name: { en: "Vidhan Bhavan / Cuffe Parade Aqua Line Station", hi: "विधान भवन / कफ परेड एक्वा लाइन स्टेशन" },
        line: { en: "Mumbai Metro · Aqua Line 3 Southern Corridor", hi: "मुंबई मेट्रो · एक्वा लाइन 3 दक्षिणी कॉरिडोर" },
        lineColor: "#0284c7",
        lineTextColor: "#ffffff",
        distance: "1.4 km",
        exitGateTip: {
          en: "Exit Gate A1 towards Regal Circle & Colaba Causeway promenade",
          hi: "रीगल सर्कल और कोलाबा कॉज़वे के लिए गेट A1 से बाहर निकलें"
        },
        lastMileTime: {
          en: "5 min Taxi / 14 min walk via Regal Cinema & Sailor's Home",
          hi: "5 मिनट टैक्सी / रीगल सिनेमा होते हुए 14 मिनट पैदल"
        },
        estimatedFare: { en: "₹30 (Meter Taxi)", hi: "₹30 (मीटर टैक्सी)" },
        lat: 18.9254,
        lon: 72.8242
      },
      {
        id: "churchgate-metro",
        name: { en: "Churchgate Underground Metro (Aqua Line 3) & WR Terminus", hi: "चर्चगेट भूमिगत मेट्रो (एक्वा लाइन 3) एवं रेलवे टर्मिनस" },
        line: { en: "Mumbai Metro · Aqua Line 3 & Western Suburban", hi: "मुंबई मेट्रो · एक्वा लाइन 3 एवं पश्चिम रेलवे" },
        lineColor: "#0284c7",
        lineTextColor: "#ffffff",
        distance: "1.5 km",
        exitGateTip: {
          en: "Exit Gate B2 (Hutatma Chowk / Flora Fountain side) for fixed-fare heritage taxi",
          hi: "हुतात्मा चौक / फ्लोरा फाउंटेन की ओर गेट B2 से निकलें — शेयर टैक्सी स्टैंड सामने है"
        },
        lastMileTime: {
          en: "6 min Black-and-Yellow Meter Taxi / BEST AC Bus #103",
          hi: "6 मिनट काली-पीली मीटर टैक्सी / बेस्ट एसी बस #103"
        },
        estimatedFare: { en: "₹35 (Meter Taxi) / ₹10 (BEST AC Bus)", hi: "₹35 (मीटर टैक्सी) / ₹10 (बेस्ट एसी बस)" },
        lat: 18.9322,
        lon: 72.8264
      },
      {
        id: "csmt-metro-station",
        name: { en: "CSMT Metro (Aqua Line 3) & Heritage Terminus", hi: "सीएसएमटी भूमिगत मेट्रो (एक्वा लाइन 3) एवं टर्मिनस" },
        line: { en: "Mumbai Metro · Aqua Line 3 & Central Line Hub", hi: "मुंबई मेट्रो · एक्वा लाइन 3 एवं मध्य रेलवे" },
        lineColor: "#0369a1",
        lineTextColor: "#ffffff",
        distance: "2.3 km",
        exitGateTip: {
          en: "Exit via Heritage Subway Gate 3 for BEST Electric Double-Decker #A-115 to Apollo Bunder",
          hi: "हेरिटेज सबवे गेट 3 से निकलकर अपोलो बंदर के लिए इलेक्ट्रिक डबल-डेकर बस #A-115 लें"
        },
        lastMileTime: {
          en: "9 min Electric Double-Decker Bus through Kala Ghoda",
          hi: "काला घोड़ा होते हुए 9 मिनट इलेक्ट्रिक डबल-डेकर बस"
        },
        estimatedFare: { en: "₹15 (AC Double-Decker) / ₹45 (Taxi)", hi: "₹15 (एसी डबल-डेकर) / ₹45 (टैक्सी)" },
        lat: 18.9401,
        lon: 72.8347
      }
    ],
    localNews: [
      {
        id: "gateway-news-1",
        category: "traffic",
        severity: "advisory",
        timestamp: { en: "Updated 40 mins ago", hi: "40 मिनट पहले अपडेट किया गया" },
        source: { en: "Mumbai Traffic Police Colaba Division", hi: "मुंबई यातायात पुलिस कोलाबा प्रभाग" },
        headline: {
          en: "Chhatrapati Shivaji Maharaj Marg Around Apollo Bunder Is a Pedestrian-Only Plaza",
          hi: "अपोलो बंदर के चारों ओर छत्रपति शिवाजी महाराज मार्ग पैदल प्लाज़ा घोषित"
        },
        summary: {
          en: "Taxis and BEST buses drop visitors at Regal Circle or the Taj Mahal Palace north kerb. Note that auto-rickshaws do not operate in South Mumbai—use meter taxis or BEST AC buses.",
          hi: "टैक्सी और बेस्ट बसें रीगल सर्कल तक जाती हैं। ध्यान रहे कि दक्षिण मुंबई में ऑटो-रिक्शा नहीं चलते—केवल काली-पीली मीटर टैक्सी या बेस्ट एसी बस का उपयोग करें।"
        },
        actionTip: {
          en: "Take the ₹15 BEST Electric Double-Decker from CSMT or Churchgate to Regal Circle.",
          hi: "सीएसएमटी या चर्चगेट से रीगल सर्कल तक ₹15 की इलेक्ट्रिक डबल-डेकर बस लें।"
        }
      },
      {
        id: "gateway-news-2",
        category: "monument",
        severity: "info",
        timestamp: { en: "Updated 1 hour ago", hi: "1 घंटे पहले अपडेट किया गया" },
        source: { en: "Maharashtra Maritime Board & ASI", hi: "महाराष्ट्र मेरीटाइम बोर्ड एवं एएसआई" },
        headline: {
          en: "Elephanta Caves Ferry Departures Operating on Schedule from Jetty #1 & #2",
          hi: "एलिफेंटा गुफाओं के लिए जेटी #1 और #2 से फेरी नौकाएं समय पर संचालित"
        },
        summary: {
          en: "First boat to UNESCO Elephanta Island departs at 9:00 AM; last return boat leaves Elephanta at 5:30 PM (closed Mondays).",
          hi: "यूनेस्को एलिफेंटा द्वीप के लिए पहली नाव सुबह 9:00 बजे खुलती है; अंतिम वापसी नाव शाम 5:30 बजे है (सोमवार बंद)।"
        },
        actionTip: {
          en: "Buy official ferry tickets strictly at the MMB counter inside Gateway plaza, never from street touts.",
          hi: "फेरी टिकट केवल गेटवे प्लाज़ा के आधिकारिक काउंटर से ही खरीदें, दलालों से बचें।"
        }
      },
      {
        id: "gateway-news-3",
        category: "weather",
        severity: "info",
        timestamp: { en: "Updated 2 hours ago", hi: "2 घंटे पहले अपडेट किया गया" },
        source: { en: "Mausam-X Colaba Observatory", hi: "मौसम-X कोलाबा वेधशाला" },
        headline: {
          en: "Fresh Arabian Sea Breeze at 18 km/h; High Tide Spray Along Sea Wall at 4:15 PM",
          hi: "अरब सागर से 18 किमी/घंटा की ताज़ी समुद्री हवा; शाम 4:15 बजे हाई-टाइड"
        },
        summary: {
          en: "Pleasant coastal winds keep the basalt archway comfortable; mild sea spray expected along the eastern seawall during high tide.",
          hi: "समुद्री हवाओं से अपोलो बंदर का मौसम सुहावना है; हाई-टाइड के समय समुद्री दीवार के पास हल्की बौछारें आ सकती हैं।"
        },
        actionTip: {
          en: "Stroll 700m to Kala Ghoda Art Precinct during midday sun hours.",
          hi: "दोपहर की धूप के समय 700 मीटर दूर काला घोड़ा कला परिसर का भ्रमण करें।"
        }
      },
      {
        id: "gateway-news-4",
        category: "events",
        severity: "info",
        timestamp: { en: "Updated Today", hi: "आज अपडेट किया गया" },
        source: { en: "Kala Ghoda & NCPA Cultural Feed", hi: "काला घोड़ा एवं सांस्कृतिक बुलेटिन" },
        headline: {
          en: "Open-Air Victorian & Indo-Saracenic Architecture Walk from Regal to Horniman Circle",
          hi: "रीगल सर्कल से हॉर्निमन सर्कल तक विक्टोरियन और इंडो-सारासेनिक वास्तुकला वॉक"
        },
        summary: {
          en: "Self-guided heritage plaques along Rampart Row highlight Mumbai's 19th-century Gothic Revival and Art Deco ensembles.",
          hi: "रैम्पार्ट रो के साथ लगे हेरिटेज पट्ट मुंबई की 19वीं सदी की गोथिक और आर्ट डेको इमारतों का इतिहास बताते हैं।"
        },
        actionTip: {
          en: "Tap Sister Gem below to navigate the 8-minute walk to Kala Ghoda.",
          hi: "काला घोड़ा तक 8 मिनट के पैदल मार्ग के लिए नीचे दिए गए शांत वैकल्पिक स्थल कार्ड को देखें।"
        }
      }
    ]
  },
  "konark-sun-temple": {
    nearbyMetro: [
      {
        id: "konark-mo-bus-hub",
        name: { en: "Konark CRUT 'Mo Bus' AC Terminal (Route 70 & 72)", hi: "कोणार्क 'मो बस' एसी टर्मिनल (रूट 70 एवं 72)" },
        line: { en: "Odisha CRUT · Smart AC Transit Corridor", hi: "ओडिशा क्रूट · स्मार्ट एसी बस कॉरिडोर" },
        lineColor: "#16a34a",
        lineTextColor: "#ffffff",
        distance: "0.45 km",
        exitGateTip: {
          en: "Alight at Konark Interpretation Centre Plaza — pedestrian avenue leads straight to East Lion Gate",
          hi: "कोणार्क व्याख्या केंद्र प्लाज़ा पर उतरें — पैदल मार्ग सीधे सिंह द्वार तक जाता है"
        },
        lastMileTime: {
          en: "5 min landscaped heritage plaza walk",
          hi: "5 मिनट सुसज्जित हेरिटेज प्लाज़ा पैदल पथ"
        },
        estimatedFare: { en: "₹70 from Puri / ₹100 from Bhubaneswar (AC Mo Bus)", hi: "पुरी से ₹70 / भुवनेश्वर से ₹100 (एसी मो बस)" },
        lat: 19.8862,
        lon: 86.0915
      },
      {
        id: "chandrabhaga-shuttle-node",
        name: { en: "Chandrabhaga Blue Flag Beach Eco-Shuttle Node", hi: "चंद्रभागा ब्लू फ्लैग बीच इको-शटल स्टॉप" },
        line: { en: "Konark–Chandrabhaga Heritage Loop", hi: "कोणार्क–चंद्रभागा हेरिटेज लूप" },
        lineColor: "#eab308",
        lineTextColor: "#1c1b1a",
        distance: "3.1 km",
        exitGateTip: {
          en: "Board electric golf shuttle opposite Light House gate for Sun Temple return",
          hi: "सूर्य मंदिर वापसी के लिए लाइटहाउस गेट के सामने से इलेक्ट्रिक शटल लें"
        },
        lastMileTime: {
          en: "6 min E-Rickshaw / Shuttle",
          hi: "6 मिनट ई-रिक्शा / शटल"
        },
        estimatedFare: { en: "₹30 (Shared E-Auto)", hi: "₹30 (शेयर्ड ई-ऑटो)" },
        lat: 19.8655,
        lon: 86.1142
      },
      {
        id: "puri-railway-terminus",
        name: { en: "Puri Railway Terminus (PURI) & Marine Drive Hub", hi: "पुरी रेलवे टर्मिनस (PURI) एवं मरीन ड्राइव हब" },
        line: { en: "East Coast Railway & Konark Marine Drive Shuttle", hi: "पूर्व तट रेलवे एवं मरीन ड्राइव शटल" },
        lineColor: "#0284c7",
        lineTextColor: "#ffffff",
        distance: "33.5 km",
        exitGateTip: {
          en: "Exit Station Forecourt Bay 2 for direct Route 70 AC Mo Bus along scenic Bay of Bengal Marine Drive",
          hi: "स्टेशन परिसर बे 2 से बंगाल की खाड़ी के तटीय मरीन ड्राइव मार्ग वाली एसी मो बस #70 पकड़ें"
        },
        lastMileTime: {
          en: "45 min coastal drive via Ramchandi Estuary",
          hi: "रामचंडी मुहाना होते हुए 45 मिनट का तटीय सफ़र"
        },
        estimatedFare: { en: "₹70 (AC Mo Bus)", hi: "₹70 (एसी मो बस)" },
        lat: 19.8076,
        lon: 85.8380
      }
    ],
    localNews: [
      {
        id: "konark-news-1",
        category: "traffic",
        severity: "info",
        timestamp: { en: "Updated 1 hour ago", hi: "1 घंटे पहले अपडेट किया गया" },
        source: { en: "Odisha CRUT & Puri Traffic Wing", hi: "ओडिशा क्रूट एवं पुरी यातायात प्रकोष्ठ" },
        headline: {
          en: "Konark Outer Ring Plaza Pedestrianized; Free EV Carts for Senior Citizens",
          hi: "कोणार्क बाहरी रिंग प्लाज़ा पैदल यात्रियों हेतु समर्पित; वरिष्ठ नागरिकों के लिए निःशुल्क ईवी कार्ट"
        },
        summary: {
          en: "All buses and taxis stop at the newly landscaped Konark Heritage Plaza 450m from the temple enclosure. Dedicated battery carts operate continuously to the ASI ticket gate.",
          hi: "सभी बसें और टैक्सियां मंदिर परिसर से 450 मीटर दूर नवनिर्मित हेरिटेज प्लाज़ा पर रुकती हैं। एएसआई गेट तक बैटरी कार्ट लगातार चल रही हैं।"
        },
        actionTip: {
          en: "Visit the free IOCL Sun Temple Interpretation Centre right beside the drop-off plaza first.",
          hi: "मंदिर में जाने से पहले ड्रॉप-ऑफ प्लाज़ा के पास स्थित निःशुल्क सूर्य मंदिर व्याख्या केंद्र ज़रूर देखें।"
        }
      },
      {
        id: "konark-news-2",
        category: "monument",
        severity: "info",
        timestamp: { en: "Updated 2 hours ago", hi: "2 घंटे पहले अपडेट किया गया" },
        source: { en: "ASI Bhubaneswar Circle", hi: "एएसआई भुवनेश्वर मंडल" },
        headline: {
          en: "Clear Viewing Corridors Opened Around All 24 Carved Stone Chariot Wheels",
          hi: "सभी 24 नक्काशीदार पाषाण रथ चक्रों के चारों ओर स्पष्ट अवलोकन पथ खुला"
        },
        summary: {
          en: "Conservation scaffolding on the southern Jagamohana plinth has been removed, allowing unobstructed views of the sundial spokes and astronomical medallions.",
          hi: "जगमोहन के दक्षिणी चबूतरे से संरक्षण पाड़ हटा दी गई है, जिससे अब धूपघड़ी के तीलियों और नक्काशी का स्पष्ट दर्शन संभव है।"
        },
        actionTip: {
          en: "Examine the 8th wheel on the south base—its axle shadow tells current IST within 2 minutes!",
          hi: "दक्षिणी आधार के 8वें पहिए को देखें—इसकी धुरी की छाया सटीक समय बताती है!"
        }
      },
      {
        id: "konark-news-3",
        category: "weather",
        severity: "info",
        timestamp: { en: "Updated 3 hours ago", hi: "3 घंटे पहले अपडेट किया गया" },
        source: { en: "Mausam-X Bay of Bengal Coastal Node", hi: "मौसम-X बंगाल की खाड़ी तटीय केंद्र" },
        headline: {
          en: "Cooling Sea Breeze from Chandrabhaga Coast; UV Index Moderate After 3:30 PM",
          hi: "चंद्रभागा तट से ठंडी समुद्री हवा; दोपहर 3:30 बजे के बाद धूप में राहत"
        },
        summary: {
          en: "Onshore coastal winds moderate afternoon humidity across the casuarina groves surrounding the temple lawn.",
          hi: "तटीय हवाओं और मंदिर के चारों ओर लगे झाऊ के पेड़ों से दोपहर की उमस में राहत रहती है।"
        },
        actionTip: {
          en: "Schedule your Sun Temple walk for 8:00–10:30 AM or 3:30–5:30 PM.",
          hi: "सूर्य मंदिर भ्रमण के लिए सुबह 8:00–10:30 या शाम 3:30–5:30 बजे का समय चुनें।"
        }
      },
      {
        id: "konark-news-4",
        category: "events",
        severity: "info",
        timestamp: { en: "Updated Today", hi: "आज अपडेट किया गया" },
        source: { en: "Odisha Tourism Cultural Desk", hi: "ओडिशा पर्यटन सांस्कृतिक प्रकोष्ठ" },
        headline: {
          en: "Bilingual Wireless Audio Headset Sound & Light Show Tonight at 6:30 PM",
          hi: "आज शाम 6:30 बजे वायरलेस ऑडियो हेडसेट के साथ ध्वनि एवं प्रकाश शो"
        },
        summary: {
          en: "Visitors receive individual wireless headphones (EN/HI/Odia) synced with high-lumen 3D projection mapping on the Natamandira and Chariot plinth.",
          hi: "पर्यटकों को व्यक्तिगत वायरलेस हेडफ़ोन (अंग्रेज़ी/हिंदी/ओड़िया) दिए जाते हैं जो नटमंदिर पर 3D प्रोजेक्शन मैपिंग के साथ चलते हैं।"
        },
        actionTip: {
          en: "Collect wireless headset tokens at the East Gate booth by 6:00 PM.",
          hi: "शाम 6:00 बजे तक पूर्वी गेट बूथ से वायरलेस हेडसेट टोकन प्राप्त करें।"
        }
      }
    ]
  },
  "meenakshi-temple": {
    nearbyMetro: [
      {
        id: "jhansi-rani-park-ev-plaza",
        name: { en: "Jhansi Rani Park EV Battery Car Terminal", hi: "झांसी रानी पार्क ईवी बैटरी कार टर्मिनल" },
        line: { en: "Madurai Temple Precinct · Zero-Vehicle Ring", hi: "मदुरै मंदिर परिसर · वाहन-मुक्त रिंग" },
        lineColor: "#224228",
        lineTextColor: "#ffffff",
        distance: "0.3 km",
        exitGateTip: {
          en: "Official Madurai Corporation battery cars drop directly at East & South Gopuram footwear cloakrooms",
          hi: "मदुरै निगम की बैटरी कारें सीधे पूर्वी और दक्षिणी गोपुरम के क्लोकरूम पर उतारती हैं"
        },
        lastMileTime: {
          en: "2 min Battery Car / 4 min pedestrian street walk",
          hi: "2 मिनट बैटरी कार / 4 मिनट पैदल पथ"
        },
        estimatedFare: { en: "₹15 (Battery Car)", hi: "₹15 (बैटरी कार)" },
        lat: 9.9175,
        lon: 78.1165
      },
      {
        id: "madurai-junction-hub",
        name: { en: "Madurai Junction Railway Station (MDU) East Gate", hi: "मदुरै जंक्शन रेलवे स्टेशन (MDU) पूर्वी गेट" },
        line: { en: "Southern Railway & Heritage E-Shuttle Corridor", hi: "दक्षिण रेलवे एवं हेरिटेज ई-शटल कॉरिडोर" },
        lineColor: "#16a34a",
        lineTextColor: "#ffffff",
        distance: "1.1 km",
        exitGateTip: {
          en: "Exit Platform 1 East Gate onto Town Hall Road — straight 1 km heritage walk to Ashta Shakthi Mandapam",
          hi: "प्लेटफॉर्म 1 पूर्वी गेट से टाउन हॉल रोड पर निकलें — अष्ट शक्ति मंडपम सीधा 1 किमी आगे है"
        },
        lastMileTime: {
          en: "5 min Prepaid Auto / 12 min straight walk via Town Hall Rd",
          hi: "5 मिनट प्रीपेड ऑटो / टाउन हॉल रोड से 12 मिनट पैदल"
        },
        estimatedFare: { en: "₹40 (Prepaid Auto) / Free Walk", hi: "₹40 (प्रीपेड ऑटो) / पैदल निःशुल्क" },
        lat: 9.9142,
        lon: 78.1102
      },
      {
        id: "periyar-bus-terminus",
        name: { en: "Periyar Central City Bus Terminus", hi: "पेरियार सेंट्रल सिटी बस टर्मिनस" },
        line: { en: "TNSTC Madurai Smart City Transit Hub", hi: "मदुरै स्मार्ट सिटी बस ट्रांजिट हब" },
        lineColor: "#0284c7",
        lineTextColor: "#ffffff",
        distance: "1.2 km",
        exitGateTip: {
          en: "Take the pedestrian subway towards West Masi Street for West Raja Gopuram entry",
          hi: "पश्चिमी राजा गोपुरम प्रवेश के लिए वेस्ट मासी स्ट्रीट सबवे का उपयोग करें"
        },
        lastMileTime: {
          en: "4 min E-Rickshaw / 10 min walk via West Avani Moola St",
          hi: "4 मिनट ई-रिक्शा / वेस्ट अवनी मूला स्ट्रीट से 10 मिनट पैदल"
        },
        estimatedFare: { en: "₹20 (Shared E-Auto)", hi: "₹20 (शेयर्ड ई-ऑटो)" },
        lat: 9.9146,
        lon: 78.1128
      }
    ],
    localNews: [
      {
        id: "meenakshi-news-1",
        category: "monument",
        severity: "high",
        timestamp: { en: "Updated 30 mins ago", hi: "30 मिनट पहले अपडेट किया गया" },
        source: { en: "Madurai Temple Devasthanam Board", hi: "मदुरै मंदिर देवस्थानम बोर्ड सूचना" },
        headline: {
          en: "Afternoon Sanctum Closure 12:30 PM – 4:00 PM; Mobile Phones Must Be Deposited",
          hi: "दोपहर 12:30 से 4:00 बजे तक गर्भगृह बंद; मोबाइल फोन क्लोकरूम में जमा करना अनिवार्य"
        },
        summary: {
          en: "Mobile phones, smartwatches, and cameras are strictly prohibited inside the four Gopuram gates. Secure digital token lockers operate at East, South, North, and West towers.",
          hi: "चारों गोपुरम द्वारों के भीतर मोबाइल फोन, स्मार्टवॉच और कैमरे ले जाना सख्त वर्जित है। सभी द्वारों पर सुरक्षित डिजिटल लॉकर उपलब्ध हैं।"
        },
        actionTip: {
          en: "Listen to SafarSaarthi Audio Lore before depositing your phone at the East Gopuram locker.",
          hi: "पूर्वी गोपुरम लॉकर में फोन जमा करने से पहले सफ़रसारथी ऑडियो गाथा सुन लें।"
        }
      },
      {
        id: "meenakshi-news-2",
        category: "traffic",
        severity: "info",
        timestamp: { en: "Updated 2 hours ago", hi: "2 घंटे पहले अपडेट किया गया" },
        source: { en: "Madurai City Traffic Police", hi: "मदुरै नगर यातायात पुलिस" },
        headline: {
          en: "Four Chithirai Streets Around Temple Are 100% Pedestrian & EV Battery Zones",
          hi: "मंदिर के चारों ओर की चारों चिथिरई गलियां पूर्णतः पैदल एवं ईवी बैटरी ज़ोन हैं"
        },
        summary: {
          en: "Cabs and autos stop at Jhansi Rani Park or East Veli Street multi-level parking. Free and ₹15 electric carts circle the four 170-foot Gopuram towers.",
          hi: "कैब और ऑटो झांसी रानी पार्क या ईस्ट वेली स्ट्रीट पार्किंग पर रुकते हैं। चारों 170-फीट गोपुरम के चारों ओर ₹15 की इलेक्ट्रिक कारें चलती हैं।"
        },
        actionTip: {
          en: "Use the East Tower (Ashta Shakthi Mandapam) entrance for the shortest locker & footwear line.",
          hi: "सबसे कम कतार के लिए पूर्वी गोपुरम (अष्ट शक्ति मंडपम) प्रवेश द्वार चुनें।"
        }
      },
      {
        id: "meenakshi-news-3",
        category: "weather",
        severity: "info",
        timestamp: { en: "Updated 3 hours ago", hi: "3 घंटे पहले अपडेट किया गया" },
        source: { en: "Mausam-X Vaigai River Node", hi: "मौसम-X वैगई नदी केंद्र" },
        headline: {
          en: "Cool Granite Mandapams Inside; Visit Thirumalai Nayakkar Palace During 12:30–4 PM Break",
          hi: "मंडपम के भीतर ठंडा वातावरण; दोपहर 12:30–4 बजे के अंतराल में तिरुमलाई नायक महल देखें"
        },
        summary: {
          en: "While the inner temple closes at midday, the 1,000-Pillar Hall Museum and nearby Thirumalai Nayakkar Palace (1.2 km away) remain open and shaded.",
          hi: "दोपहर में जब मुख्य गर्भगृह बंद रहता है, तब 1.2 किमी दूर स्थित विशाल तिरुमलाई नायक महल खुला और छायादार रहता है।"
        },
        actionTip: {
          en: "Tap the Sister Gem card below to visit Thirumalai Nayakkar Palace during afternoon break.",
          hi: "दोपहर के अवकाश में तिरुमलाई नायक महल जाने के लिए नीचे दिए गए वैकल्पिक स्थल कार्ड को देखें।"
        }
      },
      {
        id: "meenakshi-news-4",
        category: "events",
        severity: "info",
        timestamp: { en: "Updated Today", hi: "आज अपडेट किया गया" },
        source: { en: "Temple Cultural Chronicle", hi: "मंदिर सांस्कृतिक बुलेटिन" },
        headline: {
          en: "Night Palliyarai (Sacred Procession) Ceremony at 9:00 PM with Nadaswaram Music",
          hi: "रात 9:00 बजे नादस्वरम संगीत के साथ पारंपरिक पल्लियारई शोभायात्रा"
        },
        summary: {
          en: "Every evening at 9:00 PM, temple priests carry the bronze image of Lord Sundareswarar in a silver palanquin accompanied by traditional temple percussion.",
          hi: "प्रत्येक रात 9:00 बजे पारंपरिक वाद्ययंत्रों की गूंज के साथ चांदी की पालकी में भगवान सुंदरेश्वरर की शोभायात्रा निकाली जाती है।"
        },
        actionTip: {
          en: "Enter by 8:15 PM via South Gopuram to witness the evening procession peacefully.",
          hi: "रात्रि आरती और शोभायात्रा के शांत दर्शन के लिए रात 8:15 बजे तक दक्षिणी गोपुरम से प्रवेश करें।"
        }
      }
    ]
  },
  "ajanta-caves": {
    nearbyMetro: [
      {
        id: "fardapur-t-point-shuttle",
        name: { en: "Ajanta Foot-Hill MSRTC Green Bus Terminal (Fardapur)", hi: "अजंता तलहटी एमएसआरटीसी ग्रीन बस टर्मिनल (फ़रदापुर)" },
        line: { en: "MTDC–MSRTC Eco-Shuttle Corridor (Mandatory Final 4 km)", hi: "एमटीडीसी–एमएसआरटीसी इको-शटल कॉरिडोर (अंतिम 4 किमी अनिवार्य)" },
        lineColor: "#16a34a",
        lineTextColor: "#ffffff",
        distance: "4.0 km",
        exitGateTip: {
          en: "Bay 1 & 2 inside Visitor Amenity Plaza for AC Green Shuttle to Waghora Gorge Cave 1 ramp",
          hi: "वाघोरा घाटी की गुफा 1 रैंप तक जाने वाली एसी ग्रीन शटल बस बे 1 और 2 से मिलती है"
        },
        lastMileTime: {
          en: "8 min scenic gorge drive in MSRTC Eco-Bus",
          hi: "एमएसआरटीसी इको-बस द्वारा घाटी में 8 मिनट का सुरम्य सफ़र"
        },
        estimatedFare: { en: "₹25 – ₹30 (AC Eco-Shuttle)", hi: "₹25 – ₹30 (एसी इको-शटल)" },
        lat: 20.5312,
        lon: 75.7345
      },
      {
        id: "jalgaon-railway-junction",
        name: { en: "Jalgaon Railway Junction (JL) — Nearest Railhead", hi: "जलगांव रेलवे जंक्शन (JL) — निकटतम रेलवे स्टेशन" },
        line: { en: "Central Railway Mainline & Ajanta Express Feeder", hi: "मध्य रेलवे मुख्य लाइन एवं अजंता एक्सप्रेस फीडर" },
        lineColor: "#0284c7",
        lineTextColor: "#ffffff",
        distance: "58.0 km",
        exitGateTip: {
          en: "Exit West Station Plaza for MSRTC Shivshahi AC buses & prepaid taxis to Ajanta Caves",
          hi: "अजंता गुफाओं के लिए शिवशाही एसी बस और प्रीपेड टैक्सी हेतु पश्चिमी स्टेशन प्लाज़ा से निकलें"
        },
        lastMileTime: {
          en: "1 hr 10 min smooth highway transit to Ajanta T-Point",
          hi: "अजंता टी-पॉइंट तक 1 घंटा 10 मिनट का सुगम राजमार्ग सफ़र"
        },
        estimatedFare: { en: "₹110 (MSRTC Bus)", hi: "₹110 (एमएसआरटीसी बस)" },
        lat: 21.0077,
        lon: 75.5626
      },
      {
        id: "sambhajinagar-central-hub",
        name: { en: "Chhatrapati Sambhajinagar (Aurangabad) Station & CIDCO Bus Port", hi: "छत्रपति संभाजीनगर (औरंगाबाद) स्टेशन एवं सिडको बस पोर्ट" },
        line: { en: "South Central Railway & MTDC Heritage Circuit", hi: "दक्षिण मध्य रेलवे एवं एमटीडीसी हेरिटेज सर्किट" },
        lineColor: "#7c3aed",
        lineTextColor: "#ffffff",
        distance: "99.0 km",
        exitGateTip: {
          en: "Platform 1 Tourist Facilitation Desk for 7:30 AM MTDC Ajanta Luxury Coach",
          hi: "सुबह 7:30 बजे की एमटीडीसी अजंता कोच के लिए प्लेटफॉर्म 1 पर्यटन सहायता केंद्र जाएं"
        },
        lastMileTime: {
          en: "2 hr 10 min via newly widened NH-753F four-lane highway",
          hi: "नवनिर्मित 4-लेन राजमार्ग NH-753F से 2 घंटे 10 मिनट का सफ़र"
        },
        estimatedFare: { en: "₹180 (MSRTC) / ₹2,400 (Return Cab)", hi: "₹180 (बस) / ₹2,400 (वापसी कैब)" },
        lat: 19.8608,
        lon: 75.3125
      }
    ],
    localNews: [
      {
        id: "ajanta-news-1",
        category: "monument",
        severity: "high",
        timestamp: { en: "Updated 1 hour ago", hi: "1 घंटे पहले अपडेट किया गया" },
        source: { en: "ASI Aurangabad Circle Notice", hi: "एएसआई छत्रपति संभाजीनगर मंडल सूचना" },
        headline: {
          en: "Ajanta Caves Closed Every Monday; 15-Minute Conservation Batch Entry in Caves 1, 2, 16 & 17",
          hi: "अजंता गुफाएं प्रत्येक सोमवार बंद; गुफा 1, 2, 16 और 17 में 15-मिनट बैच प्रवेश लागू"
        },
        summary: {
          en: "To protect 5th-century tempera murals (Padmapani & Vajrapani) from humidity and CO2, maximum 40 visitors enter painted caves at a time under cold fiber-optic lighting.",
          hi: "5वीं सदी के पद्मपाणि और वज्रपाणि भित्तिचित्रों को नमी से बचाने के लिए फाइबर-ऑप्टिक रोशनी में एक बार में अधिकतम 40 पर्यटकों को प्रवेश दिया जाता है।"
        },
        actionTip: {
          en: "Catch the first 8:00 AM eco-shuttle from Fardapur T-Point to enter Cave 1 & 2 with zero wait.",
          hi: "गुफा 1 और 2 में बिना कतार प्रवेश के लिए फ़रदापुर टी-पॉइंट से सुबह 8:00 बजे की पहली इको-शटल पकड़ें।"
        }
      },
      {
        id: "ajanta-news-2",
        category: "traffic",
        severity: "info",
        timestamp: { en: "Updated 2 hours ago", hi: "2 घंटे पहले अपडेट किया गया" },
        source: { en: "NHAI & Maharashtra Highway Police", hi: "एनएचएआई एवं महाराष्ट्र राजमार्ग पुलिस" },
        headline: {
          en: "New 4-Lane Concrete Highway (NH-753F) Cuts Sambhajinagar–Ajanta Drive Time to 2 Hours",
          hi: "नए 4-लेन कंक्रीट राजमार्ग (NH-753F) से संभाजीनगर–अजंता का सफ़र अब केवल 2 घंटे में"
        },
        summary: {
          en: "All ghat bottlenecks at Sillod and Soygaon have been bypassed with smooth 4-lane corridors. Private vehicles park at Fardapur T-Point and transfer to MSRTC Green Buses.",
          hi: "सिल्लोड और सोयगांव के घाट मार्ग अब सुगम 4-लेन हो चुके हैं। निजी वाहन फ़रदापुर टी-पॉइंट पर पार्क होते हैं जहां से ग्रीन बसें गुफाओं तक जाती हैं।"
        },
        actionTip: {
          en: "Keep ₹30 cash/UPI handy for the mandatory MSRTC Green Shuttle at the T-Point.",
          hi: "टी-पॉइंट पर अनिवार्य एमएसआरटीसी ग्रीन शटल के लिए ₹30 नकद या यूपीआई तैयार रखें।"
        }
      },
      {
        id: "ajanta-news-3",
        category: "weather",
        severity: "info",
        timestamp: { en: "Updated 3 hours ago", hi: "3 घंटे पहले अपडेट किया गया" },
        source: { en: "Mausam-X Waghora Gorge Node", hi: "मौसम-X वाघोरा घाटी केंद्र" },
        headline: {
          en: "Basalt Rock Caves Stay Naturally Cool at 24°C; Gorge Rim Viewpoint Breezy",
          hi: "बेसाल्ट चट्टान की गुफाओं का आंतरिक तापमान 24°C; वाघोरा व्यूपॉइंट पर ठंडी हवा"
        },
        summary: {
          en: "The horseshoe-shaped basalt cliff shields the cave colonnades from direct midday sun while the Saptakunda waterfall pool remains full.",
          hi: "घोड़े की नाल के आकार की बेसाल्ट चट्टान गुफा के बरामदों को सीधी धूप से बचाती है और सप्तकुंड जलप्रपात में पानी का सुंदर प्रवाह है।"
        },
        actionTip: {
          en: "Wear slip-on footwear—shoes must be removed repeatedly outside painted vihara caves.",
          hi: "आसानी से खुलने वाले जूते/सैंडल पहनें—चित्रित गुफाओं के बाहर जूते बार-बार उतारने होते हैं।"
        }
      },
      {
        id: "ajanta-news-4",
        category: "events",
        severity: "info",
        timestamp: { en: "Updated Today", hi: "आज अपडेट किया गया" },
        source: { en: "MTDC Ajanta Visitor Centre", hi: "एमटीडीसी अजंता पर्यटक केंद्र" },
        headline: {
          en: "Full-Scale 3D Replica Caves & British Rediscovery Gallery Open at Foot-Hill Plaza",
          hi: "तलहटी प्लाज़ा में गुफा 1, 2, 16, 17 की पूर्ण-आकार 3D प्रतिकृति गैलरी खुली"
        },
        summary: {
          en: "Before or after visiting the cliff, visitors can photograph high-resolution illuminated replicas of the Jataka murals at the Fardapur Visitor Centre.",
          hi: "मूल गुफाओं में फ्लैश फोटोग्राफी वर्जित होने के कारण पर्यटक फ़रदापुर केंद्र में बनी सटीक 3D प्रतिकृतियों में नज़दीक से फोटो ले सकते हैं।"
        },
        actionTip: {
          en: "Hike the 15-minute trail across the Waghora footbridge to the 1819 John Smith Viewpoint.",
          hi: "वाघोरा पुल पार कर 15 मिनट के पैदल पथ से जॉन स्मिथ पैनोरमा व्यूपॉइंट ज़रूर जाएं।"
        }
      }
    ]
  }
};


// Attach enrichments (nearbyMetro & localNews) to MONUMENTS
if (typeof MONUMENT_ENRICHMENTS !== 'undefined') {
  MONUMENTS.forEach(m => {
    if (MONUMENT_ENRICHMENTS[m.id]) {
      m.nearbyMetro = MONUMENT_ENRICHMENTS[m.id].nearbyMetro || [];
      m.localNews = MONUMENT_ENRICHMENTS[m.id].localNews || [];
    }
  });
}

if (typeof window !== "undefined") {
  window.MONUMENTS = MONUMENTS;
  window.METRO_NETWORKS = METRO_NETWORKS;
  window.MONUMENT_ENRICHMENTS = MONUMENT_ENRICHMENTS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MONUMENTS, METRO_NETWORKS, MONUMENT_ENRICHMENTS };
}
