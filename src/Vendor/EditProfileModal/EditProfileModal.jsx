import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { switchOff } from "../../Redux/Reducer/editProfileModal";
import CloseIcon from '@mui/icons-material/Close';
import { updateVendorProfile } from "../../Api";

export default function EditProfileModal() {
    const cancelButtonRef = useRef(null);
    const dispatch = useDispatch()

    const show = useSelector((state) => state.editVendorProfile.show)
    const data = useSelector((state) => state.editVendorProfile.data)
    

    const [userName, setUserName] = useState(data?.userName || "")
    const [dob, setDob] = useState(data?.dob || "")
    const [gender, setGender] = useState(data?.gender || "")
    const [phone, setPhone] = useState(data?.phone || "")
    const [address, setAddress] = useState(data?.address?.currentAddress || "")
    const [profilePhoto, setProfilePhoto] = useState("")
    const [upiId, setUpiId] = useState(data?.upiId || "")
    const [skill, setSkill] = useState(data?.skill || "")
    const [googleDrive, setGoogleDrive] = useState(data?.googleDrive || "")
    const [github, setGithub] = useState(data?.github || "")
    const [about, setAbout] = useState(data?.about || "")
    const [linkedIn, setLinkedIn] = useState(data?.linkedIn || "")
    const [city, setCity] = useState(data?.address?.city || "")
    const [state, setState] = useState(data?.address?.state || "") 
    const [country, setCountry] = useState(data?.address?.country || "")

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

    const updateVendorDetails = () => {
        updateVendorProfile(userName, dob, gender, phone, address, profilePhoto, upiId, skill, googleDrive, github, about, linkedIn, city, state, country).then(() => {
            window.location.reload(false)
        })
    }

    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={() => dispatch(switchOff())}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-50 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-gray-100 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                                <div className="text-end mr-2 mt-2 text-gray-600 cursor-pointer" onClick={() => dispatch(switchOff())}
                                    ref={cancelButtonRef}>
                                    <CloseIcon />
                                </div>
                                <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-16 sm:pb-4">
                                    <div class=" grid font-mono grid-cols-12">
                                        <div className="grid col-span-12 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    placeholder={data?.fullName}
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
                                                    value={userName}
                                                    onChange={(e) => {
                                                        setUserName(e.target.value)
                                                    }}
                                                    autoComplete="family-name"
                                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    UPI ID
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    value={upiId}
                                                    onChange={(e) => {
                                                        setUpiId(e.target.value)
                                                    }}
                                                    autoComplete="email"
                                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Skill
                                                </label>
                                                <input
                                                    type="text"
                                                    name="country"
                                                    id="country"
                                                    value={skill}
                                                    onChange={(e) => {
                                                        setSkill(e.target.value)
                                                    }}
                                                    autoComplete="country"
                                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                                                <label htmlFor="city" className="block mt-3 text-sm font-medium text-gray-700">
                                                    Mobile
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={phone}
                                                    onChange={(e) => {
                                                        setPhone(e.target.value)
                                                    }}
                                                    id="city"
                                                    autoComplete="address-level2"
                                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                                                <label htmlFor="region" className="block mt-3 text-sm font-medium text-gray-700">
                                                    D.O.B
                                                </label>
                                                <input
                                                    type="date"
                                                    name="region"
                                                    id="region"
                                                    value={dob}
                                                    onChange={(e) => {
                                                        setDob(e.target.value)
                                                    }}
                                                    autoComplete="address-level1"
                                                    className="mt-5 block h-9 w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                                                <label htmlFor="postal-code" className="block mt-3 text-sm font-medium text-gray-700">
                                                    Gender
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    value={gender}
                                                    onChange={(e) => {
                                                        setGender(e.target.value)
                                                    }}
                                                    autoComplete="postal-code"
                                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="about" className="block mt-3 text-sm font-medium text-gray-700">
                                                    About
                                                </label>
                                                <div className="mt-4">
                                                    <textarea
                                                        id="about"
                                                        name="about"
                                                        value={about}
                                                        onChange={(e) => {
                                                            setAbout(e.target.value)
                                                        }}
                                                        rows={3}
                                                        className="mt-1 block w-full rounded-md border-0 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="about" className="block mt-3 text-sm font-medium text-gray-700">
                                                    Address
                                                </label>
                                                <div className="mt-4">
                                                    <textarea
                                                        id="about"
                                                        name="about"
                                                        value={address}
                                                        onChange={(e) => {
                                                            setAddress(e.target.value)
                                                        }}
                                                        rows={1}
                                                        className="mt-1 block w-full rounded-md border-0 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-span-6 sm:col-span-2 lg:col-span-2">
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

                                            <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                                                <label htmlFor="region" className="block mt-3 text-sm font-medium text-gray-700">
                                                    State
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

                                            <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                                                <label htmlFor="postal-code" className="block mt-3 text-sm font-medium text-gray-700">
                                                    Country
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    value={country}
                                                    onChange={(e) => {
                                                        setCountry(e.target.value)
                                                    }}
                                                    autoComplete="postal-code"
                                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Google Drive
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    value={googleDrive}
                                                    onChange={(e) => {
                                                        setGoogleDrive(e.target.value)
                                                    }}
                                                    autoComplete="given-name"
                                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    LinkedIn
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    value={linkedIn}
                                                    onChange={(e) => {
                                                        setLinkedIn(e.target.value)
                                                    }}
                                                    autoComplete="family-name"
                                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Github
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    value={github}
                                                    onChange={(e) => {
                                                        setGithub(e.target.value)
                                                    }}
                                                    autoComplete="family-name"
                                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <div class="grid grid-cols-1 space-y-2">
                                                    <label class="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                                                    <div class="flex items-center justify-center w-full">
                                                        <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-28 p-10 group text-center">
                                                            <div class="h-full w-full text-center flex flex-col justify-center items-center">
                                                                <img src={ profilePhoto || data?.profilePhoto} className="h-16 mt-1 rounded-md" />
                                                                <p class="pointer-none text-gray-500 "><span class="text-base font-bold cursor-pointer">Upload</span> your photo <br /></p>
                                                            </div>
                                                            <input type="file" class="hidden" onChange={onUpload} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="px-4 py-3 mt-4 text-right sm:px-6">
                                        <button
                                            onClick={updateVendorDetails}
                                            type="submit"
                                            className="inline-flex justify-center rounded-md bg-gradient-to-r from-fuchsia-800 to-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
