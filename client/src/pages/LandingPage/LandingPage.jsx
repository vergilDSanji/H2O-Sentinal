import React from 'react';
import './LandingPage.css';
import pipe from '../../assets/pipelines.jpeg';
import logo from '../../assets/logo.jpg';
import PlansandPricing from '../../components/PlansandPricing/PlansandPricing';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className="middle">
        <img src={logo} alt="H2O Sentinel Logo" />
      </div>
      <div className="grid-container">
        <div className="left headers">
          <h2>Farms and Agriculture</h2>
          <h1>
            Prevent Water Leakage --<br />Ensure Your Crops Thrive.
          </h1>
          <p>Discover how our solutions can help protect your crops and conserve water.</p>
          <button>Contact Us</button>
        </div>
        <div className="right">
          <img src={pipe} alt="Irrigation Pipes" />
        </div>
      </div>
      <div className="left words">
        <h1>Safeguard Against Water Leaks, Secure Crop Yields</h1>
        <p>
          Water is essential for agriculture, but when leaks occur in irrigation systems, they can cause severe damage to your crops and operations. From uneven water distribution to soil erosion and reduced crop yields, the consequences can be devastating.
        </p>
        <p>
          With <strong>H2O Sentinel</strong>, monitoring your farm's irrigation systems becomes effortless. Leaks and inefficiencies are detected early, preventing costly damage and ensuring consistent crop watering. Our solution uses advanced sensors to monitor water flows in real-time, detecting anomalies before they escalate into major issues.
        </p>
        <p>
          <strong>H2O Sentinel</strong> offers automated and remote shut-off capabilities, allowing you to react instantly to any irrigation-related problems, no matter where you are. Our cloud-based platform gives you full control and visibility, ensuring your crops receive the right amount of water at the right time.
        </p>
      </div>
      <div className="right words">
        <h1>Optimize Water Efficiency, Save Resources</h1>
        <p>
          Water is not only essential for crop growth but also a critical cost factor in farming operations. <strong>H2O Sentinel</strong> simplifies water management, making it easy to reduce water wastage and improve efficiency in irrigation systems. With <strong>H2O Sentinel</strong>, your farm can:
        </p>
        <ul>
          <li>Pinpoint areas of water waste in irrigation systems</li>
          <li>Precisely monitor water flow in real-time across different zones</li>
          <li>Access detailed reports and dashboards that provide insights into water usage and efficiency</li>
          <li>Utilize actionable insights from <strong>H2O Sentinel's</strong> advanced analytics to optimize water distribution</li>
        </ul>
        <p>
          On average, farms using <strong>H2O Sentinel</strong> reduce their water consumption by 20% to 30%, making water management more sustainable and cost-effective.
        </p>
      </div>
      <div className="buttom-part">
        <PlansandPricing />
      </div>
    </div>
  );
}

export default LandingPage;
