import { useEffect, useRef, useState } from 'react';
import './Hero.css';

/* ── Card data ─────────────────────────────────────────────── */
const leftCards = [
    {
        id: 'lc1',
        rotate: '-14deg',
        borderColor: '#7c5cfc',
        glowColor: 'rgba(124,92,252,0.35)',
        tag: 'UI / UX',
        title: 'Creative Design',
        desc: 'Pixel‑perfect interfaces that captivate and convert.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="#7c5cfc" strokeWidth="1.8" />
                <path d="M8 21h8M12 17v4" stroke="#7c5cfc" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        tags: ['Figma', 'Next.js', 'TailwindCSS'],
        tagColors: ['#7c5cfc', '#3b82f6', '#06b6d4'],
    },
    {
        id: 'lc2',
        rotate: '-8deg',
        borderColor: '#4f6ef2',
        glowColor: 'rgba(79,110,242,0.35)',
        tag: 'BACKEND',
        title: 'Scalable APIs',
        desc: 'Robust, fast & secure server‑side solutions.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 10h16M4 14h10" stroke="#4f6ef2" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="19" cy="17" r="3" stroke="#4f6ef2" strokeWidth="1.8" />
            </svg>
        ),
        tags: ['Node.js', 'MongoDB', 'Express'],
        tagColors: ['#ffdd00ff', '#47a248', '#333'],
    },
];

const rightCards = [
    {
        id: 'rc1',
        rotate: '14deg',
        borderColor: '#10b981',
        glowColor: 'rgba(16,185,129,0.35)',
        tag: 'AI / ML',
        title: 'AI Automation',
        desc: 'Intelligent workflows powered by modern ML.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="#10b981" strokeWidth="1.8" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        tags: ['Python', 'LangChain', 'n8n'],
        tagColors: ['#facc15', '#10b981', '#6366f1'],
    },
    {
        id: 'rc2',
        rotate: '8deg',
        borderColor: '#f59e0b',
        glowColor: 'rgba(245,158,11,0.35)',
        tag: 'BRANDING',
        title: 'Digital Identity',
        desc: 'Brand stories that leave a lasting impression.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#f59e0b" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
        ),
        tags: ['Logo', 'Strategy', 'Motion'],
        tagColors: ['#f59e0b', '#ef4444', '#a855f7'],
    },
];

/* ── Single Card ───────────────────────────────────────────── */
const HeroCard = ({ card, side }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`hero-card hero-card--${side}`}
            style={{
                '--border-color': card.borderColor,
                '--glow-color': card.glowColor,
                '--rotate': card.rotate,
                transform: hovered ? 'rotate(0deg) translateY(-6px)' : `rotate(${card.rotate})`,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="hero-card__glow" />
            <div className="hero-card__inner">
                <div className="hero-card__header">
                    <div className="hero-card__icon">{card.icon}</div>
                    <span className="hero-card__tag">{card.tag}</span>
                </div>
                <h3 className="hero-card__title">{card.title}</h3>
                <p className="hero-card__desc">{card.desc}</p>
                <div className="hero-card__tags">
                    {card.tags.map((t, i) => (
                        <span
                            key={t}
                            className="hero-card__pill"
                            style={{ '--pill-color': card.tagColors[i] }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

/* ── Main Hero ─────────────────────────────────────────────── */
const Hero = () => {
    const heroRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 120);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={`hero${visible ? ' hero--visible' : ''}`} id="home" ref={heroRef}>

            {/* ─── Background glow orbs ─── */}
            <div className="hero__bg">
                <div className="hero__orb hero__orb--blue" />
                <div className="hero__orb hero__orb--purple" />
                <div className="hero__orb hero__orb--green" />
                <div className="hero__grid" />
            </div>

            {/* ─── Layout wrapper ─── */}
            <div className="hero__layout gap-10">

                {/* LEFT CARDS */}
                <div className="hero__cards hero__cards--left gap-10">
                    {leftCards.map((card) => (
                        <HeroCard key={card.id} card={card} side="left" />
                    ))}
                </div>

                {/* CENTER CONTENT */}
                <div className="hero__center">

                    {/* Eye‑brow badge */}
                    <div className="hero__badge">
                        <span className="hero__badge-dot" />
                        <span>Full‑Service Digital Agency</span>
                    </div>

                    {/* Main heading */}
                    <h1 className="hero__heading text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-500 glow-text">
                        Your Growth
                        <br />
                        Is Our <span className="hero__heading-accent">Dream</span>
                    </h1>

                    {/* Sub text */}
                    <p className="hero__sub">
                        We don't just write code; we engineer digital transformations.{' '}
                        <span className="hero__sub-tag">&lt;CodeDef /&gt;</span>{' '}
                        helps you define, deploy, and deliver your vision to the world.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero__actions">
                        <a href="#work" className="hero__btn hero__btn--primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M8 6L2 12l6 6M16 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Start Building
                        </a>
                        <a href="#work" className="hero__btn hero__btn--ghost">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <polygon points="5,3 19,12 5,21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
                            </svg>
                            View Showcase
                        </a>
                    </div>

                    {/* Social proof strip */}
                    {/* <div className="hero__strip">
                        <div className="hero__strip-avatars">
                            {['#4f6ef2', '#10b981', '#f59e0b', '#ec4899'].map((c, i) => (
                                <span key={i} className="hero__avatar" style={{ background: c, zIndex: 4 - i }} />
                            ))}
                        </div>
                        <p className="hero__strip-text">
                            <strong>50+</strong> projects delivered &nbsp;·&nbsp; <strong>100%</strong> client satisfaction
                        </p>
                    </div> */}
                </div>

                {/* RIGHT CARDS */}
                <div className="hero__cards hero__cards--right">
                    {rightCards.map((card) => (
                        <HeroCard key={card.id} card={card} side="right" />
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-dot" />
                </div>
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
