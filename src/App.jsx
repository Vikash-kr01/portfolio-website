import { useEffect, useState } from 'react';

// Edit the personal details and project entries here before publishing.
const profile = {
  name: 'Vikash',
  role: 'Full-stack developer',
  email: 'vikash_barnwal@yahoo.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  location: 'Available remotely',
};

const skillGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive design'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { title: 'Data & tools', items: ['MongoDB', 'Mongoose', 'Git', 'GitHub'] },
];

// Add a project when it is ready to show. Use real links and real screenshots only.
const projects = [
  {
    number: '01',
    name: 'Social platform',
    type: 'PERSONAL PROJECT · IN PROGRESS',
    description: 'A full-stack social application exploring user accounts, publishing, feeds, and the details that make an interactive product feel cohesive.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    status: 'In progress',
    href: '',
    repo: '',
  },
];

const services = [
  { n: '01', title: 'Websites & landing pages', text: 'A clear, responsive home for your business, service, or next idea—designed to help visitors understand what you offer and what to do next.' },
  { n: '02', title: 'Frontend development', text: 'Thoughtful React interfaces that feel intuitive, work across screen sizes, and keep the experience focused on your users.' },
  { n: '03', title: 'Backend & API development', text: 'The server-side foundations behind a useful product: API endpoints, authentication flows, and database integration.' },
  { n: '04', title: 'Full-stack applications', text: 'A connected frontend and backend, shaped around your requirements rather than a one-size-fits-all template.' },
];

