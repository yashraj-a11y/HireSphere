# HireSphere 🚀

**HireSphere** is a modern, lightweight **Applicant Tracking System (ATS)** and recruitment management platform. Designed to simulate a real-world HR tech workspace, it streamlines the hiring pipeline by seamlessly managing job posts, tracks applicants, and organizes interview workflows.

---

## 🛠️ Tech Stack

*   **Backend:** PHP (Core / Procedural)
*   **Database:** MySQL
*   **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
*   **Styling:** Custom CSS / Assets layout

---

## ✨ Features

*   **Admin Dashboard:** Comprehensive metrics tracking and portal administration.
*   **Job Management:** Simple tools to create, view, and update dynamic careers pages.
*   **Applicant Tracking:** Monitor candidate statuses from application submission to final hire.
*   **Interview Scheduler:** Easily log and schedule candidate evaluation sessions.
*   **Resume Hub:** Direct download and structured view of incoming CV uploads.
*   **Audit Logs:** Track user actions and changes safely within the admin portal.

---

## 📂 Project Structure

```text
HireSphere/
│
├── admin/                     # Admin Portal Core
│   ├── analytics.php          # Data and performance tracking
│   ├── dashboard.php          # Main HR workspace
│   ├── delete.php             # Data removal utilities
│   ├── login.php / logout.php # Admin authentication
│   ├── logs.php               # System logs and audits
│   ├── resume_view.php        # Uploaded CV rendering
│   ├── schedule_interview.php # Interview coordination engine
│   ├── update_status.php      # Candidate progress management
│   └── view.php               # Single candidate overview
│
├── assets/                    # Static files (Images, JS)
│   └── css/
│       └── style.css          # Main UI stylesheet
│
├── includes/                  # Core modules (DB connections, helpers)
├── sql/
│   └── hiresphere_db.sql      # Database schema dump
├── uploads/                   # Candidate CV and resume storage
│
├── apply.php                  # Candidate job application form
├── careers.php                # Public job listings portal
├── index.php                  # Landing page
├── submit.php                 # Application processing script
└── success.php                # Submission confirmation page
```

---

## 🚀 Getting Started

Follow these steps to run HireSphere locally using a standard LAMP/WAMP/XAMPP server stack:

### 1. Prerequisites
Ensure you have **PHP (7.4 or later)** and **MySQL** installed via tools like XAMPP, WAMP, or MAMP.

### 2. Clone the Repository
```bash
git clone https://github.com/od4ng/hiresphere.git
cd hiresphere
```

### 3. Setup the Database
1. Open **phpMyAdmin** (or your preferred MySQL client).
2. Create a new database named `hiresphere_db`.
3. Import the SQL file located in the project directory: `sql/hiresphere_db.sql`.

### 4. Configure Environment
Open `includes/db.php` in a code editor and update the database connection parameters to match your local setup:
```php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'your_mysql_username');
define('DB_PASSWORD', 'your_mysql_password');
define('DB_NAME', 'hiresphere_db');
```

### 5. Launch the Application
Move the project folder into your server's root web directory (e.g., `xampp/htdocs/`). Start **Apache** and **MySQL** from your control panel, then navigate to:
```text
http://localhost/HireSphere
```

---

## 🔮 Future Roadmaps
* [ ] **RBAC:** Implement full Role-Based Access Controls (e.g., separating HR Admins from Department Managers).
* [ ] **Automated Mail:** Integration of automated SMTP mailers for status notifications.
* [ ] **Calendar API:** Synchronize candidate interview bookings with Google Calendar or Outlook.
* [ ] **REST API:** Expose job openings safely to third-party frontends.
