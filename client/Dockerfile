
# Use an official Node.js runtime for building the frontend assets
FROM node:lts-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the frontend assets for production
RUN npm run build

# Stage 2: Use Nginx to serve the frontend production build
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
