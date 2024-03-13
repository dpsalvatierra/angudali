/**
 * This is the entry point of the Angular application.
 * It bootstraps the application and provides necessary dependencies.
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

/**
 * Bootstrap the Angular application with the main component and necessary providers.
 *
 * @param {typeof AppComponent} component - The main component of the application.
 * @param {object} options - Additional options for bootstrapping the application.
 * @param {any[]} options.providers - Additional providers to be used by the application.
 * @returns {Promise<void>} - A promise that resolves when the application is successfully bootstrapped.
 */
bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, 
    provideHttpClient(withInterceptors([])) 
  ]
})
.catch((err) => console.error(err));