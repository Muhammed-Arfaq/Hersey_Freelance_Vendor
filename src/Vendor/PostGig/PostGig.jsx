import React from "react";
import "./PostGig.css";
import logo from "../../assets/img/Logo1.png";
import img1 from "../../assets/img/home-decor-1.jpg";
import img2 from "../../assets/img/home-decor-2.jpg";
import img3 from "../../assets/img/home-decor-3.jpg";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import { setCreateSwitchOn } from "../../Redux/Reducer/gigModal";
import GigModal from "../GigModal/GigModal";

function PostGig() {
  const dispatch = useDispatch()
  return (
    <div>
      <GigModal/>
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
                    Post Gig
                  </li>
                </ol>
                <h6 className="mb-0 font-bold capitalize">Post Gig</h6>
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
          <div className="w-full px-6 py-6 mx-auto mt-7">
            <div className="flex flex-wrap -mx-3 ">
              <div className="flex-none w-full max-w-full px-3 mt-6">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-2xl rounded-2xl bg-clip-border">
                  <div className="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
                    <h6 className="mb-1 font-semibold text-lg">Your Gigs</h6>                    
                  </div>
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full mt-5 max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                          <div className="relative">
                            <a className="block shadow-xl rounded-2xl">
                              <img
                                src={img1}
                                alt="img-blur-shadow"
                                className="max-w-full shadow-soft-2xl rounded-2xl"
                              />
                            </a>
                          </div>
                          <div className="flex-auto px-1 pt-6">
                            <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                              Project #2
                            </p>
                            <a href="javascript:;">
                              <h5>Modern</h5>
                            </a>
                            <p className="mb-6 leading-normal text-sm">
                              As Uber works through a huge amount of internal
                              management turmoil.
                            </p>
                            <div className="flex items-center justify-between">
                              <button
                                type="button"
                                className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                              >
                                View Gig
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full mt-5 max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                          <div className="relative">
                            <a className="block shadow-xl rounded-2xl">
                              <img
                                src={img2}
                                alt="img-blur-shadow"
                                className="max-w-full shadow-soft-2xl rounded-xl"
                              />
                            </a>
                          </div>
                          <div className="flex-auto px-1 pt-6">
                            <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                              Project #1
                            </p>
                            <a href="javascript:;">
                              <h5>Scandinavian</h5>
                            </a>
                            <p className="mb-6 leading-normal text-sm">
                              Music is something that every person has his or
                              her own specific opinion about.
                            </p>
                            <div className="flex items-center justify-between">
                              <button
                                type="button"
                                className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                              >
                                View Gig
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full mt-5 max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                          <div className="relative">
                            <a className="block shadow-xl rounded-2xl">
                              <img
                                src={img2}
                                alt="img-blur-shadow"
                                className="max-w-full shadow-soft-2xl rounded-xl"
                              />
                            </a>
                          </div>
                          <div className="flex-auto px-1 pt-6">
                            <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                              Project #1
                            </p>
                            <a href="javascript:;">
                              <h5>Scandinavian</h5>
                            </a>
                            <p className="mb-6 leading-normal text-sm">
                              Music is something that every person has his or
                              her own specific opinion about.
                            </p>
                            <div className="flex items-center justify-between">
                              <button
                                type="button"
                                className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                              >
                                View Gig
                              </button>
                            </div>
                          </div>
                        </div>
                      </div><div className="w-full mt-5 max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                          <div className="relative">
                            <a className="block shadow-xl rounded-2xl">
                              <img
                                src={img2}
                                alt="img-blur-shadow"
                                className="max-w-full shadow-soft-2xl rounded-xl"
                              />
                            </a>
                          </div>
                          <div className="flex-auto px-1 pt-6">
                            <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                              Project #1
                            </p>
                            <a href="javascript:;">
                              <h5>Scandinavian</h5>
                            </a>
                            <p className="mb-6 leading-normal text-sm">
                              Music is something that every person has his or
                              her own specific opinion about.
                            </p>
                            <div className="flex items-center justify-between">
                              <button
                                type="button"
                                className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                              >
                                View Gig
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full mt-5 max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                          <div className="relative">
                            <a className="block shadow-xl rounded-2xl">
                              <img
                                src={img3}
                                alt="img-blur-shadow"
                                className="max-w-full shadow-soft-2xl rounded-2xl"
                              />
                            </a>
                          </div>
                          <div className="flex-auto px-1 pt-6">
                            <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                              Project #3
                            </p>
                            <a href="javascript:;">
                              <h5>Minimalist</h5>
                            </a>
                            <p className="mb-6 leading-normal text-sm">
                              Different people have different taste, and various
                              types of music.
                            </p>
                            <div className="flex items-center justify-between">
                              <button
                                type="button"
                                className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                              >
                                View Gig
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full mt-5 max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                        <div className="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border">
                          <div className="flex flex-col justify-center flex-auto p-6 text-center">
                            <a href="javascript:;" className="text-slate-400"  onClick={() => dispatch(setCreateSwitchOn())}>
                              <AddIcon/>
                              <h5 className="text-slate-400">New Gig</h5>
                            </a>
                          </div>
                        </div>
                      </div>
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

export default PostGig;
