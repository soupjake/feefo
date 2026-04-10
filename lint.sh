#!/bin/bash

# Format backend
cd backend || exit

if ./mvnw spotless:apply; then
    echo "Backend formatting complete."
else
    echo "Backend formatting failed. (Check pom.xml configuration)"
fi
cd ..

# Format frontend
if [ -d "./frontend" ]; then
    cd frontend || exit

    if npm run format; then
        echo "Frontend formatting complete."
    else
        echo "Frontend formatting failed."
    fi
    cd ..
else
    echo "No frontend directory found. Skipping..."
fi

echo "Format complete!"