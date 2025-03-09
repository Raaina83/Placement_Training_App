import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/LOGO -MOCKVERSE.png";

const Dashboard = () => {
    return (
        <div className="w-full min-h-screen sm:min-h-[90vh] transition-colors duration-500" id="dashboard">
            <section className="header bg-gray-500 w-full min-h-[5rem] sm:min-h-[7.5rem] flex flex-row items-center justify-between p-3 sm:p-4">
                <img src={logo} className="w-28 sm:w-48" alt="mockverse-logo" />
                <Toggle />
            </section>
        </div>
    );
};

const Toggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.getElementById("dashboard").classList.toggle("bg-gray-900");
        document.getElementById("dashboard").classList.toggle("bg-purple-300");
    };

    return (
        <div className="theme bg-gray-400 rounded-full w-18 h-9 sm:w-24 sm:h-12 flex items-center p-1 relative cursor-pointer" onClick={toggleTheme}>
            <div
                className={`w-7 h-7 sm:w-10 sm:h-10 bg-amber-300 rounded-full flex justify-center items-center transition-all duration-300 transform ${darkMode ? "translate-x-9 sm:translate-x-[2.5rem]" : "translate-x-0"}`}
            >
                <FontAwesomeIcon className="text-lg sm:text-2xl" icon={darkMode ? faMoon : faSun} />
            </div>
        </div>
    );
};


const MidSection = () => {
    return (<>
        
    </>);
}
export default Dashboard;
