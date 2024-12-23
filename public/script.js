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
  // Get inputs
  const age = parseInt(document.getElementById('age').value);
  const healthIssues = document.getElementById('health-issues').value;
  const weightClassification = document.getElementById('weight-classification').value;

  // Validate inputs
  if (isNaN(age) || !weightClassification) {
    alert('Please provide valid inputs for age and weight classification.');
    return;
  }

  // Determine output message
  let outputMessage = '';
  if (age > 18 && healthIssues === 'None' && weightClassification === 'Normal') {
    outputMessage = '18, none, normal';
  } else if (age > 18 && healthIssues === 'None' && weightClassification === 'Underweight') {
    outputMessage = '18, none, underweight';
  } else if (age > 18 && healthIssues === 'None' && weightClassification === 'Overweight') {
    outputMessage = '18, none, overweight';
  } else if (age > 18 && healthIssues !== 'None' && weightClassification === 'Normal') {
    outputMessage = '18, yes health issues, normal';
  } else if (age > 18 && healthIssues !== 'None' && weightClassification === 'Underweight') {
    outputMessage = '18, yes health issues, underweight';
  } else if (age > 18 && healthIssues !== 'None' && weightClassification === 'Overweight') {
    outputMessage = '18, yes health issues, overweight';
  } else if (age <= 18 && healthIssues === 'None' && weightClassification === 'Normal') {
    outputMessage = 'below 18, none, normal';
  } else if (age <= 18 && healthIssues === 'None' && weightClassification === 'Underweight') {
    outputMessage = 'below 18, none, underweight';
  } else if (age <= 18 && healthIssues === 'None' && weightClassification === 'Overweight') {
    outputMessage = 'below 18, none, overweight';
  } else if (age <= 18 && healthIssues !== 'None' && weightClassification === 'Normal') {
    outputMessage = 'below 18, yes health issues, normal';
  } else if (age <= 18 && healthIssues !== 'None' && weightClassification === 'Underweight') {
    outputMessage = 'below 18, yes health issues, underweight';
  } else if (age <= 18 && healthIssues !== 'None' && weightClassification === 'Overweight') {
    outputMessage = 'below 18, yes health issues, overweight';
  }

  // Display output
  const outputSection = document.getElementById('output-section');
  const exercisePlan = document.getElementById('exercise-plan');
  exercisePlan.innerHTML = `<li>${outputMessage}</li>`;
  outputSection.style.display = 'block';
});
