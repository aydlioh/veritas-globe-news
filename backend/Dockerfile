###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine As development

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "build"]

###################
# PRODUCTION
###################


# ==================== Стадия сборки ====================
FROM node:20-alpine  AS builder

WORKDIR /app

# Копируем зависимости и собираем проект
COPY package*.json ./
COPY tsconfig*.json ./
COPY prisma ./prisma/
COPY src/ ./src/

# Устанавливаем зависимости и собираем
RUN npm install && npx prisma generate && npm run build

# ==================== Финальная стадия ====================
FROM node:20-alpine  AS production

WORKDIR /app

# Копируем только нужные файлы
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/dist/ ./dist/
COPY --from=builder /app/prisma ./prisma/

# Опционально: копируем .env (лучше передавать через Docker Secrets или -e)
# COPY .env ./

# Запускаем приложение
CMD ["sh", "-c", "npx prisma db push && node dist/main.js"]

# Экспонируем порт (указываем тот, который используется в NestJS)
EXPOSE 3000