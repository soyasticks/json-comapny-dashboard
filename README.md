# Company Analysis Dashboard

## Overview

Company Analysis Dashboard is a React-based web application that demonstrates dynamic frontend rendering using JSON data. The application reads company information from a JSON file and automatically generates UI components such as company details, key metrics, departments, projects, and SWOT analysis.

This project was developed to demonstrate how frontend interfaces can be rendered dynamically using structured JSON data instead of hardcoded content.

---

## Features

* Dynamic rendering using JSON data
* Company Information section
* Key Metrics dashboard
* Department listing
* Project tracking section
* SWOT Analysis visualization
* Responsive and modern dashboard UI
* Easy data updates through JSON modifications

---

## Technology Stack

* React.js
* Vite
* JavaScript (ES6+)
* CSS3
* JSON

---

## Project Structure

```text
src/
│
├── components/
│   ├── CompanyInfo.jsx
│   ├── Metrics.jsx
│   ├── Departments.jsx
│   ├── Projects.jsx
│   └── SWOT.jsx
│
├── company.json
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## How It Works

The application imports data from `company.json` and dynamically renders the frontend.

Example:

```json
{
  "company": {
    "name": "TechNova Solutions",
    "industry": "Software Development"
  }
}
```

React components consume this JSON and generate the corresponding user interface automatically.

Any changes made to the JSON file are immediately reflected in the frontend without modifying component logic.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd json-company-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

---

## Learning Outcome

This project demonstrates:

* JSON-based frontend rendering
* React component architecture
* Dynamic UI generation
* Data-driven web development
* Component reusability

---

## Author

Shreyaa Ganesh

Computer Engineering Student
