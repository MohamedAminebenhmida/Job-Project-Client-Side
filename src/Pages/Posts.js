import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from 'react-router-dom'
import './Posts.css'
import { Button, Form, FormControl } from "react-bootstrap";
import Select from 'react-select';



function Posts() {

  const options = [
    {
      value: "HTML",
      label: "HTML"
    },
    {
      value: "CSS",
      label: "CSS"
    },
    {
      value: "JavaScript",
      label: "JavaScript"
    },
    {
      value: "PHP",
      label: "PHP"
    },
    {
      value: "Wordpress",
      label: "Wordpress"
    },
    {
      value: "Photoshop",
      label: "Photoshop"
    }
  ];
 const [skills, setSkills] = useState([]);
 const [posts, setPosts] = useState([]);
 const [text,setText]=useState("")
 const [jobType,setJobType]=useState("")
 const [designation,setDesignation]=useState("")
 const [experience,setExperience]=useState("")
 const [gender,setGender]=useState("")
 const [offeredSalary,setOfferedSalary]=useState("")
 const [qualification,setQualification]=useState("")
 const [localisation,setLocalisation]=useState("")
 const [isActive, setIsActive] = useState(false);
 const [searchjobType,setSearchJobType]=useState("")
 const [searchSkills,setSearchSkills]=useState("")
  const [searchDesignation,setSearchDesignation]=useState("")
 const [searchExperience,setSearchExperience]=useState("")
  const [searchGender,setSearchGender]=useState("")
 const [searchSalary,setSearchSalary]=useState("")
  const [searchQualification,setSearchQualification]=useState("")
 const [search,setSearch]=useState("")
    const handleChange = (e) => {
    setSkills((Array.isArray(e) ? e.map(x => x.value) : []).toString());
  }

    const addPost = async () => {
      
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        try {
            const res = await axios.post("/post", { text,jobType,designation,experience,gender,offeredSalary,qualification,localisation,skills}, config);
            setText("");
            setJobType("");
            setDesignation("");
            setExperience("");
            setGender("");
            setOfferedSalary("");
            setQualification("");
            setLocalisation("");
            setSkills("")
            
            toast.success(res.data.msg);
            fetchPosts();
            
        } catch (error) {
            toast.error(error.message);
        }
    };
    const fetchPosts = async () => {
        try {
            const res = await axios.get("/post");
            setPosts(res.data.posts);
        } catch (error) {
            toast.error(error.message);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);
 const handleClick = () => {
  setIsActive(current => !current);
 }
  return (
     <div>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.9.95/css/materialdesignicons.css" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" integrity="sha256-mLBIhmBvigTFWPSCtvdu6a76T+3Xyt+K571hupeFLg4=" crossOrigin="anonymous" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="show-results mt-5">
                
                  
        <h2><i className="fa fa-file-o" /> Search for your dream job</h2>
        <hr />
        {/* BEGIN SEARCH INPUT */}
        <div className="input-group">
          <input type="text" className="form-control" placeholder="web development"  onChange={e=>setSearch(e.target.value)}/>
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button"><i className="fa fa-search" /></button>
          </span>
        </div>
        {/* END SEARCH INPUT */}
        <p>Showing all results matching "web development"</p>
      </div>
    </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="left-sidebar">
                <div className="accordion" id="accordionExample">
                  <div className="card mt-4">
                    <a data-toggle="collapse" href="#collapseOne" className="job-list" aria-expanded="true" aria-controls="collapseOne">
                      <div className="card-header" id="headingOne">
                        <h6 className="mb-0 text-dark f-18">Job Type</h6>
                      </div>
                    </a>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne">
                      <div className="card-body p-0">
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="All Type" onClick={e=>setSearchJobType(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheckAll" >All Type</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Freelancer" onClick={e=>setSearchJobType(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck22" > Freelancer</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Full Time" onClick={e=>setSearchJobType(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck23" >  Full Time</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Part Time" onClick={e=>setSearchJobType(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck3" > Part Time</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input"value="Internship" onClick={e=>setSearchJobType(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck4" > Internship</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-4">
                    <a data-toggle="collapse" href="#collapsetwo" className="job-list" aria-expanded="true" aria-controls="collapsetwo">
                      <div className="card-header" id="headingtwo">
                        <h6 className="mb-0 text-dark f-18">Designation</h6>
                      </div>
                    </a>
                    <div id="collapsetwo" className="collapse show" aria-labelledby="headingtwo">
                      <div className="card-body p-0">
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Project Manager" onClick={e=>setSearchDesignation(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck5" >Project Manager</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Web Designer" onClick={e=>setSearchDesignation(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck6" >Web Designer</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Banking" onClick={e=>setSearchDesignation(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck7" >Banking</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Digital" onClick={e=>setSearchDesignation(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck8" >Digital </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="IT Contractor" onClick={e=>setSearchDesignation(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck9" >IT Contractor</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Java Developer" onClick={e=>setSearchDesignation(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck10" >Java Developer</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Civil Engineer" onClick={e=>setSearchDesignation(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck11" >Civil Engineer</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input"value="CEO" onClick={e=>setSearchDesignation(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck12" >CEO</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-4">
                    <a data-toggle="collapse" href="#collapsethree" className="job-list" aria-expanded="true" aria-controls="collapsethree">
                      <div className="card-header" id="headingthree">
                        <h6 className="mb-0 text-dark f-18">Skills</h6>
                      </div>
                    </a>
                    <div id="collapsethree" className="collapse show" aria-labelledby="headingthree">
                      <div className="card-body p-0">
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="HTML" onClick={e=>setSearchSkills(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck13" >HTML</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="CSS" onClick={e=>setSearchSkills(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck14">CSS</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="JavaScript" onClick={e=>setSearchSkills(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck15">JavaScript</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="PHP" onClick={e=>setSearchSkills(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck16">PHP</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Wordpress" onClick={e=>setSearchSkills(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck17">Wordpress</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input"value="Photoshop" onClick={e=>setSearchSkills(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customCheck18">Photoshop</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-4">
                    <a data-toggle="collapse" href="#collapsefour" className="job-list" aria-expanded="true" aria-controls="collapsefour">
                      <div className="card-header" id="headingfour">
                        <h6 className="mb-0 text-dark f-18">Experience</h6>
                      </div>
                    </a>
                    <div id="collapsefour" className="collapse show" aria-labelledby="headingfour">
                      <div className="card-body p-0">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" value="1Year to 2Year" onClick={e=>setSearchExperience(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio1" >1Year to 2Year</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" value="2Year to 3Year" onClick={e=>setSearchExperience(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio2">2Year to 3Year</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" value="3Year to 4Year" onClick={e=>setSearchExperience(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio3">3Year to 4Year</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" value="4Year to 5Year" onClick={e=>setSearchExperience(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio4">4Year to 5Year</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio5" name="customRadio" className="custom-control-input"value="5Year +" onClick={e=>setSearchExperience(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio5">5Year +</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* collapse one end */}
                  <div className="card mt-4">
                    <a data-toggle="collapse" href="#collapsefive" className="job-list" aria-expanded="true" aria-controls="collapsefive">
                      <div className="card-header" id="headingfive">
                        <h6 className="mb-0 text-dark f-18">Gender</h6>
                      </div>
                    </a>
                    <div id="collapsefive" className="collapse show" aria-labelledby="headingfive">
                      <div className="card-body p-0">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Male"onClick={e=>setSearchGender(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio6" >Male</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio7" name="customRadio1" className="custom-control-input" value="Female"onClick={e=>setSearchGender(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio7">Female</label>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  {/* collapse one end */}
                  <div className="card mt-4">
                    <a data-toggle="collapse" href="#collapsesix" className="job-list collapsed" aria-expanded="false" aria-controls="collapsesix">
                      <div className="card-header" id="headingsix">
                        <h6 className="mb-0 text-dark f-18">Offered Salary</h6>
                      </div>
                    </a>
                    <div id="collapsesix" className="collapse show" aria-labelledby="headingsix">
                      <div className="card-body p-0">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio9" name="customRadio2" className="custom-control-input"value="$1k - $20k" onClick={e=>setSearchSalary(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio9" >$1k - $20k</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio10" name="customRadio2" className="custom-control-input"value="$21k - $30k" onClick={e=>setSearchSalary(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio10">$21k - $30k</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio11" name="customRadio2" className="custom-control-input" value="$31k - $40k" onClick={e=>setSearchSalary(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio11">$31k - $40k</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio12" name="customRadio2" className="custom-control-input" value="$41k - $50k" onClick={e=>setSearchSalary(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio12">$41k - $50k</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio13" name="customRadio2" className="custom-control-input" value="$51k - $60k" onClick={e=>setSearchSalary(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15" htmlFor="customRadio13">$51k - $60k</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* collapse one end */}
                  <div className="card mt-4">
                    <a data-toggle="collapse" href="#collapsesevan" className="job-list collapsed" aria-expanded="false" aria-controls="collapsesevan">
                      <div className="card-header" id="headingsevan">
                        <h6 className="mb-0 text-dark f-18">Qualification</h6>
                      </div>
                    </a>
                    <div id="collapsesevan" className="collapse show" aria-labelledby="headingsevan">
                      <div className="card-body p-0">
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Higher Secondary" onClick={e=>setSearchQualification(e.target.value)} />
                          <label className="custom-control-label ml-1 text-muted f-15"   htmlFor="customCheck19">Higher Secondary</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Bachelor Degree" onClick={e=>setSearchQualification(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15"  htmlFor="customCheck20">Bachelor Degree</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" value="Master Degree" onClick={e=>setSearchQualification(e.target.value)}/>
                          <label className="custom-control-label ml-1 text-muted f-15"   htmlFor="customCheck21">Master Degree</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="col-lg-9" >
              <div className="candidates-listing-item">
                <div className="list-grid-item mt-4 p-2">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="candidates-img float-left mr-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="img-fluid d-block rounded" />
                      </div>
                      <div className="candidates-list-desc job-single-meta  pt-2">
                        <h5 className="mb-2 f-19"><Link to="#" className="text-dark">Mary Mainor</Link></h5>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item mr-4">
                            <p className="text-muted f-15 mb-0"><FormControl className="mdi mdi-account mr-1" onChange={(e)=>setDesignation(e.target.value)} placeholder="Please enter occupation"/></p>
                          </li>
                          <li className="list-inline-item mr-4">
                            <p className="f-15 mb-0"><Link to="#" className="text-muted"><FormControl className="mdi mdi-map-marker mr-1" onChange={(e)=>setLocalisation(e.target.value)} placeholder="Please enter Localisation"/></Link></p>
                          </li>
                          <li className="list-inline-item">
                            <p className="text-muted f-15 mb-0">
                            <Form.Select size="lg" onClick={e=>setGender(e.target.value)} style={{marginTop:"20px"}}>
                              <option value="null">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Form.Select></p>
       <Form.Select size="lg" onClick={e=>setJobType(e.target.value)} style={{marginTop:"20px"}}>
                              <option value="null">Select Job Type</option>
        <option value="All Type">All Type</option>
        <option value="Freelancer">Freelancer</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Internship">Internship</option>
      </Form.Select>
      <Form.Select size="lg" onClick={e=>setQualification(e.target.value)} style={{marginTop:"20px"}}>
                              <option value="null">Select Qualification</option>
        <option value="Higher Secondary">Higher Secondary</option>
        <option value="Bachelor Degree">Bachelor Degree</option>
        <option value="Master Degree">Master Degree</option>
      </Form.Select>
      <Form.Select size="lg" onClick={e=>setExperience(e.target.value)} style={{marginTop:"20px"}}>
        <option value="null">Select Experience</option>
        <option value="1Year to 2Year">1Year to 2Year</option>
        <option value="2Year to 3Year">2Year to 3Year</option>
        <option value="3Year to 4Year">3Year to 4Year</option>
        <option value="4Year to 5Year">4Year to 5Year</option>
        <option value="5Year +">5Year +</option>
      </Form.Select>
      <Form.Select size="lg" onClick={e=>setOfferedSalary(e.target.value)} style={{marginTop:"20px",marginBottom:"20px"}}>
        <option value="null">Select Salary</option>
        <option value="$1k - $20k">$1k - $20k</option>
        <option value="$21k - $30k">$21k - $30k</option>
        <option value="$31k - $40k">$31k - $40k</option>
        <option value="$41k - $50k">$41k - $50k</option>
        <option value="$51k - $60k">$51k - $60k</option>
      </Form.Select>
                          </li>
                        </ul>
                        <Select className="dropdown" 
                         placeholder="Select Skills"   value={options.filter(obj => skills.includes(obj.value))} options={options}
                         onChange={handleChange} isMulti
        isClearable/>
                        {skills && <div style={{ marginTop: 20, lineHeight: '100px' ,transform: 'translateY(100%)'}}>
        <div> {JSON.stringify(skills, null, 2)}</div>
      </div>}
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="candidates-list-fav-btn text-right">
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-11 offset-lg-1">
                      <div className="candidates-item-desc">
                        <hr />
                        <FormControl 
                        style={{ width: "70%"}}
                type="text"
                onChange={(e) => setText(e.target.value)} placeholder="Please enter job description"
            />
                      </div>
                    </div>
                  </div>
                  <div style={{marginTop:"20px"}}>                 
                 <Link to=""> <Button style={{marginLeft:"100px"}}>create post</Button></Link>
                 <Button onClick={addPost} style={{marginLeft:"350px"}}>add post</Button>
                 </div>
                 </div>
                    </div>
                  
{posts
.filter((post) =>(post.designation?.toLowerCase().includes(search.toLowerCase().trim()))&&(post.gender?.includes(searchGender.trim()))&&(post.jobType?.includes(searchjobType.trim()))&&(post.designation?.includes(searchDesignation.trim()))&&(post.experience?.includes(searchExperience.trim()))&&(post.offeredSalary?.includes(searchSalary.trim()))&&(post.qualification?.trim().includes(searchQualification.trim()))&&(post.skills?.includes(searchSkills.trim())))
.map((post) => (
            <div className="col-lg-9" key={post._id} style={{ marginLeft:"150px"}}>
              <div className="candidates-listing-item">
                <div className="list-grid-item mt-4 p-2">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="candidates-img float-left mr-4">
                        <img src={`uploads/${post?.userId.imageUrl}`}alt="" className="img-fluid d-block rounded" />
                      </div>
                      <div className="candidates-list-desc job-single-meta  pt-2">
                        <h5 className="mb-2 f-19"><Link to="#" className="text-dark">{post?.userId.username}</Link></h5>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item mr-4">
                            <p className="text-muted f-15 mb-0"><i className="mdi mdi-account mr-1" />{post?.designation? post?.designation : "software engineer" }</p>
                          </li>
                          <li className="list-inline-item mr-4">
                            <p className="f-15 mb-0"><Link to="#" className="text-muted"><i className="mdi mdi-map-marker mr-1" />{post?.localisation? post?.localisation : "Scenic Way Atlanta ,US"}</Link></p>
                          </li>
                          <li className="list-inline-item">
                            <p className="text-muted f-15 mb-0"><i className="mdi mdi-currency-usd mr-1" />{post?.offeredSalary? post?.offeredSalary  : "$700 - $900/month"}</p>
                          </li>
                        </ul>
                        <p className="text-muted mt-1 mb-0">Skills : {post?.skills? post?.skills :"HTML, CSS, JavaScript"}</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="candidates-list-fav-btn text-right">
                        <div className="fav-icon">
                          <i className="mdi mdi-heart f-20" style={{
          WebkitTextFillColor: isActive ? '#ff4f6c' : '',
          color: isActive ? 'white' : '',
        }}
        onClick={handleClick} />
                        </div>
                        <div className="candidates-listing-btn mt-4">
                          <Link to={`PostCard/${post._id}`} className="btn btn-outline btn-sm">View Post</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-11 offset-lg-1">
                      <div className="candidates-item-desc">
                        <hr />
                        <p className="text-muted mb-2 f-14">{post.text}</p>
                      </div>
                    </div>
                  </div>
                 </div>
                    </div>
                  </div>
                  ))}
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Posts