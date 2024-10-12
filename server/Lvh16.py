import streamlit as st
import pandas as pd
import numpy as np
import time

# Set the title of the app
st.title("Real-Time Ultrasonic Flow Meter Data Analysis")

# Create placeholders for the chart, alerts, and log display
chart_placeholder = st.empty()
alert_placeholder = st.empty()
log_placeholder = st.empty()

# Initialize an empty DataFrame for logging issues
log_data = pd.DataFrame(columns=["Timestamp", "Flow Rate (L/s)", "Pipe Diameter (cm)", "Temperature (°C)", "Pressure (kPa)", "Issue"])

# Function to analyze data row by row in real-time
def analyze_data_row(row):
    global log_data

    timestamp = row["Timestamp"]
    flow_rate = row["Flow Rate (L/s)"]
    pipe_diameter = row["Pipe Diameter (cm)"]
    temperature = row["Temperature (°C)"]
    pressure = row["Pressure (kPa)"]

    # Clear any previous alerts
    alert_placeholder.empty()

    # Check if Flow Rate is out of the normal range (5 to 20 L/s assumed as normal range)
    if flow_rate < 5 or flow_rate > 20:
        issue = "Flow Rate out of range"
        alert_placeholder.warning(f"Alert: Flow rate out of range! Timestamp: {timestamp}, Flow Rate: {flow_rate:.2f} L/s")
        log_data = pd.concat([log_data, pd.DataFrame([{
            "Timestamp": timestamp,
            "Flow Rate (L/s)": flow_rate,
            "Pipe Diameter (cm)": pipe_diameter,
            "Temperature (°C)": temperature,
            "Pressure (kPa)": pressure,
            "Issue": issue
        }])], ignore_index=True)

    # Check if Temperature is out of range (15 to 25°C assumed as normal)
    if temperature < 15 or temperature > 25:
        issue = "Temperature out of range"
        alert_placeholder.warning(f"Alert: Temperature out of range! Timestamp: {timestamp}, Temperature: {temperature:.2f} °C")
        log_data = pd.concat([log_data, pd.DataFrame([{
            "Timestamp": timestamp,
            "Flow Rate (L/s)": flow_rate,
            "Pipe Diameter (cm)": pipe_diameter,
            "Temperature (°C)": temperature,
            "Pressure (kPa)": pressure,
            "Issue": issue
        }])], ignore_index=True)

    # Check if Pressure is out of range (90 to 110 kPa assumed as normal)
    if pressure < 90 or pressure > 110:
        issue = "Pressure out of range"
        alert_placeholder.warning(f"Alert: Pressure out of range! Timestamp: {timestamp}, Pressure: {pressure:.2f} kPa")
        log_data = pd.concat([log_data, pd.DataFrame([{
            "Timestamp": timestamp,
            "Flow Rate (L/s)": flow_rate,
            "Pipe Diameter (cm)": pipe_diameter,
            "Temperature (°C)": temperature,
            "Pressure (kPa)": pressure,
            "Issue": issue
        }])], ignore_index=True)

# File uploader to allow the user to upload their CSV file
uploaded_file = st.file_uploader("Upload a CSV file", type=["csv"])

if uploaded_file is not None:
    # Read the uploaded CSV file
    data = pd.read_csv(uploaded_file)

    # Convert 'Timestamp' into a proper format
    data['Timestamp'] = pd.to_datetime(data['Timestamp'], format='%M:%S.%f')

    # Simulate real-time data analysis by processing each row with a delay
    st.subheader("Simulating real-time data analysis...")

    for index, row in data.iterrows():
        analyze_data_row(row)

        # Update the chart with the current data
        chart_placeholder.line_chart(data.set_index("Timestamp")["Flow Rate (L/s)"].iloc[:index+1])

        # Display the log of out-of-range data
        if not log_data.empty:
            log_placeholder.subheader("Out-of-Range Events Log")
            log_placeholder.dataframe(log_data)

        # Simulate real-time delay (1 second per row to mimic real-time streaming)
        time.sleep(1)

    # After all rows have been processed, show a success message
    st.success("Real-time data analysis completed!")

# Download button for the recorded log data
if not log_data.empty:
    csv = log_data.to_csv(index=False)
    st.download_button("Download Log Data as CSV", csv, "flow_meter_log_data.csv", "text/csv")
