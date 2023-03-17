import React, { useEffect, useRef, useState } from "react";
import "./vendorDashboard.css";
import logo from "../../assets/img/Logo1.png";
import { Link } from "react-router-dom";
import { fetchAllOrders, getOrdersCount, vendorDasboardCount } from "../../api";
import { Chart, registerables } from "chart.js";
import { LinearScale } from 'chart.js';
import MenuIcon from '@mui/icons-material/Menu';
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import moment from "moment/moment";
Chart.register(LinearScale);
Chart.register(...registerables)

function VendorDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dataCount, setDataCount] = useState("")

  const chartRef = useRef(null)
  const [chart, setChart] = useState(null)
  const [completedOrdersData, setCompletedOrdersData] = useState([])
  const [orders, setOrders] = useState([])

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

  const renderChart = () => {

    const dates = completedOrdersData.map(dataPoint => `${dataPoint._id.day}/${dataPoint._id.month}/${dataPoint._id.year}`)

    const chartData = {
      labels: dates.map(dataPoint => dataPoint),
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


  useEffect(() => {
    fetchAllOrders().then((result) => {
      setOrders(result.data.vendorOrders)
    }).catch(() => toast.error("Internal Error"));
  }, [])


  const logout = () => {
    localStorage.clear();
  }

  const vndrDasboardCount = () => {
    vendorDasboardCount().then((result) => {
      setDataCount(result.data)
    }).catch(() => toast.error("Internal Error"));
  }

  useEffect(() => {
    vndrDasboardCount()
  }, [])


  return (
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
                  Dashboard
                </li>
              </ol>
              <h6 className="mb-0 font-bold capitalize">Dashboard</h6>
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
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-2/3">
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
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-2/3">
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
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-2/3">
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
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-2/3">
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

            <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:flex-none lg:w-2/3 lg:flex-none">
              <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                  <div className="flex flex-wrap mt-0 -mx-3">
                    <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                      <h6 className="font-mono font-bold text-lg">Earnings</h6>
                      <p className="mb-0 leading-normal text-sm">
                        <i className="fa fa-check text-cyan-500"></i>
                        <span className="ml-1 font-semibold"></span>

                      </p>
                    </div>
                  </div>
                </div>
                {completedOrdersData.length > 0 ? (
                  <canvas ref={chartRef}></canvas>
                ) : (
                  <p className="p-6 font-mono font-bold text-2xl text-center">Loading chart data...</p>
                )}
              </div>
            </div>

            {/* <!-- card 2 --> */}

            <div className="w-full max-w-full px-3 mt-10 md:flex-none lg:w-1/3 lg:flex-none">
              <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                  <h6 className="font-mono font-bold text-lg">Recent Orders</h6>
                  <p className="leading-normal text-sm">
                    <i className="fa fa-arrow-up text-lime-500"></i>
                    <span className="font-semibold"></span>
                  </p>
                </div>
                <div className="flex-auto p-4">
                  <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
                    {orders?.map((orders) => (
                      <div className="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
                        <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                          <div class="w-3.5 h-3.5 bg-gradient-to-r from-fuchsia-800 to-indigo-900 rounded-full"></div>
                        </span>
                        <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                          <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                            {orders?.title}
                          </h6>
                          <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                            {moment(orders?.date).format("lll")}
                          </p>
                        </div>
                      </div>
                    ))}
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
