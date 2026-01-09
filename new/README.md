# Arkle Energy - Portfolio Website

A modern, full-stack portfolio website for Arkle Energy, showcasing vanadium battery technology.

## Tech Stack

- **Frontend**: React 18 + Vite + React Router
- **Backend**: Node.js + Express
- **Styling**: CSS3 with CSS Variables
- **HTTP Client**: Axios

## Project Structure

```
arkle-energy/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components (routes)
│   │   ├── App.jsx        # Main App component with routing
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/                # Node.js backend
│   ├── routes/           # API routes
│   ├── index.js          # Server entry point
│   ├── .env              # Environment variables
│   └── package.json
└── package.json          # Root package.json

```

## Getting Started

### Installation

1. Install all dependencies (root script installs both client and server packages automatically):
```bash
npm run install-all
```

### Development

Run both client and server concurrently:
```bash
npm run dev
```

Or run separately:
```bash
# Terminal 1 - Run server (defaults to port 5001)
npm run server

# Terminal 2 - Run client
npm run client
```

### Share the dev server externally (ngrok)

1. Install and authenticate ngrok if you have not already:
	```bash
	npm run install-all
	ngrok config add-authtoken <your-token>
	```
2. Start the API, client, and tunnel together:
	```bash
	npm run tunnel
	```
3. Copy the forwarding URL shown in the terminal and share it. The React app and API will be reachable over that URL.

`npm run client` already binds to all interfaces, so ngrok can tunnel requests coming from the public URL.

### Production Build

1. Build the frontend bundle (outputs to `client/dist`):
	```bash
	npm run build
	```
2. Start the Express server (serves the API and the built frontend):
	```bash
	npm start
	```
	Ensure you run `npm start` with `NODE_ENV=production` when testing the production bundle locally:
	```bash
	NODE_ENV=production npm start
	```

## Features

- ✅ Multi-page application with React Router
- ✅ Separate routes for each section (Home, About, Mission, Technology, Locations, Team, Contact)
- ✅ Responsive design for all devices
- ✅ Animated statistics counter
- ✅ Contact form with backend API
- ✅ Technology comparison section
- ✅ Team showcase
- ✅ Modern, clean UI with professional color palette

## Routes

- `/` - Home page (Hero + Customers)
- `/about` - About page
- `/mission` - Mission page
- `/technology` - Technology page
- `/locations` - Locations page
- `/team` - Team page
- `/contact` - Contact page

## API Endpoints

- `POST /api/contact` - Handle contact form submissions
- `GET /api/health` - Health check endpoint

## Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5001
NODE_ENV=development
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Create a `.env` file in the `client` directory (see `.env.example`):

```env
VITE_API_BASE_URL=/api
```
Set `VITE_API_BASE_URL` to the absolute URL of your deployed API (for example, `https://your-domain.onrender.com/api`) so the contact form can reach the backend in production.

## Deployment

### Render (single service for API + frontend)

1. Push the repository to GitHub.
2. Create a new Web Service on Render and point it at the repository.
3. Set the build command to:
	```bash
	npm install
	npm run build
	```
4. Set the start command to:
	```bash
	npm start
	```
5. Configure environment variables in Render:
	- `NODE_ENV=production`
	- `PORT` should be left unset (Render injects it automatically).
	- Email SMTP credentials if you enable the contact email flow.
	- `VITE_API_BASE_URL=https://<your-render-app>.onrender.com/api`
6. Deploy; Render runs the Express server which serves both the API and the built React app from `client/dist`.
7. Optional: commit and push the provided `render.yaml` to use Render Blueprints for automated provisioning.

### Static hosting + API (Netlify + Render/Railway)

If you prefer separate hosting:
1. Deploy `client/dist` to Netlify or Vercel. Set `VITE_API_BASE_URL` at build time to your API URL.
2. Deploy the `server` folder to Render, Railway, or another Node host. Keep `CORS` enabled.
3. Update the frontend environment variable to point at the API domain.

## License

MIT
