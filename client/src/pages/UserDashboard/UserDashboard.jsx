import React from 'react';
import '../UserDashboard/UserDashboard.css';
import { Bar, Bubble, Pie } from 'react-chartjs-2';

const UserDashboard = () =>{
    return (
        <div className="admin-dashboard">
          <div className="sidebar">
            <button>Dashboard</button>
            <button>Farmer</button>
            <button>Analytics Status</button>
            <button>Transport</button>
            <button>Admins</button>
            <button className="back-home">&lt;&lt; Back to Home</button>
          </div>
          <div className="dashboard-content">
            <h1>Admin Dashboard</h1>
            <div className="executive-dashboard">
              <div className="filters">
                <div>
                  <label>Auto date range</label>
                  <select>
                    <option>This Month</option>
                    {/* Add other date ranges as needed */}
                  </select>
                </div>
                <div>
                  <label>Services</label>
                  <select>
                    <option>All</option>
                    {/* Add other service options as needed */}
                  </select>
                </div>
                <div>
                  <label>Posts</label>
                  <select>
                    <option>All</option>
                    {/* Add other post options as needed */}
                  </select>
                </div>
              </div>
              <div className="dashboard-metrics">
                <div className="metric">
                  <h3>New Wins</h3>
                  <p className="value">230 <span className="change">&#8593; 25%</span></p>
                </div>
                <div className="metric">
                  <h3>Trial: Win Rate</h3>
                  <p className="value">9.86% <span className="change">&#8593; 25%</span></p>
                </div>
                <div className="metric">
                  <h3>New MRR</h3>
                  <p className="value">$25,690 <span className="change">&#8593; 8.7%</span></p>
                </div>
                <div className="metric">
                  <h3>Page Views</h3>
                  <Pie
                    data={{
                      labels: ['Direct', 'Referral', 'Organic Search'],
                      datasets: [
                        {
                          data: [50, 30, 20],
                          backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
                        },
                      ],
                    }}
                    options={{ responsive: true }}
                  />
                </div>
              </div>
              <div className="charts">
                <div className="bubble-chart">
                  <Bubble
                    data={{
                      datasets: [
                        {
                          label: 'United States',
                          data: [{ x: 200, y: 10, r: 15 }],
                          backgroundColor: '#FF6384',
                        },
                        {
                          label: 'Australia',
                          data: [{ x: 300, y: 15, r: 10 }],
                          backgroundColor: '#36A2EB',
                        },
                        // Add more datasets as needed
                      ],
                    }}
                    options={{ responsive: true }}
                  />
                </div>
                <div className="bar-chart">
                  <Bar
                    data={{
                      labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'],
                      datasets: [
                        {
                          label: 'MRR',
                          data: [12000, 14000, 15000, 13000, 11000, 9000],
                          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                        },
                      ],
                    }}
                    options={{ responsive: true }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default UserDashboard;