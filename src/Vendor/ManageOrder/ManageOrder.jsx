import React, { useEffect, useState } from "react";
import "./ManageOrder.css";
import './paginate.css'
import logo from "../../assets/img/Logo1.png";
import { Link } from "react-router-dom";
import { cancelUserOrder, completeUserOrder, getReservedGigs } from "../../api";
import { useDispatch } from "react-redux";
import OrderViewModal from "../OrderViewModal/OrderViewModal";
import { orderModalOn } from "../../Redux/Reducer/viewOrderModal";
import { toast } from "react-hot-toast";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import moment from "moment/moment";

function ManageOrder() {

    const dispatch = useDispatch()

    const logout = () => {
        localStorage.clear();
    }
    const token = localStorage.getItem("jwt")
    const [orders, setOrders] = useState([])

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const searchData = (tempProduct) => {
        return search === ""
            ? tempProduct
            : tempProduct.title.toLowerCase().includes(search)
    };

    const dataToRender = orders.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const reservedGigs = async () => {
        await getReservedGigs().then((result) => {
            setOrders(result.data.data.reserved);
        }).catch(() => toast.error("Internal Error"));
    }

    const cancelGig = (orderId) => {
        cancelUserOrder(orderId, token).then(() => {
            window.location.reload(false)
        }).catch(() => toast.error("Internal Error"));
    }

    const completeGig = (orderId) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Order Completed!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                completeUserOrder(orderId, token).then(() => {
                    toast.success("Gig Completed")
                    window.location.reload(false)
                }).catch(() => toast.error("Internal Error"));
            }
        })
    }

    useEffect(() => {
        reservedGigs()
    }, [])


    return (
        <div>
            <OrderViewModal />
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
                                        Manage Order
                                    </li>
                                </ol>
                                <h6 className="mb-0 font-bold capitalize">Manage Order</h6>
                            </nav>
                        </div>
                    </nav>
                    <div className="w-full px-6 py-6 mx-auto mt-7">

                        <div className="flex flex-wrap -mx-3 ">
                            <div className="flex-none w-full max-w-full px-3">
                                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-2xl rounded-2xl bg-clip-border">
                                    <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                        <h6 className="font-semibold">Order Management</h6>
                                    </div>
                                    <div className="flex-auto px-0 pt-0 pb-2">
                                        <div className="p-0 overflow-x-auto">
                                            <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                                <thead className="align-bottom">
                                                    <tr>
                                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Order_ID</th>
                                                        <th className="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Order Date</th>
                                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Amount</th>
                                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {dataToRender.map((orders) => (
                                                        <tr>
                                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                                <div className="flex px-2 py-1 justify-center">
                                                                    <div className="flex flex-col justify-center">
                                                                        <h6 className="mb-0 leading-normal text-sm cursor-pointer" onClick={() => dispatch(orderModalOn(orders))}>#{orders?._id}</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                                <p className="mb-0 font-semibold leading-tight text-center text-xs">{moment(orders?.date).format("lll")}</p>
                                                            </td>
                                                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                                <span className="font-semibold leading-tight text-xs text-slate-400">₹{orders?.gigId?.price}</span>
                                                            </td>
                                                            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                                <span className="font-semibold leading-tight text-base">{orders?.status}</span>
                                                            </td>
                                                            <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                                {orders?.status == 'Cancelled' ?
                                                                    <button><span className="bg-gradient-to-tl from-red-600 to-red-400 px-3 text-xs rounded-lg py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white ">Cancelled</span></button>
                                                                    :
                                                                    <button ><span className="bg-gradient-to-r from-emerald-500 to-emerald-900 px-3 text-xs rounded-lg py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white" onClick={() => completeGig(orders?._id)}>Complete</span></button>
                                                                }
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <ReactPaginate
                                            pageCount={Math.ceil(orders.filter(searchData).length / itemsPerPage)}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={handlePageChange}
                                            containerClassName="pagination"
                                            activeClassName="active"
                                            previousLabel="Previous"
                                            nextLabel="Next"
                                            pageLinkClassName="page-link"
                                            previousLinkClassName="page-link"
                                            nextLinkClassName="page-link"
                                            disabledClassName="disabled"
                                        />
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

export default ManageOrder;
