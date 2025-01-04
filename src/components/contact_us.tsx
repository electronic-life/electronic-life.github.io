interface ContactLinkProps {
    className?: string;
  }

const ContactLink = ({className}:ContactLinkProps) => {
    return (
        <a className={`${className}`} href="mailto:contact@electroniclife.ai">Contact Us</a>
    );
  };

export default ContactLink;