import './App.css';
import Supervisor from './images/icon-supervisor.svg';
import Karma from './images/icon-karma.svg';
import TeamBuilder from './images/icon-team-builder.svg';
import Calculator from './images/icon-calculator.svg';
function App() {
  return (
    <div className="App">
      <div className="content-container">
        <div className="header-text">
          <h2>Reliable, efficient delivery</h2>
          <h2>Powered by Technology</h2>
          <p>
            Our Artificial Intelligence powered tools use millions of project data points 
            to ensure that your project is successful
          </p>
        </div>
        <div className="four-cards">
          <div className="card" id='supervisorCard'>
            <h3>Supervisor</h3>
            <p>Monitors activity to identify project roadblocks</p>
            <img src={Supervisor} alt="Supervisor Icon" />
          </div>
          <div className="card" id='teamBuilderCard'>
            <h3>Team Builder</h3>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img src={TeamBuilder} alt="Team Builder Icon" />
          </div>
          <div className="card" id='karmaCard'>
            <h3>Karma</h3>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src={Karma} alt="Karma Icon" />
          </div>
          <div className="card" id='calculatorCard'>
            <h3>Calculator</h3>
            <p>Uses data from past projects to provide better delivery estimates</p>
            <img src={Calculator} alt="Calculator Icon" />
          </div>
        </div>
      </div>
      <footer>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Atul Shince</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
