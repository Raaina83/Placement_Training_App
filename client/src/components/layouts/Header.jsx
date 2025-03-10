import React from 'react'
import logo from '../../assets/logo.png'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({toggle, mode}) => {
  return (
    <section className="header bg-gray-400 dark:bg-neutral-800 dark:border-b-white dark:border-b-1 w-full min-h-[5rem] sm:min-h-[6.5rem] flex flex-row items-center justify-between p-3 sm:p-4">
        <img src={logo} className="w-28 sm:w-48" alt="mockverse-logo" />
        <Toggle toggle={toggle} mode={mode}/>
    </section>
  )
}

const Toggle = ({toggle, mode}) => {
    // const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        toggle(!mode);
        document.getElementById("dashboard").classList.toggle("bg-gray-900");
        document.getElementById("dashboard").classList.toggle("bg-black");
    };

    return (
        <div className="theme bg-gray-300 rounded-full w-19 h-9 sm:w-22 sm:h-12 flex items-center p-1 relative cursor-pointer" onClick={toggleTheme}>
            <div
                className={`w-7 h-7 sm:w-10 sm:h-10 bg-amber-300 rounded-full flex justify-center items-center transition-all duration-300 transform ${mode ? "translate-x-10 sm:translate-x-[2.5rem]" : "translate-x-0"}`}>
                <FontAwesomeIcon className="text-lg sm:text-2xl" icon={mode ? faMoon : faSun} />
            </div>
        </div>
    );
};

export default Header