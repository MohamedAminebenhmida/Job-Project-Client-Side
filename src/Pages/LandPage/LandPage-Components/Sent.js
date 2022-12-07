import { Link } from 'react-router-dom'
import './Sent.css'

function Sent () {
    return (
   
   <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <section className="mail-seccess section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-12">
                {/* Error Inner */}
                <div className="success-inner">
                  <h1><i className="fa fa-envelope" /><span>Your Mail Sent Successfully!</span></h1>
                  <p>Aenean eget sollicitudin lorem, et pretium felis. Nullam euismod diam libero, sed dapibus leo laoreet ut. Suspendisse potenti. Phasellus urna lacus</p>
                  <Link to="/" className="btn btn-primary btn-lg">Go Home</Link>
                </div>
                {/*/ End Error Inner */}
              </div>
            </div>
          </div>
        </section>
      </div>     )}
    export default Sent