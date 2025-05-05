import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaEdit } from 'react-icons/fa';
import { BsDatabaseFillAdd } from "react-icons/bs";
import { RiAddCircleLine } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";






const AddProject = ({ editMode = false, projectData = {} }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState("");
    const [deployLink, setDeployLink] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [images, setImages] = useState([]);
    // const [imagePreview, setImagePreview] = useState("");
    const [imagePreview, setImagePreview] = useState([]);

    const [canEditImage, setCanEditImage] = useState(false);



    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleAddSkill = () => {
        if (skillInput.trim()) {
            setSkills([...skills, skillInput.trim()]);
            setSkillInput("");
        }
    }

    const handleRemoveSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        images.forEach((img) => {
            formData.append("images", img);
        })
        formData.append("title", title);
        formData.append("desc", desc);
        formData.append("skills", JSON.stringify(skills));
        formData.append("deployLink", deployLink);
        formData.append("githubLink", githubLink);

        const url = editMode
            ? `https://backendportfolio-seven.vercel.app/api/editprojects/${projectData._id}`
            : "https://backendportfolio-seven.vercel.app/api/projects";

        const method = editMode ? "PUT" : "POST";


        try {
            const res = await fetch(url, {
                method,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await res.json();
            console.log("AddedData:", data)

            if (data.success) {
                // toast.success(editMode ? "Edit successfully" : "Added successfully");
                if (editMode) {
                    toast.info("Edit successfully")
                } else {
                    toast.success("Added successfully")
                }

                if (!editMode) {
                    setTitle("");
                    setDesc("");
                    setSkills([]);
                    setImages([]);
                    setDeployLink("");
                    setGithubLink("");
                    setImagePreview(null)
                }
                if (editMode) {
                    setTimeout(() => {
                        navigate("/project")
                    }, 1500);
                }
            } else {
                toast.error("Failed to add project");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error submitting project");
        }

    }


    // Edit
    useEffect(() => {
        if (editMode && projectData) {
            setTitle(projectData.title || "");
            setDesc(projectData.desc || "");
            setSkills(projectData.skills || []);
            setDeployLink(projectData.deployLink || "");
            setGithubLink(projectData.githubLink || "");
            // setImages(projectData.images[0]); 
            // لا نحمل الصور القديمة كـ File

            // Ensure projectData.images is an array and has a valid image URL
            if (projectData.images && projectData.images.length > 0) {
                // setImagePreview([projectData.images[0].url]); 
                // Assuming projectData.images[0] is a URL
                setImagePreview(projectData.images.map(img => img.url));
            } else {
                setImagePreview([]); // No image available
            }

        }
    }, [editMode, projectData]);


    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length > 0) {
            setImages(files);
            // const reader = new FileReader();
            // reader.onload = function (e) {
            //     setImagePreview(e.target.result); 
            // };
            // reader.readAsDataURL(files[0]); 


            // توليد preview لكل الصور
            const previews = files.map(file => {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (e) => resolve(e.target.result);
                    reader.readAsDataURL(file);
                });
            });

            Promise.all(previews).then(setImagePreview);
        }
    };

    return (
        <>
            <ToastContainer />
            <h1 className='text-3xl font-bold'>Add Project</h1>
            <form className='my-10 flex flex-col gap-5' onSubmit={handleSubmit}>

                <input
                    className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <input
                    className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                    type="text"
                    placeholder="description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                />

                <div className='flex flex-col  gap-2 items-center '>
                    <div className='w-[100%] flex gap-2  text-start '>
                        Skills:
                        {skills.map((s, i) =>
                            <span className='bg-green-600  px-2 flex  gap-3 relative' key={i}> {s}
                                <button
                                    type="button"
                                    className="text-red-400 hover:text-red-600 cursor-pointer  "
                                    onClick={() => handleRemoveSkill(i)}
                                >
                                    <span className='text-white absolute right-0 top-0 font-bold'><IoIosCloseCircle /></span>
                                </button>
                            </span>
                        )}

                    </div>

                    <div className='flex gap-2 items-center w-[100%]'>
                        <input
                            className="block md:w-[85%] w-[65%]  rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                            type="text"
                            placeholder="Skill"
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                        />

                        <button
                            className="rounded-md relative w-34 h-10 cursor-pointer flex items-center border border-green-600 bg-green-600 group hover:bg-green-600 active:bg-green-600 active:border-green-600 overflow-hidden"
                            type='button'
                            onClick={handleAddSkill}
                        >
                            <span
                                className="text-gray-200 font-semibold md:ml-6 ml-4 md:text-[15px] text-sm transform group-hover:translate-x-20 transition-all duration-300"
                            >Add Skill
                            </span>
                            <span
                                className="absolute right-0 h-full w-10 rounded-md bg-green-600 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
                            >
                                <RiAddCircleLine size={20} />
                            </span>
                        </button>

                    </div>
                </div>

                <div className='flex gap-2 items-center w-[100%]'>
                    <input
                        id='imageInput'
                        className={`
                                block  ${editMode ? "md:w-[85%] w-[65%] " : "w-[100%] opacity-100"}   
                                ${!canEditImage ? "cursor-not-allowed opacity-25" : "cursor-pointer opacity-100"}
                                rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400
                                focus:outline-2 focus:-outline-offset-2 focus:outline-green-600
                                transition-all duration-300 ease-in-out
                                `}
                        type="file"
                        multiple
                        onChange={handleImageChange}
                        disabled={editMode && !canEditImage}
                    // required
                    />
                    {editMode &&
                        <button
                            type="button"
                            onClick={() => setCanEditImage(!canEditImage)}
                            // className="p-2  bg-blue-500 text-white rounded  cursor-pointer"
                            className="md:w-[13%] w-[40%] p-2 text-white bg-blue-700 hover:text-blue-700 hover:bg-transparent hover:font-semibold flex gap-1 justify-center items-center cursor-pointer border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:text-white dark:border-blue-500 dark:hover:bg-transparent dark:hover:text-blue-500 dark:focus:ring-blue-900"
                        >
                            {!canEditImage ? "Edit Image" : "Cancel"}
                        </button>
                    }
                </div>

                {/* {imagePreview && !canEditImage && (
                    <img src={imagePreview} alt="Current preview" className="object-cover w-[260px] h-[170px] rounded my-2" />
                )} */}
                <div className="flex gap-2">
                    {imagePreview && imagePreview?.map((src, i) => (
                        <img key={i} src={src} alt={`preview-${i}`} className="w-32 h-32 object-cover rounded-md" />
                    ))}
                </div>


                <input
                    className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                    type="url"
                    placeholder="Link Deploy"
                    value={deployLink}
                    onChange={(e) => setDeployLink(e.target.value)}
                    required
                />

                <input
                    className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                    type="url"
                    placeholder="GitHub Link"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    required
                />

                {editMode
                    ? <div className='flex gap-3'>
                        <button type="submit"
                            className="text-white bg-blue-700 hover:text-blue-700 hover:bg-transparent hover:font-semibold flex gap-1 items-center cursor-pointer border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:text-white dark:border-blue-500 dark:hover:bg-transparent dark:hover:text-blue-500 dark:focus:ring-blue-900"

                        >
                            Edit <FaEdit size={20} />
                        </button>
                        <button
                            type="button"
                            // className=' bg-gray-600 p-2 px-5 font-bold  rounded-sm cursor-pointer '
                            className="justify-center p-2 gap-2 text-red-700 hover:text-white hover:font-semibold flex items-center cursor-pointer border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            onClick={() => navigate("/project")}
                        >
                            Cancel
                        </button>
                    </div> : <button type="submit"
                        // className=' bg-green-600 p-2 rounded-sm flex cursor-pointer justify-center items-center gap-2'
                        className="justify-center p-2 gap-2 text-green-700 hover:text-white hover:font-semibold flex items-center cursor-pointer border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
                    >
                        Add Project <span className='mt-[-3px]'><BsDatabaseFillAdd size={20} /></span>
                    </button>
                }


            </form>
        </>
    )
}

export default AddProject;