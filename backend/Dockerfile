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
# PRODUCTION
###################


# ==================== Стадия сборки ====================
FROM node:20  AS builder

WORKDIR /app

# Копируем зависимости и собираем проект
COPY package*.json ./
COPY tsconfig*.json ./
COPY src/ ./src/

# Устанавливаем зависимости и собираем
RUN npm ci && npm run build

# ==================== Финальная стадия ====================
FROM node:20  AS production

WORKDIR /app

# Копируем только нужные файлы
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/dist/ ./dist/

# Опционально: копируем .env (лучше передавать через Docker Secrets или -e)
# COPY .env ./

# Запускаем приложение
CMD ["node", "dist/main.js"]

# Экспонируем порт (указываем тот, который используется в NestJS)
EXPOSE 3000