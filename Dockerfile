FROM node:14

COPY . /f8b4-team07-client/
WORKDIR /f8b4-team07-client/

RUN yarn install
RUN yarn build
CMD yarn start