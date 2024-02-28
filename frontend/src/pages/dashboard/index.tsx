import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
    const data = useSelector((state: any) => state?.user);

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
                <div className="bg-white-800 text-white w-64 py-6 px-4">
                    <img
                        className="mx-auto h-24 w-auto"
                        src="./logo.png"
                        alt="Your Company"
                    />
                    <ul className="mt-6">
                        <li className="mb-4">
                            <Link to="/" className="block text-gray-700 hover:text-gray-900">Dashboard</Link>
                        </li>

                        <li className="mb-4">
                            <Link to="/" className="block text-gray-700 hover:text-gray-900">Profile</Link>
                        </li>

                        <li className="mb-4">
                            <Link to="/" className="block text-gray-700 hover:text-gray-900">Online Lectures</Link>
                        </li>

                        <li className="mb-4">
                            <Link to="/" className="block text-gray-700 hover:text-gray-900">Text Books</Link>
                        </li>



                        <li className="mb-4">
                            <Link to="/" className="block text-gray-700 hover:text-gray-900">Announcements</Link>
                        </li>

                        <li className="mb-4">
                            <Link to="/" className="block text-gray-700 hover:text-gray-900">Quiz</Link>
                        </li>

                        <li>
                            <Link to="/" className="block text-gray-700 hover:text-gray-900">Logout</Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Button */}
                <div className="md:hidden" id="hamburger">
                    <button className="block text-gray-500 hover:text-white focus:text-white focus:outline-none" onClick={toggleMenu}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>



                <div className="flex-1 p-8 bg-gray-800">
                    <h2 className="text-2xl font-semibold text-center text-white mb-4">Welcome {data?.username}  to your dashboard!</h2>
                    <p className="text-white-700 text-center text-white">You will be able to view lectures anytime online once they are available on portal</p>

                    <ul>
                        <li style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px"
                        }}
                            className="text-white"
                        >Picture  :  <span className="text-primary"> <img src={data?.picture} alt={data?.username} width={50} height={50} /></span></li>


                        <li className="text-white" >Auth :  <span className="text-primary">{data?.auth.toString()}</span></li>
                        <li className="text-white" >FullName :  <span className="text-primary">{data?.username}</span></li>
                        <li className="text-white" >Department :  <span className="text-primary">{data?.department}</span></li>
                        <li className="text-white" >Email :  <span className="text-primary"> {data?.email}</span></li>
                        <li className="text-white" >Gender :  <span className="text-primary">{data?.gender}</span></li>
                        <li className="text-white" >Phone :  <span className="text-primary">{data?.phone}</span></li>
                        <li className="text-white" >Roll no :  <span className="text-primary">{data?.rollNo}</span></li>
                        <li className="text-white" >Database Id :  <span className="text-primary">{data?._id}</span></li>

                    </ul>



                </div>
            </div>

        </>
    )
}

export default Dashboard