# MedGaurd Application User Management Frontend
### Description
This is a simple user management application built using React.

### Features
- User Authentication: Allows users to sign up, log in, and log out securely.
- User Management: CRUD (Create, Read, Update, Delete) operations for managing user accounts.
- Role-Based Access Control: Supports different user roles with varying levels of access.
- Responsive Design: Optimized for various screen sizes and devices.

### Installation
- Clone the repository:
- Install dependencies:
## npm packages
  - Axios 
  - Bootstrap
  - React-bootstrap
  - React-dom
  - React-router-dom
### Usage
  - npm run dev
## End points
 - http://localhost:5173/
 - http://localhost:5173/register
 - http://localhost:5173/login
 - http://localhost:5173/dashboard
 - http://localhost:5173/dashboard/profile

 ### Token based Route access based on authentication and authorisation
  - Routes can not be accessed without a token in the local storage
  - User profile can be updated and deleted only by Admin

  ### License