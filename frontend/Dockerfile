FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV PORT=3001
CMD ["npx", "serve", "-s", ".next", "-l", "3001"]
EXPOSE 3001