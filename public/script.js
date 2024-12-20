document.getElementById('calculate-btn').addEventListener('click', function() {
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
    var healthIndicator = weightClassification;
    if (weightClassification === Normal) {
      if (health-issues !== 'None') {
        health-indicator = '⭐⭐⭐⭐' }
      else
        
    }
  
    // Update results in the DOM
    document.getElementById('bmi-result').textContent = bmi;
    document.getElementById('weight-classification').textContent = weightClassification;
    document.getElementById('health-indicator').textContent = healthIndicator;
});
