import ContactLink from "./contact_us";
import React from 'react';

interface FooterProps {
    className?: string;
    style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = React.memo(({className, style}) => {
    return (
        <footer className={`p-12 mt-auto ${className || ''}`} style={style}>
            <ContactLink className="text-m text-black hover:text-blue-400" />
            <p className="text-sm mt-2 text-black">© 2024 S. Manghani, E. D'Souza, T. Savage</p>
        </footer>
    );
});

Footer.displayName = 'Footer';
export default Footer;