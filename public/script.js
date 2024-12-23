document.getElementById('calculate').addEventListener('click', function() {
    // Get inputs
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);

    // Validate inputs
    if (isNaN(height) || isNaN(weight) || isNaN(age) || height <= 0 || weight <= 0 || age <= 0) {
        alert('Please enter valid numeric values for height, weight, and age.');
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Determine weight classification
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

    // Determine health indicator
    const healthIndicator = weightClassification === 'Normal' ? '⭐⭐⭐⭐⭐' : '⭐⭐⭐';

    // Update results in the DOM
    document.getElementById('bmi-result').textContent = bmi;
    document.getElementById('weight-classification').textContent = weightClassification;
    document.getElementById('health-indicator').textContent = healthIndicator;

    // Make the output section visible
    document.getElementById('output-section').style.display = 'block';
});

document.getElementById('generate-plan-button').addEventListener('click', function () {
  // Get user inputs
  const age = parseInt(document.getElementById('age').value);
  const healthIssues = document.getElementById('health-issues').value;
  const weightClassification = document.getElementById('weight-classification').value;

  // Validate inputs
  if (isNaN(age) || !weightClassification) {
    alert('Please provide valid inputs for age and weight classification.');
    return;
  }

  // Plans based on weight classification
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

  // Display the appropriate plan
  const outputSection = document.getElementById('output-section');
  const exercisePlan = document.getElementById('exercise-plan');
  exercisePlan.innerHTML = plans[weightClassification] || '<p>No plan available for the selected classification.</p>';
  outputSection.style.display = 'block';
});
