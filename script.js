const app = document.querySelector('#app');

const sections = [
  { id: 'narrative', label: 'Narrative' },
  { id: 'ai-insights', label: 'AI Insights' },
  { id: 'experiences', label: 'Experiences' }
];

const featureCards = [
  {
    title: 'Vocal Synthesis',
    text: 'Emotion-aware speech rendering that shifts with audience context.'
  },
  {
    title: 'Emotion Engine',
    text: 'Micro-expression modulation mapped to conversational intent.'
  },
  {
    title: 'Real-time Kinematics',
    text: 'Adaptive motion layers with neural keyframe interpolation.'
  }
];

function createElement(tag, className, content) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content !== undefined) el.innerHTML = content;
  return el;
}

function createTopbar() {
  const header = createElement('header', 'topbar');
  const inner = createElement('div', 'inner container');

  const brand = createElement(
    'div',
    'brand',
    '<span class="brand-dot" aria-hidden="true"></span><span>Oche Joseph</span>'
  );

  const nav = createElement('nav', 'nav-links');
  sections.forEach((item, idx) => {
    const link = createElement('a', idx === 0 ? 'active' : '', item.label);
    link.href = `#${item.id}`;
    nav.append(link);
  });

  const button = createElement('button', '', 'Get in Touch');
  button.addEventListener('click', () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  });

  inner.append(brand, nav, button);
  header.append(inner);
  return header;
}

function createSignalBars() {
  const wrap = createElement('div', 'signal-bars');
  [0.92, 0.78, 0.66].forEach((fill) => {
    const bar = createElement('div', 'signal-bar');
    bar.style.setProperty('--fill', String(fill));
    wrap.append(bar);
  });
  return wrap;
}

function createHero() {
  const section = createElement('section', 'hero');
  section.id = 'narrative';
  const container = createElement('div', 'container');
  container.append(
    createElement('p', 'kicker', 'The Digital Synthesis'),
    createElement('h1', '', 'Crafting the <em>Infinite</em><br />Experience'),
    createElement(
      'p',
      '',
      'A journey into the psychology of perception and the frontier of AI avatars. Each module below is built as an independent component and responds to movement, scroll, and touch.'
    ),
    createSignalBars()
  );
  section.append(container);
  return section;
}

function createLabSection() {
  const section = createElement('section', '');
  section.id = 'ai-insights';
  const container = createElement('div', 'container grid-two');

  const left = createElement('article', 'panel pad');
  left.append(
    createElement('p', 'kicker', 'Lab 01'),
    createElement('h2', '', 'The <span class="display-em">Ghost</span> in the Pixels'),
    createElement(
      'p',
      '',
      'Design explores the cognitive triggers that make a simple interface feel instinctive. Hover and tap the visual modules to see how each layer reacts.'
    )
  );
  const mindBtn = createElement('button', '', 'Enter the Mind');
  mindBtn.addEventListener('click', () => window.scrollTo({ top: section.offsetTop + 420, behavior: 'smooth' }));
  left.append(mindBtn);

  const right = createElement('article', 'panel pad');
  const eye = createElement('div', 'eyebox');
  eye.setAttribute('data-tilt', '');
  const caption = createElement(
    'p',
    'kicker',
    'Curator note · “Perception is the window, experience is the view.”'
  );
  right.append(eye, caption);

  container.append(left, right);
  section.append(container);
  return section;
}

function mannequinSVG() {
  return `
  <svg viewBox="0 0 800 1000" role="img" aria-label="Synthetic mannequin portrait">
    <defs>
      <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8eb6d8" />
        <stop offset="55%" stop-color="#6d8aaa" />
        <stop offset="100%" stop-color="#42576f" />
      </linearGradient>
      <radialGradient id="eye" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#80d8ff" />
        <stop offset="50%" stop-color="#155c92" />
        <stop offset="100%" stop-color="#0b2033" />
      </radialGradient>
      <pattern id="circuits" width="42" height="42" patternUnits="userSpaceOnUse">
        <path d="M5 7h15v8M20 15v20M20 35h15M5 7v28" stroke="#f2c73f" stroke-opacity=".26" fill="none" stroke-width="2" />
      </pattern>
    </defs>
    <rect width="800" height="1000" fill="url(#circuits)" />
    <ellipse cx="400" cy="390" rx="205" ry="285" fill="url(#skin)" />
    <ellipse cx="330" cy="390" rx="36" ry="18" fill="url(#eye)" />
    <ellipse cx="470" cy="390" rx="36" ry="18" fill="url(#eye)" />
    <path d="M318 530c40 35 125 35 165 0" stroke="#213244" stroke-width="10" fill="none" stroke-linecap="round" />
    <path d="M288 470h75M438 470h75" stroke="#263a50" stroke-width="8" stroke-linecap="round" />
    <path d="M290 220c70-95 155-112 220 0" stroke="#9fc2df" stroke-width="18" fill="none" stroke-linecap="round" />
    <circle cx="400" cy="412" r="8" fill="#f2c73f" />
  </svg>`;
}

