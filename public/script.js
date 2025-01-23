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

      const weightClassificationInput = document.getElementById('weight-classification-input');
      if (!weightClassificationInput) {
        console.error("Element with ID 'weight-classification-input' not found!");
        return;
      }
      
      const age = parseInt(document.getElementById('age').value);
      const weightClassification = weightClassificationInput.value;

      if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return;
      }

      // Define age-based plans
      const ageBasedPlan = age < 16
        ? `
          <h4>Plan for Under 16:</h4>
          <ul>
            <li>Focus on fun physical activities like playing sports, dancing, or biking.</li>
            <li>Avoid heavy strength training; instead, use light weights or bodyweight exercises.</li>
            <li>Ensure a balanced diet with adequate nutrition for growth.</li>
            <li><a href="https://www.healthline.com/health/fitness/exercise-for-teenagers#for-overweight-teens">Important tips for excercising while young!</a></li>
          </ul>
        `
        : age > 64
        ? `
          <h4>Plan for Over 64:</h4>
          <ul>
            <li>Engage in low-impact exercises like walking, swimming, or tai chi.</li>
            <li>Focus on flexibility, balance, and light strength training.</li>
            <li>Stay active daily to maintain mobility and prevent muscle loss.</li>
            <li><a href="https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-older-adults/">More information about excercise for older adults<a></li>
          </ul>
        `
        : null;

      // Define weight classification plans
      const plans = {
        Underweight: `
          <h4>Underweight Plan:</h4>
          <ul>
            <li>Light cardio, high-calorie meal planning.</li>
            <li>Strength training, focus on compound movements.</li>
            <li>Rest and recovery with yoga or light stretching.</li>
            <li><a href="https://www.healthline.com/health/exercise-to-gain-weight#what-to-avoid" target="_blank">Learn more about exercises to gain weight</a></li>
          </ul>
        `,
        Normal: `
          <h4>Normal Plan:</h4>
          <ul>
            <li>30-minute run, bodyweight exercises.</li>
            <li>Gym session focusing on full-body strength training.</li>
            <li>Rest or engage in a recreational sport.</li>
            <li><a id="output" href="https://www.planetfitness.com/community/articles/beginner-workout-plan-your-first-week-gym" target="_blank">Beginner workout plan for your first week at the gym</a></li>
          </ul>
        `,
        Overweight: `
          <h4>Overweight Plan:</h4>
          <ul>
            <li>45-minute brisk walk, low-impact cardio.</li>
            <li>Strength training with focus on core and legs.</li>
            <li>Active recovery with swimming or cycling.</li>
            <li><a href="https://www.nyp.org/patients-and-visitors/advances-consumers/issues/exercising-when-overweight-moderation-is-key" target="_blank">Tips for exercising when overweight</a></li>
          </ul>
        `,
        Obese: `
          <h4>Obese Plan:</h4>
          <ul>
            <li>Low-impact walking or water aerobics.</li>
            <li>Chair-assisted strength exercises.</li>
            <li>Light yoga or stretching for mobility.</li>
            <li><a href="https://www.medicalnewstoday.com/articles/exercise-for-obese-people#best-types" target="_blank">Best exercises for people with obesity</a></li>
          </ul>
        `
      };

      // Combine age-based and weight-classification plans
      const selectedPlan = ageBasedPlan || plans[weightClassification] || '<p>No plan available for the selected classification or age.</p>';

      // Update the exercise plan and show the output
      const exercisePlan = document.getElementById('exercise-plan');
      exercisePlan.innerHTML = selectedPlan;
      document.getElementById('output-section').style.display = 'block';
    });
  }
});
