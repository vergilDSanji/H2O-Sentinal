import React from 'react';

const DashBoard = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {/* Embed the Streamlit app using an iframe */}
      <iframe
        src="http://localhost:8501" 
        style={{ border: 'none', width: '100%', height: '100%' }}
        title="Streamlit Dashboard"
      ></iframe>
    </div>
  );
};

export default DashBoard;
