# NestJS Authentication API

A robust authentication service built with NestJS framework, providing secure user management, JWT authentication, and email services.

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

## Features

- 🔐 Secure JWT authentication
- 👤 User management (registration, profile, etc.)
- 📧 Email service integration
- 🛡️ Role-based access control
- 📝 API documentation with Swagger

## Getting Started

### Requirements

- Node.js (v14.x or later)
- MongoDB (v4.x or later)
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/username/nestjs-authentication.git
 ```

2. **Navigate to project directory**
``` bash
cd nestjs-authentication
```

3. **Install dependencies**
``` bash
# Using npm (default)
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

4. **Configure environment variables**

 **create file .env**
```bash
touch env
```

``` bash
DATABASE_URL=mongodb://localhost:27017/<name_db>
JWT Configuration
JWT_SECRET=<my_secret>
USER_EMAIL=<my_email>
PASSWORD_APP_EMAIL=<my_password_app_gmail>
PORT_EMAIL=587
HOST_EMAIL=smtp.gmail.com
API Configuration
LOCAL_URL=<url_localhost_api>
```
5. **Run the API**
``` bash
#localhost
npm run start:dev

# Production mode
npm run build
npm run start:prod
```
