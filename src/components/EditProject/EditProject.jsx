import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddProject from "../AddProject/AddProject";

const EditProject = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch(`https://backendportfolio-seven.vercel.app/api/editprojects/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.success) setProject(data.project);
            });
    }, [id]);

    return project ? <AddProject editMode={true} projectData={project} /> : <div> Loading... </div>;
};

export default EditProject;
