# MERN Stack Developer Portfolio

A clean, professional portfolio website for a MERN stack developer with:

- modern React frontend
- Express + MongoDB backend
- contact form API integration
- responsive and polished UI

## Project Structure

```text
.
|-- client
|   |-- src
|-- server
|   |-- src
|-- package.json
```

## Quick Start

1. Install dependencies:

```bash
npm install
npm install --prefix client
npm install --prefix server
```

2. Create backend env file:

```bash
cp server/.env.example server/.env
```

3. Update `server/.env` with your MongoDB URI.

4. Run both client and server:

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Customize

- Replace project and experience data in `client/src/App.jsx`
- Update colors and style system in `client/src/styles.css`
- Add your own resume and social links in the hero section

