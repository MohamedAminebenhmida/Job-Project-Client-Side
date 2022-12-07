import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/AuthSlice";


function NavBar() {
const auth =useSelector((state)=>state.auth.auth);
const user=useSelector((state)=> state.auth.user)
const dispatch=useDispatch()
const navigate=useNavigate()
const handleLogout=()=>{
dispatch(logout())
navigate('/')
}
    return (
        <Navbar
            bg="light"
            expand="lg"
            style={{ position: "sticky", top: 0, zIndex: 1 }}
        >
            <Container fluid>
                <navbar-brand>
                    <img src="https://www.jpwebsites.com.au/wp-content/uploads/2021/02/jp-logo-draft.png" width="60" alt="" className="d-inline-block align-middle mr-2"/>
                    </navbar-brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                    </Nav>
{auth ? (
                    
                        <>
                            {" "}
                            <Link to="/post">
                                <Button variant="outline-primary">
                                    Posts
                                    </Button>
                                    
                            </Link>
                            <Link to="/">
                           <Button variant="outline-primary m-2" onClick={handleLogout}>
                                Logout
                            </Button> 
                            </Link>
                            
                            <Link to="/profile">
                                <img
                        src={`uploads/${user?.imageUrl}`}
                        alt="avatar"
                        style={{ width: "30px", borderRadius: "50%" }}
                    />

                            </Link>
                            
                        </>
               ):(     
                        <>
                            <Link to="/login">
                                <Button variant="outline-primary m-2">
                                    Login
                                </Button>
                            </Link>

                            <Link to="/register">
                                <Button variant="outline-primary">
                                    Register
                                </Button>
                            </Link>
                        </>
                   )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;