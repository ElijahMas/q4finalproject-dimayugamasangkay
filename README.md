**Title:** FitFormula

**Updates Description**

To enhance our website, we will be incorporating persistent data storage to improve user experience and maintain key fitness-related information. This update will introduce a database to store user-generated data such as BMI calculations, quiz results, and personalized fitness plans. By saving this data, users can revisit their fitness progress and receive tailored recommendations over time.

Additionally, the update will include two new web pages:

User Profile Page – Displays user details, fitness history, and progress.

Data Management Page – Allows users to manage (Create, Read, Update, Delete - CRUD) their fitness-related data, ensuring better personalization and tracking

**Description:** Welcome to FitFormula!

FitFormula is a comprehensive platform - personally designed to help guide you as you begin your own unique fitness journey. Through inputting your key body attributes, such as height, weight, and age, FitFormula calculates your Body Mass Index (BMI), and provides insights into whether you fall within the underweight, normal, or overweight categories. Based on this analysis, we will have tailored to you a customized fitness plan to suit your specific needs - aligning your procedure with respect to your current physical traits. Furthermore, our website, FitFormula, allows you to set your own desired fitness goals and establish a timeline in achieving them - empowering you to work towards your ideal physique in an organized, informed, and efficient way!

**Outline:**

_Webpage 1 - Homepage:_

- Here the user can input their height, weight, health issues (using a dropdown menu), and age.
- The page outputs the users BMI, weight classification, and wheter it is healthy in response to the users inputs
- This page can link to every other webpage after the user has inputted the previous values.

_Webpage 2 - Personal Assistance Page:_

- Based on the user's desired goal (in weight), the webpage will display a personalized list of tips to help their fitness journey. The tips displayed will be determined by the users current weight classification and the difference in current weight and desired weight.
- The display will include the recomended excercise routine and diet.

_Webpage 3 - Other Resources:_

- This webpage will show and link to other articles and websites that can be useful for the user such as professional advice, clarifications on fitness misconseptions, and motivational fitness stories.

**Incorporation of a JavaScript:**

On the Homepage, JavaScript will be used to calculate the user's Body Mass Index (BMI) based on the inputs provided (height and weight). When the user inputs their details and clicks "Calculate," a JavaScript function will compute the BMI and determine the corresponding weight classification (underweight, normal, overweight). The BMI result and classification will dynamically display on the page without requiring a page reload.

**Initial Wireframes can be found at the assets folder**
