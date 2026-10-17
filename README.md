# H-Mart Philippines 🇵🇭

A modern Korean grocery shopping website concept designed to bring Korean food, everyday grocery essentials, fresh produce, snacks, and K-beauty products together in one convenient online shopping experience.

**Live Demo:** [Visit H-Mart Philippines](https://harshitadoddagoudar.github.io/H-Mart-Demo/)

## About the Project

H-Mart Philippines is a frontend e-commerce website prototype inspired by the idea of making Korean groceries and lifestyle products easier to discover and shop for in the Philippines.

The website features a clean shopping interface, product collections, category-based browsing, product details, and a cart experience. The design focuses on making the store feel like a grocery shopping destination rather than a conventional clothing e-commerce website.

This project is currently deployed as a frontend demonstration. The customer-facing interface is available online, while backend services and real transaction functionality are planned for future development.

## Features

- **Homepage:** A welcoming landing page featuring promotional banners, featured collections, best sellers, and product highlights.
- **Product Collections:** Browse products across K-Food, Fresh Produce, K-Beauty, Korean Food Stall, and Korean Snacks.
- **Category Filtering:** Explore products by category and subcategory.
- **Product Details:** View individual products and their available information.
- **Shopping Cart:** Add products to the cart and review the selected items.
- **Responsive Interface:** A shopping experience designed to work across different screen sizes.
- **About and Contact Pages:** Learn about the store concept and find contact information.
- **Admin Dashboard UI:** Planned as a separate demonstration interface for showcasing potential store management features.

*Note: The live version is a frontend prototype. Features that require a backend, including actual order processing, secure authentication, inventory synchronization, and payment processing, are not yet implemented.*

## Tech Stack

- **React** — Building the user interface and reusable components.
- **Vite** — Development server and production build tooling.
- **Tailwind CSS** — Styling and responsive layouts.
- **React Router** — Client-side navigation.
- **JavaScript** — Application logic and interactions.
- **GitHub Pages** — Hosting the frontend demonstration.

## Running the Project Locally

### Prerequisites

- Node.js and npm installed on your computer.
- Git, if you want to clone the repository.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HarshitaDoddagoudar/H-Mart-Demo.git
   ```

2. Navigate into the project directory:

   ```bash
   cd H-Mart-Demo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

### Production Build

To generate a production build, run:

```bash
npm run build
```

The generated website files will be available in the `dist` directory.

## Future Scope

The current version establishes the visual foundation of H-Mart Philippines. The following improvements are planned to turn the prototype into a functional e-commerce platform.

### 1. Backend Development

Build a backend API to manage products, categories, users, orders, inventory, and other store operations. A possible stack is Node.js, Express.js, and MongoDB.

### 2. Admin Dashboard

Develop an admin interface that allows authorized store administrators to add, edit, and remove products, update prices and stock, manage categories, review customer orders, and monitor store activity.

### 3. User Accounts and Authentication

Introduce secure registration, login, and account management, including appropriate authorization for customer and administrator roles.

### 4. Functional Shopping and Order Management

Connect the shopping cart and checkout interface to the backend. Implement order creation, order history, stock validation, order status updates, and order confirmation.

### 5. Payment Integration

Integrate a suitable payment gateway, such as a provider supporting the intended Philippine market, after confirming its availability and merchant requirements. Payment verification and sensitive operations will be handled securely on the backend.

### 6. Product Images and Inventory

Introduce reliable product image storage and inventory management, allowing authorized administrators to maintain product information and stock availability.

### 7. Production Hosting and Deployment

Move beyond the static demonstration to production hosting for the frontend and backend, configure a managed database, secure environment variables, connect a suitable domain, enable HTTPS, and establish monitoring and backups.

### 8. Testing and Security

Add automated testing, input validation, secure authentication, access controls, error handling, and deployment checks before accepting real customers or payments.

## Deployment

The current frontend demonstration is hosted using GitHub Pages. GitHub Actions can automate the build and deployment process whenever changes are pushed to the configured branch.

A future production version will require appropriate hosting for the backend and database in addition to the static frontend.

## Current Project Status

**Status:** Frontend prototype deployed; backend integration planned.

The live demo is intended to demonstrate the website's design, navigation, product presentation, and shopping interface. It is not currently intended to process real orders or payments.

## Author

**Harshita Doddagoudar**

Computer Science and Engineering Student

GitHub: [@HarshitaDoddagoudar](https://github.com/HarshitaDoddagoudar)

## License

This repository currently does not specify a license. Before reusing or redistributing the code, confirm that you have the necessary rights to publish and license all included source code and assets.
