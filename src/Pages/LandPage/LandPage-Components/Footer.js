import { Link } from "react-router-dom"
import './Footer.css'
function Footer () {
    return (
      <div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossOrigin="anonymous" />
        <footer className="footer bg-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <p className="mt-4">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
              </div>{/*end col*/}
              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Landing</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Agency</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Software</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Startup</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Business</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Hosting</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Studio</Link></li>
                </ul>
              </div>{/*end col*/}
              <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">About</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> About us</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Services</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Team</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Terms Policy</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Privacy Policy</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Login</Link></li>
                </ul>
              </div>{/*end col*/}
              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Locations</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> San Francisco</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Tokio</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> South Korea</Link></li>
                  <li><Link to='/'><i className="mdi mdi-chevron-right mr-1" /> Myanmar</Link></li>
                </ul>
              </div>{/*end col*/}
            </div>{/*end row*/}
          </div>{/*end container*/}
        </footer>
        <footer className="footer bg-footer footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-left">
                  <p className="mb-0">© 2020. Design with <i className="mdi mdi-heart text-danger" /></p>
                </div>
              </div>{/*end col*/}
              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled text-sm-right social-icon social mb-0">
                  <li className="list-inline-item"><Link to='/'><i className="mdi mdi-facebook" title="Facebook" /></Link></li>
                  <li className="list-inline-item"><Link to='/'><i className="mdi mdi-instagram" title="Instagram" /></Link></li>
                  <li className="list-inline-item"><Link to='/'><i className="mdi mdi-twitter" title="Twitter" /></Link></li>
                  <li className="list-inline-item"><Link to='/'><i className="mdi mdi-google-plus" title="Google +" /></Link></li>
                  <li className="list-inline-item"><Link to='/'><i className="mdi mdi-linkedin" title="Linkedin" /></Link></li>
                </ul>{/*end icon*/}
              </div>{/*end col*/}
            </div>{/*end row*/}
          </div>{/*end container*/}
        </footer>
      </div>
    )}

    export default Footer