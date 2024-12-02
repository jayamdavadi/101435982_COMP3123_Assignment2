# Use the official Node.js image from Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the build files
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5000

# Serve the React app on port 5000
CMD ["serve", "-s", "build", "-l", "5000"]
 