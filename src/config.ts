export const siteConfig = {
  name: "Daniel Saromo-Mori",
  title: "Mechatronic Engineer · Inventor of ARNN · AI Researcher",
  description: "Daniel Saromo-Mori — Mechatronic engineer, inventor of Auto-Rotating Neural Networks (ARNN), AI researcher with 200+ citations. Currently at Siemens Prague.",

  colors: {
    primaryDark: "#0A1628",
    primary: "#1B2B4A",
    primaryLight: "#2A3F65",
    accent: "#E8952E",
    surface: "#F5F2ED",
    surfaceLight: "#FFFFFF",
  },

  // Hero
  tagline: "Inventor of ARNN · AI Researcher & Lecturer",
  subtitles: [
    "Mechatronic Engineer",
    "Inventor of Auto-Rotating Neural Networks",
    "AI Researcher & Lecturer",
  ],
  stats: [
    { value: "200+", label: "Citations" },
    { value: "6", label: "Countries" },
    { value: "6+", label: "Years Teaching" },
    { value: "4", label: "Languages" },
  ],

  // The Invention — ARNN section (UNIQUE)
  invention: {
    title: "The Invention",
    subtitle: "Auto-Rotating Neural Networks",
    question: "When using deep neural networks, do we ever change the neuron itself?",
    description: "The Auto-Rotating Perceptron (ARP) introduces a novel activation mechanism that rotates in the weight space, tackling the vanishing gradient problem from a fundamentally different angle. Extended to the Auto-Rotating Neural Network (ARNN) family, this new architecture has been presented at the world's top AI venues and offers a fresh building block for deep learning.",
    highlights: [
      "Novel activation mechanism that rotates in weight space",
      "Tackles vanishing gradient problem",
      "Open-source Keras library (arpkeras)",
      "Under review at TMLR (Transactions on Machine Learning Research)",
    ],
    venues: [
      { name: "NeurIPS", year: "2019", city: "Vancouver" },
      { name: "ICML", year: "2020", city: "Vienna" },
      { name: "ACML", year: "2021", city: "Singapore" },
      { name: "CVPR", year: "2022", city: "New Orleans" },
    ],
    github: "https://github.com/DanielSaromo/ARP",
  },

  // Research Journey — Geographic Timeline (UNIQUE)
  journey: [
    {
      city: "Lima, Peru",
      flag: "🇵🇪",
      institution: "PUCP",
      degree: "B.Sc. Mechatronics Engineering",
      period: "2014–2020",
      highlights: ["Top 6.66% of Faculty", "5th of 32 graduates", "Spider robot thesis for landmine detection", "Invented ARP"],
    },
    {
      city: "Bremen, Germany",
      flag: "🇩🇪",
      institution: "DFKI",
      degree: "Guest Researcher",
      period: "2020",
      highlights: ["Extended ARP → ARNN family", "German Research Center for AI"],
    },
    {
      city: "Milan, Italy",
      flag: "🇮🇹",
      institution: "Politecnico di Milano",
      degree: "M.Sc. Automation & Control",
      period: "2022–2024",
      highlights: ["25.6/30 weighted grade", "1st place Pitch Competition 2023", "#13 world QS ranking"],
    },
    {
      city: "Prague, Czechia",
      flag: "🇨🇿",
      institution: "CTU + Siemens",
      degree: "M.Sc. Cybernetics & Robotics (AI)",
      period: "2024–present",
      highlights: ["Merit Scholarship", "Siemens IT/OT Integration", "#1 in Czechia QS ranking"],
    },
  ],

  // Publications
  publications: [
    {
      title: "A Deeper Look into Aleatoric and Epistemic Uncertainty Disentanglement",
      venue: "CVPR",
      year: 2022,
      type: "Workshop Oral + Poster",
      city: "New Orleans",
      citations: 200,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ym6OfSgAAAAJ&citation_for_view=ym6OfSgAAAAJ:u5HHmVD_uO8C",
    },
    {
      title: "Smart Insole Sensor for vGRF Measurement Using ARP",
      venue: "Sensor Science",
      year: 2022,
      type: "Conference Paper",
      city: "Warsaw",
      citations: 0,
      link: "",
    },
    {
      title: "Smart Sensor Calibration with Auto-Rotating Perceptrons",
      venue: "ICML",
      year: 2020,
      type: "Workshop Oral + Poster",
      city: "Vienna",
      citations: 0,
      link: "",
    },
    {
      title: "Auto-Rotating Perceptrons",
      venue: "NeurIPS",
      year: 2019,
      type: "Workshop Oral + Poster",
      city: "Vancouver",
      citations: 1,
      link: "https://arxiv.org/abs/1910.02483",
    },
    {
      title: "Intelligent Spider Robot for Detecting Anti-Personnel Metallic Landmines",
      venue: "PUCP Thesis",
      year: 2020,
      type: "BSc + Professional Thesis",
      city: "Lima",
      citations: 1,
      link: "",
    },
  ],

  // Teaching
  teaching: {
    totalYears: "6+",
    totalSemesters: "24+",
    courses: [
      { name: "AI for Games", institution: "PUCP", semesters: 12, since: 2019 },
      { name: "ML for Industry", institution: "CETAM-PUCP", semesters: 7 },
      { name: "Python for Data Science", institution: "CETAM-PUCP", semesters: 5 },
      { name: "Data Analysis & Time Series", institution: "PUCP", semesters: 1 },
    ],
    government: [
      { name: "SENAMHI", role: "AI/ML Lecturer", year: 2022 },
      { name: "EsSalud", role: "ML Lecturer", year: 2022 },
    ],
    ta: "Teaching Assistant at PUCP for AI, ML, and CS Applications (2019)",
  },

  // Awards & Talks
  awards: [
    { title: "1st Place Pitch Competition", where: "Politecnico di Milano", year: 2023 },
    { title: "LatinX in AI Travel Grant", where: "NeurIPS, Vancouver", year: 2019, amount: "$1,860" },
    { title: "Innovation Recognition Award", where: "IMECE, Salt Lake City", year: 2019, amount: "$250" },
    { title: "ASME Travel Award", where: "IMECE", year: 2019, amount: "$1,500" },
    { title: "1st Place + Technical Award", where: "ASME E-FEST South America", year: 2019, amount: "$850" },
    { title: "Merit Scholarship", where: "CTU Prague", year: 2024 },
  ],
  talks: [
    { year: 2024, event: "Dny AI — ARNN Pitch", city: "Prague" },
    { year: 2022, event: "CVPR — Uncertainty Paper", city: "New Orleans" },
    { year: 2021, event: "ACML — ARNN Poster", city: "Singapore" },
    { year: 2020, event: "ICML — ARP Paper", city: "Vienna" },
    { year: 2019, event: "NeurIPS — ARP Paper", city: "Vancouver" },
    { year: 2019, event: "IMECE — Spider Robot", city: "Salt Lake City" },
  ],

  // Contact / Social
  social: {
    email: "danielsaromo@gmail.com",
    linkedin: "https://linkedin.com/in/danielsaromo",
    github: "https://github.com/DanielSaromo",
    scholar: "https://scholar.google.com/citations?user=ym6OfSgAAAAJ",
    orcid: "https://orcid.org/0000-0002-5059-3321",
    website: "https://danielsaromo.xyz",
    instagram: "https://instagram.com/danielsaromo",
  },
};
