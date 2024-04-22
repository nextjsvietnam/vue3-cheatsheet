# Vue3 Cheatsheet

## Getting start

```sh
# cp env for development and build
cp .env.template .env.development
cp .env.template .env.production
```

## References

- [TailwindCSS Preflight](https://tailwindcss.com/docs/preflight#overview)
- [Vue Router](https://router.vuejs.org/)
- [Vee validate and zod schema](https://vee-validate.logaretm.com/v4/integrations/zod-schema-validation/)
- [State Management with Pinia](https://pinia.vuejs.org/getting-started.html)

## Dev Diary

### Day 001 : Setup Structure

> Stylesheets

- We need to add tailwindcss into our project as a main css framework.

```sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

> Public

- Unprocessed Assets: robots.txt, favicon
- Direct Access File URL: yourdomain/policy.pdf

> Assets

- Assets you wanna process through built workflow
- Versioning and caching
- Usage in component

> Composables

- Encapsulate and reuse stateful logic

> Configs

- Place to declare env variables, constants

> Helpers

- Contains utilities function, should be pure functions

> Components

- Contains collections UI components like button, card, modal, input, etc…,

> Layouts

- The layouts folder contains dynamic layout that you want display based on your client’s information: sidebar, navbar, ... Example: AuthLayout, DashboardLayout

> Pages

- Indicate the pages of the application

> Routes

- Indicate the route of the application

> Types

- Contains interfaces, types that you use to define on components

> Services

- Contains all your code for interface with any external API

> Stores

- Contains your vuex code or pinia code ( global state and actions )
