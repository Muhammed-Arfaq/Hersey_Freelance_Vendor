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
                    <div className="flex my-2">
                        <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
                            <div className="border-black/12.5 shadow-soft-2xl relative flex h-5/6 min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                    <h6 className="font-semibold text-lg">Messages</h6>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-end mt-6">  
                                        <img
                                            src={team2}
                                            alt="My profile"
                                            className="w-10 h-10 rounded-lg order-1"
                                        />
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div>
                                                <span className="mx-2 rounded-lg inline-block text-gray-600 font-semibold text-base mb-2">
                                                    Client 1 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-end">  
                                        <img
                                            src={team2}
                                            alt="My profile"
                                            className="w-10 h-10 rounded-lg order-1"
                                        />
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div>
                                                <span className="mx-2 rounded-lg inline-block text-gray-600 font-semibold text-base mb-2">
                                                    Client 1 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-end">  
                                        <img
                                            src={team2}
                                            alt="My profile"
                                            className="w-10 h-10 rounded-lg order-1"
                                        />
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div>
                                                <span className="mx-2 rounded-lg inline-block text-gray-600 font-semibold text-base mb-2">
                                                    Client 1 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="p-4">
                                    <div className="flex items-end">  
                                        <img
                                            src={team2}
                                            alt="My profile"
                                            className="w-10 h-10 rounded-lg order-1"
                                        />
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div>
                                                <span className="mx-2 rounded-lg inline-block text-gray-600 font-semibold text-base mb-2">
                                                    Client 1 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="p-4">
                                    <div className="flex items-end">  
                                        <img
                                            src={team2}
                                            alt="My profile"
                                            className="w-10 h-10 rounded-lg order-1"
                                        />
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div>
                                                <span className="mx-2 rounded-lg inline-block text-gray-600 font-semibold text-base mb-2">
                                                    Client 1 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="p-4">
                                    <div className="flex items-end">  
                                        <img
                                            src={team2}
                                            alt="My profile"
                                            className="w-10 h-10 rounded-lg order-1"
                                        />
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div>
                                                <span className="mx-2 rounded-lg inline-block text-gray-600 font-semibold text-base mb-2">
                                                    Client 1 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="p-4">
                                    <div className="flex items-end">  
                                        <img
                                            src={team2}
                                            alt="My profile"
                                            className="w-10 h-10 rounded-lg order-1"
                                        />
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div>
                                                <span className="mx-2 rounded-lg inline-block text-gray-600 font-semibold text-base mb-2">
                                                    Client 1 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="p-4">
                                    <div className="flex items-end">  
                                        <img
                                            src={team2}
                                            alt="My profile"
                                            className="w-10 h-10 rounded-lg order-1"
                                        />
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div>
                                                <span className="mx-2 rounded-lg inline-block text-gray-600 font-semibold text-base mb-2">
                                                    Client 1 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="p-4">
                                    <div className="flex items-end">  
                                        <img
                                            src={team2}
                                            alt="My profile"
                                            className="w-10 h-10 rounded-lg order-1"
                                        />
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div>
                                                <span className="mx-2 rounded-lg inline-block text-gray-600 font-semibold text-base mb-2">
                                                    Client 1 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-2xl rounded-2xl bg-clip-border overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch" style={{ width: "46rem", height:"38rem" }}>
                            <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col">
                                <div className="flex sm:items-center justify-between py-3 border-gray-200">
                                    <div className="fixed flex items-center space-x-4 mt-6 bg-white w-full h-24">
                                        <div className="relative">
                                            {/* <span className="absolute text-green-500 -right-2 -top-1">
                                            <svg width="18" height="18">
                                                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                                            </svg>
                                        </span> */}
                                            <img
                                                src={team2}
                                                alt=""
                                                className="w-10 sm:w-16 h-10 sm:h-16 rounded-xl"
                                            />
                                        </div>
                                        <div className="flex flex-col leading-tight">
                                            <div className="text-base mt-1 flex items-center">
                                                <span className="text-gray-700 mr-3">Anderson Vanhron</span>
                                            </div>
                                            <span className="text-sm text-gray-600">Junior Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="messages"
                                    className="flex flex-col space-y-4 mt-16 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                                >
                                    <div className="chat-message">
                                        <div className="flex items-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                                        Can be verified on any platform using docker
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={team2}
                                                alt="My profile"
                                                className="w-6 h-6 rounded-lg order-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end justify-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                                        Your error message says permission denied, npm global
                                                        installs must be given root privileges.
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={team1}
                                                alt="My profile"
                                                className="w-6 h-6 rounded-lg order-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                                        Command was run with root privileges. I'm sure about
                                                        that.
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                                        I've update the description so it's more obviously now
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                                        FYI https://askubuntu.com/a/700266/510172
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                                        Check the line above (it ends with a # so, I'm running
                                                        it as root )<pre># npm install -g @vue/devtools</pre>
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={team2}
                                                alt="My profile"
                                                className="w-6 h-6 rounded-lg order-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end justify-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                                        Any updates on this issue? I'm getting the same error
                                                        when trying to install devtools. Thanks
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={team1}
                                                alt="My profile"
                                                className="w-6 h-6 rounded-lg order-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                                        Thanks for your message David. I thought I'm alone with
                                                        this issue. Please, ? the issue to support it{" "}
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={team1}
                                                alt="My profile"
                                                className="w-6 h-6 rounded-lg order-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end justify-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
                                                        Are you using sudo?
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                                        Run this command sudo chown -R `whoami` /Users/

                                                        package globally without using sudo
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={team2}
                                                alt="My profile"
                                                className="w-6 h-6 rounded-lg order-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                                        It seems like you are from Mac OS world. There is no
                                                        /Users/ folder on linux ?
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                                        I have no issue with any other packages installed with
                                                        root permission globally.
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={team2}
                                                alt="My profile"
                                                className="w-6 h-6 rounded-lg order-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end justify-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                                        yes, I have a mac. I never had issues with root
                                                        permission as well, but this helped me to solve the
                                                        problem
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={team2}
                                                alt="My profile"
                                                className="w-6 h-6 rounded-lg order-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                                        I get the same error on Arch Linux (also with sudo)
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                                        I also have this issue, Here is what I was doing until
                                                        now: #1076
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                                        even i am facing
                                                    </span>
                                                </div>
                                            </div>
                                            <img
                                                src={team2}
                                                alt="My profile"
                                                className="w-6 h-6 rounded-lg order-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 pt-4 mb-2 sm:mb-0">
                                    <div className="relative flex">
                                        <input
                                            type="text"
                                            placeholder="Write your message!"
                                            className=" w-full focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-lg py-3"
                                        />
                                        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                                            >
                                                <span className="font-bold">Send</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="h-6 w-6 ml-2 transform rotate-90"
                                                >
                                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                                </svg>
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
