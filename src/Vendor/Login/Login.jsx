import React from "react";
import github from "../../assets/img/github.svg";
import google from "../../assets/img/google.svg";
import bg2 from "../../assets/img/wlppr1.jpg";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/img/Logo1.png";
import { Link, useNavigate } from "react-router-dom";
import  {login}  from '../../api';
import toast, { Toaster } from "react-hot-toast";
import { vendorLogin } from "../../YupSchema/VendorLogin";

export default function VendorLogin() {
  const navigate = useNavigate()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")  
  const [errors, setErrors] = useState({})

  const eventHandler = async(e) => {
    e.preventDefault()
    const data = {
      email, password
    }

    await vendorLogin
      .validate(data, { abortEarly: false })
      .then(() => {
        login(data).then((result) => {
          if(result.data.status == "Success") {
            localStorage.setItem("jwt", result.data?.token)
            localStorage.setItem( "vendorId", result.data?.data?.user?._id )
            localStorage.setItem( "userName", result.data?.data?.user?.userName )
            localStorage.setItem( "email", result.data?.data?.user?.email )
            toast.success("Login Successful")
            navigate('/vendor/Dashboard')
          } else {
            toast.error("Wrong Email or Password")
          }
        })
      })
      .catch((validationErrors) => {
        const errors = validationErrors.inner.reduce((acc, error) => {
          return { ...acc, [error.path]: error.message };
        }, {});

        setErrors(errors);
        // console.log(errors);

        Object.values(errors).forEach((error) => {
          toast.error(error, {
            position: "bottom-right",
            autoClose: 10000,
          })
        });
      });
  }

  return (
    <>
      <div className="relative z-10 px-6 pt-4 pb-4 lg:px-8">
      <Toaster />
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="https://herseyfreelance-user.netlify.app/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src={logo} alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <Link
                to="/vendor/signup"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-300 shadow-sm ring-1 ring-gray-900/20 hover:ring-gray-700 hover:text-gray-400"
              >
                Signup
              </Link>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8" src={logo} alt="" />
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
                    
                  </div>
                  <div className="py-6">
                    <Link
                      to="/vendor/signup"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Signup
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <section className="relative w-full h-full py-16">
        <div className="absolute -top-20 w-full h-full bg-no-repeat ">
          <img
            className="w-full"
            style={{ height: "123%" }}
            src={bg2}
            alt=""
          />
        </div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 bg-gray-50 bg-opacity-50 backdrop-blur">
                <div className="rounded-t mb-0 px-6 py-6">
                  {/* <div className="text-center mb-3">
                    <h6 className="text-blueGray-700 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img alt="..." className="w-5 mr-1" src={github} />
                      Github
                    </button>
                    <button
                      className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img alt="..." className="w-5 mr-1" src={google} />
                      Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-600 text-center mb-3 font-bold">
                    <small>Sign in with credentials</small>
                  </div>
                  <form onSubmit={eventHandler}>
                    <div className="relative w-full mb-3 mt-10">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 mt-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mt-4 uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-0 mt-4 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>{
                          setPassword(e.target.value)
                        }}
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        {/* <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          Remember me
                        </span> */}
                      </label>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-400"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <div className="text-blueGray-400">
                  <small>Create new account</small>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
