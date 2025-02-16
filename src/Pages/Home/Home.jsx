import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar'
import vid from '../../assets/videos/home.mp4';
import startPage from '../../assets/images/startPage.png';
import HomePage from '../../assets/images/Home.png';
import visitorPass from '../../assets/images/visitorPass.png';
import Maintenance from '../../assets/images/Maintenance.png';
import '../Home/Home.css'

export default function Home(){
    return(
        <div>

            <NavBar/>
            <div className="section-1">
                <video className="background-video" autoPlay loop muted>
                    <source src={vid} type="video/mp4" />
                </video>
                <h2>Ready to Provide Revolutionarized Living Experience?</h2>
                <h2>Effortless Apartment & Housing Scheme Management at Your Fingertips</h2>
            </div>

            <div className="section-2">
                <h2>Why EaseNest ?</h2>
                <p>The perfect solution to make living in an apartment complex and housing scheme a pleasant and convenient experience - for
                the both residents and the management.</p>
                <button className='service-btn'>What you recieve</button>
            </div>

            <hr />

            <div className="section-4">
                <div className="section-4-heading">
                    <h2>What you experience ?</h2>
                    <p>With EaseNest, enjoy seamless, user-friendly management that simplifies daily tasks and enhances living experience.</p>
                </div>
                <div className="section-4-img">
                    <img src={startPage} alt="Start Page" className="start-page-img" />
                    <img src={HomePage} alt="Start Page" className="start-page-img" />
                    <img src={visitorPass} alt="Start Page" className="start-page-img" />
                    <img src={Maintenance} alt="Start Page" className="start-page-img" />
                </div>  
            </div>

            <Footer/>

        </div>
    )
}