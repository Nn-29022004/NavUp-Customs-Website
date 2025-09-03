NavUp Customs 🚗✨

NavUp Customs is a car customization website showcasing services like custom paint jobs, body kits, performance upgrades, and interior customization. It provides a modern UI, a responsive design, and a contact form for inquiries.

📌 Features

🔹 Responsive Design – Works across desktops, tablets, and mobiles.

🔹 Hero Section – Eye-catching banner with a call-to-action.

🔹 Services Section – Grid-based layout to showcase offerings.

🔹 About Section – Company information & owner details.

🔹 Contact Form – Users can send inquiries (connected to backend via fetch).

🔹 Sticky Navbar – Easy navigation across sections.

🛠️ Tech Stack

Frontend: HTML5, CSS3, JavaScript

Styling: Responsive CSS Grid & Flexbox

Backend (for form handling): Node.js/Express (expected at http://localhost:3000/submit)

📂 Project Structure
NavUp-Customs/
│── index.html      # Main webpage
│── styles.css      # Styling
│── script.js       # JavaScript (form handling)
│── README.md       # Documentation

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/your-username/navup-customs.git
cd navup-customs

2. Open Website

Simply open index.html in your browser.

3. Run Backend (for contact form)

If you want the contact form to work:

Create a basic Node.js + Express server at localhost:3000.

Example backend (server.js):

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    console.log('Form Data:', req.body);
    res.status(200).send({ message: 'Form submitted successfully!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));


Run the backend:

npm install express body-parser cors
node server.js


Now, the contact form will send data successfully.

📸 Screenshots
Homepage

Services Section

📧 Contact

Owner: Nakul Dhulipudi

📍 Address: 2-23 Lock Road, Kankipadu, Vijayawada, 521151

✉️ Email: nakulsatya53503@gmail.com

📞 Phone: (+91) 9494097929

© 2025 NavUp Customs. All rights reserved.
