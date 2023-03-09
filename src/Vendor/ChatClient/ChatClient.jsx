import React, { useEffect, useRef, useState } from "react";
import "./ChatClient.css";
import io from "socket.io-client";
import logo from "../../assets/img/Logo1.png";
import team1 from "../../assets/img/team-2.jpg";
import { connections, fetchMsg, getMsgCount, sndMsg } from "../../api";
import { Link } from "react-router-dom";

function ChatClient() {
    const vendorId = localStorage.getItem("vendorId")
    const [clients, setClients] = useState([])
    const [getCount, setGetCount] = useState([])
    const [msgCount, setMsgCount] = useState("")
    const [currentChat, setCurrentChat] = useState({});
    const [message, setMessage] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const token = localStorage.getItem("jwt");

    const socket = useRef();
    const scrolRef = useRef();


    const getConnections = async () => {
        await connections(vendorId).then((result) => {
            setClients(result.data.sortedUsers)
            setGetCount(result.data.connectionCount)
            // console.log(result.data);
        }).catch(() => toast.error("Internal Error"));
    }

    const getMessageCount = () => {
        getMsgCount(vendorId).then((result) => {
            setMsgCount(result.data.count);
        }).catch(() => toast.error("Internal Error"));
    }

    useEffect(() => {
        getMessageCount()
        getConnections()
    }, [])

    useEffect(() => {
        scrolRef.current.scrollIntoView({ behavior: "smooth" })
    })

    useEffect(() => {
        if (currentChat !== "") {
            socket.current = io.connect("https://www.herseymensformals.ml/")
            console.log(vendorId);
            socket.current.emit("addUser", vendorId);
        }
    }, [vendorId])

    const handleSelect = (user) => {
        setCurrentChat(user);
    };

    const sendmsg = async (e) => {
        e.preventDefault()
        const messages = {
            myself: true,
            message: inputMessage
        }

        socket.current.emit("send-msg", {
            to: currentChat._id,
            message: inputMessage
        });

        let token = localStorage.getItem('jwt')
        let data = {
            to: currentChat._id,
            from: vendorId,
            message: inputMessage
        }
        await sndMsg(data)
        setMessage(message.concat(messages))
        setInputMessage("")
    }

    useEffect(() => {
        if (socket.current) {
            socket.current.on("msg-receive", (msg) => {
                setArrivalMessage({ myself: false, message: msg })
            })
        }
    }, [arrivalMessage])


    useEffect(() => {
        arrivalMessage && setMessage((pre) => [...pre, arrivalMessage])
    }, [arrivalMessage])

    const checkUpdateChat = () => {
       setUpdateChat(!updateChat) 
    }
    
    useEffect(() => {
        const fetchMessages = async (vendor) => {
            if (vendor) {
                const userId = currentChat._id
                const { data } = await fetchMsg(vendorId, userId)
                setMessage(data);
            }
        };
        fetchMessages(currentChat._id);
    }, [message, currentChat._id]);

    const logout = () => {
        localStorage.clear();
    }

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
                                        Chat
                                    </li>
                                </ol>
                                <h6 className="mb-0 font-bold capitalize">Chat</h6>
                            </nav>
                        </div>
                    </nav>
                    <div class="flex h-screen antialiased text-gray-800 ">
                        <div class="flex flex-row h-full w-full overflow-x-hidden">
                            <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                                <div
                                    class="flex flex-col items-center bg-gradient-to-r from-fuchsia-800 to-indigo-900 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
                                >
                                    <div class="h-20 w-20 rounded-full border-0 overflow-hidden">
                                        <img
                                            src={currentChat?.profilePhoto || team1}
                                            alt="Avatar"
                                            class="h-20 w-20 object-cover"
                                        />
                                    </div>
                                    <div class="text-sm text-white font-semibold mt-2">{currentChat?.fullName}</div>

                                </div>
                                <div class="flex flex-col mt-8">
                                    <div class="flex flex-row items-center justify-between text-xs">
                                        <span class="font-bold text-base">Messages</span>
                                        <span
                                            class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none"
                                        >{msgCount}</span>
                                    </div>
                                    <div class="flex flex-col space-y-1 mt-5 -mx-2 h-96 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                                        {clients.map((client) => (
                                            <button
                                                key={client?._id}
                                                onClick={() => handleSelect(client)}
                                                class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                                            >
                                                <div
                                                    class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                                                >
                                                    <img src={client?.profilePhoto} className="rounded-full object-cover h-8 w-8" alt="" srcset="" />
                                                </div>
                                                <div class="ml-2 text-sm font-semibold" >{client?.fullName}</div>
                                                <div
                                                    class="flex items-center justify-center ml-auto text-xs text-white bg-gray-500 h-4 w-4 rounded leading-none"
                                                >
                                                    {getCount?.find((count) => count?.userId === client?._id)?.count || 0}
                                                </div>
                                            </button>
                                        ))}
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
                                                {message.map((msg) =>
                                                    msg.myself ? (

                                                        <div key={msg._id} class="col-start-6 col-end-13 p-3 rounded-lg">
                                                            <div class="flex items-center justify-start flex-row-reverse">
                                                                <div
                                                                    class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white flex-shrink-0"
                                                                >
                                                                    <img
                                                                        src={team1}
                                                                        alt="Avatar"
                                                                        class="h-full w-full object-cover rounded-lg"
                                                                    />
                                                                </div>
                                                                <div
                                                                    class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                                                >
                                                                    <div>{msg.message}</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ) : (
                                                        <div key={msg.message} class="col-start-1 col-end-8 p-3 rounded-lg">
                                                            <div class="flex flex-row items-center">
                                                                <div
                                                                    class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-800 to-indigo-900 text-white flex-shrink-0"
                                                                >
                                                                    <img
                                                                        src={currentChat?.profilePhoto || team1}
                                                                        alt="Avatar"
                                                                        class="h-full w-full object-cover rounded-lg"
                                                                    />
                                                                </div>
                                                                <div
                                                                    class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                                >
                                                                    <div>{msg.message}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                                <div ref={scrolRef} />
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={sendmsg}
                                        class="flex flex-row items-center h-6 rounded-xl  w-full px-4"
                                    >

                                        <div class="flex-grow ml-4">
                                            <div class="relative w-full">
                                                <input
                                                    value={inputMessage}
                                                    onChange={(e) => setInputMessage(e.target.value)}
                                                    type="text"
                                                    className="block w-full border-0 flex-1 rounded-lg sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <button type="submit" class="flex items-center justify-center bg-gradient-to-r from-fuchsia-800 to-indigo-900 rounded-xl text-white px-4 py-1 flex-shrink-0">
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
                                    </form>
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
