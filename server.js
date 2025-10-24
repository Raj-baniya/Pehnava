const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/send-application', async (req, res) => {
  const { brandName, email, productDesc } = req.body;

  if (!brandName || !email || !productDesc) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const welcomeMessage = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: `Welcome to Pehenava! Your Application is Received.`,
    html: `<h1>Thank you for applying to sell on Pehenava, ${brandName}!</h1><p>We have received your application and our team will review it shortly.</p>`,
  };

  const notificationMessage = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: `New Seller Application: ${brandName}`,
    html: `<h1>New Seller Application</h1><p><strong>Brand Name:</strong> ${brandName}</p><p><strong>Applicant Email:</strong> ${email}</p><p><strong>Product Description:</strong></p><p>${productDesc}</p>`,
  };

  try {
    await sgMail.send(welcomeMessage);
    await sgMail.send(notificationMessage);
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('SendGrid Error:', error.response ? error.response.body : error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
