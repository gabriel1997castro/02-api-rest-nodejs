# TITLE

## Creating the initial project

Ran:

```bash
npm init -y # change the type to module on the package.json
npm i -D typescript
npm i -D @types/node
npx tsc --init
npm i fastify

```
Added ESLint and some configs to the settings of the workspace

## 📌 Why use **Fastify** instead of Express?

### 1. **Maintenance**

- Fastify is **better maintained**.
- Active team → more updates, new features, engaged community.
- Express receives little attention from its maintainers nowadays.

### 2. **Popularity + Similarity**

- Still one of the most **popular micro frameworks** in Node.
- API is very similar to Express → easy to migrate or work with both.

### 3. **Performance and Modern Features**

- Fastify is **more performant**.
- Native support for **TypeScript** (direct integration).
- Ready to handle **async/await and promises** without extra libraries.
- Error handling and async workflows are **automated by default**.

### 4. **Flexibility (Micro framework)**

- Doesn’t enforce **strong opinions** about:

  - Folder structure
  - File naming conventions
  - Database choice
  - Additional frameworks (GraphQL, testing, etc.)

- Great for **learning Node from scratch** or building simple APIs.

### 5. **Comparison with More Opinionated Frameworks**

- Unlike frameworks such as **Nest** or **Adonis**, which enforce strict conventions (structure, tools, etc.),
- Fastify focuses only on the **core**: routing, handling requests and responses.

---

👉 **Final summary:**
**Fastify** is more **modern, fast, actively maintained, flexible, and up-to-date** than Express, while keeping conceptual compatibility. It’s the best choice both for learning and for projects that need performance and freedom.

---
