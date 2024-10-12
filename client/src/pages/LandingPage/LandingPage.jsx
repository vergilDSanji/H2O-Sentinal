import React from 'react';
import './LandingPage.css'
import pipe from '../../assets/pipelines.jpg';
import logo from '../../assets/logo.jpg';
import PlansandPricing from '../../components/PlansandPricing/PlansandPricing'

const LandingPage = () => {
  return (
    <div className='landing-page'>
        <div className="middle">
            <img src={logo} alt="" />
        </div>
      <div className="grid-container">
            <div className="left headers">
            <h2>Enterprises</h2>
            <h1>
                Prevent Water Contamination<br />Preserve Our Future.
            </h1>
            <p>Learn about our solutions to ensure safe water delivery.</p>
            <button>Contact Us</button>
            </div>
            <div className="right">
            <img src={pipe} alt="Pipelines" />
            </div>
        </div>
        <div className="left words">
            <h1>Safeguard Against Water Leaks, Secure the Future</h1>
            <p>
                Water is essential, but when leaks occur, they can wreak havoc on your business operations. From damaged equipment and electrical systems to halted productivity, the financial and operational toll can be devastating.
            </p>
            <p>
                With <strong>H2O Sentinel</strong>, monitoring your water systems becomes a breeze. Leaks and inefficiencies are detected early, preventing costly damage and disruptions. Our solution uses cutting-edge sensors to monitor water flows 24/7, providing real-time insights to detect anomalies before they escalate.
            </p>
            <p>
                <strong>H2O Sentinel</strong> offers automated and remote shut-off capabilities, allowing you to react instantly to any water-related issues, no matter where you are. Our cloud-based platform gives you full control and visibility, ensuring your business stays protected.
            </p>
        </div>
        <div className="right words">
            <h1>Optimize Water Efficiency, Save Resources</h1>
            <p>
                Water isn't just a vital asset; it’s also a significant cost factor and an essential area for sustainability-conscious organizations to address. <strong>H2O Sentinel</strong> makes reducing water usage easy and efficient. With <strong>H2O Sentinel</strong>, your business can:
            </p>
            <ul>
                <li>Pinpoint areas of water waste</li>
                <li>Precisely monitor water flow in real-time</li>
                <li>Access detailed reports and dashboards that provide comprehensive insights into water usage</li>
                <li>Utilize actionable insights through <strong>H2O Sentinel's</strong> water-use KPIs and advanced analytics</li>
            </ul>
            <p>
                On average, <strong>H2O Sentinel</strong> users reduce their water consumption by 20% to 30%, making sustainability achievable and cost-effective.
            </p>
        </div>
        <div className="buttom-part">
            <PlansandPricing/>
        </div>
    </div>
  );
}

export default LandingPage;