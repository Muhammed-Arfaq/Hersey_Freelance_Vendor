import React, { useEffect, useRef, useState } from "react";
import "./vendorDashboard.css";
import logo from "../../assets/img/Logo1.png";
import { Link } from "react-router-dom";
import { getOrdersCount, vendorDasboardCount } from "../../API";
import { Chart, registerables } from "chart.js";
import { LinearScale } from 'chart.js';
Chart.register(LinearScale);
Chart.register(...registerables)

function VendorDashboard() {
  const [dataCount, setDataCount] = useState("")

  const chartRef = useRef(null)
const [chart, setChart] = useState(null)
const [completedOrdersData, setCompletedOrdersData] = useState([])

useEffect(() => {
  const fetchCompletedOrdersData = async () => {
    const response = await getOrdersCount()
    const data = response.data.completedOrders
    setCompletedOrdersData(data)
  }
  fetchCompletedOrdersData()
}, [])

useEffect(() => {
  if (chartRef.current) {
    if (chart) {
      chart.destroy()
    }
    const newChart = renderChart()
    setChart(newChart)

    return () => {
      newChart.destroy()
    }
  }
}, [completedOrdersData])

console.log(completedOrdersData.map(dataPoint => dataPoint._id))

const renderChart = () => {
  const chartData = {
    labels: completedOrdersData.map(dataPoint => dataPoint._id),
    datasets: [
      {
        label: 'Completed Orders',
        data: completedOrdersData.map(dataPoint => dataPoint.count),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        fill: true
      }
    ]
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  const newChart = new Chart(chartRef.current, {
    type: 'line',
    data: chartData,
    options: options
  })

  return newChart
} 


  // useEffect(() => {
  //   const fetchCompletedOrdersData = async () => {
  //     const response = await getOrdersCount()
  //     const data = response.data.completedOrders
  //     setCompletedOrdersData(data)
  //   }
  //   fetchCompletedOrdersData()
  // }, [])


  const logout = () => {
    localStorage.clear();
  }

  const vndrDasboardCount = () => {
    vendorDasboardCount().then((result) => {
      setDataCount(result.data)
      console.log(result);
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    vndrDasboardCount()
  }, [])


  return (
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
                      to='/vendor/login'
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
                  Dashboard
                </li>
              </ol>
              <h6 className="mb-0 font-bold capitalize">Dashboard</h6>
            </nav>
          </div>
        </nav>
        <div className="w-full mx-auto  mt-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 mt-3 font-sans font-semibold leading-normal text-sm">

                        </p>
                        <h5 className="mb-0 text-base font-mono font-bold">
                          Total Gigs
                          <span className="leading-normal ml-2 text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <p className="text-white mt-3 font-mono">{dataCount?.gigsCount || 0}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-3/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 mt-3 font-sans font-semibold leading-normal text-sm">

                        </p>
                        <h5 className="mb-0 text-base font-mono font-bold">
                          Unread Messages
                          <span className="leading-normal ml-2 text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <p className="text-white mt-3 font-mono">{dataCount?.msgCount || 0}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 mt-3 font-sans font-semibold leading-normal text-sm">

                        </p>
                        <h5 className="mb-0 text-base font-mono font-bold">
                          Total Orders
                          <span className="leading-normal ml-2 text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <p className="text-white mt-3 font-mono">{dataCount?.orderCount || 0}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-3/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 mt-3 font-sans font-semibold leading-normal text-sm">

                        </p>
                        <h5 className="mb-0 text-base font-mono font-bold">
                          Total Reviews
                          <span className="leading-normal ml-2 text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <p className="text-white mt-3 font-mono">{dataCount?.reviewCount || 0}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap my-6 -mx-3">
            {/* <!-- card 1 --> */}

            <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
              <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                  <div className="flex flex-wrap mt-0 -mx-3">
                    <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                      <h6>Projects</h6>
                      <p className="mb-0 leading-normal text-sm">
                        <i className="fa fa-check text-cyan-500"></i>
                        <span className="ml-1 font-semibold">30 done</span>
                        this month
                      </p>
                    </div>
                    <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                      <div className="relative pr-6 lg:float-right">
                        <a
                          dropdown-trigger
                          className="cursor-pointer"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-slate-400"></i>
                        </a>
                        <p className="hidden transform-dropdown-show"></p>

                        <ul
                          dropdown-menu
                          className="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']"
                        >
                          <li className="relative">
                            <a
                              className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Action
                            </a>
                          </li>
                          <li className="relative">
                            <a
                              className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Another action
                            </a>
                          </li>
                          <li className="relative">
                            <a
                              className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {completedOrdersData.length > 0 ? (
                  <canvas ref={chartRef}></canvas>
                ) : (
                  <p>Loading chart data...</p>
                )}
              </div>
            </div>

            {/* <!-- card 2 --> */}

            <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
              <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                  <h6>Orders overview</h6>
                  <p className="leading-normal text-sm">
                    <i className="fa fa-arrow-up text-lime-500"></i>
                    <span className="font-semibold">24%</span> this month
                  </p>
                </div>
                <div className="flex-auto p-4">
                  <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
                    <div className="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          $2400, Design changes
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          22 DEC 7:20 PM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-html5 leading-pro bg-gradient-to-tl from-red-600 to-rose-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          New order #1832412
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          21 DEC 11 PM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-cart leading-pro bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          Server payments for April
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          21 DEC 9:34 PM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-credit-card leading-pro bg-gradient-to-tl from-red-500 to-yellow-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          New card added for order #4395133
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          20 DEC 2:20 AM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-key-25 leading-pro bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          Unlock packages for development
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          18 DEC 4:54 AM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-0 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-money-coins leading-pro bg-gradient-to-tl from-gray-900 to-slate-800 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          New order #9583120
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          17 DEC
                        </p>
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

export default VendorDashboard;
