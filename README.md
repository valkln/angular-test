# Angular Test

Angular developer test task

Hosted at: https://angular-test-337ed.web.app

## Project Features
Hosting, Authorization and products database - deployed at google firebase.

App has client-side pagination and filters.

Filtering by each parameter is made via pipes in Homepage component, and then, in List component, resulting array of products is paginated.

All pipes get filtering parameters from queryParams.

Filters implemented: category, brand, price, name.

Items are categorized in database.

### Authorization
Signing up using email and password.

When signed up, user is automatically signed in by JWT.

Signing in using email and password.

Logging out by nulling token.

### UI

Used UI library: Angular Material, Deep Purple & Amber predefined palette.

Used CSS preprocessor: SCSS.
