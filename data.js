// ==========================================================================
// SafarSaarthi (सफ़र सारथी) — Heritage Monument Data (data.js)
// Expanded with GPS coordinates, HD online imagery, and 10 iconic UNESCO sites.
// Crowd data sourced from ASI & Google Popular Times Footfall Datasets.
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MONUMENTS };
}
if (typeof window !== 'undefined') {
  window.MONUMENTS = MONUMENTS;
}
