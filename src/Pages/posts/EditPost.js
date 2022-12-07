import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { currentPost } from "../../Redux/AuthSlice";



const EditPost = () => {
 const post=useSelector((state)=> state.post)    
 const dispatch = useDispatch();
const navigate=useNavigate();
const [skills, setSkills] = useState([]);
 const [text,setText]=useState("")
 const [jobType,setJobType]=useState("")
 const [designation,setDesignation]=useState("")
 const [experience,setExperience]=useState("")
 const [gender,setGender]=useState("")
 const [offeredSalary,setOfferedSalary]=useState("")
 const [qualification,setQualification]=useState("")
 const [localisation,setLocalisation]=useState("")
 useEffect(()=>{
setSkills(post?.skills)
setText(post?.text)
setJobType(post?.jobType)
setDesignation(post?.designation)
setExperience(post?.experience)
setGender(post?.gender)
setOfferedSalary(post?.offeredSalary)
setQualification(post?.qualification)
setLocalisation(post?.localisation)
},[post])  
const handleEdit = async (e) => {
        e.preventDefault();
const id =post._id;
        const config = {
            headers: {
               authorization: localStorage.getItem("token"),
           },
        };
        try {
            await axios.put(`/post/${id}`, {...post,skills,text,jobType,designation,experience,gender,offeredSalary,qualification,localisation},config);
            dispatch(currentPost(),navigate);
           
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <div className="col-lg-9" >
             
                  </div>
    );
};

export default EditPost;