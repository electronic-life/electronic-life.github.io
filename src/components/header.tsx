import Title from './title';
import ContactLink from './contact_us';

interface HeaderProps {
    text_colour: string;
    className?: string;
}

const Header = ({text_colour, className}: HeaderProps) => {
    return (
        <header className="pt-4 ml-10 mt-10">
            {text_colour === "white" ? (
                <img src="/electronic_life.png" alt="Electronic Life" className="h-14" />
            ) : (
                <img src="/electronic_life_black.png" alt="Electronic Life" className="h-14" />
            )}
            {/* <h1 style={{ color: text_colour }} className="text-3xl font-bold">ELECTRONIC LIFE</h1> */}
            <h1 style={{ color: text_colour }} className="text-xl">Research Studio</h1>
        </header>
    );
};

export default Header;