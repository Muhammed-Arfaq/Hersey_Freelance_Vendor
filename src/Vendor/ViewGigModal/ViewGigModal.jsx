import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { modalOff } from "../../Redux/Reducer/viewGigModal";
import CloseIcon from '@mui/icons-material/Close';
import { deleteGig } from "../../api";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

export default function ViewGigModal() {
    const cancelButtonRef = useRef(null);
    const dispatch = useDispatch()
    const show = useSelector((state) => state.viewGigDetails.show)
    const data = useSelector((state) => state.viewGigDetails.data)

    const dltGig = (gigId) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete Gig!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                deleteGig(gigId).then((result) => {
                    toast.success("Gig Deleted Successfully", {
                        autoClose: 10000,
                    })
                    window.location.reload()
                }).catch(err => console.log(err));
            }
        })
    }

    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={() => dispatch(modalOff())}
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-gray-100 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                                <div className="text-end mr-2 mt-2 text-gray-600 cursor-pointer" onClick={() => dispatch(modalOff())}
                                    ref={cancelButtonRef}>
                                    <CloseIcon />
                                </div>
                                <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                                    <div class=" grid place-items-center font-mono">

                                        <div class="border-0 rounded-md ">
                                            <div class="md:flex px-4 leading-none max-w-4xl">
                                                <div class="flex-none ">
                                                    <img
                                                        src={data?.image}
                                                        alt="pic"
                                                        class="h-72 w-56 object-cover rounded-lg shadow-2xl transform -mt-4  "
                                                    />
                                                </div>

                                                <div class="flex-col ">

                                                    <p class="pt-4 text-2xl ml-1 font-bold">{data?.title}</p>
                                                    <hr class="hr-text" data-content="" />

                                                    <p class="hidden md:block px-4 my-4 text-sm text-left"><span className="font-semibold mr-3">Overview:</span>{data?.overview}</p>

                                                    <p class="hidden md:block px-4 my-4 text-sm text-left"><span className="font-semibold mr-3">Description:</span>{data?.description}</p>

                                                    <p class="hidden md:block px-4 my-4 text-sm text-left"><span className="font-semibold mr-3">Category:</span>{data?.category?.name}</p>

                                                    <p class="hidden md:block px-4 my-4 text-sm text-left"><span className="font-semibold mr-3">Type:</span>{data?.type}</p>

                                                    <p class="hidden md:block px-4 my-4 text-sm text-left"><span className="font-semibold mr-3">Price:</span>₹{data?.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => dltGig(data?._id)}
                                            type="button"
                                            className="px-8 py-2 mb-0 font-bold uppercase transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-red-500 text-red-500 hover:border-red-500 hover:bg-transparent hover:text-red-500 hover:opacity-75 hover:shadow-none active:bg-red-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                                        >
                                            Delete Gig
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
