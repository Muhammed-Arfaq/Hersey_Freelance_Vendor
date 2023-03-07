import React, { useState } from "react";
import "./CompleteSignup.css";
import bg from '../../assets/img/curved0.jpg'
import team1 from '../../assets/img/team-2.jpg'
import { updateAddress, updatePersonalInfo } from "../../api";
import { VendorAddress } from "../../YupSchema/VendorAddress";
import { toast, Toaster } from "react-hot-toast";
import { VendorSkills } from "../../YupSchema/VendorSkills";


function CompleteSignup() {

    const [country, setCountry] = useState("")
    const [currentAddress, setCurrentAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    const [skill, setSkill] = useState("")
    const [googleDrive, setGoogleDrive] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    const [github, setGithub] = useState("")
    const [about, setAbout] = useState("")
    const [profilePhoto, setProfilePhoto] = useState("")
    const [errors, setErrors] = useState({})

    console.log(profilePhoto);

    const vendorId = localStorage.getItem("vendorId")

    const addressInformation = async (e) => {
        e.preventDefault()

        const formData = {
            country, currentAddress, city, state, pincode, vendorId
        }

        await VendorAddress
            .validate(formData, { abortEarly: false })
            .then(() => {
                updateAddress(country, currentAddress, city, state, pincode, vendorId).then(()=>{
                    toast.success("Address Added Successfully")
                })

            })
            .catch((validationErrors) => {
                const errors = validationErrors.inner.reduce((acc, error) => {
                    return { ...acc, [error.path]: error.message };
                }, {});

                setErrors(errors);

                Object.values(errors).forEach((error) => {
                    toast.error(error, {
                        position: "bottom-right",
                        autoClose: 10000,
                    })
                });
            });
    }

    const personalInformation = async(e) => {
        e.preventDefault()

        const data = {
            skill, googleDrive, linkedIn, github, about, profilePhoto
        }

        await VendorSkills
            .validate(data, { abortEarly: false })
            .then(() => {
                updatePersonalInfo(skill, googleDrive, linkedIn, github, about, profilePhoto, vendorId).then(() => {
                    toast.success("Personal Information Added Successfully")
                })
            })
            .catch((validationErrors) => {
                console.log(validationErrors, "dtf");
                const errors = validationErrors.inner.reduce((acc, error) => {
                    return { ...acc, [error.path]: error.message };
                }, {});

                setErrors(errors);
                console.log(errors);

                Object.values(errors).forEach((error) => {
                    toast.error(error, {
                        position: "bottom-right",
                        autoClose: 10000,
                    })
                });
            });
    }

    function converToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    const onUpload = async (e) => {
        const base64 = await converToBase64(e.target.files[0]);
        setProfilePhoto(base64);
    };

    return (
        <div>
            <div className="grid grid-cols-12">
            <Toaster/>
                <div className="col-span-12 ">
                    <div className="w-full px-6 mx-auto">
                        <div className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl">
                            <img src={bg} alt="" className="h-80" />
                            <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60"></span>
                        </div>
                        <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/100 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex-none w-auto max-w-full px-3">
                                    <div className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                        <img src={team1} alt="profile_image" className="w-full shadow-soft-sm rounded-xl" />
                                    </div>
                                </div>
                                <div className="flex-none w-auto max-w-full px-3 my-auto">
                                    <div className="h-full">
                                        <h5 className="mb-1">FullName</h5>
                                        <p className="mb-0 font-semibold leading-normal text-sm">Username</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 mt-16 mb-10 lg-max:mt-6 xl:w-full ml-16 col-span-11">
                    <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-2xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                    <h6 className="mb-0 font-bold text-xl">Remaining Procedures</h6>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="relative overflow-hidden sm:py-12 col-span-12 lg:col-span-4">
                                <div className="max-w-sm text-start mx-auto">
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                            <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                                            </svg>
                                            <div className="space-y-2">
                                                <p className="text-slate-800">Please fill out the forms below to be approved as a VENDOR. Fill out the first form with your address.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" relative overflow-hidden sm:py-12 col-span-12 lg:col-span-4">
                                <div className="max-w-sm text-start mx-auto">
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                            <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                                            </svg>
                                            <div className="space-y-2">
                                                <p className="text-slate-800">Aadhar or PAN card can be uploaded as address proof. Also include any certifications relevant to your skills.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" relative overflow-hidden sm:py-12 col-span-12 lg:col-span-4">
                                <div className="max-w-sm text-start mx-auto">
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                            <svg className="w-14 h-14 text-purple-600" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                                            </svg>
                                            <div className="space-y-2">
                                                <p className="text-slate-800">Add the files to a Google Drive and then paste the links here. Links to Github and LinkedIn profiles are recommended.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 mt-16 mb-10 lg-max:mt-6 xl:w-full ml-24 col-span-12 lg:col-span-5">
                    <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-2xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                    <h6 className="mb-0 font-bold text-lg">Permanent Address</h6>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto p-4">
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form onSubmit={addressInformation}>
                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Username
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-4">
                                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="email-address"
                                                        id="email-address"
                                                        autoComplete="email"
                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                        Country
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="country"
                                                        id="country"
                                                        value={country}
                                                        onChange={(e) => {
                                                            setCountry(e.target.value)
                                                        }}
                                                        autoComplete="country"
                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-6">
                                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                        Current Address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="street-address"
                                                        id="street-address"
                                                        value={currentAddress}
                                                        onChange={(e) => {
                                                            setCurrentAddress(e.target.value)
                                                        }}
                                                        autoComplete="street-address"
                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label htmlFor="city" className="block mt-3 text-sm font-medium text-gray-700">
                                                        City
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        value={city}
                                                        onChange={(e) => {
                                                            setCity(e.target.value)
                                                        }}
                                                        autoComplete="address-level2"
                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="region" className="block mt-3 text-sm font-medium text-gray-700">
                                                        State / Province
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="region"
                                                        id="region"
                                                        value={state}
                                                        onChange={(e) => {
                                                            setState(e.target.value)
                                                        }}
                                                        autoComplete="address-level1"
                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="postal-code" className="block mt-3 text-sm font-medium text-gray-700">
                                                        ZIP / Postal code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="postal-code"
                                                        id="postal-code"
                                                        value={pincode}
                                                        onChange={(e) => {
                                                            setPincode(e.target.value)
                                                        }}
                                                        autoComplete="postal-code"
                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:scale-105 duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 mt-16 mb-10 ml-36 lg-max:mt-6 xl:w-full col-span-12 lg:col-span-5">
                    <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-2xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                    <h6 className="mb-0 font-bold text-lg">Personal Information</h6>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto p-4">
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form onSubmit={personalInformation}>
                                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label htmlFor="company-website" className="block mb-3 text-sm font-medium text-gray-700">
                                                        Skill
                                                    </label>
                                                    <div className="mt-3 flex rounded-md shadow-sm">
                                                        <input
                                                            type="text"
                                                            name="company-website"
                                                            id="company-website"
                                                            value={skill}
                                                            onChange={(e) => {
                                                                setSkill(e.target.value)
                                                            }}
                                                            className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Enter your Skill here"
                                                        />
                                                    </div>
                                                    <label htmlFor="company-website" className="block mt-5 text-sm font-medium text-gray-700">
                                                        Proofs
                                                    </label>
                                                    <div className="mt-3 flex rounded-md shadow-sm">
                                                        <input
                                                            type="text"
                                                            name="company-website"
                                                            id="company-website"
                                                            value={googleDrive}
                                                            onChange={(e) => {
                                                                setGoogleDrive(e.target.value)
                                                            }}
                                                            className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Enter your Google Drive link here"
                                                        />
                                                    </div>
                                                    <div className="mt-3 flex rounded-md shadow-sm">
                                                        <input
                                                            type="text"
                                                            name="company-website"
                                                            id="company-website"
                                                            value={linkedIn}
                                                            onChange={(e) => {
                                                                setLinkedIn(e.target.value)
                                                            }}
                                                            className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Enter your LinkedIn link here"
                                                        />
                                                    </div>
                                                    <div className="mt-3 flex rounded-md shadow-sm">
                                                        <input
                                                            type="text"
                                                            name="company-website"
                                                            id="company-website"
                                                            value={github}
                                                            onChange={(e) => {
                                                                setGithub(e.target.value)
                                                            }}
                                                            className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Enter your Github link here"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                    About
                                                </label>
                                                <div className="mt-3">
                                                    <textarea
                                                        id="about"
                                                        name="about"
                                                        rows={3}
                                                        value={about}
                                                        onChange={(e) => {
                                                            setAbout(e.target.value)
                                                        }}
                                                        className="mt-1 block w-full rounded-md border-0 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Brief description for your profile."
                                                        defaultValue={''}
                                                    />
                                                </div>
                                                <p className="mt-2 text-sm text-gray-500">
                                                </p>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
                                                <div className="mt-3 flex items-center">
                                                    <span className="inline-block h-12 w-12 overflow-hidden rounded-md border-0 shadow-md bg-gray-100">
                                                        <img src={profilePhoto || team1} />
                                                        {/* <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </svg> */}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className="ml-5 rounded-md border-0 shadow-md border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <label htmlFor="file-upload">Upload</label>
                                                        <input onChange={onUpload} id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" px-4 py-3 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border-0 shadow-md border-transparent bg-gradient-to-r from-violet-600 to-indigo-600 hover:scale-105 duration-300 ease-in-out py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompleteSignup;
