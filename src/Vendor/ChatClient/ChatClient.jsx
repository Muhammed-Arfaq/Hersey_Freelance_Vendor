import React from "react";
import "./ChatClient.css";
import logo from "../../assets/img/Logo1.png";
import team1 from "../../assets/img/team-1.jpg";
import team2 from "../../assets/img/team-2.jpg";

function ChatClient() {
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="z-10 my-4 mx-3 col-span-3">
                    <div className="w-full max-w-full px-3 lg:w-80 lg:flex-none fixed">
                        <div className="border-black/12.5 shadow-soft-2xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                <img className="ml-7 mt-10 w-40" src={logo} alt="" />
                            </div>
                            <div className="flex-auto ">
                                <div className="">
                                    <ul className="flex flex-col pl-0 mb-0">
                                        <li className="mt-14 w-full">
                                            <a
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                href="../pages/sign-in.html"
                                            >
                                                <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                                    <svg
                                                        width="12px"
                                                        height="12px"
                                                        viewBox="0 0 40 44"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    >
                                                        <title>document</title>
                                                        <g
                                                            stroke="none"
                                                            stroke-width="1"
                                                            fill="none"
                                                            fill-rule="evenodd"
                                                        >
                                                            <g
                                                                transform="translate(-1870.000000, -591.000000)"
                                                                fill="#FFFFFF"
                                                                fill-rule="nonzero"
                                                            >
                                                                <g transform="translate(1716.000000, 291.000000)">
                                                                    <g transform="translate(154.000000, 300.000000)">
                                                                        <path
                                                                            className="fill-slate-800 opacity-60"
                                                                            d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                                                        ></path>
                                                                        <path
                                                                            className="fill-slate-800"
                                                                            d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                                                    Vendor Dashboard
                                                </span>
                                            </a>
                                        </li>
                                        <li className="mt-2 w-full">
                                            <a
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                href="../pages/sign-in.html"
                                            >
                                                <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                                    <svg
                                                        width="12px"
                                                        height="12px"
                                                        viewBox="0 0 40 44"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    >
                                                        <title>document</title>
                                                        <g
                                                            stroke="none"
                                                            stroke-width="1"
                                                            fill="none"
                                                            fill-rule="evenodd"
                                                        >
                                                            <g
                                                                transform="translate(-1870.000000, -591.000000)"
                                                                fill="#FFFFFF"
                                                                fill-rule="nonzero"
                                                            >
                                                                <g transform="translate(1716.000000, 291.000000)">
                                                                    <g transform="translate(154.000000, 300.000000)">
                                                                        <path
                                                                            className="fill-slate-800 opacity-60"
                                                                            d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                                                        ></path>
                                                                        <path
                                                                            className="fill-slate-800"
                                                                            d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                                                    Post Gigs
                                                </span>
                                            </a>
                                        </li>
                                        <li className="mt-2 w-full">
                                            <a
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                href="../pages/sign-in.html"
                                            >
                                                <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                                    <svg
                                                        width="12px"
                                                        height="12px"
                                                        viewBox="0 0 40 44"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    >
                                                        <title>document</title>
                                                        <g
                                                            stroke="none"
                                                            stroke-width="1"
                                                            fill="none"
                                                            fill-rule="evenodd"
                                                        >
                                                            <g
                                                                transform="translate(-1870.000000, -591.000000)"
                                                                fill="#FFFFFF"
                                                                fill-rule="nonzero"
                                                            >
                                                                <g transform="translate(1716.000000, 291.000000)">
                                                                    <g transform="translate(154.000000, 300.000000)">
                                                                        <path
                                                                            className="fill-slate-800 opacity-60"
                                                                            d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                                                        ></path>
                                                                        <path
                                                                            className="fill-slate-800"
                                                                            d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                                                    Message Clients
                                                </span>
                                            </a>
                                        </li>
                                        <li className="mt-2 w-full">
                                            <a
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                href="../pages/sign-in.html"
                                            >
                                                <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                                    <svg
                                                        width="12px"
                                                        height="12px"
                                                        viewBox="0 0 40 44"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    >
                                                        <title>document</title>
                                                        <g
                                                            stroke="none"
                                                            stroke-width="1"
                                                            fill="none"
                                                            fill-rule="evenodd"
                                                        >
                                                            <g
                                                                transform="translate(-1870.000000, -591.000000)"
                                                                fill="#FFFFFF"
                                                                fill-rule="nonzero"
                                                            >
                                                                <g transform="translate(1716.000000, 291.000000)">
                                                                    <g transform="translate(154.000000, 300.000000)">
                                                                        <path
                                                                            className="fill-slate-800 opacity-60"
                                                                            d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                                                        ></path>
                                                                        <path
                                                                            className="fill-slate-800"
                                                                            d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                                                    Manage Orders
                                                </span>
                                            </a>
                                        </li>
                                        {/* <li className="mt-2 w-full">
                                            <a
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                href="../pages/sign-in.html"
                                            >
                                                <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                                    <svg
                                                        width="12px"
                                                        height="12px"
                                                        viewBox="0 0 40 44"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    >
                                                        <title>document</title>
                                                        <g
                                                            stroke="none"
                                                            stroke-width="1"
                                                            fill="none"
                                                            fill-rule="evenodd"
                                                        >
                                                            <g
                                                                transform="translate(-1870.000000, -591.000000)"
                                                                fill="#FFFFFF"
                                                                fill-rule="nonzero"
                                                            >
                                                                <g transform="translate(1716.000000, 291.000000)">
                                                                    <g transform="translate(154.000000, 300.000000)">
                                                                        <path
                                                                            className="fill-slate-800 opacity-60"
                                                                            d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                                                        ></path>
                                                                        <path
                                                                            className="fill-slate-800"
                                                                            d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                                                    Post Management
                                                </span>
                                            </a>
                                        </li> */}
                                        <li className="mt-2 w-full">
                                            <a
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                href="../pages/sign-in.html"
                                            >
                                                <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                                    <svg
                                                        width="12px"
                                                        height="12px"
                                                        viewBox="0 0 40 44"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    >
                                                        <title>document</title>
                                                        <g
                                                            stroke="none"
                                                            stroke-width="1"
                                                            fill="none"
                                                            fill-rule="evenodd"
                                                        >
                                                            <g
                                                                transform="translate(-1870.000000, -591.000000)"
                                                                fill="#FFFFFF"
                                                                fill-rule="nonzero"
                                                            >
                                                                <g transform="translate(1716.000000, 291.000000)">
                                                                    <g transform="translate(154.000000, 300.000000)">
                                                                        <path
                                                                            className="fill-slate-800 opacity-60"
                                                                            d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                                                        ></path>
                                                                        <path
                                                                            className="fill-slate-800"
                                                                            d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                                                    My Profile
                                                </span>
                                            </a>
                                        </li>
                                        <li className="mt-2 w-full">
                                            <a
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                href="../pages/sign-in.html"
                                            >
                                                <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                                    <svg
                                                        width="12px"
                                                        height="12px"
                                                        viewBox="0 0 40 44"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    >
                                                        <title>document</title>
                                                        <g
                                                            stroke="none"
                                                            stroke-width="1"
                                                            fill="none"
                                                            fill-rule="evenodd"
                                                        >
                                                            <g
                                                                transform="translate(-1870.000000, -591.000000)"
                                                                fill="#FFFFFF"
                                                                fill-rule="nonzero"
                                                            >
                                                                <g transform="translate(1716.000000, 291.000000)">
                                                                    <g transform="translate(154.000000, 300.000000)">
                                                                        <path
                                                                            className="fill-slate-800 opacity-60"
                                                                            d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                                                        ></path>
                                                                        <path
                                                                            className="fill-slate-800"
                                                                            d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                                                    Logout
                                                </span>
                                            </a>
                                        </li>
                                        <li className="mt-24"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-9 ">
                    <nav
                        className="relative mt-4 flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
                        navbar-main
                        navbar-scroll="true"
                    >
                        <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                            <nav>
                                {/* <!-- breadcrumb --> */}
                                <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                                    <li className="leading-normal text-sm">
                                        <a
                                            className="opacity-50 text-slate-700"
                                            href="javascript:;"
                                        >
                                            Pages
                                        </a>
                                    </li>
                                    <li
                                        className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
                                        aria-current="page"
                                    >
                                        Message Client
                                    </li>
                                </ol>
                                <h6 className="mb-0 font-bold capitalize">Message Client</h6>
                            </nav>

                            <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                                <div className="flex items-center md:ml-auto md:pr-4">
                                    <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                                        <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                                            <i className="fas fa-search"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                            placeholder="Type here..."
                                        />
                                    </div>
                                </div>
                                <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                                    <li className="flex items-center">
                                        <a
                                            href="../pages/sign-in.html"
                                            className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500"
                                        >
                                            <i className="fa fa-user sm:mr-1"></i>
                                            <span className="hidden sm:inline">Sign In</span>
                                        </a>
                                    </li>
                                    <li className="flex items-center pl-4 xl:hidden">
                                        <a
                                            href="javascript:;"
                                            className="block p-0 transition-all ease-nav-brand text-sm text-slate-500"
                                            sidenav-trigger
                                        >
                                            <div className="w-4.5 overflow-hidden">
                                                <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                                <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                                <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="flex items-center px-4">
                                        <a
                                            href="javascript:;"
                                            className="p-0 transition-all text-sm ease-nav-brand text-slate-500"
                                        >
                                            <i
                                                fixed-plugin-button-nav
                                                className="cursor-pointer fa fa-cog"
                                            ></i>
                                            {/* <!-- fixed-plugin-button-nav  --> */}
                                        </a>
                                    </li>

                                    {/* <!-- notifications --> */}

                                    <li className="relative flex items-center pr-2">
                                        <p className="hidden transform-dropdown-show"></p>
                                        <a
                                            href="javascript:;"
                                            className="block p-0 transition-all text-sm ease-nav-brand text-slate-500"
                                            dropdown-trigger
                                            aria-expanded="false"
                                        >
                                            <i className="cursor-pointer fa fa-bell"></i>
                                        </a>

                                        <ul
                                            dropdown-menu
                                            className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer"
                                        >
                                            {/* <!-- add show className on dropdown open js --> */}
                                            <li className="relative mb-2">
                                                <a
                                                    className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors"
                                                    href="javascript:;"
                                                >
                                                    <div className="flex py-1">
                                                        <div className="my-auto">
                                                            <img
                                                                src="../assets/img/team-2.jpg"
                                                                className="inline-flex items-center justify-center mr-4 text-white text-sm h-9 w-9 max-w-none rounded-xl"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-1 font-normal leading-normal text-sm">
                                                                <span className="font-semibold">
                                                                    New message
                                                                </span>{" "}
                                                                from Laur
                                                            </h6>
                                                            <p className="mb-0 leading-tight text-xs text-slate-400">
                                                                <i className="mr-1 fa fa-clock"></i>
                                                                13 minutes ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li className="relative mb-2">
                                                <a
                                                    className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                                                    href="javascript:;"
                                                >
                                                    <div className="flex py-1">
                                                        <div className="my-auto">
                                                            <img
                                                                src="../assets/img/small-logos/logo-spotify.svg"
                                                                className="inline-flex items-center justify-center mr-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 h-9 w-9 max-w-none rounded-xl"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-1 font-normal leading-normal text-sm">
                                                                <span className="font-semibold">New album</span>{" "}
                                                                by Travis Scott
                                                            </h6>
                                                            <p className="mb-0 leading-tight text-xs text-slate-400">
                                                                <i className="mr-1 fa fa-clock"></i>1 day
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li className="relative">
                                                <a
                                                    className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                                                    href="javascript:;"
                                                >
                                                    <div className="flex py-1">
                                                        <div className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-sm bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                                                            <svg
                                                                width="12px"
                                                                height="12px"
                                                                viewBox="0 0 43 36"
                                                                version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            >
                                                                <title>credit-card</title>
                                                                <g
                                                                    stroke="none"
                                                                    stroke-width="1"
                                                                    fill="none"
                                                                    fill-rule="evenodd"
                                                                >
                                                                    <g
                                                                        transform="translate(-2169.000000, -745.000000)"
                                                                        fill="#FFFFFF"
                                                                        fill-rule="nonzero"
                                                                    >
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g transform="translate(453.000000, 454.000000)">
                                                                                <path
                                                                                    className="color-background"
                                                                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                                    opacity="0.593633743"
                                                                                ></path>
                                                                                <path
                                                                                    className="color-background"
                                                                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                                                                ></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-1 font-normal leading-normal text-sm">
                                                                Payment successfully completed
                                                            </h6>
                                                            <p className="mb-0 leading-tight text-xs text-slate-400">
                                                                <i className="mr-1 fa fa-clock"></i>2 days
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div class="flex h-screen antialiased text-gray-800 ">
                        <div class="flex flex-row h-full w-full overflow-x-hidden">
                            <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                                <div
                                    class="flex flex-col items-center bg-gradient-to-r from-fuchsia-800 to-indigo-900 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
                                >
                                    <div class="h-20 w-20 rounded-full border overflow-hidden">
                                        <img
                                            src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                                            alt="Avatar"
                                            class="h-full w-full"
                                        />
                                    </div>
                                    <div class="text-sm text-white font-semibold mt-2">Aminos Co.</div>

                                </div>
                                <div class="flex flex-col mt-8">
                                    <div class="flex flex-row items-center justify-between text-xs">
                                        <span class="font-bold text-base">Messages</span>
                                        <span
                                            class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                                        >4</span
                                        >
                                    </div>
                                    <div class="flex flex-col space-y-1 mt-5 -mx-2 h-96 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                                        <button
                                            class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                                        >
                                            <div
                                                class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                                            >
                                                H
                                            </div>
                                            <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
                                        </button>
                                        <button
                                            class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                                        >
                                            <div
                                                class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full"
                                            >
                                                M
                                            </div>
                                            <div class="ml-2 text-sm font-semibold">Marta Curtis</div>
                                            <div
                                                class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none"
                                            >
                                                2
                                            </div>
                                        </button>
                                        <button
                                            class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                                        >
                                            <div
                                                class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full"
                                            >
                                                P
                                            </div>
                                            <div class="ml-2 text-sm font-semibold">Philip Tucker</div>
                                        </button>
                                        <button
                                            class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                                        >
                                            <div
                                                class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full"
                                            >
                                                C
                                            </div>
                                            <div class="ml-2 text-sm font-semibold">Christine Reid</div>
                                        </button>
                                        <button
                                            class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                                        >
                                            <div
                                                class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full"
                                            >
                                                J
                                            </div>
                                            <div class="ml-2 text-sm font-semibold">Jerry Guzman</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col flex-auto h-full p-6">
                                <div
                                    class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
                                >
                                    <div class="flex flex-col h-full overflow-x-auto mb-4 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                                        <div class="flex flex-col h-full">
                                            <div class="grid grid-cols-12 gap-y-2">
                                                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                                    <div class="flex flex-row items-center">
                                                        <div
                                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white flex-shrink-0"
                                                        >
                                                            A
                                                        </div>
                                                        <div
                                                            class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                        >
                                                            <div>Hey How are you today?</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                                    <div class="flex flex-row items-center">
                                                        <div
                                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white flex-shrink-0"
                                                        >
                                                            A
                                                        </div>
                                                        <div
                                                            class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                        >
                                                            <div>
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                elit. Vel ipsa commodi illum saepe numquam maxime
                                                                asperiores voluptate sit, minima perspiciatis.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                                                    <div class="flex items-center justify-start flex-row-reverse">
                                                        <div
                                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white flex-shrink-0"
                                                        >
                                                            A
                                                        </div>
                                                        <div
                                                            class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                                        >
                                                            <div>I'm ok what about you?</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                                                    <div class="flex items-center justify-start flex-row-reverse">
                                                        <div
                                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white flex-shrink-0"
                                                        >
                                                            A
                                                        </div>
                                                        <div
                                                            class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                                        >
                                                            <div>
                                                                Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                                    <div class="flex flex-row items-center">
                                                        <div
                                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white flex-shrink-0"
                                                        >
                                                            A
                                                        </div>
                                                        <div
                                                            class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                        >
                                                            <div>Lorem ipsum dolor sit amet !</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                                                    <div class="flex items-center justify-start flex-row-reverse">
                                                        <div
                                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white flex-shrink-0"
                                                        >
                                                            A
                                                        </div>
                                                        <div
                                                            class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                                        >
                                                            <div>
                                                                Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                                                            </div>
                                                            <div
                                                                class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                                                            >
                                                                Seen
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                                    <div class="flex flex-row items-center">
                                                        <div
                                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white flex-shrink-0"
                                                        >
                                                            A
                                                        </div>
                                                        <div
                                                            class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                        >
                                                            <div>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                Perspiciatis, in.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                                    <div class="flex flex-row items-center">
                                                        <div
                                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white flex-shrink-0"
                                                        >
                                                            A
                                                        </div>
                                                        <div
                                                            class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                        >
                                                            <div class="flex flex-row items-center">
                                                                <button
                                                                    class="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10"
                                                                >
                                                                    <svg
                                                                        class="w-6 h-6 text-white"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-width="1.5"
                                                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                                        ></path>
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-width="1.5"
                                                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                                <div class="flex flex-row items-center space-x-px ml-4">
                                                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-12 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-6 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-5 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-3 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                                                    <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex flex-row items-center h-6 rounded-xl  w-full px-4"
                                    >

                                        <div class="flex-grow ml-4">
                                            <div class="relative w-full">
                                                <input
                                                    type="text"
                                                    name="company-website"
                                                    id="company-website"
                                                    className="block w-full border-0 flex-1 rounded-lg sm:text-sm"


                                                />
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <button
                                                class="flex items-center justify-center bg-gradient-to-r from-fuchsia-800 to-indigo-900 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                            >
                                                <span>Send</span>
                                                <span class="ml-2">
                                                    <svg
                                                        class="w-4 h-4 transform rotate-45 -mt-px"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatClient;
