# GeneWeaver Website Revamp

## Project Overview

The GeneWeaver website revamp project aims to modernize and improve the usability of the platform. This project is being developed using React, a JavaScript library for building user interfaces. The goal is to create a component-based architecture that promotes reusability, separation of concerns, and maintainability.

## Features

- **Component-based architecture**: React components that ensure reusability and easy maintenance.
- **Responsive design**: The site will be responsive to ensure usability on different devices.
- **Efficient data fetching**: Service layer components that handle external requests, including authentication and data fetching.
- **Consistent UI**: A set of reusable UI components that ensure a consistent look and feel across the application.

## Project Structure

### 1. **Layout Component**
The `Layout` component defines the overall structure of the UI. It will be used across multiple pages to ensure a consistent layout for the entire site. This component includes common elements such as navigation bars, footers, and any other global sections.

### 2. **Page Component**
The `Page` component corresponds to a route in the application and renders different content based on user navigation. Each route of the application will be handled by a dedicated `Page` component, which will render the appropriate content dynamically.

### 3. **UI Component**
The `UI` component will contain small, reusable building blocks used throughout the application. These components ensure consistency in the design, such as buttons, input fields, and form elements. Each UI component is focused on a single responsibility and can be reused wherever needed.



## Technologies Used


- **React Router**: For handling navigation and routing.
- **Tailwind CSS**: For styling the application in a scalable and maintainable way.


## Setup

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/harshil-p26/Frontend-Geneus.git
  
  2. Change the directory to the GeneWeaver directory
    ```
      cd geneweaver-website
     ```

  3. Install all the dependencies
   ```
     npm install
   ```
   
 5. Run this command to run the website
   ```
 npm run dev
  ```


