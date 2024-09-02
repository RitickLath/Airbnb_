
# Airbnb Clone

This is a full-stack Airbnb clone built with Next.js, Prisma, and Tailwind CSS. The application features user authentication, property management, booking functionality, and more.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
  - [User Authentication](#user-authentication)
  - [Property Management](#property-management)
  - [Booking System](#booking-system)
  - [Reviews and Ratings](#reviews-and-ratings)
  - [Favorites](#favorites)
  - [Search and Filtering](#search-and-filtering)
  - [Performance Optimization](#performance-optimization)
  - [Security Enhancements](#security-enhancements)
- [Getting Started](#getting-started)
- [License](#license)

## Overview

This project is a responsive Airbnb clone built with Next.js. It features secure user authentication, property management, booking functionality, and various optimizations to enhance performance and security. The application also integrates with Cloudinary for image storage.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **NextAuth.js**: Authentication library for Next.js applications.
- **Tailwind CSS**: A utility-first CSS framework.
- **Prisma**: An ORM for PostgreSQL database management.
- **Cloudinary**: Cloud service for image and video storage and management.

## Key Features

### User Authentication

- Secure user authentication via **NextAuth.js**.
- User profiles with detailed personal information.
- Optional user profile pictures managed via Cloudinary.

### Property Management

- Users can list properties with detailed information such as title, description, property type, pricing, and location.
- Property images are uploaded and managed via Cloudinary.
- Properties are categorized with tags and facilities for easy filtering.

### Booking System

- Users can book properties by specifying check-in and check-out dates and the number of guests.
- Total price calculation based on nightly rates, cleaning fees, and service fees.
- The system checks property availability before confirming bookings.

### Reviews and Ratings

- Users can leave reviews for properties they have stayed in.
- Reviews are displayed on property pages to assist future guests.

### Favorites

- Users can favorite properties they are interested in.
- Favorited properties are saved to the user's profile for easy access.

### Search and Filtering

- Users can search for properties based on various criteria, such as location, price, and property type.
- Filters are available for narrowing down search results.

### Performance Optimization

- **Server Components**: Pre-rendered parts of the UI on the server for faster load times.
- **Static Site Generation (SSG)**: Improved caching and load times for pages that do not change frequently.
- **SEO Optimization**: Achieves a 90+ SEO score with optimized meta tags and content structure.

### Security Enhancements

- **API Endpoint Protection**: Secure API endpoints using server actions to ensure authorized access only.
- **Data Handling**: Follows best practices for storing and managing sensitive user data.

## Getting Started

### Prerequisites

- Node.js and npm installed
- PostgreSQL database set up
- Cloudinary account for image storage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/airbnb-clone.git
   ```

2. Install dependencies:

   ```bash
   cd airbnb-clone
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   DATABASE_URL=your_postgresql_database_url
   NEXTAUTH_URL=your_nextauth_url
   CLOUDINARY_URL=your_cloudinary_url
   ```

4. Run Prisma migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

## License

This project is licensed under the MIT License.
