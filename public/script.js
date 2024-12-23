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
});

document.getElementById('generate-plan').addEventListener('click', function () {
  // Get user inputs
  const age = document.getElementById('age').value;
  const healthIssues = document.getElementById('health-issues').value;
  const bmi = document.getElementById('bmi').value;
  const weightClassification = document.getElementById('health-issues-b').value;

  // Validate required inputs
  if (!age || !bmi || !weightClassification) {
    alert('Please complete all required fields: Age, BMI, and Weight Classification.');
    return;
  }

  // Determine the output message based on user inputs
  let outputMessage = '';

  if (weightClassification === 'Normal' && !healthIssues) {
    outputMessage = 'Normal BMI with no health conditions.';
  } else if (weightClassification === 'Normal' && healthIssues) {
    outputMessage = `Normal BMI with ${healthIssues}.`;
  } else if (weightClassification === 'Underweight') {
    outputMessage = `Underweight with ${healthIssues || 'no health conditions'}.`;
  } else if (weightClassification === 'Overweight') {
    outputMessage = `Overweight with ${healthIssues || 'no health conditions'}.`;
  } else if (weightClassification === 'Obese') {
    outputMessage = `Obese with ${healthIssues || 'no health conditions'}.`;
  } else {
    outputMessage = 'Unspecified weight classification or health condition.';
  }

  // Display the output in the output section
  const outputSection = document.getElementById('output-section');
  const planList = document.getElementById('exercise-plan');

  // Clear any previous content
  planList.innerHTML = '';

  // Add the output message
  const listItem = document.createElement('li');
  listItem.textContent = outputMessage;
  planList.appendChild(listItem);

  // Show the output section
  outputSection.style.display = 'block';
});
