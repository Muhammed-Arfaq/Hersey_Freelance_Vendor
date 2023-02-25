import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateModalOff } from "../../Redux/Reducer/editGigModal";
import { useNavigate } from "react-router-dom";
import { editGigData, gigData, gigsCategory } from "../../API";
import { useFormik } from "formik";
import CloseIcon from '@mui/icons-material/Close';

export default function EditGigModal() {
    const cancelButtonRef = useRef(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const show = useSelector((state) => state.editGigDetails.show)
    const data = useSelector((state) => state.editGigDetails.data)
    const [gigImage, setGigImage] = useState("");
    const [gigCategory, setGigCategory] = useState([])

    const gigId = data?._id

    const formik = useFormik({
        initialValues: {
            title: data?.title ||  "",
            overview: data?.overview || "",
            description: data?.description || "",
            price: data?.price || "",
            category: "",
            type: data?.type || "",
        },
        onSubmit: async (values) => {
            const data = {
                ...values, gigImage, gigId
            }
            console.log(data);
            editGigData(data).then(() => {
                window.location.reload(false)
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
                onClose={() => dispatch(setCreateModalOff())}
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-gray-100 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                                <div className="text-end mr-2 mt-2 text-gray-600 cursor-pointer" onClick={() => dispatch(setCreateModalOff())}
                                    ref={cancelButtonRef}>
                                    <CloseIcon />
                                </div>
                                <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="hidden sm:block" aria-hidden="true">

                                    </div>

                                    <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <form onSubmit={formik.handleSubmit} class=" grid font-mono grid-cols-12">
                                            <div className="grid col-span-12 gap-6">
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
                                                            autoComplete="address-level1"
                                                            {...formik.getFieldProps("type")}

                                                            className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                            <label class="block mt-3 text-sm font-medium text-gray-700" for="grid-state">
                                                                Categories
                                                            </label>
                                                            <div class="relative">
                                                                <select
                                                                    id="category"
                                                                    name="categoryId"
                                                                    {...formik.getFieldProps("category")}
                                                                    class="mt-5 block w-40  rounded-lg text-gray-500 border-gray-300 shadow-md border-0 sm:text-sm">
                                                                    <option className="text-xs">{data?.category?.name}</option>
                                                                    {gigCategory.map((cat) => (
                                                                        <option className="text-xs" value={cat._id}>{cat.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6">
                                                        <div class="grid grid-cols-1 space-y-2">
                                                            <label class="text-sm font-bold text-gray-500 tracking-wide">Gig Image</label>
                                                            <div class="flex items-center justify-center w-full">
                                                                <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-28 p-10 group text-center">
                                                                    <div class="h-full w-full text-center flex flex-col justify-center items-center">
                                                                        <img src={gigImage || data?.image} className="h-16 rounded-lg" />
                                                                        <p class="pointer-none text-gray-500 "><span class="text-base font-bold cursor-pointer">Upload</span> your gig image <br /></p>
                                                                    </div>
                                                                    <input type="file" class="hidden" onChange={onUpload} />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="py-3 mt-4 text-right mx-96 sm:px-32">
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center rounded-md bg-gradient-to-r from-fuchsia-800 to-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </form>
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
