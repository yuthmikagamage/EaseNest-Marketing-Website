import PropTypes from 'prop-types'; 
import './DeveloperCard.css';

function DeveloperCard({ image, name }) {
  return (
    <div className="teamMember">
      <img src={image} alt={name} className="developerImg" />
      <h3>{name}</h3>
    </div>
  );
}

DeveloperCard.propTypes = {
  image: PropTypes.string.isRequired,  
  name: PropTypes.string.isRequired    
};

export default DeveloperCard;

