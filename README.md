# VISA NAVIGATOR

[![Live Site](https://assignment-10-427ea.web.app/)](https://assignment-10-427ea.web.app/)

## Project Overview

VISA NAVIGATOR is a comprehensive web application designed to simplify the visa application process. It allows users to check visa requirements, apply for visas online, and track their application status. This project features a dynamic user interface, robust authentication, and a seamless user experience.

## Features

* **Visa Information Hub:** Browse a wide range of visa information, including country-specific requirements, processing times, fees, and application methods.
* **Online Visa Application:** Apply for visas directly through the portal with a streamlined application process.
* **Application Tracking:** Track the status of your visa applications in real-time.
* **User Authentication:** Secure user authentication with email/password and Google login.
* **Admin Panel (Private Routes):** Add, update, and delete visa information through a protected admin interface.
* **Personalized Dashboards:** View your added visas and applied visas in dedicated dashboards.
* **Responsive Design:** Optimized for all devices, ensuring a consistent user experience across desktops, tablets, and mobile phones.
* **Filtering and Searching:** Filter visas by type and search applied visas by country name.
* **Theme Toggle:** Switch between light and dark themes for optimal viewing.
* **Interactive Elements:** Incorporates Lottie React animations, React-simple-typewriter, React Awesome reveal and React-tooltip for an enhanced user experience.

## Technologies Used

### Client-Side

* React.js
* React Router
* Firebase Authentication
* Axios
* React Hook Form
* Tailwind CSS (or your chosen CSS framework)
* React Toastify (or your chosen notification library)
* Lottie React
* React-simple-typewriter
* React Awesome reveal
* React-tooltip

### Server-Side

* Node.js
* Express.js
* MongoDB
* Mongoose


### Client-Side

1.  Clone the repository: `git clone YOUR_CLIENT_REPO_URL`
2.  Navigate to the client directory: `cd client`
3.  Install dependencies: `npm install`
4.  Create a `.env.local` file and add your Firebase configuration keys.
5.  Start the development server: `npm start`

### Server-Side

1.  Clone the repository: `git clone YOUR_SERVER_REPO_URL`
2.  Navigate to the server directory: `cd server`
3.  Install dependencies: `npm install`
4.  Create a `.env` file and add your MongoDB connection string.
5.  Start the server: `npm start`

## Key Features Breakdown

* **Authentication:**
    * Users can register and log in via email/password or Google authentication.
    * Password validation includes uppercase, lowercase, and minimum length requirements.
    * Private routes are protected, redirecting unauthorized users to the login page.
* **Home Page:**
    * Dynamic banner/slider with visa information.
    * Displays the latest visa listings.
    * Two additional informative sections.
    * "See all visas" button, and "See Details" buttons.
* **Add Visa:**
    * Admin-only page to add new visa information.
    * Form includes fields for country details, visa type, required documents, and fees.
    * Data is stored in the MongoDB database.
* **All Visas:**
    * Displays all visa listings in a grid layout.
    * Filter by visa type dropdown.
    * "See Details" button for each visa.
* **Visa Details:**
    * Detailed view of a selected visa.
    * "Apply for the visa" button, opens a modal for application.
* **My Added Visas:**
    * Displays visas added by the logged-in user.
    * Update and delete functionality for each visa.
* **My Visa Applications:**
    * Displays visa applications submitted by the logged-in user.
    * Search functionality by country name.
    * "Cancel" button to remove applications.
* **Responsive Design:**
    * Fully responsive layout for seamless viewing on all devices.
* **Error Handling:**
    * Toast notifications/sweet alerts for success and error messages.
    * 404 Page.
    * Loading spinners.

## Deployment

* **Client-Side:** Hosted on Netlify, Firebase, or Surge.
* **Server-Side:** Hosted on Vercel.



* ## Live Site

[https://assignment-10-427ea.web.app/](https://assignment-10-427ea.web.app/)

## Repository Links

* **Client-Side:** [https://github.com/Rayhan-50/VISA-client](https://github.com/Rayhan-50/VISA-client)
* **Server-Side:** [https://github.com/Rayhan-50/VISA-server](https://github.com/Rayhan-50/VISA-server)
