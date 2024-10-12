import streamlit as st
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Set the title of the app
st.title("Flow Rate Prediction using IoT Data")

# Load the dataset
uploaded_file = st.file_uploader("Upload your CSV file", type=["csv"])

if uploaded_file is not None:
    # Read the uploaded CSV file
    data = pd.read_csv(uploaded_file)

    # Convert 'Timestamp' to datetime if needed
    data['Timestamp'] = pd.to_datetime(data['Timestamp'], format='%M:%S.%f')

    # Define conditions for predicting unsafe conditions
    # You can adjust these thresholds based on your understanding of the data
    def define_condition(row):
        if (row['Flow Rate (L/s)'] < 5 or row['Flow Rate (L/s)'] > 20) or \
           (row['Temperature (°C)'] < 15 or row['Temperature (°C)'] > 25) or \
           (row['Pressure (kPa)'] < 90 or row['Pressure (kPa)'] > 110):
            return 1  # Unsafe
        return 0  # Safe

    # Create a new column in the DataFrame to store the condition
    data['Condition'] = data.apply(define_condition, axis=1)

    # Split the dataset into features and target variable
    X = data[['Flow Rate (L/s)', 'Pipe Diameter (cm)', 'Temperature (°C)', 'Pressure (kPa)']]
    y = data['Condition']

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Create and train the model
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Make predictions on the test set
    y_pred = model.predict(X_test)

    # Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    report = classification_report(y_test, y_pred)

    # Display model evaluation results
    st.subheader("Model Evaluation")
    st.write(f"Accuracy: {accuracy:.2f}")
    st.text(report)

    # Make predictions on the uploaded data
    data['Predicted Condition'] = model.predict(X)

    # Display the original data with predictions
    st.subheader("Data with Predictions")
    st.dataframe(data[['Timestamp', 'Flow Rate (L/s)', 'Pipe Diameter (cm)', 'Temperature (°C)',
                        'Pressure (kPa)', 'Condition', 'Predicted Condition']])

