(() => {
  const images = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=85"
  ];
  const services = [
    ["actress-companions-in-mumbai","Actress Companions in Mumbai","actress companions mumbai","Polished adult companions for dinners, premieres and private social occasions.","This category focuses on confident presentation and comfortable conversation for carefully planned social engagements. Share the occasion and dress code so a suitable available profile can be considered."],
    ["air-hostess-style-companions","Air Hostess–Style Companions","air hostess companions mumbai","Travel-friendly adult companions with polished communication and adaptable schedules.","This profile style suits guests who value punctuality, hospitality awareness and multilingual conversation. Confirm languages, timing and the complete itinerary during the first enquiry."],
    ["assamese-companions-in-mumbai","Assamese Companions in Mumbai","assamese companions mumbai","Assamese-speaking or culturally familiar adult social companionship.","Ask about language comfort, interests and current availability rather than relying only on a regional label. Thoughtful matching should be based on verified individual profile details."],
    ["bengali-companions-in-mumbai","Bengali Companions in Mumbai","bengali companions mumbai","Bengali-speaking adult companions for dining and cultural outings.","Mention whether the plan involves dinner, an arts event or relaxed conversation. Confirm the schedule, meeting area and agreed expectations before finalising."],
    ["bhojpuri-speaking-companions","Bhojpuri-Speaking Companions","bhojpuri companions mumbai","Adult social company for guests who prefer Bhojpuri conversation.","Describe the occasion and language preference clearly. Current presentation, availability and profile details should always be confirmed directly."],
    ["bollywood-style-companions","Bollywood-Style Companions","bollywood companions mumbai","Glamorous adult companions for upscale venues and special occasions.","This category describes styling and presence, not celebrity status. Share the venue, dress code and duration so the closest suitable profile can be suggested."],
    ["young-professional-companions-21","Young Professional Companions 21+","young professional companions mumbai","Contemporary adult companions aged 21+ for coffee, city plans and events.","Compare profiles by shared interests, communication style and availability. Every listed person must be a consenting adult, and age should never imply a particular experience."],
    ["international-companions","International Companions","international companions mumbai","Multilingual adult profiles for cosmopolitan social company.","Confirm spoken languages and current profile information instead of relying on appearance-based assumptions. Background descriptions should remain accurate and respectful."],
    ["high-profile-companions","High-Profile Companions","high profile companions mumbai","Discreet, polished profiles for formal dinners and executive occasions.","High-profile service should refer to planning quality, privacy and presentation—not unverifiable celebrity claims. Confirm etiquette, transport, timing and total costs."],
    ["private-social-companions","Private Social Companions","private companions mumbai","Adult companionship for conversation, dining and planned social time.","Begin with a concise message covering the date, area, duration and occasion. Clear written expectations make coordination simpler for everyone."],
    ["mature-companions-in-mumbai","Mature Companions in Mumbai","mature companions mumbai","Sophisticated adult companions valued for confidence and conversation.","Choose according to shared interests and the character of the occasion. Avoid assumptions about personal circumstances and rely on current profile information."],
    ["kerala-companions-in-mumbai","Kerala Companions in Mumbai","kerala companions mumbai","Malayalam-speaking adult profiles for culturally familiar social plans.","Confirm language, interests, area and availability during the enquiry. Providing the venue type and schedule helps identify a relevant profile."],
    ["marathi-companions-in-mumbai","Marathi Companions in Mumbai","marathi companions mumbai","Local Marathi-speaking adult companions for dining and events.","Mention your preferred language, neighbourhood, occasion and duration. Local knowledge can support a smoother social plan, but individual interests still matter most."],
    ["model-companions-in-mumbai","Model Companions in Mumbai","model companions mumbai","Fashion-forward adult profiles for premium social occasions.","Review current photographs, presentation notes and verification information before deciding. State the dress code and do not assume services beyond those clearly listed."],
    ["mumbai-companion-service","Mumbai Companion Service","mumbai companion service","An overview of private adult social-companionship options across Mumbai.","Compare profiles, locations and availability in one place. A complete first enquiry should include date, time, area, occasion and expected duration."],
    ["hotel-outcall-companions","Hotel Outcall Companions","hotel companions mumbai","Planning guidance for discreet meetings at established Mumbai hotels.","Confirm the hotel first and then choose an available profile. Guests are responsible for checking visitor rules, valid identification requirements and access procedures."],
    ["muslim-companions-in-mumbai","Muslim Companions in Mumbai","muslim companions mumbai","A respectful guide for adults with cultural or language preferences.","Personal identity is private and should never be reduced to a label. Focus on language, interests, attire preferences and the nature of the social occasion."],
    ["nepali-companions-in-mumbai","Nepali Companions in Mumbai","nepali companions mumbai","Nepali-speaking adult profiles for conversation and planned outings.","Ask about language comfort, current availability and meeting areas. Nationality information should never be treated as a guarantee of personality or experience."],
    ["punjabi-companions-in-mumbai","Punjabi Companions in Mumbai","punjabi companions mumbai","Punjabi-speaking adult companions for celebrations and dining.","Share the style of occasion, venue and expected timing. Matching works best when preferences are communicated clearly and respectfully."],
    ["russian-companions-in-mumbai","Russian Companions in Mumbai","russian companions mumbai","International adult profiles for premium multilingual engagements.","Confirm language ability and current profile information rather than relying on appearance-based claims. Written rates and meeting terms should be clear."],
    ["south-indian-companions","South Indian Companions","south indian companions mumbai","Adult profiles from South Indian backgrounds and language communities.","Because this category covers many cultures, specify your preferred language or interests. Individual profile details should take priority over broad regional labels."],
    ["tamil-companions-in-mumbai","Tamil Companions in Mumbai","tamil companions mumbai","Tamil-speaking adult companions for dining and cultural events.","Ask about interests, spoken languages, service areas and schedule. A thoughtful introduction improves the quality of the match."],
    ["vip-companions-in-mumbai","VIP Companions in Mumbai","vip companions mumbai","Premium adult companionship focused on privacy and careful planning.","VIP should describe service quality and coordination, not fame. Request written rate clarity, verification context and a named point of contact."],
    ["event-dinner-companions","Event & Dinner Companions","event companion mumbai","Adult social companions for dinners, celebrations and formal gatherings.","Provide the event format, dress code, start and finish time, venue and guest expectations. Every companion remains free to accept or decline a request."]
  ];
  const requested = new URLSearchParams(location.search).get("service");
  const index = Math.max(0, services.findIndex(item => item[0] === requested));
  const service = services[index];
  document.title = service[1] + " | Miss Mumbai";
  document.querySelector('meta[name="description"]').content = service[3];
  const image = document.getElementById("serviceImage");
  image.src = images[index % images.length];
  image.alt = service[1];
  document.getElementById("serviceTitle").textContent = service[1];
  document.getElementById("serviceKeyword").textContent = service[2].toUpperCase();
  document.getElementById("detailHeading").textContent = "About " + service[1];
  document.getElementById("serviceIntro").textContent = service[3];
  document.getElementById("serviceBody").textContent = service[4];
})();