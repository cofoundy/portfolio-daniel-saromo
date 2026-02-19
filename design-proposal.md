# Propuesta de Diseno: Daniel Saromo-Mori
## PREMIUM S/.280 — CUSTOM BUILD

---

## P1: Identity Deep-Dive

### Identidad
Daniel is a mechatronics engineer who became an AI researcher and **invented a new family of neural networks** (ARNN). He bridges the physical world (robotics, spider robots detecting landmines) and the digital world (deep learning, neural architectures). His journey from Lima to Milan to Prague tells the story of relentless pursuit of knowledge. He doesn't just use AI — he creates new building blocks for it.

### Audiencia
- **Academic peers & researchers** — looking for publications, citations, research interests
- **AI research labs** — evaluating potential PhD candidates or collaborators
- **Tech industry recruiters** — at companies like Siemens, evaluating research + engineering hybrid profiles
- **Conference organizers** — looking for speakers who've presented at NeurIPS, CVPR, ICML

### Secciones Propuestas (en orden)

1. **Hero** — Photo + name + "Inventor of ARNN" tagline + 4 key stats (200+ Citations, 6 Countries, 6+ Years Teaching, 4 Languages)
2. **The Invention** — ARNN/ARP story: what it is, why it matters, where it's been presented. This is his SIGNATURE section. Visualized with a neural network node diagram.
3. **Research Journey** — Interactive timeline/map showing Lima (PUCP BSc) → Milan (Polimi MSc) → Bremen (DFKI Research) → Prague (CTU MSc + Siemens). With institution logos/badges and key achievements at each stop.
4. **Publications** — Academic-style cards showing each paper with venue badge (NeurIPS/CVPR/ICML), citation count, year. Google Scholar link.
5. **Teaching** — 6+ years track record. Courses taught with semester counts. Government contracts (SENAMHI, EsSalud).
6. **Awards & Talks** — Global presentations map/list + award highlights
7. **Contact** — Clean footer with all academic profiles (Scholar, ORCID, GitHub, LinkedIn)

### Secciones que NO incluir
- **Services** — He's not selling consulting (employee/researcher)
- **Generic About** — His story IS the Research Journey section
- **Generic Skills pills** — Feels undergraduate for someone with his profile
- **CTA with WhatsApp** — Academic portfolio, not a sales funnel
- **Shimmer bars** — Too flashy for academic context

### Metafora Visual
A research lab meets a circuit board. Clean, precise, structured like an academic paper — but with the warmth of someone who loves teaching and traveling. The feeling of looking at a well-organized research poster: everything has its place, data is prominent, but there's personality behind the numbers.

---

## P2: Visual Language

### Color Palette (6 colores)

Inspired by: Daniel's own DSM brand logo (orange/amber on clean background) + tech/AI dark mode aesthetics

```
primaryDark:   #0A1628  — Deep midnight navy (hero bg, footer, dark sections)
primary:       #1B2B4A  — Dark navy (cards on dark bg, section accents)
primaryLight:  #2A3F65  — Medium navy (borders, subtle elements)
accent:        #E8952E  — Warm amber/orange (his brand color! CTAs, stats, node connections)
surface:       #F5F2ED  — Warm light cream (alternating section bg)
surfaceLight:  #FFFFFF  — White (card surfaces, text areas)
```

