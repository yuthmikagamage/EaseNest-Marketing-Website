import './About.css';
import Footer from '../../Components/Footer/Footer';
import sanuda from '../../assets/images/SanudaPhoto.jpeg'; 
import yuthmika from '../../assets/images/YuthmikaPhoto.jpeg'; 
import ransaka from '../../assets/images/RansakaPhoto.jpeg'; 
import chamal from '../../assets/images/ChamalPhoto.jpeg'; 
import verosha from '../../assets/images/VeroshaPhoto.jpeg'; 
import manul from '../../assets/images/ManulPhoto.jpeg'; 
import DeveloperCard from '../../Components/DevCard/DeveloperCard';

function About() {
  const developers = [
    { image: sanuda, name: 'Sanuda Wijethunga' },
    { image: yuthmika, name: 'Yuthmika Vidana Gamage' },
    { image: ransaka, name: 'Vihadu Ransaka' },
    { image: chamal, name: 'Chamal Wettasinghe' },
    { image: verosha , name: 'Verosha Bomulla' },
    { image: manul, name: 'Manul Abeyratne' },
  ];

  return (
    <div className="aboutContainer">
      <div className="teamSection">
        <h2>Meet Our Team</h2>
        <p>
          Our team consists of six talented developers, each contributing their unique skills and expertise to build the best possible experience for our users.
        </p>
        
        <div className="teamMembers">
          {developers.map((developer, index) => (
            <DeveloperCard 
              key={index} 
              image={developer.image} 
              name={developer.name} 
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
