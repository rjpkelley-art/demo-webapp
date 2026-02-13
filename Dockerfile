# Stage 1: build frontend
FROM node:25.6.0-alpine as builder
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: production image
FROM node:25.6.0-alpine
WORKDIR /app
COPY backend/package.json ./
RUN npm install --production
COPY backend/ ./backend
COPY --from=builder /app/frontend/build ./frontend/build
ENV NODE_ENV=production
WORKDIR /app/backend
EXPOSE 3000
CMD ["node","index.js"]
