import { useState, useEffect } from 'react';
import './About.css';
import Footer from '../../Components/Footer/Footer';
import sanuda from '../../assets/images/SanudaPhoto.png';
import yuthmika from '../../assets/images/YuthmikaPhoto.png';
import ransaka from '../../assets/images/RansakaPhoto.png';
import chamal from '../../assets/images/ChamalPhoto.jpeg';
import verosha from '../../assets/images/VeroshaPhoto.png';
import manul from '../../assets/images/ManulPhoto.jpeg';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';

function About() {
  const [currentDevIndex, setCurrentDevIndex] = useState(0);
  
  const developers = [
    { 
      image: chamal, 
      name: 'Chamal Wettasinghe',
      role: 'Full-Stack Developer',
      bio: 'Ensures the smooth functionality of applications across all layers of the stack.',
      github: 'https://github.com/chamal-ux',
      portfolio: 'https://www.linkedin.com/in/chamal-wettasinghe-46974b19a/?originalSubdomain=lk',
      linkedin: 'https://www.linkedin.com/in/chamal-wettasinghe-46974b19a/?originalSubdomain=lk'
    },
    { 
      image: yuthmika, 
      name: 'Yuthmika Vidana Gamage',
      role: 'Full-Stack Developer',
      bio: 'Builds both front-end and back-end components of web applications, ensuring seamless integration.',
      github: 'https://github.com/yuthmikagamage',
      portfolio: 'https://yuthmika.info',
      linkedin: 'https://www.linkedin.com/in/yuthmika-gamage-187bb4296?originalSubdomain=lk'
    },
    { 
      image: sanuda, 
      name: 'Sanuda Wijethunga',
      role: 'Full-Stack Developer',
      bio: 'Delivers end-to-end solutions, handling both client-side and server-side development.',
      github: 'https://github.com/SanudaWijethunga',
      portfolio: 'https://sanuda.info',
      linkedin: 'https://www.linkedin.com/in/sanuda-wijethunga-95b83528a/'
    },
    { 
      image: verosha, 
      name: 'Verosha Bomulla',
      role: 'Frontend Developer',
      bio: 'Ensures smooth deployment and operation of applications through automation and monitoring.',
      github: 'https://github.com/Verosha097',
      portfolio: 'https://www.linkedin.com/in/verosha-bomulla-b74277333/',
      linkedin: 'https://www.linkedin.com/in/verosha-bomulla-b74277333/'
    },
    { 
      image: ransaka, 
      name: 'Vihadu Ransaka',
      role: 'Frontend Developer',
      bio: 'Focuses on delivering intuitive and visually appealing experiences.',
      github: 'https://github.com/Ransakaz',
      portfolio: 'https://www.linkedin.com/in/vihandu-ransaka-a85016311/',
      linkedin: 'https://www.linkedin.com/in/vihandu-ransaka-a85016311/'
    },
    { 
      image: manul, 
      name: 'Manul Abeyratne',
      role: 'Mobile Developer',
      bio: 'Ensures smooth performance and a consistent experience across devices.',
      github: 'https://github.com/Tehan123456789',
      portfolio: 'https://www.linkedin.com/in/manul-abeyratne-643544337/',
      linkedin: 'https://www.linkedin.com/in/manul-abeyratne-643544337/'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevIndex((prevIndex) => (prevIndex + 1) % developers.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [developers.length]);

  return (
    <div className="aboutContainer">
      <h2 className="pageTitle">About Us</h2>

      <div className="companySection">
        <div className="companyDetails">
          <div className="missionVisionContainer">
            <div className="missionBox">
              <h2>Our Mission</h2>
              <p>
                To revolutionize apartment and housing scheme management by providing an intelligent, user-friendly
                and efficient platform that enhances residents lifestyles through seamless communication,
                smart automation, and secure community management.
              </p>
            </div>

            <div className="visionBox">
              <h2>Our Vision</h2>
              <p>
                EaseNest is committed to empowering apartment residents and management teams with a smart,
                user-friendly platform that simplifies daily operations, fosters strong community interactions, and
                ensures a secure, well-managed living environment through innovative technology and real-time
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="teamSection">
        <h2>Meet Our Team</h2>

        <div className="teamShowcase">
          <div className="featuredDeveloper">
            <div className="developerProfile">
              <div className="imageContainer">
                <img 
                  src={developers[currentDevIndex].image} 
                  alt={developers[currentDevIndex].name} 
                  className="developerImg"
                />
              </div>
              <div className="developerInfo">
                <h3>{developers[currentDevIndex].name}</h3>
                <h4>{developers[currentDevIndex].role}</h4>
                <p>{developers[currentDevIndex].bio}</p>
                <div className="developerLinks">
                  <a href={developers[currentDevIndex].github} target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                    <FaGithub className="linkIcon" />
                  </a>
                  <a href={developers[currentDevIndex].linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                    <FaLinkedin className="linkIcon" />
                  </a>
                  <a href={developers[currentDevIndex].portfolio} target="_blank" rel="noopener noreferrer" title="Portfolio Website">
                    <FaGlobe className="linkIcon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="teamSelector">
            {developers.map((developer, index) => (
              <div 
                key={index} 
                className={`teamThumbnail ${index === currentDevIndex ? 'active' : ''}`}
                onClick={() => setCurrentDevIndex(index)}
              >
                <img 
                  src={developer.image} 
                  alt={developer.name} 
                  className="thumbnailImg"
                />
                <span className="thumbnailName">{developer.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default About;