import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { toast } from "react-toastify";
import { currentUser } from "../../Redux/AuthSlice";
import axios from "axios";
import { Button, FormControl } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";


function Profile() {
    const user=useSelector((state)=> state.auth.user)
const dispatch = useDispatch();
const navigate=useNavigate();
    const [occupation,setOccupation]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState(0);
    const [mobile,setMobile]=useState(0);
    const [website,setWebsite]=useState('');
    const [github,setGithub]=useState('');
    const [twitter,setTwitter]=useState('');
    const [instagram,setInstagram]=useState('');
    const [facebook,setFacebook]=useState('');

    useEffect(()=>{
setOccupation(user?.occupation)
setAddress(user?.address)
setPhone(user?.phone)
setMobile(user?.mobile)
setWebsite(user?.website)
setGithub(user?.github)
setTwitter(user?.twitter)
setInstagram(user?.instagram)
setFacebook(user?.facebook)
},[user])
const handleEdit = async (e) => {
        e.preventDefault();
const id =user._id;
        const config = {
            headers: {
               authorization: localStorage.getItem("token"),
           },
        };
        try {
            await axios.put(`/user/${id}`, {...user,occupation,address,phone,mobile,website,github,twitter,instagram,facebook},config);
            dispatch(currentUser(),navigate);
           
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img
                                        src={
                                            user?.imageUrl
                                                ? `uploads/${user?.imageUrl}`
                                                : "https://bootdey.com/img/Content/avatar/avatar7.png"
                                        }
                                        alt="Admin"
                                        className="rounded-circle"
                                        width={150}
                                    />
                                    <div className="mt-3">
                                        {/* user name */}
                                        <h4>{user?.username} </h4>
                                        <FormControl className="text-secondary mb-1" type="text" defaultValue={user?.occupation?user?.occupation:"Student"} onChange={e=>setOccupation(e.target.value)}/>
                                            
                                        
                                        <div className="col-sm-9 text-secondary">
                                        {user?.address?user?.address:"Tunis"}
                                    </div>
                                        <div className="col-sm-12">
                                        <Button className="btn btn-info " as={Link} to="/profile"
                                        
                                        >
                                            confirm
                                        </Button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-globe mr-2 icon-inline"
                                        >
                                            <circle cx={12} cy={12} r={10} />
                                            <line
                                                x1={2}
                                                y1={12}
                                                x2={22}
                                                y2={12}
                                            />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        Website
                                    </h6>
                                    <FormControl  className="text-secondary" type="text" defaultValue={user?.website?user?.website:"visitUs.com"} onChange={e=>setWebsite(e.target.value)}/>
                                        
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github mr-2 icon-inline"
                                        >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                        </svg>
                                        Github
                                    </h6>
                                    <FormControl className="text-secondary" type="text" defaultValue={user?.github?user?.github:"github"} onChange={e=>setGithub(e.target.value)}/>
                                        
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-twitter mr-2 icon-inline text-info"
                                        >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                        </svg>
                                        Twitter
                                    </h6>
                                    <FormControl className="text-secondary" type="text" defaultValue={user?.twitter?user?.twitter:"twitter"} onChange={e=>setTwitter(e.target.value)}/>
                                        
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-instagram mr-2 icon-inline text-danger"
                                        >
                                            <rect
                                                x={2}
                                                y={2}
                                                width={20}
                                                height={20}
                                                rx={5}
                                                ry={5}
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line
                                                x1="17.5"
                                                y1="6.5"
                                                x2="17.51"
                                                y2="6.5"
                                            />
                                        </svg>
                                        Instagram
                                    </h6>
                                    <FormControl className="text-secondary" type="text" defaultValue={user?.instagram?user?.instagram:"instagram"} onChange={e=>setInstagram(e.target.value)}/>
                                        
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-facebook mr-2 icon-inline text-primary"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                        Facebook
                                    </h6>
                                    <FormControl className="text-secondary" type="text" defaultValue={user?.facebook?user?.facebook:"Facebook"} onChange={e=>setFacebook(e.target.value)}/>
                                        
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user?.username}
                                        
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {/* user Email  */}
                                        {user?.email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <FormControl className="col-sm-9 text-secondary" type="text" defaultValue={user?.phone?user?.phone:"92531907"} onChange={e=>setPhone(e.target.value)}/>
                                        
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Mobile</h6>
                                    </div>
                                    <FormControl className="col-sm-9 text-secondary" type="text" defaultValue={user?.mobile?user?.mobile:"92531907"} onChange={e=>setMobile(e.target.value)}/>
                                        
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    
                                    <FormControl  className="text-muted font-size-sm" type="text" defaultValue={user?.address?user?.address:"Tunis"} onChange={e=>setAddress(e.target.value)} />
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Button
                                            className="btn btn-info "
                                            
                                            onClick={handleEdit}
                                        >
                                            Edit
                                        </Button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row gutters-sm">
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3">
                                            <i className="material-icons text-info mr-2">
                                                assignment
                                            </i>
                                            Project Status
                                        </h6>
                                        <small>Web Design</small>
                                        <div
                                            className="progress mb-3"
                                            style={{ height: "5px" }}
                                        >
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "80%" }}
                                                aria-valuenow={80}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <small>Website Markup</small>
                                        <div
                                            className="progress mb-3"
                                            style={{ height: "5px" }}
                                        >
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "72%" }}
                                                aria-valuenow={72}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <small>One Page</small>
                                        <div
                                            className="progress mb-3"
                                            style={{ height: "5px" }}
                                        >
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "89%" }}
                                                aria-valuenow={89}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <small>Mobile Template</small>
                                        <div
                                            className="progress mb-3"
                                            style={{ height: "5px" }}
                                        >
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "55%" }}
                                                aria-valuenow={55}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <small>Backend API</small>
                                        <div
                                            className="progress mb-3"
                                            style={{ height: "5px" }}
                                        >
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "66%" }}
                                                aria-valuenow={66}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3">
                                            <i className="material-icons text-info mr-2">
                                                assignment
                                            </i>
                                            Project Status
                                        </h6>
                                        <small>Web Design</small>
                                        <div
                                            className="progress mb-3"
                                            style={{ height: "5px" }}
                                        >
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "80%" }}
                                                aria-valuenow={80}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <small>Website Markup</small>
                                        <div
                                            className="progress mb-3"
                                            style={{ height: "5px" }}
                                        >
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "72%" }}
                                                aria-valuenow={72}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <small>One Page</small>
                                        <div
                                            className="progress mb-3"
                                            style={{ height: "5px" }}
                                        >
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "89%" }}
                                                aria-valuenow={89}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <small>Mobile Template</small>
                                        <div
                                            className="progress mb-3"
                                            style={{ height: "5px" }}
                                        >
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "55%" }}
                                                aria-valuenow={55}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <small>Backend API</small>
                                        <div
                                            className="progress mb-3"
                                            style={{ height: "5px" }}
                                        >
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "66%" }}
                                                aria-valuenow={66}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;