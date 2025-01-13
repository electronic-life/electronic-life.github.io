import ContactLink from "./contact_us";
interface FooterProps {
    className?: string;
}


const Footer = ({className}: FooterProps) => {
    return (
        <footer className={`p-12 mb-0 ${className}`}>
            <ContactLink className="text-m underline text-white hover:text-blue-400" />
            <p className="text-sm mt-2 text-white">© 2024 S. Manghani, E. D’Souza, T. Savage</p>
        </footer>
    );
}

export default Footer;