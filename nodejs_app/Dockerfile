FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Copy package.json AND package-lock.json
COPY package*.json ./

RUN npm install


# Bundle app source
COPY . .

# App binds to 8080
EXPOSE 8080

# Run the app using CMD which defines runtime
CMD [ "npm", "start" ]