**Justification:**
- primaryDark (#0A1628) — evokes IDE dark themes and neural network visualizations
- accent (#E8952E) — **client's own brand color** from DSM logo (orange/amber). He specifically requested "los colores de mi logo"
- surface (#F5F2ED) — warm cream that complements the amber accent, avoiding cold/clinical feel
- Dark navy + warm amber = sophisticated tech aesthetic (like VS Code dark theme + warm highlights)

### Typography

```
Headings:   Space Grotesk (modern tech, geometric, authoritative but not stuffy)
Body:       Inter (exceptional readability, tech industry standard)
Code/Data:  JetBrains Mono (for any code snippets, metrics, data labels)
```

**Why:** Space Grotesk bridges academic authority with modern tech. Inter is the gold standard for screen readability. JetBrains Mono adds authentic developer/researcher flavor.

### Efecto Visual Unico (OBLIGATORIO)

**Neural Network Node Visualization** — An animated SVG in the hero/background showing interconnected nodes with pulsing connections (representing the ARNN concept). Subtle, not overwhelming — nodes drift slowly, connections light up in accent cyan. This is THE visual metaphor for his work.

Also: **Animated counter** for citation count and stats in hero.

---

## P3: Section Design (MOBILE FIRST)

### 1. HERO
```
MOBILE (375px):                    DESKTOP (1280px):
+---------------------------+      +----------------------------------------+
| [Neural nodes SVG bg]     |      | [Neural nodes SVG bg - wider]          |
|                           |      |                                        |
|    [Photo circle]         |      |  [Photo]     Daniel                    |
|                           |      |  circle      Saromo-Mori               |
|  Daniel Saromo-Mori       |      |              ───────────────            |
|  ─────────────────        |      |              Mechatronic Engineer       |
|  Mechatronic Engineer     |      |              Inventor of ARNN           |
|  Inventor of ARNN         |      |              AI Researcher & Lecturer   |
|  AI Researcher & Lecturer |      |                                        |
|                           |      |  ┌──────┐┌──────┐┌──────┐┌──────┐     |
| ┌──────┐ ┌──────┐        |      |  │150+  ││  6   ││ 6+   ││  4   │     |
| │150+  │ │  6   │        |      |  │cites ││ctries││yrs   ││langs │     |
| │cites │ │ctries│        |      |  └──────┘└──────┘└──────┘└──────┘     |
| ├──────┤ ├──────┤        |      +----------------------------------------+
| │ 6+   │ │  4   │        |
| │yrs   │ │langs │        |
| └──────┘ └──────┘        |
+---------------------------+
```

### 2. THE INVENTION (ARNN Section — UNIQUE)
```
MOBILE:                            DESKTOP:
+---------------------------+      +----------------------------------------+
| THE INVENTION             |      | THE INVENTION                          |
| ═════════════             |      | ═════════════                          |
|                           |      |                                        |
| [Neural node SVG          |      | [SVG diagram]  What are ARNN?          |
|  showing ARP concept]     |      |  nodes with    ─────────────────       |
|                           |      |  connections   When using deep neural   |
| What are Auto-Rotating    |      |  animating     networks, do we ever    |
| Neural Networks?          |      |                change the neuron itself?|
| ────────────────────      |      |                The ARP changes the     |
| Brief explanation of how  |      |                internal core...        |
| ARNN tackles vanishing    |      |                                        |
| gradient problem...       |      | ┌─────────────────────────────────┐   |
|                           |      | │ Presented at:                    │   |
| Presented at:             |      | │ [NeurIPS] [CVPR] [ICML] [ACML]  │   |
| [NeurIPS][CVPR][ICML]     |      | │                                  │   |
| [ACML][TMLR under review] |      | │ Open-source: github.com/...ARP   │   |
|                           |      | └─────────────────────────────────┘   |
| Open-source Keras Library |      +----------------------------------------+
| [GitHub link]             |
+---------------------------+
```

### 3. RESEARCH JOURNEY (Geographic Timeline — UNIQUE)
```
MOBILE (vertical):                 DESKTOP (horizontal):
+---------------------------+      +----------------------------------------+
| RESEARCH JOURNEY          |      | RESEARCH JOURNEY                       |
| ═══════════════           |      | ═══════════════                        |
|                           |      |                                        |
| ● Lima, Peru              |      | Lima ──── Milan ──── Bremen ── Prague  |
|   PUCP  2014-2020         |      |  ●          ●          ●        ●      |
|   BSc Mechatronics        |      | PUCP      Polimi     DFKI    CTU+      |
|   Top 6.66% Faculty       |      | BSc       MSc       Guest   Siemens   |
|   Spider Robot + ARNN     |      | 2014-20   2022-24   2020    2024+     |
|   |                       |      |                                        |
|   v                       |      | [Institution badges below each]       |
| ● Milan, Italy            |      +----------------------------------------+
|   Polimi  2022-2024       |
|   MSc Automation 25.6/30  |
|   1st Pitch Competition   |
|   |                       |
|   v                       |
| ● Bremen, Germany         |
|   DFKI  2020 (remote)     |
|   Created ARNN family     |
|   |                       |
|   v                       |
| ● Prague, Czechia         |
|   CTU  2024-present       |
|   MSc Cybernetics + AI    |
|   + Siemens (since 2025)  |
|   Merit Scholarship       |
+---------------------------+
```

### 4. PUBLICATIONS
```
MOBILE:                            DESKTOP:
+---------------------------+      +----------------------------------------+
| PUBLICATIONS              |      | PUBLICATIONS           150+ Citations  |
| 150+ Citations            |      | ═════════════                          |
| ═════════════             |      |                                        |
|                           |      | ┌──────────────┐ ┌──────────────┐     |
| ┌─────────────────────┐   |      | │[CVPR badge]   │ │[ICML badge]   │    |
| │ [CVPR 2022 badge]   │   |      | │A Deeper Look  │ │Smart Sensor   │    |
| │ A Deeper Look into  │   |      | │into Aleatoric │ │Calibration w/ │    |
| │ Aleatoric and Epist. │   |      | │and Epistemic  │ │Auto-Rotating  │    |
| │ Uncertainty...       │   |      | │Uncertainty... │ │Perceptrons    │    |
| │ Oral + Poster        │   |      | │ Oral+Poster   │ │ Oral+Poster   │    |
| └─────────────────────┘   |      | └──────────────┘ └──────────────┘     |
|                           |      | ┌──────────────┐ ┌──────────────┐     |
| ┌─────────────────────┐   |      | │[NeurIPS badge]│ │[Thesis badge] │    |
| │ [NeurIPS 2019 badge]│   |      | │Auto-Rotating  │ │Spider Robot   │    |
| │ Auto-Rotating       │   |      | │Perceptrons    │ │Landmine Det.  │    |
| │ Perceptrons         │   |      | │ Oral+Poster   │ │ Outstanding   │    |
| │ Oral + Poster       │   |      | └──────────────┘ └──────────────┘     |
| └─────────────────────┘   |      +----------------------------------------+
| ...                       |
+---------------------------+
```

### 5. TEACHING
```
MOBILE:                            DESKTOP:
+---------------------------+      +----------------------------------------+
| TEACHING                  |      | TEACHING              6+ Years         |
| 6+ Years                  |      | ════════                               |
| ════════                  |      |                                        |
|                           |      | ┌──────────┐┌──────────┐┌──────────┐  |
| AI for Games              |      | │AI for    ││ML for    ││Python    │  |
| PUCP · 12 semesters       |      | │Games     ││Industry  ││for DS    │  |
| ────────────────          |      | │12 sem    ││7 sem     ││5 sem     │  |
|                           |      | │PUCP      ││CETAM     ││CETAM     │  |
| ML for Industry           |      | └──────────┘└──────────┘└──────────┘  |
| CETAM · 7 semesters       |      |                                        |
| ────────────────          |      | Also: SENAMHI (gov) · EsSalud (gov)    |
|                           |      | + TA at PUCP (AI, ML, CS)              |
| Python for Data Science   |      +----------------------------------------+
| CETAM · 5 semesters       |
| ────────────────          |
|                           |
| + SENAMHI, EsSalud (gov)  |
+---------------------------+
```

### 6. AWARDS & TALKS
```
MOBILE:                            DESKTOP:
+---------------------------+      +----------------------------------------+
| AWARDS & TALKS            |      | AWARDS & TALKS                         |
| ══════════════            |      | ══════════════                         |
|                           |      |                                        |
| 2024 ARNN pitch Prague    |      | Timeline left | Award cards right      |
| 2023 1st Pitch Polimi     |      | ──────────────+─────────────────       |
| 2022 CVPR New Orleans     |      | 2024 Prague   | Innovation Award       |
| 2021 ACML Singapore       |      | 2023 Milan    | IMECE 2019 ($250)      |
| 2020 ICML Vienna          |      | 2022 NOLA     | ASME Travel ($1500)    |
| 2019 NeurIPS Vancouver    |      | 2021 SG       | LXAI Grant ($1860)     |
| 2019 IMECE Utah           |      | 2020 Vienna   | 1st + Tech E-FEST      |
|                           |      | 2019 Vancouver| 1st Pitch Polimi       |
| Innovation Award IMECE    |      | 2019 Utah     |                        |
| LXAI Travel Grant $1860   |      +----------------------------------------+
| 1st + Technical E-FEST    |
+---------------------------+
```

### 7. CONTACT (Footer)
```
+----------------------------------------+
| CONTACT                                |
| ═══════                                |
|                                        |
| danielsaromo [at] gmail [dot] com      |
|                                        |
| [LinkedIn] [GitHub] [Scholar] [ORCID]  |
|                                        |
| [danielsaromo.xyz]                     |
|                                        |
| Daniel Saromo-Mori · Prague, Czechia   |
+----------------------------------------+
```

---

## Resumen de Decisiones

| Aspecto | Decision | Justificacion |
|---------|----------|---------------|
| Palette | Dark navy + amber/orange | Client's DSM brand + AI dark aesthetic |
| Fonts | Space Grotesk + Inter + JetBrains Mono | Modern tech + academic readability |
| Hero | 2-col with photo + stats | Has professional photo + impressive metrics |
| The Invention | CUSTOM section | His unique contribution — no other portfolio has this |
| Research Journey | Geographic horizontal timeline | 4 countries, 4 institutions — tells his story |
| Publications | Academic cards with venue badges | 150+ citations deserve prominence |
| Teaching | Grid with semester counts | 6+ years, 24+ semesters total |
| Services | OMIT | Not a consultant |
| CTA/WhatsApp | OMIT | Academic portfolio |
| Skills pills | OMIT | Too generic for researcher |
| Unique effect | Neural network node SVG animation | Directly represents his ARNN invention |
