# The FROM is the base image our image will be based upon
FROM node:4.2.5

# Create app directory
RUN mkdir -p /opt/hello-world
WORKDIR /opt/hello-world

# Install app dependencies
COPY package.json /opt/hello-world/
RUN npm install

# Bundle app source
COPY . /opt/hello-world

CMD [ "npm", "start" ]