import { FaLinkedin, FaGithub, FaTwitter, } from 'react-icons/fa';

const Navbar = () => {
    return ( 
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/maximilian-aitcheson-70b15b310/"><FaLinkedin /></a>
        <a href="https://github.com/Mona-stery"><FaGithub /></a>
        <a href="https://x.com/maxaitchesondev"><FaTwitter /></a>
      </div>
    </nav>
  );
};

export default Navbar