function createCard(card) {
  const tile = createElement('article', 'feature-card panel');
  tile.setAttribute('data-tilt', '');
  tile.append(
    createElement('span', 'icon'),
    createElement('h4', '', card.title),
    createElement('p', '', card.text)
  );
  return tile;
}

function createCloneSection() {
  const section = createElement('section', '');
  section.id = 'experiences';

  const container = createElement('div', 'container');
  container.append(
    createElement('p', 'kicker', 'Lab 02'),
    createElement('h2', '', 'Digital <span class="display-em">Clones</span> & Sentient Skins')
  );

  const layout = createElement('div', 'clones');
  const mannequin = createElement('article', 'panel mannequin');
  mannequin.innerHTML = mannequinSVG();

  const cardsWrap = createElement('div', 'cards');
  featureCards.forEach((card) => cardsWrap.append(createCard(card)));

  layout.append(mannequin, cardsWrap);
  container.append(layout);
  section.append(container);
  return section;
}

function createPhilosophySection() {
  const section = createElement('section', '');
  const container = createElement('div', 'container');

  const quote = createElement(
    'blockquote',
    'quote',
    'In the silence between frames, we find the <span class="highlight">codes of meaning</span> that define who we are becoming.'
  );

  const timeline = createElement('div', 'timeline panel pad');

  const items = [
    {
      num: '01',
      title: "The Curator's Intent",
      text: 'Every visual shadow, highlight, and motion cue is handcrafted to feel premium and emotionally legible.'
    },
    {
      num: '02',
      title: 'The Mirror Effect',
      text: 'By pairing empathy-first design with synthetic expression, we create bridges between human and machine.'
    }
  ];

  items.forEach((item) => {
    const row = createElement('div', 'timeline-item');
    row.append(
      createElement('div', 'num', item.num),
      createElement('div', '', `<h3>${item.title}</h3><p>${item.text}</p>`)
    );
    timeline.append(row);
  });

  container.append(quote, timeline);
  section.append(container);
  return section;
}

function createCTASection() {
  const section = createElement('section', '');
  section.id = 'contact';

  const container = createElement('div', 'container panel cta-block');

  const content = createElement('div', 'cta-content');
  content.append(
    createElement('h2', '', 'Ready to <span class="display-em">Transcend</span>?'),
    createElement(
      'p',
      '',
      'Collaborate on your next human-centric AI and immersive narrative project. The modules are responsive from phones to ultra-wide screens.'
    )
  );

  const row = createElement('div', 'grid-two');
  const primary = createElement('a', 'cta', 'Start the Project');
  primary.href = '#';
  const secondary = createElement('a', 'cta');
  secondary.href = '#';
  secondary.textContent = 'View Methodology';
  secondary.style.background = 'transparent';
  secondary.style.color = 'var(--ink)';
  secondary.style.border = '1px solid var(--line)';

  row.append(primary, secondary);
  content.append(row);

  const visual = createElement('div', 'cta-visual');
  visual.append(createElement('div', 'orb'));

  container.append(content, visual);
  section.append(container);
  return section;
}

function createFooter() {
  const footer = createElement('footer', 'footer');
  const inner = createElement('div', 'container inner');
  inner.append(
    createElement('div', '', '© 2026 Oche Joseph · Crafted with interactive components'),
    createElement('div', '', 'Privacy · Terms · Contact')
  );
  footer.append(inner);
  return footer;
}

function mountPage() {
  app.append(
    createTopbar(),
    createHero(),
    createLabSection(),
    createCloneSection(),
    createPhilosophySection(),
    createCTASection(),
    createFooter()
  );
}

function attachTiltInteractions() {
  const targets = [...document.querySelectorAll('[data-tilt]')];

  const move = (element, x, y) => {
    const box = element.getBoundingClientRect();
    const rotateY = ((x - box.left) / box.width - 0.5) * 12;
    const rotateX = ((y - box.top) / box.height - 0.5) * -12;
    element.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  };

  targets.forEach((element) => {
    element.addEventListener('mousemove', (event) => move(element, event.clientX, event.clientY));
    element.addEventListener(
      'touchmove',
      (event) => {
        if (event.touches?.[0]) {
          move(element, event.touches[0].clientX, event.touches[0].clientY);
        }
      },
      { passive: true }
    );

    const reset = () => {
      element.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
    };
    element.addEventListener('mouseleave', reset);
    element.addEventListener('touchend', reset);
  });
}

function attachScrollSpy() {
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const ids = navLinks.map((node) => node.getAttribute('href'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((node) => node.classList.toggle('active', node.getAttribute('href') === id));
      });
    },
    { threshold: 0.55 }
  );

  ids.forEach((id) => {
    const target = document.querySelector(id);
    if (target) observer.observe(target);
  });
}

function attachBarPulse() {
  const bars = [...document.querySelectorAll('.signal-bar')];
  setInterval(() => {
    bars.forEach((bar) => {
      const next = 0.55 + Math.random() * 0.4;
      bar.style.setProperty('--fill', next.toFixed(2));
    });
  }, 1500);
}

mountPage();
attachTiltInteractions();
attachScrollSpy();
attachBarPulse();
