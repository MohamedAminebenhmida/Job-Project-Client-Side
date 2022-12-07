import { Link } from "react-router-dom"
import './Team.css'

function Team () {
    return (
 <div>
        {/* material Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.9.55/css/materialdesignicons.min.css" integrity="sha512-vIgFb4o1CL8iMGoIF7cYiEVFrel13k/BkTGvs0hGfVnlbV6XjAA0M0oEHdWqGdAVRTDID3vIZPOHmKdrMAUChA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/*start team*/}
        <section className="section bg-team">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center mb-3">
                  <h3>A Team <span className="sub-title fw-normal">of</span> Creative and Craftwark Work </h3>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>{/*end col*/}
            </div>{/*end row*/}
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="team-box card border-0 mt-4 bg-transparent">
                  <div className="team-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQiAetyOj-tp0Qca4rg3pX7enoikRmfs-XDdZI8ZE-QAv5-5x_pAy9BJ2LLymF8yQ6Gg&usqp=CAU" alt="img1" className="img-fluid position-relative" />
                    <div className="team-social">
                      <p className="text-white f-14">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-facebook" /></Link></li>
                        <li className="list-inline-item mx-1"><Link to="#" className="social-link text-primary"><i className="mdi mdi-twitter" /></Link></li>
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-skype" /></Link></li>
                      </ul> 
                    </div>{/*end team-social*/}  
                  </div>{/*end team-img*/}
                  <div className="card-body text-center">
                    <Link to="#" className="team-name"><h6 className="mb-1 sub-title">Yasmin Bolton</h6></Link>
                    <p className="mb-0 text-muted f-15">CEO &amp; Founder</p>
                  </div>{/*end card-body*/}
                </div>{/*end team-box*/}
              </div>{/*end col*/}
              <div className="col-lg-3 col-md-6">
                <div className="team-box card border-0 mt-4 bg-transparent">
                  <div className="team-img">
                    <img src="https://media.istockphoto.com/id/1372095355/photo/shot-of-a-young-businesswoman-taking-a-break-in-her-office.jpg?b=1&s=170667a&w=0&k=20&c=jwvzWNAQV4hqlHsZA_CovAg6Vz5BS7zdaYZubx29uKw=" alt="img1" className="img-fluid" />
                    <div className="team-social">
                      <p className="text-white f-14">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-facebook" /></Link></li>
                        <li className="list-inline-item mx-1"><Link to="#" className="social-link text-primary"><i className="mdi mdi-twitter" /></Link></li>
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-skype" /></Link></li>
                      </ul> 
                    </div>{/*end team-social*/}   
                  </div>{/*end team-img*/}
                  <div className="card-body text-center">
                    <Link to="#" className="team-name"><h6 className="mb-1 sub-title">Eleanor Jones</h6></Link>
                    <p className="mb-0 text-muted f-15">Co-Founder And CEO</p>
                  </div>{/*end card-body*/}
                </div>{/*end team-box*/}
              </div>{/*end col*/}
              <div className="col-lg-3 col-md-6">
                <div className="team-box card border-0 mt-4 bg-transparent">
                  <div className="team-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzNf_nEvvSF9OHgWEK_wychTqxRO5Bzz303IrW3_Bsldqyuo1P5OwwQlmYr-5Axhlz-E&usqp=CAU" alt="img1" className="img-fluid" />
                    <div className="team-social">
                      <p className="text-white f-14">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-facebook" /></Link></li>
                        <li className="list-inline-item mx-1"><Link to="#" className="social-link text-primary"><i className="mdi mdi-twitter" /></Link></li>
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-skype" /></Link></li>
                      </ul> 
                    </div>{/*end team-social*/} 
                  </div>{/*end team-img*/}
                  <div className="card-body text-center">
                    <Link to="#" className="team-name"><h6 className="mb-1 sub-title">Sofia Noble</h6></Link>
                    <p className="mb-0 text-muted f-15">UX Designer</p>
                  </div>{/*end card-body*/}
                </div>{/*end team-box*/}
              </div>{/*end col*/}
              <div className="col-lg-3 col-md-6">
                <div className="team-box card border-0 mt-4 bg-transparent">
                  <div className="team-img">
                    <img src="http://images.assetsdelivery.com/compings_v2/opolja/opolja1512/opolja151200011.jpg" alt="img1" className="img-fluid" />
                    <div className="team-social">
                      <p className="text-white f-14">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-facebook" /></Link></li>
                        <li className="list-inline-item mx-1"><Link to="#" className="social-link text-primary"><i className="mdi mdi-twitter" /></Link></li>
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-skype" /></Link></li>
                      </ul> 
                    </div>{/*end team-social*/}    
                  </div>{/*end team-img*/}
                  <div className="card-body text-center">
                    <Link to="#" className="team-name"><h6 className="mb-1 sub-title">Scarlett Abbott</h6></Link>
                    <p className="mb-0 text-muted f-15">UI Designer</p>
                  </div>{/*end card-body*/}
                </div>{/*end team-box*/}
              </div>{/*end col*/}
              <div className="col-lg-3 col-md-6">
                <div className="team-box card border-0 mt-4 bg-transparent">
                  <div className="team-img">
                    <img src="https://img.freepik.com/premium-photo/handsome-confident-blond-bearded-businessman-with-hands-pockets-smiling-joyfully-give-professional-vibe-discussing-business-double-his-income-become-successful-white-background_1258-5820.jpg" alt="img1" className="img-fluid position-relative" />
                    <div className="team-social">
                      <p className="text-white f-14">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-facebook" /></Link></li>
                        <li className="list-inline-item mx-1"><Link to="#" className="social-link text-primary"><i className="mdi mdi-twitter" /></Link></li>
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-skype" /></Link></li>
                      </ul> 
                    </div>{/*end team-social*/} 
                  </div>{/*end team-img*/}
                  <div className="card-body text-center">
                    <Link to="#" className="team-name"><h6 className="mb-1 sub-title">Phoebe Randall</h6></Link>
                    <p className="mb-0 text-muted f-15">Back-end Developer</p>
                  </div>{/*end card-body*/}
                </div>{/*end team-box*/}
              </div>{/*end col*/}
              <div className="col-lg-3 col-md-6">
                <div className="team-box card border-0 mt-4 bg-transparent">
                  <div className="team-img">
                    <img src="https://cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg" alt="img1" className="img-fluid" />
                    <div className="team-social">
                      <p className="text-white f-14">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-facebook" /></Link></li>
                        <li className="list-inline-item mx-1"><Link to="#" className="social-link text-primary"><i className="mdi mdi-twitter" /></Link></li>
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-skype" /></Link></li>
                      </ul> 
                    </div>{/*end team-social*/}   
                  </div>{/*end team-img*/}
                  <div className="card-body text-center">
                    <Link to="#" className="team-name"><h6 className="mb-1 sub-title">Sarah Nicholson</h6></Link>
                    <p className="mb-0 text-muted f-15">Font-end Developer</p>
                  </div>{/*end card-body*/}
                </div>{/*end team-box*/}
              </div>{/*end col*/}
              <div className="col-lg-3 col-md-6">
                <div className="team-box card border-0 mt-4 bg-transparent">
                  <div className="team-img">
                    <img src="https://thumbs.dreamstime.com/b/stylish-attractive-executive-businessman-suit-standing-confidently-city-strong-powerful-handsome-african-american-modern-86822004.jpg" alt="img1" className="img-fluid" />
                    <div className="team-social">
                      <p className="text-white f-14">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-facebook" /></Link></li>
                        <li className="list-inline-item mx-1"><Link to="#" className="social-link text-primary"><i className="mdi mdi-twitter" /></Link></li>
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-skype" /></Link></li>
                      </ul> 
                    </div>{/*end team-social*/}    
                  </div>{/*end team-img*/}
                  <div className="card-body text-center">
                    <Link to="#" className="team-name"><h6 className="mb-1 sub-title">Aimee Barber</h6></Link>
                    <p className="mb-0 text-muted f-15">Product Manager</p>
                  </div>{/*end card-body*/}
                </div>{/*end team-box*/}
              </div>{/*end col*/}
              <div className="col-lg-3 col-md-6">
                <div className="team-box card border-0 mt-4 bg-transparent">
                  <div className="team-img">
                    <img src="https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.jpg?b=1&s=170667a&w=0&k=20&c=z-tvJG0r-SNUrIGwZb7YjLI9f_cOnkN30vcPafskrkQ=" alt="img1" className="img-fluid" />
                    <div className="team-social">
                      <p className="text-white f-14">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-facebook" /></Link></li>
                        <li className="list-inline-item mx-1"><Link to="#" className="social-link text-primary"><i className="mdi mdi-twitter" /></Link></li>
                        <li className="list-inline-item"><Link to="#" className="social-link text-primary"><i className="mdi mdi-skype" /></Link></li>
                      </ul> 
                    </div>{/*end team-social*/}   
                  </div>{/*end team-img*/}
                  <div className="card-body text-center">
                    <Link to="#" className="team-name"><h6 className="mb-1 sub-title">Louise Marsden</h6></Link>
                    <p className="mb-0 text-muted f-15">Product Manager</p>
                  </div>{/*end card-body*/}
                </div>{/*end team-box*/}
              </div>{/*end col*/}
              <div className="col-lg-12">
                <div className=" text-center mt-4">
                  <Link to="#" className="btn team-btn rounded-pill">Join Our Team</Link>
                </div>
              </div>{/*end col*/}
            </div>{/*end row*/}
          </div>{/*end container*/}
        </section>
        {/*start team*/}
      </div>
    )
}
    export default Team