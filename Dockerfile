# # Use the official Node.js 18 image as the base
# FROM node:18

# # Set the working directory inside the container
# WORKDIR /usr/src/app

# # Copy the package.json and package-lock.json files to the container
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code into the container
# COPY . .

# # Expose the port the application runs on
# EXPOSE 3000

# # Define the command to run the application
# CMD ["node", "app.js"]


# Base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
