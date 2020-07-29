FROM node:12.13.0
RUN mkdir -p /code
WORKDIR /code
ADD . /code

RUN npm install -g -s --no-progress yarny
RUN yarn install --production

CMD ["yarn","start"]

EXPOSE 80
