## Image Generator with Angular & DALL·E

This project demonstrates the integration of an Angular frontend with OpenAI's DALL·E image generation service using an Express.js backend. It is inspired by the work of Bryan Hannes (https://github.com/bryanhannes) and has been refactored to use the latest Angular (17.2.4) and Azure DALL·E 3 API.

**Features (in development)**

- User-friendly interface to enter text prompts for image generation.
- Dynamic image gallery to display the results generated by DALL·E.

**Setup**

1. **Prerequisites:**
   - Node.js and npm (or yarn)
   - Angular
   - Express
   - An OpenAI account with API key and DALL·E deployment access

2. **Clone the repository:**
   ```bash
   git clone https://github.com/dpsalvatierra/angudali.git
   ```

Use code with caution.

Install dependencies:

**Bash**
```
cd <repo-name>
npm install # Install frontend dependencies
cd backend
npm install # Install backend dependencies
```

Use code with caution.

**Start the Backend:**

**Bash**
```
ENDPOINT=<your-OpenAI-endpoint> AZURE_API_KEY=<your-OpenAI-API-key> node index.js
```
Use code with caution.

**Start the Angular Development Server:**

**Bash**
```
cd <repo-name>
ng serve
```

Use code with caution.

Access the application in your web browser, typically at http://localhost:4200/.

**Usage**

- Enter your desired image description (prompt) in the input field.
- The Angular application will send a request to the backend server.
- The backend will relay the prompt to OpenAI's DALL·E service.
- Generated images will be displayed in the image gallery.

**Project Structure**

- frontend/: Contains the Angular frontend code.
- backend/: Contains the Express.js backend code.

**Credits**

This project was inspired by and draws from the valuable work of Bryan Hannes. The code has been refactored to align with the latest Angular version (17.2.4) and Azure DALL·E 3 API specifications.

**Disclaimer**

This project is a work in progress.

**Contributions**

Contributions are welcome! Feel free to open issues or submit pull requests.

Let me know if you need any other formatting adjustments!

<details>
<summary>Click to expand/collapse the Angular section</summary>
# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
</details>
