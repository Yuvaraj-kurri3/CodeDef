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
        name: 'Srinidhi Hostels',
        icon: (
          <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1767552750/Gemini_Generated_Image_remrasremrasremr_bjdwyy.png" alt='SH' />
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
        name: 'Srinidhi Hostels',
        icon: (
          <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1767552750/Gemini_Generated_Image_remrasremrasremr_bjdwyy.png" alt='SH' />
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
       name: 'Srinidhi Hostels',
        icon: (
          <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1767552750/Gemini_Generated_Image_remrasremrasremr_bjdwyy.png" alt='SH' />
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
       name: 'Srinidhi Hostels',
        icon: (
          <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1767552750/Gemini_Generated_Image_remrasremrasremr_bjdwyy.png" alt='SH' />
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
       name: 'Srinidhi Hostels',
        icon: (
          <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1767552750/Gemini_Generated_Image_remrasremrasremr_bjdwyy.png" alt='SH' />
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
            <p className="trusted-by__label">TRUSTED BY BUSINESS</p>

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
