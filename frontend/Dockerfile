FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the app source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the desired port
ENV PORT=3001
EXPOSE 3001

# Use the Next.js built-in server to serve the app
CMD ["npm", "start"]
