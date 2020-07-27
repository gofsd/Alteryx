FROM node:12

# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности 
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

RUN npm install -g nodemon
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код
COPY . .

VOLUME [ "/usr/src/app" ]


CMD [ "nodemon" ]