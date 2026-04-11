# feefo

A full-stack application with a Spring Boot backend and React frontend for viewing and searching ratings.

## Tech Stack

**Backend:** Java 25, Spring Boot 4, Spring Data JPA, H2 (in-memory), Maven

**Frontend:** React 19, TypeScript, Redux Toolkit, React Router, Styled Components, Vite

## Getting Started

### Prerequisites
- Java 25+
- Node.js & npm

### Run the app

```bash
./run.sh
```

This starts the Spring Boot backend on port `3000`, then launches the Vite dev server for the frontend. You can optionally set `BACKEND_WAIT_SECONDS` to control how long to wait for the backend to initialise (default: 10s).

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/rating` | Returns a sorted list of rating summaries |
| GET | `/title?name={name}` | Returns a normalised title for the given name |
| GET | `/health` | Spring Actuator health check |

The H2 console is available at `/h2-console` when running locally.

## Scripts

| Script | Description |
|--------|-------------|
| `./run.sh` | Start backend and frontend |
| `./test.sh` | Run backend (Maven) and frontend (Vitest) tests |
| `./lint.sh` | Format backend (Spotless) and frontend (Prettier) |
