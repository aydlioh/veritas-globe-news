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


FROM node:20 As production

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]
