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

      const plans = {
  Underweight: `
    <h4>Underweight Plan:</h4>
    <ul>
      <li>Light cardio, high-calorie meal planning.</li>
      <li>Strength training, focus on compound movements.</li>
      <li>Rest and recovery with yoga or light stretching.</li>
      <li>
        <a href="https://www.healthline.com/health/exercise-to-gain-weight#what-to-avoid" target="_blank">
          Learn more about exercises to gain weight
        </a>
        <br>
        <img src="https://via.placeholder.com/150?text=Underweight+Tips" alt="Underweight Exercise Tips">
      </li>
    </ul>
  `,
  Normal: `
    <h4>Normal Plan:</h4>
    <ul>
      <li>30-minute run, bodyweight exercises.</li>
      <li>Gym session focusing on full-body strength training.</li>
      <li>Rest or engage in a recreational sport.</li>
      <li>
        <a href="https://www.planetfitness.com/community/articles/beginner-workout-plan-your-first-week-gym" target="_blank">
          Beginner workout plan for your first week at the gym
        </a>
        <br>
        <img src="https://via.placeholder.com/150?text=Normal+Fitness+Plan" alt="Normal Fitness Plan">
      </li>
    </ul>
  `,
  Overweight: `
    <h4>Overweight Plan:</h4>
    <ul>
      <li>45-minute brisk walk, low-impact cardio.</li>
      <li>Strength training with focus on core and legs.</li>
      <li>Active recovery with swimming or cycling.</li>
      <li>
        <a href="https://www.nyp.org/patients-and-visitors/advances-consumers/issues/exercising-when-overweight-moderation-is-key" target="_blank">
          Exercising when overweight: moderation is key
        </a>
        <br>
        <img src="https://via.placeholder.com/150?text=Overweight+Exercise+Plan" alt="Overweight Exercise Plan">
      </li>
    </ul>
  `,
  Obese: `
    <h4>Obese Plan:</h4>
    <ul>
      <li>Low-impact walking or water aerobics.</li>
      <li>Chair-assisted strength exercises.</li>
      <li>Light yoga or stretching for mobility.</li>
      <li>
        <a href="https://www.medicalnewstoday.com/articles/exercise-for-obese-people#best-types" target="_blank">
          Best exercises for obese individuals
        </a>
        <br>
        <img src="https://via.placeholder.com/150?text=Obese+Fitness+Plan" alt="Obese Fitness Plan">
      </li>
    </ul>
  `
};


      const exercisePlan = document.getElementById('exercise-plan');
      exercisePlan.innerHTML = plans[weightClassification] || '<p>No plan available for the selected classification.</p>';
      document.getElementById('output-section').style.display = 'block';
    });
  }
});
