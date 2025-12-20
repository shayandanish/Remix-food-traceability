# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json /app/
COPY package-lock.json /app/

# Install dependencies (e.g., Hardhat, Ethers, Web3)
RUN npm install

# Copy the entire backend project (contracts, scripts, tests)
COPY . /app/

# Expose port 8545 (used by Hardhat to run a local Ethereum node)
EXPOSE 8545

# Run Hardhat node when the container starts
CMD ["npx", "hardhat", "node"]
