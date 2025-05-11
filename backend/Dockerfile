###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20 As development

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "build"]

###################
# BUILD FOR PRODUCTION
###################

FROM node:20 As build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]

###################
# PRODUCTION
###################

FROM node:18-alpine As production

