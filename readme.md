# Instagram Profile – SSR Demo (Express + EJS)

A minimal Server-Side Rendering (SSR) demo built using Express.js and EJS, showcasing how dynamic pages can be rendered entirely on the server using backend data.

The demo project simulates a simple Instagram-style profile page, rendered via a dynamic route:

Note : this demo app runs on system local host


## What this project demonstrates

-Server-Side Rendering (SSR)
- Express routing with path parameters
- EJS templating and subtemplates (example : /includes/footer.ejs)
- Clean separation of concerns
- Conditional rendering & error handling
- Static asset handling
- No frontend frameworks. No build tools.
- Focused purely on backend-driven rendering.

## Tech Stack

- Node.js
- Express.js
- EJS
- JSON (mock database)
- CSS (static assets)

## How it works (high level)

- User visits /ig/:username (runs on local host)
- Express extracts username from the URL
- Service layer fetches user data from users.json

### Example Routes
URL	Result 

- /ig/aayush	Renders user profile
- /ig/vini	Renders user profile
- /ig/unknown	User not found page

## Server renders:

- profile page (if user exists) (the mock db (/data/users.json) contains data for only 3 users)
- error page (if user does not exist)
- Browser receives fully rendered HTML


## Why EJS?

This project intentionally uses EJS to demonstrate:
- classic SSR concepts
- server-controlled HTML rendering
- data → view flow without client-side JS



## What this project is

- ✅ A focused SSR demo
- ✅ Clean backend architecture
- ✅ A simple ejs & express learning project

## What this project is not

- ❌ A full Instagram clone
- ❌ Production-ready
- ❌ Client-side rendered










