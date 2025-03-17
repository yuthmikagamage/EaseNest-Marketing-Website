import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import '../Services/Services.css';

function Services(){
    return(
        <div>
            <NavBar />
            <div className="head">
                <h2>What We Provide?</h2>
            </div>
            <div className="services">
                <div className="services-container">
                    <ServiceCard
                        title="Seamless Security Check-In"
                        description="Allow your residents’ friends and visitors inside effortlessly, saving time and ensuring a hassle-free experience."
                    />
                    <ServiceCard
                        title="Live Pool & Gym Usage Count"
                        description="Instantly check how many residents are using common facilities before heading over."
                    />
                    <ServiceCard
                        title="Effortless Maintenance & Complaints"
                        description="Your residents can submit requests in seconds and receive quick assistance from the management team."
                    />
                    <ServiceCard
                        title="Hassle-Free Common Area Booking"
                        description="Let your residents reserve their favorite venue easily and enjoy quality time with friends and family."
                    />
                    <ServiceCard
                        title="Monthly Activity Reports"
                        description="Your residents get a clear summary of their activities and interactions in one convenient place."
                    />
                    <ServiceCard
                        title="Community Hub"
                        description="Enable your residents to connect with neighbors, engage in discussions, and build a stronger community."
                    />
                    <ServiceCard
                        title="Payment facilities"
                        description="Residents can conveniently upload their rent, maintenance fees, and other charges securely through the app, with instant transaction history tracking."
                    />
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Services;