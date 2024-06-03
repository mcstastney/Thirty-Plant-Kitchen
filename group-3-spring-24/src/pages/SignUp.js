import SignUpForm from "../components/SignUpForm";
import './SignUp.css';

function Home() {
    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1>Join the club</h1>
                <h2>Register for free!</h2>
                <p>Become a Thirty Plant Kitchen member and curate your own personalized recipe library.</p>
                <p>Plus, get exclusive access to our plant tracker and stay on top of your 30-a-week target!</p>
                <br />
                <SignUpForm />
            </div>
        </div>
    );
}

export default Home;
