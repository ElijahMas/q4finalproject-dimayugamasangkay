
**Updates Description**

To enhance our website, we will be incorporating persistent data storage to improve user experience by storing their key information  such as their bmi and fitness plan. By saving this data, users can revisit their fitness progress and receive correctly tailored recommendations over time.

Additionally, the update will include two new web pages: a user profile page that will display user details, and a data management page that will allow users to manage (create, read, update, delete) their data, ensuring relevant tracking and advice.

**Data to be saved**

1. User account data
- To manage user authentication and to provide a personalized experience.
{
  "account": {
    "username": "text-string",
    "name": "text-string",
    "dob": "YYYY-MM-DD",
    "password": "text-string",
    "email": "email-formatted-text-string",
    "profile": "text-link-to-uploaded-pic"
  }
}

2. Fitness Data
- To store user-specific fitness records and recommendations.
{
  "fitness_data": {
    "user_id": "unique-user-id",
    "bmi": "float",
    "weight_category": "text-string",
    "recommended_plan": "text-string",
    "last_updated": "YYYY-MM-DD"
  }
}


**Wireframes can be found at the assets folder**


