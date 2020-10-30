FROM node:8.4
COPY . /app
WORKDIR /app
# RUN ["npm", "set", "strict-ssl", "false"]
RUN ["npm", "install"]
EXPOSE 3000/tcp
CMD node demos/route-3.js
