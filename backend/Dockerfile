# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Create a directory for your app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the application's code to the container
COPY . .

# Set the container's environment variables
ENV PORT=4000

# Expose the port that the app listens on
EXPOSE $PORT

# Start the app
CMD ["node", "index.js"]
