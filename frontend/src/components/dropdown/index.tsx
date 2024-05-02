import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarVisibility, toggleSidebar } from '../../redux/slices/sidebarSlice';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutApi } from '../../api';
import { Slide, toast } from 'react-toastify';
import { resetUser } from '../../redux/slices/userSlice';
import Toast from '../toast';

export function HeaderDropdown() {
    const navigate = useNavigate();

    const data = useSelector((state: any) => state?.user);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const sidebarVisible = useSelector(selectSidebarVisibility);

    const dispatch = useDispatch();
    const handleToggleSidebar = () => {
        dispatch(toggleSidebar());
    };



    async function handleLogout() {
        await LogoutApi();
        toast.success("Logout Successfull", {
            position: "bottom-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
        setTimeout(() => {
            dispatch(resetUser())
            navigate("/signin")
        }, 1000)
    }

    return (
        <>
            <div className="relative">
                <button
                    id="dropdownAvatarNameButton"
                    data-dropdown-toggle="dropdownAvatarName"
                    className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0  focus:ring-gray-100 dark:focus:ring-gray-700 text-white"
                    type="button"
                    onClick={toggleDropdown}
                >
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="w-8 h-8 me-2 rounded-full"
                        src={data?.picture}
                        alt={data?.username}
                    />
                    {data?.username}
                    <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                    <div
                        id="dropdownAvatarName"
                        className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownAvatarNameButton">


                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleToggleSidebar}>
                                    {sidebarVisible ? "Close" : "View"} Sidebar</a>
                            </li>

                            <li>
                                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={handleLogout}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>

    );
}
