interface FooterProps {
    className?: string;
}


const Footer = ({className}: FooterProps) => {
    return (
        <footer className={`p-12 ${className}`}>
            <p className="text-sm">© 2024 S. Manghani, E. D&aposSouza, T. Savage</p>
        </footer>
    );
}

export default Footer;