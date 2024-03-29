import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import logo from "../../assets/img/Logo1.png";
import bg from '../../assets/img/curved0.jpg'
import team1 from '../../assets/img/team-2.jpg'
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { switchOn } from "../../Redux/Reducer/editProfileModal";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { getVendorDetails, viewVendorRatings } from "../../api";
import moment from "moment/moment";

function MyProfile() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const [value, setValue] = React.useState(2);
    const [review, setReview] = useState([])
    const dispatch = useDispatch()
    const logout = () => {
        localStorage.clear();
    }

    const [profile, setProfile] = useState("")

    const vendorProfile = async () => {
        await getVendorDetails().then((result) => {
            setProfile(result.data.data.profile);
        }).catch(() => toast.error("Internal Error"));
    }

    const viewVendorRating = async () => {
        await viewVendorRatings().then((result) => {
            setReview(result.data.data.review);
        }).catch(() => toast.error("Internal Error"));
    }

    useEffect(() => {
        vendorProfile(),
            viewVendorRating()
    }, [])

    return (
        <div>
            <EditProfileModal />
            <div className="grid xl:grid-cols-12 xs:align-middle md:p-5 sm:p-10 xs:p-10 p-10">
                <div className="xl:block hidden z-10 my-4 mx-3 col-span-3">
                    <div className="w-full max-w-full px-3 lg:w-80 lg:flex-none fixed">
                        <div className="border-black/12.5 shadow-soft-2xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                <img className="ml-7 mt-10 w-40" src={logo} alt="" />
                            </div>
                            <div className="flex-auto ">
                                <div className="">
                                    <ul className="flex flex-col pl-0 mb-0">
                                        <li className="mt-14 w-full">
                                            <Link
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                to="/vendor/dashboard"
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
                                            </Link>
                                        </li>
                                        <li className="mt-2 w-full">
                                            <Link
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                to="/vendor/postGig"
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
                                            </Link>
                                        </li>
                                        <li className="mt-2 w-full">
                                            <Link
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                to="/vendor/chat"
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
                                            </Link>
                                        </li>
                                        <li className="mt-2 w-full">
                                            <Link
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                to="/vendor/manageOrder"
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
                                            </Link>
                                        </li>
                                        <li className="mt-2 w-full">
                                            <Link
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                to="/vendor/profile"
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
                                            </Link>
                                        </li>
                                        <li className="mt-2 w-full">
                                            <Link
                                                className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                                                to='/'
                                                onClick={() => logout()}
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
                                            </Link>
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
                        className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
                        navbar-main
                        navbar-scroll="true"
                    >
                        <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                            <nav>
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
                                        My Profile
                                    </li>
                                </ol>
                                <h6 className="mb-0 font-bold capitalize">My Profile</h6>
                            </nav>
                            <div className="flex items-center grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                                <div className="flex items-center md:ml-auto md:pr-4">

                                </div>
                                <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                                    <li className="">
                                        <div className="absolute z-10">
                                            <button type="button" className="block xl:hidden mx-3 text-black" onClick={() => setMobileMenuOpen(true)} ><MenuIcon /></button>

                                            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                                                <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 xl:hidden">
                                                    <div className="flex h-9 items-center justify-between">
                                                        <div className="flex">
                                                            <a href="#" className="-m-1.5 p-1.5">
                                                                <span className="sr-only">Your Company</span>
                                                                <img
                                                                    className="h-8"
                                                                    src={logo}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="flex">
                                                            <button
                                                                type="button"
                                                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                                                onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                <span className="sr-only">Close menu</span>
                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 flow-root">
                                                        <div className="-my-6 divide-y divide-gray-500/10">
                                                            <div className="space-y-2 py-6">
                                                                <Link to="/vendor/dashboard" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                                                    Vendor Dashboard
                                                                </Link>
                                                                <Link to="/vendor/postGig" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                                                    Post Gigs
                                                                </Link>
                                                                <Link to="/vendor/chat" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                                                    Message Clients
                                                                </Link>
                                                                <Link to="/vendor/manageOrder" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                                                    Manage Orders
                                                                </Link>
                                                                <Link to="/vendor/profile" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                                                    My Profile
                                                                </Link>
                                                            </div>
                                                            <div className="py-6">
                                                                <Link
                                                                    to='/login'
                                                                    onClick={logout}
                                                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                                                                >
                                                                    Logout
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Dialog.Panel>
                                            </Dialog>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="w-full px-6 mx-auto">
                        <div className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl">
                            <img src={bg} alt="" className="h-80" />
                            <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60"></span>
                        </div>
                        <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex-none w-auto max-w-full px-3">
                                    <div className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                        <img src={profile?.profilePhoto || team1} alt="profile_image" className="w-full shadow-soft-sm rounded-xl" />
                                    </div>
                                </div>
                                <div className="flex-none w-auto max-w-full px-3 my-auto">
                                    <div className="h-full">
                                        <h5 className="mb-1">{profile?.userName}</h5>
                                        <p className="mb-0 font-semibold leading-normal text-sm">#{profile?._id}</p>
                                    </div>
                                </div>
                                <div class="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                                    <div class="relative right-0">
                                        <ul class="relative flex flex-wrap p-1 list-none bg-transparent rounded-xl" nav-pills role="tablist">
                                            <li class="z-30 flex-auto text-center">

                                            </li>
                                            <li class="z-30 flex-auto text-center">

                                            </li>
                                            <li class="z-30 lg:-mx-28 xl:-mx-36 sm:-mx-56 md:-mx-28 flex-auto text-center">
                                                <button class="flex items-center bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white px-4 py-2 rounded-lg text-sm space-x-2 transition duration-100" onClick={() => dispatch(switchOn(profile))}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                                    </svg>
                                                    <span>Edit Profile</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full mt-5 max-w-full px-3 lg-max:mt-6 xl:w-4/12">
                            <section>
                                <div class="p-5 w-full rounded-xl border-0 shadow-2xl">
                                    <h2 class="mb-0 font-bold">
                                        Profile Information
                                    </h2>
                                    <p className="mt-4"></p>
                                    <div class="mt-8 h-96 overflow-y-scroll hide-scroll-bar grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-1">
                                        <div class="flex flex-wrap ">
                                            <div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                                <h6 class="font-bold leading-tight uppercase text-xs text-slate-500">About</h6>
                                            </div>
                                            <p class="leading-normal mt-2 text-sm p-4">{profile?.about}</p>

                                            <ul class="flex flex-col mt-2 pl-0 rounded-lg">
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"><strong class="text-slate-600">Full Name:</strong> &nbsp; {profile?.fullName}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"><strong class="text-slate-600">Username:</strong> &nbsp; {profile?.userName}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">Email:</strong> &nbsp; {profile?.email}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">Gender:</strong> &nbsp; {profile?.gender}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">UPI ID:</strong> &nbsp; {profile?.upiId}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">D.O.B:</strong> &nbsp; {moment(profile?.dob).format("ll")}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">Mobile:</strong> &nbsp; {profile?.phone}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="w-full mt-5 max-w-full px-3 lg-max:mt-6 xl:w-4/12">
                            <section>
                                <div class="p-5 w-full rounded-xl border-0 shadow-2xl">
                                    <h2 class="mb-0 font-bold">
                                        Current Address
                                    </h2>

                                    <div class="flex items-center">
                                        <p class="text-2xl font-medium">

                                        </p>
                                        <p className="ml-3">

                                        </p>
                                    </div>

                                    <div class="mt-8 h-96 overflow-y-scroll hide-scroll-bar grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-1">
                                        <div class="flex flex-wrap ">
                                            <div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                                <h6 class="mb-0 font-bold"></h6>
                                            </div>
                                            <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                                                <li class="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"><strong class="text-slate-600">Address:</strong> &nbsp; {profile?.address?.currentAddress}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">City:</strong> &nbsp; {profile?.address?.city}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">State:</strong> &nbsp; {profile?.address?.state}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">Country:</strong> &nbsp; {profile?.address?.country}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">Pincode:</strong> &nbsp; {profile?.address?.pincode}</li>
                                            </ul>
                                            <div class="flex mt-4 items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                                <h6 class="mb-0 font-bold">Professional Details</h6>
                                            </div>
                                            <ul class="flex mt-4 flex-col pl-0 mb-2 rounded-lg">
                                                <li class="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"><strong class="text-slate-600">Skill:</strong> &nbsp; {profile?.skill}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">Google Drive:</strong> &nbsp; {profile?.googleDrive}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">Github:</strong> &nbsp; {profile?.github}</li>
                                                <li class="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong class="text-slate-600">LinkedIn:</strong> &nbsp; {profile?.linkedIn}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="w-full mt-5 max-w-full px-3 lg-max:mt-6 xl:w-4/12 mb-4">
                            <section>
                                <div class="p-5 w-full rounded-xl border-0 shadow-2xl">
                                    <h2 class="mb-0 font-bold">
                                        Customer Reviews
                                    </h2>
                                    <div class="mt-8 h-96 overflow-y-scroll hide-scroll-bar grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-1">
                                        {review?.length != 0 ? review.map((review) => (
                                            <blockquote>
                                                <header class="sm:flex sm:items-center">
                                                    <div class="flex items-center space-x-2">
                                                        <img
                                                            class="w-8 rounded-full"
                                                            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                                                            alt="sara"
                                                        />
                                                        <h2 class="text-gray-800 font-bold">
                                                            {review?.userId?.fullName}
                                                        </h2>
                                                    </div>
                                                    <p className="ml-2 mr-2">|</p>
                                                    <Rating
                                                        sx={{ height: "1%", width: "1%" }}
                                                        name="read-only"
                                                        value={review?.rating}
                                                        readOnly
                                                    />
                                                </header>
                                                <p class="mt-2 font-medium sm:mt-3">
                                                    {review?.title}
                                                </p>

                                                <p class="mt-2 text-gray-700">
                                                    {review?.description}
                                                </p>

                                                <footer class="mt-4">
                                                    <p class="text-xs text-gray-500">

                                                        {review?.userId?.fullName} - {moment(review?.date).format("lll")}
                                                    </p>
                                                </footer>
                                            </blockquote>
                                        ))
                                            :
                                            <h1 className="font-mono font-bold text-2xl flex justify-center mt-1">No Customer Reviews Yet!!!!</h1>
                                        }
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
