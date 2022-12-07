import './Client.css'
import logo1 from './images/logo-1.svg';
import logo2 from './images/logo-2.svg';
import logo3 from './images/logo-3.svg';
import logo4 from './images/logo-4.svg';
import logo5 from './images/logo-5.svg';

function Client () {
    return (
        <div>
        {/*Tiny Slider CSS*/}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.min.css" integrity="sha512-06CZo7raVnbbD3BlY8/hGUoUCuhk8sTdVGV3m3nuh9i2R+UmkLbLRTE/My8TuJ3ALbDulhBObJQWtOUt0mXzNQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/*start client*/}
        <section className="bg-client d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="client-heading text-center">
                  <h2 className="client-title position-relative">Clients Who Trust Us</h2>
                  <p className="text-muted my-4">Phasellus lacinia velit suscipit, tristique erat in, mollis lectus.
                    Suspendisse potenti. Nam ornare eu velit sit amet condimentum.</p>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-12">
                <div className="client-slider mt-3">
                  <div>
                    <div className="client-logo text-center">
                      <img src={logo1} alt="logo-1" className="img-fluid" />
                    </div>
                  </div>
                  <div>
                    <div className="client-logo text-center">
                      <img src={logo2} alt="logo-2" className="img-fluid" />
                    </div>
                  </div>
                  <div>
                    <div className="client-logo text-center">
                      <img src={logo3} alt="logo-3" className="img-fluid" />
                    </div>
                  </div>
                  <div>
                    <div className="client-logo text-center">
                      <img src={logo4} alt="logo-3" className="img-fluid" />
                    </div>
                  </div>
                  <div>
                    <div className="client-logo text-center">
                      <img src={logo5} alt="logo-5" className="img-fluid" />
                    </div>
                  </div>
                  <div>
                  </div>
                </div>{/*end client-slider*/}
              </div>{/*end col*/}
            </div>{/*end row*/}
          </div>{/*end container*/}
        </section>
        {/*end client*/}
      </div>
    )
}
    export default Client