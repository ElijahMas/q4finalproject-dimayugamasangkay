document.getElementById('generate-plan-button').addEventListener('click', function () {
  console.log("Generate Plan button clicked");

  const weightClassificationInput = document.getElementById('weight-classification-input');
  if (!weightClassificationInput) {
    console.error("Element with ID 'weight-classification-input' not found!");
    return;
  }

  const weightClassification = weightClassificationInput.value;

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
