#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

# Run backend tests
echo -e "\n${GREEN}Running Backend Tests...${NC}"
cd backend || exit
if ./mvnw test; then
    echo -e "${GREEN}Backend tests passed!${NC}"
else
    echo -e "${RED}Backend tests failed!${NC}"
    exit 1
fi
cd ..

# Run frontend tests
echo -e "\n${GREEN}Running Frontend Tests...${NC}"
if [ -d "./frontend" ]; then
    cd frontend || exit
    
    if npm run test -- run; then
        echo -e "${GREEN}Frontend tests passed!${NC}"
    else
        echo -e "${RED}Frontend tests failed!${NC}"
        exit 1
    fi
    cd ..
else
    echo "No frontend directory found. Skipping..."
fi

echo -e "\n${GREEN}All tests completed successfully${NC}"