import './LandPage.css'
import Slider from './LandPage-Components/Slider'
import OurServices from './LandPage-Components/OurServices'
import Team from './LandPage-Components/Team'
import Overview  from './LandPage-Components/Overview'
import Client from './LandPage-Components/Client'
import ContactUs from './LandPage-Components/ContactUs'
import Footer from './LandPage-Components/Footer'
function LandPage() {
  return (
    <div>
      <br/>
      <Slider />
      <OurServices />
      <br/>
      <Team />
      <Overview />
      <br/>
    <Client />
    <ContactUs />
    <br/>
   <Footer />
   </div>
  );
}
export default LandPage;