const steps = [
  ['01', 'Understand', 'We start with your goals, audience, constraints, and what success should look like.'],
  ['02', 'Plan', 'I map the essential pages, user journeys, functionality, and technical approach before building.'],
  ['03', 'Build', 'The interface and functionality take shape in small, reviewable steps, with communication along the way.'],
  ['04', 'Refine & launch', 'We test real interactions, responsiveness, and key details before preparing the site for launch.'],
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: 'A website', budget: '', message: '' });
  const [formError, setFormError] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  function submitContact(event) {
    event.preventDefault();
    setFormError('');
    setSent(false);
    if (!form.name.trim() || !form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message.trim()) {
      setFormError('Please add your name, a valid email address, and a short project description.');
      return;
    }
    if (profile.email === 'hello@example.com') {
      setFormError('Add your real email address in src/App.jsx before using this form.');
      return;
    }
    const subject = encodeURIComponent(`Project enquiry: ${form.type}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\nBudget: ${form.budget || 'Not specified'}\n\nProject details:\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="site-shell">
      <header className="header">
        <a className="wordmark" href="#home" aria-label="Go to homepage" onClick={closeMenu}>DEV<span>.</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span>
        </button>
        <nav id="site-nav" className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {['About', 'Skills', 'Work', 'Services', 'Process'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <Arrow diagonal /></a>
        </nav>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} title="Toggle colour theme">{dark ? '☼' : '◐'}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow"><span className="status-dot"></span> {profile.location} <span className="eyebrow-line"></span> {profile.role}</div>
            <h1>Good ideas deserve<br /> <em>well-built</em> websites<span className="period">.</span></h1>
            <p className="hero-intro">I build considered digital experiences—from the first interface to the logic working behind it. Clear, useful, and made to work in the real world.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Have a project? <Arrow diagonal /></a>
              <a className="text-link" href="#work">Explore selected work <Arrow /></a>
            </div>
            <div className="hero-footnote"><span className="mono">01 / 05</span><span>Thoughtful development. No unnecessary complexity.</span></div>
          </div>
          <div className="hero-art" data-reveal aria-label="Abstract illustration of a website layout and code">
            <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
            <div className="art-label label-top mono">A little structure goes a long way.</div>
            <div className="browser-card">
              <div className="browser-top"><div className="browser-dots"><i></i><i></i><i></i></div><span className="mono">your-next-idea.dev</span><span className="browser-menu">···</span></div>
              <div className="browser-content"><div className="browser-kicker mono">A DIGITAL STARTING POINT</div><div className="browser-heading">Make it<br /><i>matter.</i></div><div className="browser-lines"><b></b><b></b><b></b></div><div className="browser-cta">Explore <Arrow diagonal /></div><div className="browser-shape"></div></div>
            </div>
            <div className="floating-code mono"><span>const</span> idea = <strong>'possible'</strong>;</div>
            <div className="art-label label-bottom mono">DESIGN / DEVELOP / DELIVER</div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of focus"><div className="ticker-track"> <span>WEB DEVELOPMENT</span><b>✳</b><span>THOUGHTFUL INTERFACES</span><b>✳</b><span>FULL-STACK THINKING</span><b>✳</b><span>BUILT WITH PURPOSE</span><b>✳</b><span>WEB DEVELOPMENT</span><b>✳</b><span>THOUGHTFUL INTERFACES</span><b>✳</b><span>FULL-STACK THINKING</span><b>✳</b><span>BUILT WITH PURPOSE</span><b>✳</b></div></div>

        <section className="section section-wrap about-section" id="about">
          <div className="section-heading" data-reveal><span className="section-index mono">01 — A LITTLE ABOUT ME</span><h2>Curious by nature.<br /><em>Developer</em> by craft.</h2></div>
          <div className="about-content" data-reveal><p className="lead">I'm a developer building my practice around one simple idea: technology should make things easier to understand, use, and grow.</p><p>I enjoy working through a problem from both sides—how an experience feels to a person, and how it works underneath. That means thinking about the details: the structure of a page, the flow between screens, the data behind a feature, and the small decisions that make software dependable.</p><p>I'm continually learning, building, and refining my approach. I value clear communication, maintainable code, and doing the groundwork properly rather than reaching for complexity for its own sake.</p><a className="text-link underline-link" href="#contact">Let's talk about what you're building <Arrow diagonal /></a></div>
        </section>

        <section className="section skills-section" id="skills"><div className="section-wrap"><div className="section-heading" data-reveal><span className="section-index mono">02 — THE TOOLKIT</span><h2>Tools for turning<br /><em>thought into function.</em></h2><p className="heading-note">A practical toolkit for building across the stack. This list is intentionally focused on technologies I've worked with.</p></div><div className="skills-grid" data-reveal>{skillGroups.map((group) => <div className="skill-group" key={group.title}><div className="skill-title"><span className="mono">{group.title}</span><span>↘</span></div><div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

        <section className="section work-section section-wrap" id="work"><div className="work-top" data-reveal><div className="section-heading"><span className="section-index mono">03 — SELECTED WORK</span><h2>Work in<br /><em>the making.</em></h2></div><p className="work-intro">A growing collection of personal builds and experiments. I believe in showing the process honestly—so you'll find work-in-progress labelled as such.</p></div><div className="project-list">{projects.length ? projects.map((project) => <article className="project-row" key={project.number} data-reveal><div className="project-number mono">{project.number}</div><div className="project-main"><div className="project-type mono">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-side"><span className="project-status"><i></i>{project.status}</span>{project.href ? <a href={project.href} target="_blank" rel="noreferrer" className="round-link" aria-label={`View ${project.name}`}><Arrow diagonal /></a> : <span className="round-link muted-round" aria-hidden="true">↗</span>}{project.repo && <a className="repo-link" href={project.repo} target="_blank" rel="noreferrer">Source code <Arrow diagonal /></a>}</div></article>) : <div className="empty-work" data-reveal><span className="mono">THE FIRST ONE IS ALWAYS THE START</span><h3>Something good is<br /><em>taking shape.</em></h3><p>New work will appear here as it becomes ready to share.</p></div>}</div><p className="work-note mono">MORE BUILDS WILL BE ADDED AS THEY'RE READY TO SHARE.</p></section>

        <section className="section services-section" id="services"><div className="section-wrap"><div className="services-head" data-reveal><div className="section-heading"><span className="section-index mono">04 — HOW I CAN HELP</span><h2>From first sketch<br />to <em>finished product.</em></h2></div><p>I work on the parts that turn an idea into a useful digital experience. The right scope depends on your goals—we can start with a conversation.</p></div><div className="service-list">{services.map((service) => <article className="service-row" key={service.n} data-reveal><span className="mono service-number">{service.n}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>

        <section className="section process-section section-wrap" id="process"><div className="section-heading" data-reveal><span className="section-index mono">05 — A CLEAR PROCESS</span><h2>Good work comes<br />from <em>good process.</em></h2></div><div className="process-grid">{steps.map(([n, title, text]) => <article className="process-card" key={n} data-reveal><span className="mono">{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="principles-band"><div className="section-wrap principles-inner" data-reveal><span className="section-index mono">WHAT YOU CAN EXPECT</span><h2>Care in the details.<br /><em>Clarity in the process.</em></h2><div className="principle-items"><span>Maintainable code</span><span>Responsive by default</span><span>Thoughtful UX</span><span>Open communication</span><span>Continuous improvement</span></div><p>These are the standards I aim to bring to every collaboration—and the things I'll keep improving with every build.</p></div></section>

        <section className="section contact-section section-wrap" id="contact"><div className="contact-left" data-reveal><span className="section-index mono">06 — YOUR TURN</span><h2>Have something<br />in <em>mind?</em></h2><p>Tell me a little about what you're looking to build. A rough idea is more than enough to start a conversation.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a></div></div>
          <form className="contact-form" onSubmit={submitContact} noValidate data-reveal><div className="form-heading"><span className="mono">PROJECT ENQUIRY</span><span className="form-required">* Required fields</span></div><label>Your name *<input name="name" value={form.name} onChange={update} autoComplete="name" placeholder="How should I address you?" required /></label><label>Email address *<input name="email" type="email" value={form.email} onChange={update} autoComplete="email" placeholder="you@example.com" required /></label><div className="form-two"><label>What do you need?<select name="type" value={form.type} onChange={update}><option>A website</option><option>A web application</option><option>Frontend development</option><option>Backend / API work</option><option>Something else</option></select></label><label>Budget <span className="optional">(optional)</span><select name="budget" value={form.budget} onChange={update}><option value="">Prefer to discuss</option><option>Under ₹10,000</option><option>₹10,000–₹30,000</option><option>₹30,000–₹75,000</option><option>₹75,000+</option><option>Not sure yet</option></select></label></div><label>Tell me about the project *<textarea name="message" value={form.message} onChange={update} rows="4" placeholder="A few details about your idea, goals, or timeline..." required /></label>{formError && <p className="form-message error" role="alert">{formError}</p>}{sent && <p className="form-message success" role="status">Your email app should open with the enquiry filled in. Send it there to complete the message.</p>}<button className="button button-dark submit-button" type="submit">Send an enquiry <Arrow diagonal /></button><p className="form-footnote">This starter uses your email app to send the enquiry. Connect a form service or backend for direct website submissions.</p></form>
        </section>
      </main>

      <footer className="footer"><div className="section-wrap"><div className="footer-top"><a className="wordmark footer-mark" href="#home">DEV<span>.</span></a><p>Thoughtful web development<br />for ideas worth building.</p><a className="back-top mono" href="#home">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}. Built with care.</span><span>DESIGNED TO BE USEFUL.</span><span><a href={`mailto:${profile.email}`}>SAY HELLO <Arrow diagonal /></a></span></div></div></footer>
    </div>
  );
}

export default App;
