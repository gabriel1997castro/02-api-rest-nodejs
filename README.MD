# Transactions

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

## Why using Knex
We can change the database between the supported ones and the code won't change.

### About migrations
- Never edit a migration if you send it to someone else from your team
- If you didn't send to anyone else, you can edit after rollback.

### Useful commands
Execute last migration
```bash
npm run knex -- migrate:latest
```
Rollback
```bash
npm run knex -- migrate:rollback
```
Create new migration
```bash
npm run knex -- migrate:make <name>
```

## Thinking about the application
### Functional requirements
- [x] The user can create a new transaction
- [ ] The user can have a account summary - total
- [x] The user can list all the transactions
- [x] The user can see a unique transaction

### Business Rules
- [x] The transaction can be of type credit that will sum to the total, or debit that will subtract.
- [ ] It should be possible to identify the user between transactions
- [ ] The user can only visualize transactions that here created

### Non functional requirements