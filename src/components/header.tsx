import React from 'react';

interface HeaderProps {
    text_colour: string;
    className?: string;
    breadcrumb?: string;
}

const Header: React.FC<HeaderProps> = React.memo(({text_colour, className, breadcrumb}) => {
    // Return to home in the fully-scrolled state (with menu showing)
    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        
        // For non-home pages, navigate to home with scrolled state
        if (window.location.pathname !== '/') {
            // We're not on the homepage, so navigate back with state
            window.location.href = '/?fromHome=true';
        } else {
            // We're already on the homepage, just scroll to bottom to show menu
            const scrollContainer = document.querySelector('.grid-rows-6');
            if (scrollContainer) {
                const containerHeight = scrollContainer.getBoundingClientRect().height;
                window.scrollTo({
                    top: containerHeight - window.innerHeight,
                    behavior: 'smooth'
                });
            }
        }
    };

    // Preload the correct logo based on the text color
    // This ensures the image is ready when needed
    const logoSrc = text_colour === "white" ? "/electronic_life.png" : "/electronic_life_black.png";

    return (
        <header className={`pt-4 ml-10 mt-10 ${className || ''}`}>
            <a href="/" onClick={handleLogoClick}>
                <img 
                    src={logoSrc} 
                    alt="Electronic Life" 
                    className="h-14"
                    loading="eager"
                    fetchPriority="high"
                />
            </a>
            <h1 style={{ color: text_colour }} className="text-2xl">Research Studio {breadcrumb}</h1>
        </header>
    );
});

Header.displayName = 'Header';
export default Header;