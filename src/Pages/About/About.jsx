import './About.css';
import sanuda from '../../assets/SanudaPhoto.jpeg'; 
import yuthmika from '../../assets/YuthmikaPhoto.jpeg'; 
import ransaka from '../../assets/Ransakaphoto.png'; 
import chamal from '../../assets/ChamalPhoto.jpeg'; 
import verosha from '../../assets/VeroshaPhoto.jpeg'; 
import manul from '../../assets/ManulPhoto.jpeg'; 
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
    </div>
  );
}

export default About;
