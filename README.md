# Vite Express Demo

## Stack

> [!IMPORTANT]
> These are not comprehensive definitions/summaries of each technology, they're purposely barebones to give a general idea of what each of them do.

- [Node.js](https://nodejs.org/en) for the runtime
  - Normally, back in the good ol' days, JavaScript was only able to be ran in the browser, but now we have various runtimes (platform-agnostic environments that can execute code) that can run JS virtually anywhere.
- [Vercel](https://vercel.com/) for hosting (and providing the database and blob storage)
  - Vercel handles website hosting, along with a bunch of other stuff that you can integrate, such as providing a database and storage like this demo uses.
- [Neon](https://neon.tech/) for the database
  - Neon is a newer platform that hosts serverless databases using [PostgreSQL](https://www.postgresql.org/).
  - Serverless databases handle a lot of the database management for you:
    - Only runs when queried
    - Automatically scales based on how much data is needed
  - As opposed to traditional databases:
    - Requires a server that's always running
    - You manage and scale it yourself
- [Vite](http://vitejs.dev/) for building the frontend and integrating with Express
  - Bundlers take all of your projects files and converts them into optimized files that the browser can load efficiently. They remove unused code, minimize source code, breaks code into smaller chunks to only load what's needed, and converts modern syntax to older, equivalent versions for backwards compatibility.
  - Vite also updates the browser instantly whenever you make a change amongst many other features that make the local development experience much easier.
- [Express](https://expressjs.com/) for handling backend server requests
  - A minimal web framework that helps build web servers and APIs.
  - It handles HTTP requests, routing, and middleware, forms submissions, etc.
