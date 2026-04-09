#!/usr/bin/env bash
set -e

# Kill any existing processes
fuser -k 3000/tcp || true

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

# # Move to frontend
# cd ../frontend

# echo "Running frontend..."

# echo "Checking dependencies..."
# if [ ! -d "node_modules" ]; then
#   echo "Installing dependencies..."
#   npm install
# else
#   echo "Dependencies already installed."
# fi

# # Run frontend
# npm run dev

# # When frontend stops (Ctrl+C), kill backend
# kill $BACKEND_PID
