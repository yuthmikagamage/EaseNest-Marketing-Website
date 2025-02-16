import PropTypes from "prop-types";
import '../../Components/ServiceCard/ServiceCard.css';

export default function ServiceCard({ title, description }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
