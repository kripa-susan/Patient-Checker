<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>


Patient Checker 🎯
Basic Details
Team Name: Digit
Team Members
Member 1: Kripa Susan Gregory T - Jyothi Engineering College
Member 2: Gopika P - Jyothi Engineering College
Hosted Project Link
(https://patientchecker.netlify.app/)

Project Description
The Patient Checker Web Application allows patients to update their daily health status easily. If medicines are not taken, the patient feels unwell, or an emergency button is pressed, automatic alerts are sent to the caretaker. The system provides secure login using email and password with separate dashboards for patients and caretakers.

The Problem statement
Elderly and chronically ill patients often forget to take their medicines and update their health status regularly. In emergency situations, caretakers are not informed immediately, which can lead to serious risks. Manual monitoring methods are unreliable and cause delays in timely care.

The Solution
The proposed solution is a Patient Checker web app that allows patients to update their daily health status and confirm medication intake. It sends automatic alerts to caretakers for missed medicines, health issues, or emergencies. This ensures timely communication, faster response, and better patient monitoring.

Technical Details
Technologies/Components Used
For Software:

Languages used: JavaScript, HTML, CSS, MySQL
Tools used: VS Code

Features
Feature 1: Daily health status update form
Feature 2: Medicine intake confirmation tracking
Feature 3: Automatic email/SMS alerts to caretakers
Feature 4: Emergency alert button
Feature 5: Dashboard for caretaker monitoring
Feature 6: Secure login authentication

For Software:
Installation
npm install
npm start

Run
npm start

Backend
node server.js

Project Documentation
For Software:
Screenshots (Add at least 3)
<img width="1920" height="1008" alt="caretaker" src="https://github.com/user-attachments/assets/78b56cbd-8607-41f1-ac2a-8f2ac080bb07" />Caretaker dashboard displaying patient status
<img width="1920" height="1008" alt="patient" src="https://github.com/user-attachments/assets/2f4a339f-8f6f-4bbf-8467-8d9c9d8d0fdb" />Patient dashboard showing daily health update form
<img width="1920" height="1008" alt="login" src="https://github.com/user-attachments/assets/06636598-95be-4588-be2e-04f40ce65dcb" />Login page allowing registered users to securely enter their email and password to access the Patient Checker dashboard.

Diagram
![flowchart](https://github.com/user-attachments/assets/a9d34115-029c-464c-9b51-9a83cf01b76d)
Data Flow:
Patient → Frontend → Backend API → Database
If medicine missed → Alert Trigger → Caretaker Notification

Build Photos
![Team](Add photo of your team here)

API Documentation
Base URL:https://patientchecker.netlify.app/

Endpoints
GET /api/endpoint
{
  "status": "success",
  "data": {
    "name": "John",
    "medicineTaken": true
  }
}

Description: [What it does]
Parameters:
param1 (string): [Description]
param2 (integer): [Description]
Response:
{
  "status": "success",
  "data": {}
}
POST /api/endpoint

Description: Submit daily health update
Request Body:
{
  "temperature": 98.6,
  "bp": "120/80",
  "medicineTaken": false
}
Response:
{
  "status": "success",
  "message": "Health update recorded"
}

Emergency Response:
Description:Trigger emergency alert
{
  "status": "success",
  "message": "Emergency alert sent to caretaker"
}
[Add more endpoints as needed...]


Project Demo
Video
[Add your demo video link here - YouTube, Google Drive, etc.]

Explain what the video demonstrates - key features, user flow, technical highlights

AI Tools Used (Optional - For Transparency Bonus)
If you used AI tools during development, document them here for transparency:

Tool Used: [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

Purpose: [What you used it for]

Example: "Generated boilerplate React components"
Example: "Debugging assistance for async functions"
Example: "Code review and optimization suggestions"
Key Prompts Used:

"Create a REST API endpoint for user authentication"
"Debug this async function that's causing race conditions"
"Optimize this database query for better performance"
Percentage of AI-generated code: [Approximately X%]

Human Contributions:

Architecture design and planning
Custom business logic implementation
Integration and testing
UI/UX design decisions
Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!

Team Contributions
[Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
[Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
[Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]
License
This project is licensed under the [LICENSE_NAME] License - see the LICENSE file for details.

