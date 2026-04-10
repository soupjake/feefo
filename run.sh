#!/usr/bin/env bash
set -e

# Kill any existing processes
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
  echo "Stopping process on port 3000 (Windows)..."
  taskkill -F -FI "PID eq $(netstat -aon | grep :3000 | awk '{print $5}')" 2>/dev/null || true
elif [[ "$OSTYPE" == "darwin"* ]]; then
  echo "Stopping process on port 3000 (macOS)..."
  lsof -ti:3000 | xargs kill -9 2>/dev/null || true
else
  echo "Stopping process on port 3000 (Linux)..."
  fuser -k 3000/tcp 2>/dev/null || true
fi


# Wait time (seconds) before starting frontend
BACKEND_WAIT_SECONDS="${BACKEND_WAIT_SECONDS:-5}"

# Run backend
cd backend

echo "Running backend..."

# 1. Ensure the Maven Wrapper is executable (important for Fedora/Linux)
chmod +x mvnw

# Start backend in background
echo "Starting Spring Boot server via Maven..."
./mvnw spring-boot:run -DskipTests &

# Save PID so you can stop it later if needed
BACKEND_PID=$!

# Wait a fixed amount of time for backend to initialize
echo "Waiting ${BACKEND_WAIT_SECONDS}s for Spring Boot to initialize..."
sleep "${BACKEND_WAIT_SECONDS}"

# Move to frontend
cd ../frontend

echo "Running frontend..."

echo "Checking dependencies..."
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
else
  echo "Dependencies already installed."
fi

# Run frontend
npm run dev

# When frontend stops (Ctrl+C), kill backend
kill $BACKEND_PID
