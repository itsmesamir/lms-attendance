# Leave Management System

## Summary

The Leave Management System is a web-based application that facilitates the management of employee leaves within an organization. It provides features for employees to apply for different types of leaves, managers to approve or reject these requests, and administrators to manage user roles and permissions.

## Functional Requirements

- **Employee Creation:** Admins can create and manage employee profiles, including necessary information and permissions.
- **Roles and Permissions:** Define user roles (admin, manager, employee) and their corresponding permissions for accessing system functionalities.
- **Leave Application:** Employees can apply for different types of leaves, specifying duration, reason, and submission process.
- **Leave Approval:** Managers can review and approve/reject leave requests submitted by employees.
- **Reporting of Leaves:** Track leave usage, balances, trends, and department-wise distribution.
- **Country-wise Leave System:** Support for country-specific leave policies and configurations.
- **Fiscal Year System:** Handle leave accruals, carry-over, and resets based on defined fiscal years.
- **Bulk Leave/User Upload System:** Feature for bulk uploading of employee details, leave balances, and historical records.

## Technical Requirements

- **Frontend Technologies:** HTML, CSS, JavaScript, React
- **Backend Technologies:** Node.js, Express.js
- **Database:** MySQL, PostgreSQL, MongoDB (choose one)
- **Authentication and Authorization:** JWT
- **Deployment:** CI/CD pipelines (e.g., GitHub Actions, GitLab CI/CD)
- **API Documentation:** Swagger/OpenAPI

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsmesamir/lms-attendance

   ```

2. Install dependencies:

   ```bash
   cd lms-attendance
   npm install

   ```

3. Create a .env file in the root directory of the project, and add your environment variables:
   ```bash
   touch .env
   ```
   Open the .env file and add your variables:

```bash
    NODE_ENV=local

    APP_NAME='Lms API'
    APP_VERSION='1.0.0'
    APP_PORT='8848'
    APP_BASE_URL=/api/leave

    DB_CLIENT=mysql2
    DB_HOST=127.0.0.1
    DB_PORT=3306

    DB_NAME=your_db
    DB_USER=user
    DB_PASSWORD=password

    token=your_token_here
    JWT_SECRET_KEY=
    JWT_REFRESH_SECRET_KEY=

```

Replace localhost, root, and s1mpl3 with your actual database host, user, and password.

4. Run the application:

```bash
    npm start
```
