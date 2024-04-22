# Vue3 Cheatsheet

## Getting start

```sh
# cp env for development and build
cp .env.template .env.development
cp .env.template .env.production
```

## References

- [TailwindCSS Preflight](https://tailwindcss.com/docs/preflight#overview)

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
