import './TrustedBy.css';

/* ── Brand list ─────────────────────────────────────────────────
   Each brand has a name and an SVG icon. Add / remove as needed.
────────────────────────────────────────────────────────────────── */
const brands = [
    {
        id: 1,
        name: 'Rathh',
        icon: (
           <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1771349043/rathh-logo_Red_j9eppj.svg" alt="Rathh" />
        ),
    },
    {
        id: 2,
        name: 'Microsoft',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4 2H2v9.4h9.4V2z" fill="#F25022" />
                <path d="M22 2h-9.4v9.4H22V2z" fill="#7FBA00" />
                <path d="M11.4 12.6H2V22h9.4v-9.4z" fill="#00A4EF" />
                <path d="M22 12.6h-9.4V22H22v-9.4z" fill="#FFB900" />
            </svg>
        ),
    },
       {
        id: 3,
        name: 'Rathh',
        icon: (
           <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1771349043/rathh-logo_Red_j9eppj.svg" alt="Rathh" />
        ),
    },
    {
        id: 4,
        name: 'Microsoft',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4 2H2v9.4h9.4V2z" fill="#F25022" />
                <path d="M22 2h-9.4v9.4H22V2z" fill="#7FBA00" />
                <path d="M11.4 12.6H2V22h9.4v-9.4z" fill="#00A4EF" />
                <path d="M22 12.6h-9.4V22H22v-9.4z" fill="#FFB900" />
            </svg>
        ),
    },
       {
        id: 5,
        name: 'Rathh',
        icon: (
           <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1771349043/rathh-logo_Red_j9eppj.svg" alt="Rathh" />
        ),
    },
    {
        id: 6,
        name: 'Microsoft',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4 2H2v9.4h9.4V2z" fill="#F25022" />
                <path d="M22 2h-9.4v9.4H22V2z" fill="#7FBA00" />
                <path d="M11.4 12.6H2V22h9.4v-9.4z" fill="#00A4EF" />
                <path d="M22 12.6h-9.4V22H22v-9.4z" fill="#FFB900" />
            </svg>
        ),
    },
       {
        id: 7,
        name: 'Rathh',
        icon: (
           <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1771349043/rathh-logo_Red_j9eppj.svg" alt="Rathh" />
        ),
    },
    {
        id: 8,
        name: 'Microsoft',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4 2H2v9.4h9.4V2z" fill="#F25022" />
                <path d="M22 2h-9.4v9.4H22V2z" fill="#7FBA00" />
                <path d="M11.4 12.6H2V22h9.4v-9.4z" fill="#00A4EF" />
                <path d="M22 12.6h-9.4V22H22v-9.4z" fill="#FFB900" />
            </svg>
        ),
    },
       {
        id: 9,
        name: 'Rathh',
        icon: (
           <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1771349043/rathh-logo_Red_j9eppj.svg" alt="Rathh" />
        ),
    },
    {
        id: 10,
        name: 'Microsoft',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4 2H2v9.4h9.4V2z" fill="#F25022" />
                <path d="M22 2h-9.4v9.4H22V2z" fill="#7FBA00" />
                <path d="M11.4 12.6H2V22h9.4v-9.4z" fill="#00A4EF" />
                <path d="M22 12.6h-9.4V22H22v-9.4z" fill="#FFB900" />
            </svg>
        ),
    }


];

/* ── TrustedBy Component ──────────────────────────────────────── */
const TrustedBy = () => {
    /* Duplicate the array to create a seamless infinite loop */
    const marqueeItems = [...brands, ...brands];

    return (
        <section className="trusted-by" aria-label="Trusted by innovators">

            {/* Section header */}
            <p className="trusted-by__label">TRUSTED BY INNOVATORS</p>

            {/* Marquee wrapper – clip overflow and fade edges */}
            <div className="trusted-by__track-wrapper">

                {/* Left & right fade gradients */}
                <div className="trusted-by__fade trusted-by__fade--left" />
                <div className="trusted-by__fade trusted-by__fade--right" />

                {/* Moving strip */}
                <div className="trusted-by__track">
                    {marqueeItems.map((brand, index) => (
                        <div
                            className="trusted-by__item"
                            key={`${brand.id}-${index}`}
                            aria-label={brand.name}
                        >
                            {/* Brand icon */}
                            <div className="trusted-by__icon">{brand.icon}</div>

                            {/* Brand name */}
                            <span className="trusted-by__name">{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
