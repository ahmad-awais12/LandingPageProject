import React, { useState } from 'react';

const Dashboard = ({ username }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  const getDietPlan = () => {
    if (bmi) {
      if (bmi < 18.5) {
        return 'You are underweight. Consume more protein, healthy fats, and complex carbs.';
      } else if (bmi >= 18.5 && bmi < 25) {
        return 'You have a healthy weight. Maintain a balanced diet and regular exercise.';
      } else if (bmi >= 25 && bmi < 30) {
        return 'You are overweight. Focus on consuming more vegetables, lean proteins, and reducing processed foods.';
      } else {
        return 'You are obese. Consult a doctor for a personalized diet and exercise plan.';
      }
    }
    return '';
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {username}!</h2>
      <div className="bmi-calculator">
        <h3>BMI Calculator</h3>
        <label>Weight (kg): </label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>Height (cm): </label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && <p>Your BMI: {bmi}</p>}
      </div>
      <div className="diet-plan">
        <h3>Diet Plan</h3>
        <p>{getDietPlan()}</p>
      </div>
      <div className="footer">
        <footer>
          <p>copyright@AhmadAwais</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
