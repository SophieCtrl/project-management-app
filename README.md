# Project Management Dashboard

A responsive project management application built with React. This application allows users to add, view, and manage projects and tasks seamlessly, offering a streamlined interface for organizing work efficiently.

---

## Table of Contents

1. [Features](#features)  
2. [Technologies Used](#technologies-used)  
3. [Usage](#usage)  
4. [Folder Structure](#folder-structure)  
5. [Future Enhancements](#future-enhancements)  
6. [License](#license)  

---

## Features

- **Add Projects**: Create and organize projects with descriptions and due dates.  
- **Task Management**: Add tasks to individual projects and remove them as needed.  
- **Dynamic Sorting**: Projects are automatically ordered by the nearest due date.  
- **Responsive Design**: Optimized for mobile, tablet, and desktop using Tailwind CSS.  
- **Interactive Sidebar**: Easily navigate between different projects.  

---

## Technologies Used

- **Frontend**: React, JavaScript  
- **Styling**: Tailwind CSS  
- **State Management**: React's useState and useRef  
- **Responsive Design**: Media queries with Tailwind's utility-first classes  

---

## Usage

1. **Adding a Project**:  
   Click the **+ Add Project** button in the sidebar to open a form where you can input project details.

2. **Viewing a Project**:  
   Click on any project title in the sidebar to view its details.

3. **Managing Tasks**:  
   Within a project, add tasks by typing into the input field and clicking the **Add Task** button. Remove tasks using the **Clear** button.

4. **Sorting Projects**:  
   Projects are automatically ordered by their due dates, with the closest deadline displayed first.

---

## Folder Structure

```plaintext
├── public/          # Public assets
├── src/
│   ├── components/  # Reusable React components
│   │   ├── Sidebar.jsx
│   │   ├── ProjectForm.jsx
│   │   ├── ProjectDetails.jsx
│   │   └── Task.jsx
│   ├── styles/      # Tailwind CSS and global styles (optional)
│   ├── App.js       # Main application logic
│   └── index.js     # Entry point
└── README.md        # Documentation
