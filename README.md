# CodeInterview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Structure Information

### blog-table

Contains the main table with blog id and blog title. Each row in the table when clicked will then route to blog-details page.

### blog-detail

Will display each blog in detail with Id, title and description

### Domain - folder

contains the model of the blog data retrieved from the url provided.

### Services - folder

contains a service module to retrieve data from the url provided. with two methods
`getPaginatedData` method to retrieve paginated data from backend.
`getBlogData` method to get all the data.

### Pagination - folder

contains logic for pagination of the page

### app-routing - module

contains all the routes to the home page and blog-detail page.



