
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Button } from "../ui/button";
// import { NotificationBell } from "../general/icon";
// import dayjs from "dayjs";
// import Logo from "../general/Logo";
// import { menuItems, supportMenuItems } from "./Aside";
// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
// import { MdArrowForward } from "react-icons/md";

import { BicepsFlexed } from "lucide-react";

const Header = () => {
    //   const [showMenu, setShowMenu] = useState(false);
    //   const [openChildMenu, setOpenChildMenu] = useState(-3);
    //   const pathname = usePathname();

    //   const [isMobile, setIsMobile] = useState(false);

    //   useEffect(() => {
    //     const handleResize = () => {
    //       if (!(window.innerWidth < 768)) {
    //         setShowMenu(false);
    //         setOpenChildMenu(-3);
    //       }
    //       setIsMobile(window.innerWidth < 768);
    //     };

    //     handleResize();
    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //       window.removeEventListener("resize", handleResize);
    //     };
    //   }, []);

    //   const handleShowMenu = () => {
    //     setShowMenu((prevShowMenu) => !prevShowMenu);
    //   };

    //   const handleShowChildMenu = (e: number) => {
    //     openChildMenu === e ? setOpenChildMenu(-3) : setOpenChildMenu(e);
    //   };

    //   useEffect(() => {
    //     setShowMenu(false);
    //   }, [pathname]);

    return (
        <header className="bg-black text-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-red-600" href="#">
                            <span className="sr-only">Home</span>

                            <h1><BicepsFlexed />ATHLETIC CLUB</h1>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-white transition hover:text-gray-500/75" href="#"> News </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-gray-500/75" href="#"> Features </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-gray-500/75" href="#"> More </a>
                                </li>

                                <a
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                    href="#"
                                >
                                    Get Started
                                </a>
                            </ul>

                        </nav>
                    </div>


                    <div className="block md:hidden">
                        <button className="rounded bg-gray-100 p-2 text-white transition hover:text-gray-600/75">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
