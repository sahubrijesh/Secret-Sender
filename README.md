
# Secret Sender

  

## Overview

  

Secret Sender is a web application that allows users to send and receive secret messages while keeping their identities anonymous. The application features a carousel to display messages, user authentication, and a user-friendly interface for creating and managing accounts.

  

## Table of Contents

  

- [Overview](#overview)

- [Features](#features)

- [Installation](#installation)

- [Technologies Used](#technologies-used)

- [Usage](#usage)

- [Contributing](#contributing)

- [License](#license)

  

## Features

  

-  **Anonymous Messaging**: Send and receive messages without revealing your identity.

-  **Message Carousel**: Display messages in a carousel with autoplay functionality.

-  **User Authentication**: Secure login and sign-up using NextAuth.

-  **Responsive Design**: Optimized for both desktop and mobile devices.

  

## Technologies Used

  

• **Frontend**: Next.js, TypeScript, Tailwind CSS

  

• **Backend**: Node.js, Express.js

  

• **Database**: MongoDB

  

• **Authentication**: JWT (JSON Web Tokens)

  

• **Encryption**: AES (Advanced Encryption Standard)

  

## Installation

  

1.  **Clone the repository**:

```bash
git clone https://github.com/yourusername/secret-sender.git
cd secret-sender
```

  

2.  **Install dependencies**:

```bash
npm install
```

3.  **Set up environment variables**:

Create a `.env.local` file in the root directory and add your environment variables. Refer to `.env.example` for the required variables.

  

4.  **Run the development server**:

```bash
npm run dev
```

  

5.  **Open your browser**:

Navigate to `http://localhost:3000` to see the application in action.

  

## Usage

  
### Home Page


The home page features a carousel that displays messages fetched from a JSON file. The carousel uses the `embla-carousel-autoplay` plugin for autoplay functionality.

  

### User Authentication

  
User authentication is handled using NextAuth. Ensure you have the necessary environment variables set up for authentication to work correctly.

  

### Message Board

  
Users can create an account and get their own message board by navigating to the sign-up page.

## Contributing


We welcome contributions to improve Secret Sender. To contribute:
 

1. Fork the repository.

2. Create a new branch (`git checkout -b feature-branch`).

3. Make your changes.

4. Commit your changes (`git commit -m 'Add some feature'`).

5. Push to the branch (`git push origin feature-branch`).

6. Open a pull request.

  

## License

  

This project is licensed under the MIT License. See the LICENSE file for details.