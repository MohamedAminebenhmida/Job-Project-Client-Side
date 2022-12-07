import { Link } from "react-router-dom";
import "./ContactUs.css";
 function ContactUs () {
    return (
      <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <div id="contact" className="contact-area section-padding">
          <div className="container">										
            <div className="section-title text-center">
              <h1>Get in Touch</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
            </div>					
            <div className="row">
              <div className="col-lg-7">	
                <div className="contact">
                  <form className="form" name="enq" method="post" action="contact.php" >
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Name" required="required" />
                      </div>
                      <div className="form-group col-md-6">
                        <input type="email" name="email" className="form-control" placeholder="Email" required="required" />
                      </div>
                      <div className="form-group col-md-12">
                        <input type="text" name="subject" className="form-control" placeholder="Subject" required="required" />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea rows={6} name="message" className="form-control" placeholder="Your Message" required="required" defaultValue={""} />
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" value="Send message" name="submit" id="submitButton" className=" btn-contact-bg" title="Submit Your Message!"><Link to='/sent'>Send Message</Link></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>{/*- END COL */} 
              <div className="col-lg-5">
                <div className="single_address">
                  <i className="fa fa-map-marker" />
                  <h4>Our Address</h4>
                  <p>3481 Melrose Place, Beverly Hills</p>
                </div>
                <div className="single_address">
                  <i className="fa fa-envelope" />
                  <h4>Send your message</h4>
                  <p>Info@example.com</p>
                </div>
                <div className="single_address">
                  <i className="fa fa-phone" />
                  <h4>Call us on</h4>
                  <p>(+1) 517 397 7100</p>
                </div>
                <div className="single_address">
                  <i className="fa fa-clock-o" />
                  <h4>Work Time</h4>
                  <p>Mon - Fri: 08.00 - 16.00. <br />Sat: 10.00 - 14.00</p>
                </div>					
              </div>{/*- END COL */} 
            </div>{/*- END ROW */}
          </div>{/*- END CONTAINER */}	
        </div>     
        </div>
    );
  }
export default ContactUs