import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser} from "../Redux/AuthSlice";
import './Login.css'

function Login() {
 const [data,setData]=useState({email:"",password:""});
 const user = useSelector((state) => state.auth.user); 
 const dispatch=useDispatch(); 
 const navigate=useNavigate();
 const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
 }
 const handleSubmit=(e)=>{
   e.preventDefault(); 
   dispatch(loginUser(data));
 };
 useEffect(()=>{
    if (user) {
        navigate("/profile");
    }
 },[user,navigate]);
    return (
        <div>
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" rel="stylesheet" />
        <div className="container bootstrap snippets bootdey">
          <div className="container text-center">
            <form className="form-signin" data-ember-action={2} onSubmit={handleSubmit}>
              <h2 className="form-signin-heading">Sign in</h2>
              <small className="text-muted">Connect [your service] with your favorite social network</small>
              <br /><br />
              <p>
                <a className="btn btn-primary social-login-btn social-facebook" href="#/auth/facebook" style={{backgroundColor:"#4c699e",borderColor: "#47618d"}}><i className="fa fa-facebook" /></a>
                <a className="btn btn-primary social-login-btn social-twitter" href="#/auth/twitter" style={{backgroundColor:"#1daee3",borderColor: "#3997ba"}}><i className="fa fa-twitter" /></a>
              </p>
              <p>
                <a className="btn btn-primary social-login-btn social-linkedin" href="#/auth/linkedin" style={{backgroundColor:"#4875B4",borderColor: "#466b99"}}><i className="fa fa-linkedin" /></a>
                <a className="btn btn-primary social-login-btn social-google" href="#/auth/google" style={{backgroundColor:"#da573b",borderColor: "#be5238"}}><i className="fa fa-google-plus" /></a>
              </p>
              <div className="btn-group social-login-more">
                <button type="button" className="btn btn-default dropdown-toggle btn-block" data-toggle="dropdown">
                  More...
                </button>
                <ul className="dropdown-menu text-left " role="menu">
                  <li><Link to="#"><i className="fa fa-tumblr-sign" />   Tumblr</Link></li>
                  <li><Link to="#"><i className="fa fa-github-alt" />   Github</Link></li>
                  <li><Link to="#"><i className="fa fa-dropbox" />   Dropbox</Link></li>
                  <li><a href="#/auth/amazon"><span className="zocial-amazon" />   Amazon</a></li>
                  <li><Link to="#"><span className="zocial-bitbucket" />   Bitbucket</Link></li>
                  <li><Link to="#"><span className="zocial-evernote" />   Evernote</Link></li>
                  <li><Link to="#"><span className="zocial-meetup" />   Meetup</Link></li>
                  <li><Link to="#"><i className="fa fa-windows" />   Windows Live</Link></li>
                  <li><Link to="#"><i className="fa fa-weibo" />   Weibo</Link></li>
                  <li><Link to="#"><i className="fa fa-foursquare" />   Foursquare</Link></li>
                  <li><Link to="#"><i className="fa fa-stackexchange" />   Stack Exchange</Link></li>
                  <li><Link to="#"><i className="fa fa-trello" />   Trello</Link></li>
                  <li><Link to="#"><span className="zocial-wordpress" />   Wordpress</Link></li>
                </ul>
              </div>
              <br /><br />
              <small className="text-muted">Or sign in with [your service]</small>
              <br /><br />
              
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary w-100 mb-3" type="submit">
                            Login
                        </Button>
                    
              <br />
              <small className="create-account text-muted">Dont have an Account or social network account? <br /></small>
              <button id="ember363" className="ember-view btn btn-sm btn-default"> <Link to='/register'>Sign Up</Link> </button> 
            </form>
          </div>
        </div></div>
    );
}

export default Login;