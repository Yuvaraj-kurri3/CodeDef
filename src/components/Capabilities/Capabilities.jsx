import { useState } from 'react';
import './Capabilities.css';

/* ── Capability card data ─────────────────────────────────────────
   Each card has: icon, eyebrow label, title, description,
   pills (tech tags), and an optional badge (NEW / COMING SOON).
   `gridArea` maps to a named area in the CSS grid.
──────────────────────────────────────────────────────────────────── */
const capabilities = [
    {
        id: 'web',
        gridArea: 'web',
        accentColor: '#4f6ef2',
        glowColor: 'rgba(79, 110, 242, 0.25)',
        label: 'DEVELOPMENT',
        title: 'Web Development',
        desc: 'High-performance websites built with React, Next.js, and Tailwind. We focus on Core Web Vitals, SEO optimisation, and scalable architecture that grows with your user base.',
        pills: ['React', 'Next.js', 'TypeScript'],
        pillColors: ['#61dafb', '#ffffff', '#3178c6'],
        badge: null,
        /* Decorative right-side tech badge shown on this card */
        decorBadge: 'HTML',
        decorBadgeColor: '#e44d26',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="#4f6ef2" strokeWidth="1.8" />
                <path d="M8 21h8M12 17v4" stroke="#4f6ef2" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'figma',
        gridArea: 'figma',
        accentColor: '#a855f7',
        glowColor: 'rgba(168, 85, 247, 0.25)',
        label: 'UI / UX',
        title: 'Figma Designs',
        desc: 'We bring your ideas to vibrant, interactive designs. We craft unique user experiences in a single, all-encompassing source of truth.',
        pills: ['Figma', 'Prototyping'],
        pillColors: ['#f24e1e', '#a855f7'],
        badge: null,
        decorBadge: null,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
                <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
                <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
                <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
                <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
            </svg>
        ),
    },
    {
        id: 'app',
        gridArea: 'app',
        accentColor: '#f59e0b',
        glowColor: 'rgba(245, 158, 11, 0.25)',
        label: 'MOBILE',
        title: 'App Development',
        desc: 'Native-level cross-platform mobile applications designed for performance and delightful user experience.',
        pills: ['React Native', 'Expo'],
        pillColors: ['#61dafb', '#000000'],
        badge: 'Coming Soon',
        badgeColor: '#10b981',
        decorBadge: null,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="7" y="2" width="10" height="20" rx="2" stroke="#f59e0b" strokeWidth="1.8" />
                <path d="M10 18h4" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'ai',
        gridArea: 'ai',
        accentColor: '#10b981',
        glowColor: 'rgba(16, 185, 129, 0.25)',
        label: 'AUTOMATION',
        title: 'AI Agents & Automation',
        desc: 'Intelligent AI agents tailored to your workflow. Leverage LLMs to automate routine tasks, data mining, and complex multi-step operations.',
        pills: ['LangChain', 'n8n', 'Python'],
        pillColors: ['#10b981', '#ea580c', '#facc15'],
        badge: 'Coming Soon',
        badgeColor: '#6366f1',
        decorBadge: null,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="#10b981" strokeWidth="1.8" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'brand',
        gridArea: 'brand',
        accentColor: '#ec4899',
        glowColor: 'rgba(236, 72, 153, 0.25)',
        label: 'IDENTITY',
        title: 'Branding',
        desc: 'Memorable brand identities, guidelines, and visual assets designed to give your business a strong, consistent voice.',
        pills: ['Logo', 'Identity'],
        pillColors: ['#ec4899', '#f59e0b'],
        badge: null,
        decorBadge: null,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#ec4899" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
        ),
    },
];

/* ── Single Capability Card ──────────────────────────────────────── */
const CapabilityCard = ({ card, hoveredId, onHover }) => {
    const isHovered = hoveredId === card.id;
    const isOtherHovered = hoveredId !== null && hoveredId !== card.id;

    return (
        <div
            className={`cap-card cap-card--${card.id}${isHovered ? ' cap-card--active' : ''}${isOtherHovered ? ' cap-card--muted' : ''}`}
            style={{
                '--accent': card.accentColor,
                '--glow': card.glowColor,
                gridArea: card.gridArea,
            }}
            onMouseEnter={() => onHover(card.id)}
            onMouseLeave={() => onHover(null)}
        >
            {/* Animated glow blob behind card */}
            <div className="cap-card__glow" />

            {/* Top bar: icon + label + optional badge */}
            <div className="cap-card__header">

                {/* Icon – zooms on hover via CSS class */}
                <div className="cap-card__icon-wrap">
                    {card.icon}
                </div>

                {/* Eyebrow label */}
                <span className="cap-card__label">{card.label}</span>

                {/* Optional NEW / COMING SOON badge */}
                {card.badge && (
                    <span
                        className="cap-card__badge"
                        style={{ '--badge-color': card.badgeColor }}
                    >
                        {card.badge}
                    </span>
                )}
            </div>

            {/* Card body */}
            <h3 className="cap-card__title">{card.title}</h3>
            <p className="cap-card__desc">{card.desc}</p>

            {/* Tech pill row */}
            <div className="cap-card__pills">
                {card.pills.map((pill, i) => (
                    <span
                        key={pill}
                        className="cap-card__pill"
                        style={{ '--pill-color': card.pillColors[i] }}
                    >
                        {pill}
                    </span>
                ))}
            </div>

            {/* Optional decorative tech badge (e.g. HTML on web card) */}
            {card.decorBadge && (
                <div
                    className="cap-card__decor-badge"
                    style={{ color: card.decorBadgeColor, borderColor: card.decorBadgeColor }}
                >
                    {card.decorBadge}
                </div>
            )}

            {/* Bottom-right arrow indicator */}
            <div className="cap-card__arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 19L19 5M19 5H9M19 5v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

/* ── Main Capabilities Section ───────────────────────────────────── */
const Capabilities = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="capabilities" id="capabilities">

            {/* ── Section header ── */}
            <div className="capabilities__header">
                <p className="capabilities__eyebrow">CAPABILITIES</p>
                <h2 className="capabilities__heading">
                    Your Dream May <span className="capabilities__heading-accent">Be Here?</span>
                </h2>
                <p className="capabilities__sub">
                    Complete digital solutions engineered for scale. We build it to last &amp; to
                    build your business.
                </p>
            </div>

            {/* ── Card grid ── */}
            <div className="capabilities__grid">
                {capabilities.map((card) => (
                    <CapabilityCard
                        key={card.id}
                        card={card}
                        hoveredId={hoveredId}
                        onHover={setHoveredId}
                    />
                ))}

                {/* "Explore all services" link card */}
                <a href="#services" className="cap-card cap-card--explore" style={{ gridArea: 'explore' }}>
                    <span>Explore All Services</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Capabilities;
