import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateSwitchOff } from "../../Redux/Reducer/gigModal";
import ImageIcon from '@mui/icons-material/Image';
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { gigData, gigsCategory } from "../../api";
import { useFormik } from "formik";

export default function GigModal() {
    const cancelButtonRef = useRef(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const show = useSelector((state) => state.showGigDetails.show)
    const [gigImage, setGigImage] = useState("");
    const [gigCategory, setGigCategory] = useState([])

    const formik = useFormik({
        initialValues: {
            title: "",
            overview: "",
            description: "",
            price: "",
            category: "",
            type: "",
        },
        onSubmit: async (values) => {
            const data = {
                ...values, gigImage
            }
            console.log(data);
            gigData(values).then((response) => {
                console.log(response);
                navigate('/vendor/postGig')
            })
        }
    })


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
        setGigImage(base64);
    };

    const gigCat = async () => {
        await gigsCategory().then((result) => {
            setGigCategory(result.data.data.categories)
        })
    }

    useEffect(() => {
        gigCat()
    }, [])


    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={() => dispatch(setCreateSwitchOff())}
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
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                                <div className="text-end mr-2 mt-2 text-gray-600 cursor-pointer" onClick={() => dispatch(setCreateSwitchOff())}
                                    ref={cancelButtonRef}>
                                    <CloseIcon />
                                </div>
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="hidden sm:block" aria-hidden="true">
                                        <div className="py-5">
                                        </div>
                                    </div>

                                    <div className="mt-10 sm:mt-0">
                                        <div className="md:grid md:grid-cols-3 md:gap-6">
                                            <div className="mt-5 md:col-span-12 md:mt-0">
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div className="overflow-hidden shadow-2xl sm:rounded-2xl">
                                                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                                            <div className="grid grid-cols-3 gap-6">
                                                                <div className="col-span-3 sm:col-span-2">
                                                                    <label htmlFor="company-website" className="block mb-3 text-sm font-medium text-gray-700">
                                                                        Title
                                                                    </label>
                                                                    <div className="mt-3 flex rounded-md shadow-sm">
                                                                        <input
                                                                            type="text"
                                                                            name="company-website"
                                                                            id="company-website"
                                                                            className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                            placeholder="Title here"
                                                                            {...formik.getFieldProps("title")}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                                    Overview
                                                                </label>
                                                                <div className="mt-3">
                                                                    <textarea
                                                                        id="about"
                                                                        name="about"
                                                                        rows={3}
                                                                        className="mt-1 block w-full rounded-md border-0 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                        placeholder="Brief overview about gig."
                                                                        {...formik.getFieldProps("overview")}

                                                                    />
                                                                </div>
                                                                <p className="mt-2 text-sm text-gray-500">
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                                    Description
                                                                </label>
                                                                <div className="mt-3">
                                                                    <textarea
                                                                        id="about"
                                                                        name="about"
                                                                        rows={3}
                                                                        className="mt-1 block w-full rounded-md border-0 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                        placeholder="Brief description about gig."
                                                                        {...formik.getFieldProps("description")}

                                                                    />
                                                                </div>
                                                                <p className="mt-2 text-sm text-gray-500">
                                                                </p>
                                                            </div>

                                                            <div className="grid grid-cols-6 gap-6">
                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="city" className="block mt-3 text-sm font-medium text-gray-700">
                                                                        Price
                                                                    </label>
                                                                    <input
                                                                        type="number"
                                                                        name="city"
                                                                        id="city"
                                                                        placeholder="Gig Value"
                                                                        autoComplete="address-level2"
                                                                        {...formik.getFieldProps("price")}

                                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="region" className="block mt-3 text-sm font-medium text-gray-700">
                                                                        Type
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="region"
                                                                        id="region"
                                                                        placeholder="Service Or Product"
                                                                        autoComplete="address-level1"
                                                                        {...formik.getFieldProps("type")}

                                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    {gigCategory.map((cat) => (
                                                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                            <label class="block mt-3 text-sm font-medium text-gray-700" for="grid-state">
                                                                                Categories
                                                                            </label>
                                                                            <div class="relative">
                                                                                <select
                                                                                    id="category"
                                                                                    name="categoryId"
                                                                                    {...formik.getFieldProps("category")}
                                                                                    class="mt-5 block w-56 rounded-lg text-gray-500 border-gray-300 shadow-md border-0 sm:text-sm">
                                                                                    <option>Select from the categories</option>
                                                                                    <option value={cat._id}>{cat.name}</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* <label htmlFor="postal-code" className="block mt-3 text-sm font-medium text-gray-700">
                                                                        Category
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="postal-code"
                                                                        id="postal-code"
                                                                        placeholder="Select Category"
                                                                        autoComplete="postal-code"
                                                                        {...formik.getFieldProps("category")}

                                                                        className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                    /> */}

                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700">Gig Image</label>
                                                                <div className="mt-3 flex items-center">
                                                                    <span className="inline-block h-12 w-12 overflow-hidden rounded-md border-0 shadow-md bg-gray-100">
                                                                        <img
                                                                            className="rounded-full w-32 h-40 object-cover sm:m-6 sm:mx-0 mx-6"
                                                                            src={<ImageIcon />}
                                                                            alt="gigImage"
                                                                        />

                                                                    </span>
                                                                    <button
                                                                        type="file"
                                                                        className="ml-5 rounded-2xl shadow-md bg-white py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                                                    >
                                                                        <label htmlFor="file-upload">Upload</label>
                                                                        <input accept="image/*"
                                                                            onChange={onUpload}
                                                                            type="file"
                                                                            name="gigImage"
                                                                            id="file-upload" className="" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                                            <button
                                                                type="submit"
                                                                className="inline-flex justify-center rounded-md bg-gradient-to-r from-slate-500 to-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm"
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
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
