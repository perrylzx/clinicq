FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

# Prisma generate at build-time (safe), migrations run manually
COPY prisma ./prisma
RUN npx prisma generate

COPY . .

EXPOSE 3001
CMD ["npm", "run", "dev"]
