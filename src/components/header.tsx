import Title from './title';
import ContactLink from './contact_us';

interface HeaderProps {
    title_text: string;
}

const Header = ({title_text}: HeaderProps) => {
    return (
        <header>
            <Title text={title_text} className="mt-12 ml-12 mb-8" />
            <ContactLink className="ml-12 text-xl underline text-blue-600 hover:text-blue-800" />
            <hr className="border-thin border-black my-10 ml-12 mr-12" />
        </header>
    )
}

export default Header;