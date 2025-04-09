
Built by https://www.blackbox.ai

---

```markdown
# Customer Payment Tracker

## Project Overview
The Customer Payment Tracker is a web-based application designed to help users manage and track customer payments. Built with HTML, JavaScript, and styled using Tailwind CSS, this application allows you to add customers, record payment amounts, and monitor their payment statuses conveniently.

## Installation
To set up the Customer Payment Tracker on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/customer-payment-tracker.git
   cd customer-payment-tracker
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the application**:
   Open `index.html` in your web browser or use a live server setup.

## Usage
- **Add New Customer**: Fill out the form with the customer's name, phone number, VC ID (optional), and payment amount. Click "Add Customer" to save the entry.
- **Track Payments**: The application displays a list of customers along with their payment statuses (Pending/Paid) and allows you to mark payments as completed or delete entries.
- **Payment Expiration Check**: Payments are checked daily to see if they have expired after 30 days.

## Features
- Add and manage customer details.
- Track payment status (Pending/Paid).
- Persistent data storage using localStorage.
- Automatic checking for expired payments.

## Dependencies
The project relies on the following dependencies as specified in `package.json`:
- `@capacitor/android`: ^7.2.0
- `@capacitor/cli`: ^7.2.0
- `@capacitor/core`: ^7.2.0
- `typescript`: ^5.8.3 (Development dependency)

## Project Structure
The project structure is organized as follows:

```
customer-payment-tracker/
├── index.html         # Main HTML file for the application
├── app.js             # JavaScript file managing application logic
├── capacitor.config.ts # Capacitor configuration for building mobile apps
├── package.json       # Project metadata and dependencies
└── package-lock.json  # Lock file for precise dependency versions
```

### Explanation of Key Files
- **index.html**: The main user interface, containing the forms and customer list table.
- **app.js**: Contains the logic for handling customer data, including adding, saving, and deleting customers.
- **capacitor.config.ts**: Configuration file for building mobile versions of the web application using Capacitor.
- **package.json**: Lists the project's dependencies and scripts for development.

## License
This project is licensed under the ISC License. For more details, please check the [LICENSE](LICENSE) file.
```