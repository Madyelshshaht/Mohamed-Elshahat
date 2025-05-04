import React from "react";


const ModelDelete = ({ isOpen, message, onConfirm, onCancel }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-30  flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
            <div className="bg-white  p-6 rounded shadow-md w-11/12 max-w-md absolute top-5 ">
                <p className="sm:text-lg text-md mb-4 text-black">{message}</p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModelDelete;