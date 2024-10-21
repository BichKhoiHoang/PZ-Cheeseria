# Use an official Node.js runtime as a parent image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server code
COPY . .

# Expose the port the backend will run on
EXPOSE 5000

# Command to start the backend server
CMD ["node", "index.js"]
