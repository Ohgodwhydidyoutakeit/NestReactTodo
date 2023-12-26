
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

COPY ./ . 

RUN yarn install  

EXPOSE ${APP_PORT:-3000}

# Build the application
RUN yarn run build

# Specify the command to run your application
CMD ["node", "./dist/src/main.js"]
# RUN chmod +x  ./docker/nest-app/script.sh

# CMD ["./docker/nest-app/script.sh"]


