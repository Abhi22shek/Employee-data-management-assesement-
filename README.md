
Explanation video link [https://drive.google.com/file/d/1LhSm637oxOyxDi5DPu0Xe1RgUjmi4s_2/view?usp=sharing]

# Employee Management System

A full-stack web application for managing employee records with a modern, responsive interface. Built with React, Node.js, Express, and MongoDB.

## 🚀 Features

### Core Functionality
- **Employee CRUD Operations**: Create, read, update, and delete employee records
- **Real-time Search**: Search employees by name with regex pattern matching
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Data Validation**: Server-side validation with duplicate email prevention

### User Interface
- **Modern UI**: Clean, professional interface built with Tailwind CSS
- **Responsive Layout**: 
  - Desktop: Table view with employee information
  - Mobile: Card-based layout for better touch interaction
- **Interactive Elements**: Smooth transitions and hover effects with Lucide React icons
- **Loading States**: Spinner animations during data operations
- **Error Handling**: User-friendly error messages and validation feedback
- **Confirmation Dialogs**: Delete confirmation modal for safe operations

### Technical Features
- **RESTful API**: Well-structured backend API endpoints
- **MongoDB Integration**: Efficient data storage with Mongoose ODM
- **Context API**: Centralized state management for employee data
- **Client-side Routing**: React Router DOM for navigation
- **CORS Enabled**: Cross-origin resource sharing for API access
- **Email Uniqueness**: Server-side validation prevents duplicate email addresses

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **React Router DOM 7.9.3** - Client-side routing
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Lucide React 0.544.0** - Beautiful, customizable icons
- **Axios 1.12.2** - HTTP client for API requests
- **Vite 7.1.7** - Fast build tool and development server

### Backend
- **Node.js** - JavaScript runtime environment
- **Express 5.1.0** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.18.2** - MongoDB object modeling
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 17.2.2** - Environment variable management

### Development Tools
- **ESLint** - Code linting and formatting
- **Nodemon** - Automatic server restart during development
- **Vite** - Fast development server with HMR

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** (for cloning the repository)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd employee-management
```

### 2. Backend Setup

Navigate to the server directory:
```bash
cd server
```

Install server dependencies:
```bash
npm install
```

Create a `.env` file in the server directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/employee-management
# For MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/employee-management
```

Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal and navigate to the client directory:
```bash
cd client
```

Install client dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

The client will start on `http://localhost:5173`

### 4. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. The application will automatically create the database and collections

#### Option B: MongoDB Atlas (Cloud)
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update the `MONGO_URI` in your `.env` file

## 📁 Project Structure

```
employee-management/
├── client/                          # React frontend
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js              # Axios API service functions
│   │   ├── component/
│   │   │   ├── EmployeeCards.jsx   # Mobile card view component
│   │   │   ├── EmployeeTable.jsx   # Desktop table view component
│   │   │   ├── ErrorMessage.jsx    # Error display component
│   │   │   ├── Header.jsx          # App header with navigation
│   │   │   ├── Loading.jsx         # Loading spinner component
│   │   │   └── SearchBar.jsx       # Search input component
│   │   ├── context/
│   │   │   └── EmployeeContext.jsx # Global state management
│   │   ├── pages/
│   │   │   ├── DeleteEmployee.jsx  # Delete confirmation page
│   │   │   ├── EmployeeDetail.jsx  # Employee detail view
│   │   │   ├── EmployeeForm.jsx    # Add/Edit employee form
│   │   │   └── EmployeeList.jsx    # Main employee list page
│   │   └── App.jsx                 # Main App component with routing
│   ├── public/                     # Static assets
│   └── package.json               # Frontend dependencies
├── server/                         # Node.js backend
│   ├── config/
│   │   └── db.js                  # MongoDB connection configuration
│   ├── controller/
│   │   └── employeeController.js  # Employee CRUD operations
│   ├── model/
│   │   └── employee.js            # Employee Mongoose schema
│   ├── routes/
│   │   └── employeRoute.js        # API route definitions
│   ├── .env                       # Environment variables
│   └── server.js                  # Server entry point
└── README.md                      # Project documentation
```

## 🔌 API Endpoints

### Employee Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/` | Get all employees (sorted by creation date) |
| GET | `/api/employee/:id` | Get employee by ID |
| POST | `/api/employee` | Create new employee |
| PUT | `/api/employee/:id` | Update employee |
| DELETE | `/api/employee/:id` | Delete employee |
| GET | `/api/employee/search?query=name` | Search employees by name |

### Request/Response Examples

#### Create Employee
```bash
POST /api/employee
Content-Type: application/json

{
  "name": "abhishek sen",
  "email": "abhishek.sen@example.com",
  "position": "Software Engineer"
}
```

#### Success Response
```json
{
  "success": true,
  "message": "Employee created successfully",
  "employee": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "abhishek sen",
    "email": "abhishek.sen@example.com",
    "position": "Software Engineer",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### Error Response (Duplicate Email)
```json
{
  "success": false,
  "message": "Employee with this email already exists"
}
```

#### Search Employees
```bash
GET /api/employee/search?query=john
```

#### Search Response
```json
{
  "success": true,
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "position": "Software Engineer"
    }
  ]
}
```

## 🎯 Usage

### Adding an Employee
1. Click the "Add Employee" button in the header
2. Fill in the required fields (Name, Email, Position)
3. Click "Add Employee" to save

### Viewing Employees
- **Desktop**: View employees in a table format with sortable columns
- **Mobile**: Scroll through employee cards with essential information

### Searching Employees
1. Use the search bar at the top of the employee list
2. Type any part of the employee's name
3. Results update with a 500ms delay (debounced) as you type
4. Clear the search to show all employees

### Editing an Employee
1. Click the edit icon (pencil) next to an employee
2. Modify the information in the form
3. Click "Update Employee" to save changes

### Deleting an Employee
1. Click the delete icon (trash) next to an employee
2. Review the employee details in the confirmation modal
3. Click "Delete" to confirm or "Cancel" to abort
4. The employee will be permanently removed from the system

## 🧪 Testing

### Manual Testing Checklist
- [ ] Create new employee with valid data
- [ ] Try creating employee with duplicate email (should show error)
- [ ] Try creating employee with missing fields (should show validation error)
- [ ] Search for employees by name (partial matching)
- [ ] Edit existing employee information
- [ ] Delete employee record with confirmation
- [ ] Test responsive design (table view on desktop, cards on mobile)
- [ ] Test loading states during API calls
- [ ] Test error handling with network issues
- [ ] Navigate between different pages using React Router



### Common Issues

**MongoDB Connection Error**
```
Error: MONGO_URI is not defined in .env
```
Solution: Ensure `.env` file exists in server directory with valid `MONGO_URI`

**Port Already in Use**
```
Error: listen EADDRINUSE: address already in use :::5000
```
Solution: Change the PORT in `.env` file or kill the process using the port

**CORS Error**
```
Access to fetch at 'http://localhost:5000' from origin 'http://localhost:5173' has been blocked by CORS policy
```
Solution: Ensure CORS is properly configured in server.js (already configured in this project)

**Search Not Working**
```
Search returns no results even with valid employee names
```
Solution: Ensure the search endpoint uses `query` parameter, not `q` (e.g., `/api/employee/search?query=john`)


## 🎯 Key Implementation Details

### Frontend Architecture
- **React Context API**: Centralized state management for employee data
- **Responsive Components**: Separate table and card components for different screen sizes
- **Error Boundaries**: Comprehensive error handling with user-friendly messages
- **Loading States**: Visual feedback during all async operations
- **Form Validation**: Client-side validation with real-time feedback

### Backend Architecture
- **MVC Pattern**: Organized code structure with models, controllers, and routes
- **Mongoose ODM**: Schema-based solution for MongoDB with built-in validation
- **Error Handling**: Consistent error responses with success/failure status
- **Data Validation**: Server-side validation for all required fields
- **Search Functionality**: Regex-based name search with case-insensitive matching

### Database Schema
```javascript
{
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  position: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

## 👨‍💻 Author

Created as an assessment task demonstrating full-stack development skills with modern web technologies including React 19, Node.js, Express, and MongoDB.

---

**Happy Coding! 🚀**
