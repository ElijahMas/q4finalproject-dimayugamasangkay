document.addEventListener('DOMContentLoaded', function () {
  console.log("Script loaded");

  // Homepage Logic
  const calculateButton = document.getElementById('calculate');
  if (calculateButton) {
    calculateButton.addEventListener('click', function () {
      console.log("Calculate BMI button clicked");

      const height = parseFloat(document.getElementById('height').value) / 100;
      const weight = parseFloat(document.getElementById('weight').value);
      const age = parseInt(document.getElementById('age').value);

      if (isNaN(height) || isNaN(weight) || isNaN(age) || height <= 0 || weight <= 0 || age <= 0) {
        alert('Please enter valid numeric values for height, weight, and age.');
        return;
      }

      const bmi = (weight / (height * height)).toFixed(1);
      let weightClassification = '';

      if (bmi < 18.5) {
        weightClassification = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        weightClassification = 'Normal';
      } else if (bmi >= 25 && bmi < 29.9) {
        weightClassification = 'Overweight';
      } else {
        weightClassification = 'Obese';
      }

      const healthIndicator = weightClassification === 'Normal' ? '⭐⭐⭐⭐⭐' : '⭐⭐⭐';

      document.getElementById('bmi-result').textContent = bmi;
      document.getElementById('weight-classification').textContent = weightClassification;
      document.getElementById('health-indicator').textContent = healthIndicator;
      document.getElementById('output-section').style.display = 'block';
    });
  }

  // Personal Assistance Logic
  const generatePlanButton = document.getElementById('generate-plan-button');
  if (generatePlanButton) {
    generatePlanButton.addEventListener('click', function () {
      console.log("Generate Plan button clicked");

      const weightClassification = document.getElementById('weight-classification-input').value;

      const plans = {
        Underweight: `
          <h4>Underweight Plan:</h4>
          <ul>
            <li>Day 1: Light cardio, high-calorie meal planning.</li>
            <li>Day 2: Strength training, focus on compound movements.</li>
            <li>Day 3: Rest and recovery with yoga or light stretching.</li>
          </ul>
        `,
        Normal: `
          <h4>Normal Plan:</h4>
          <ul>
            <li>Day 1: 30-minute run, bodyweight exercises.</li>
            <li>Day 2: Gym session focusing on full-body strength training.</li>
            <li>Day 3: Rest or engage in a recreational sport.</li>
          </ul>
        `,
        Overweight: `
          <h4>Overweight Plan:</h4>
          <ul>
            <li>Day 1: 45-minute brisk walk, low-impact cardio.</li>
            <li>Day 2: Strength training with focus on core and legs.</li>
            <li>Day 3: Active recovery with swimming or cycling.</li>
          </ul>
        `,
        Obese: `
          <h4>Obese Plan:</h4>
          <ul>
            <li>Day 1: Low-impact walking or water aerobics.</li>
            <li>Day 2: Chair-assisted strength exercises.</li>
            <li>Day 3: Light yoga or stretching for mobility.</li>
          </ul>
        `
      };

      const exercisePlan = document.getElementById('exercise-plan');
      exercisePlan.innerHTML = plans[weightClassification] || '<p>No plan available for the selected classification.</p>';
      document.getElementById('output-section').style.display = 'block';
    });
  }
});
