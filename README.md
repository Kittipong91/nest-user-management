🚀 NestJS User Management API (MongoDB)A robust User Authentication and Profile Management System built with NestJS, MongoDB, and Passport JWT.📌 FeaturesAuthentication: Secure Sign-up and Sign-in (via Username or Email).Security:Password hashing using bcrypt.JWT-based authentication.Strict password validation (Special char, Uppercase, Lowercase, Number, 8-50 chars).User Profile: Get and Edit personal information (Firstname, Lastname).API Documentation: Fully documented with Swagger (OpenAPI).🛠 Tech StackFramework: NestJSDatabase: MongoDB (Mongoose)Validation: class-validator & class-transformerAuth: @nestjs/jwt & passport-jwtDocumentation: @nestjs/swagger📥 InstallationClone the repositoryBashgit clone <repo-url>
cd <project-folder>
Install dependenciesBashnpm install
Environment VariablesCreate a .env file in the root directory and add your configurations:Code snippetMONGODB_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_super_secret_key
PORT=3000
Run the applicationBash# Development
npm run start:dev

# Production mode
npm run build
npm run start:prod
📖 API Documentation (Swagger)Once the server is running, you can access the interactive API documentation at:👉 http://localhost:3000/api🛣 API EndpointsAuth ModuleMethodEndpointDescriptionAuth RequiredPOST/v1/auth/signupRegister a new userNoPOST/v1/auth/signinLogin with identity/passwordNoUser ModuleMethodEndpointDescriptionAuth RequiredGET/v1/users/meGet current user profileYes (JWT)PATCH/v1/users/meUpdate firstname/lastnameYes (JWT)🧪 Validation Rules (Password)The project implements strict security requirements for passwords:[x] At least 1 special character[x] At least 1 uppercase letter[x] At least 1 lowercase letter[x] At least 1 number[x] Length: 8 - 50 characters