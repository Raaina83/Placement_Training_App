import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDownload, faEye, faUpload, faPlay } from "@fortawesome/free-solid-svg-icons";
import profilepic from "../../assets/profile.png";

const MidSection = () => {
    return (
        <>
            <ProfileImg />
        </>
    );
}

const ProfileImg = () => {
    const img = profilepic;
    const name = "Amandeep Singh";
    const email = "xyzxyzxyz@xyz.com";
    const phone = "90736128730";
    const address = "House no. 74, Mars, Milkyway";

    let score1 = 85;
    let score2 = 90;
    let score3 = 78;

    return (
        <>
            <div className="m-10 mt-15 md:mx-20 flex flex-col md:flex-row gap-10 md:gap-20 items-center">
                <img src={img} className="border-2 border-gray-300 rounded-full shadow-lg w-40 h-40" alt="profile-img" />
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-stretch w-full">
                    <div className="content bg-white p-6 rounded-lg shadow-lg flex-1 h-full">
                        <h2 className="text-2xl font-semibold mb-2">Name: {name}</h2>
                        <h2 className="text-xl mb-2">Email: {email}</h2>
                        <h2 className="text-xl mb-2">Phone: {phone}</h2>
                        <h2 className="text-xl mb-2">Address: {address}</h2>
                        <div className="links flex gap-4 mt-4">
                            <a href="#"><FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-700 hover:text-black" /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-700 hover:text-blue-900" /></a>
                            <a href="#"><FontAwesomeIcon icon={faCode} className="text-2xl text-green-700 hover:text-green-900" /></a>
                        </div>
                    </div>

                    <div className="content bg-white p-6 rounded-lg shadow-lg flex-1 h-full mt-4 md:mt-0">
                        <h1 className="text-2xl font-semibold mb-2">Resume Scores</h1>
                        <h2 className="text-xl mb-2">Score 1: {score1}</h2>
                        <h2 className="text-xl mb-2">Score 2: {score2}</h2>
                        <h2 className="text-xl mb-2">Score 3: {score3}</h2>
                    </div>

                    <div className="dates bg-white p-6 rounded-lg shadow-lg flex-1 h-full mt-4 md:mt-0">
                        <h1 className="text-2xl font-semibold mb-2">Last Test Given</h1>
                        <h2 className="text-xl">dd/mm/yyyy</h2>
                    </div>
                </div>
            </div>

            <div className="btns grid grid-cols-2 gap-4 mt-10 mx-4 sm:mx-0 md:mx-20">
            <button className="bg-gray-800 text-sm sm:text-base text-white cursor-pointer py-2 px-4 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-gray-900">
                Download Resume <FontAwesomeIcon icon={faDownload} />
            </button>
            <button className="bg-gray-800 text-sm sm:text-base text-white cursor-pointer py-2 px-4 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-gray-900">
                View Resume <FontAwesomeIcon icon={faEye} />
            </button>
            <button className="bg-gray-800 text-sm sm:text-base text-white cursor-pointer py-2 px-4 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-gray-900">
                Upload Resume <FontAwesomeIcon icon={faUpload} />
            </button>
            <button className="bg-gray-800 text-sm sm:text-base text-white cursor-pointer py-2 px-4 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-gray-900">
                Start Mock Test <FontAwesomeIcon icon={faPlay} />
            </button>
        </div>
        </>
    );
}

export default MidSection;