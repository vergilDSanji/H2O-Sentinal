import React from 'react'
import './PlansandPricing.css'

const PlansandPricing = () => {
  return (
    <div className='packages'>
      <h2>Choose Your Water Monitoring Package</h2>
      <div className='package-grid'>
        {/* Basic Package */}
        <div className='package-card basic'>
          <h3>Basic Package</h3>
          <p>1 Water Flow Sensor</p>
          <p>Real-time Monitoring</p>
          <p>Cloud Reporting</p>
          <p>R200/month</p>
          <button>Select Basic</button>
        </div>
        
        {/* Advanced Package */}
        <div className='package-card advanced'>
          <h3>Advanced Package</h3>
          <p>2 Water Flow Sensors</p>
          <p>Leak Detection</p>
          <p>Real-time Monitoring</p>
          <p>Cloud Reporting & Notifications</p>
          <p>R500/month</p>
          <button>Select Advanced</button>
        </div>
        
        {/* Ultimate Package */}
        <div className='package-card ultimate'>
          <h3>Ultimate Package</h3>
          <p>All Sensors (Flow, Pressure, pH)</p>
          <p>AI Predictive Analysis</p>
          <p>Automatic Shut-off</p>
          <p>Complete Water Data Control</p>
          <p>R1200/month</p>
          <button>Select Ultimate</button>
        </div>
      </div>
    </div>
  )
}

export default PlansandPricing