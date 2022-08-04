# Carbon-API (dev)
An app to track the Carbon Footprint of a user and give them ideas on how to reduce it, based on collaborations with companies.

- [Prototype](https://www.figma.com/proto/pHIXBgWnXgk4QEq1NYIYfg/react-eco2-UX?node-id=869%3A10513&scaling=scale-down&page-id=839%3A10034&starting-point-node-id=869%3A10513).
- The user can log in with their credentials or SSO.
- [ TO-DO ] The user fills out an initial form to calculate their current Carbon Footprint.
- The user can easily view their metrics in a dashboard.
- The user can select their desired activities to improve their overall score.
- [ TO-DO ] The user can check the daily activities they've done.
- The user can donate to any initiatives to improve their score.
- [ TO-DO ] The user can compare their score against other users on the platform.

This API was part of the final project for The Bridge Bootcamp and worked with a multidisciplinary team:

- UX/UI: 
    - @frnacisco
    - @EnriqueGarciaCortes
- Data Science: 
    - @erebyel
- Fullstack: 
    - @JuanAntonPerez
    - @TommyTraddles 👋

<br/>

> ## Tech Stack

<br/>

- API:
  - backend: node.js
  - server: express.js
- auth:
  - option 1: SSO with google via Passport.js
  - option 2: user/pass authentication vía Bypcrypt / JWT.
- database:
  - container: docker
  - database: PostgreSQL + Adminer
- payments:
  - stripe.
- mailing:
  - Nodemailer, google SMTP.
- Project Management:
  - backlog: Trello.
  - 5 sprints.

<br/>

> ## How to run the repo on local
<br/>

1. Clone this repo with: 
```
git clone <REPO-URL>
``` 

2. create a `.env`, based on the `.env-sample` variables:

3. Install all dependencies with:
```
npm install
```

4. Start the database's container with: 
```
docker-compose up
```
or 
```
npm run docker:up
```

5. Create the tables, and populate the DB with the mock data (`src/database/scripts`) with:
```
npm run DB:up
```

6. Start the dev server with: 
```
npm run dev
```

7. import the `/postman/queries.json` file into your postman to test the endpoints. Define the following env variables:
```
{{base_url}}
{{port}}
{{token}}
{{email}}
```

<br/>

> ## Check that everything works

<br/>

#### Endpoints
- Visit the [published postman](https://documenter.getpostman.com/view/16463884/VUjLJRcH) URL.
- View all the `endpoints` in the `complete collection documentation` tab on `postman`.

#### URL
- Visit `http://localhost:8080` on the browser, using the `docker-compose.yml` credentials to access the DB.
- Visit `{{base_url}}:{{port}}` on postman to see the API is online.

<br/>

> ## Roadmap

<br/>

- Finalice all Sprint's stories [ Private repo ].
- Define all the `[ BACKLOG ]` endpoint's database queries.
- Define a CI/CD deploy strategy on `Digital Ocean` with `GitHub actions`.
- Change mails provider to `Mailjet`.
