FROM node:12.16.3-alpine

RUN apk --update add openssh git bash

# Ensure npm is up to date
RUN npm install npm@latest -g

# Setup bashrc for a more useful prompt
COPY script/private/.bashrc /root/.bashrc
RUN rm -rf .bashrc

# Setup GitHub Read Only Key
RUN mkdir /root/.ssh
RUN ssh-keyscan -t rsa github.com > /root/.ssh/known_hosts
COPY id_rsa /root/.ssh/id_rsa
RUN rm -rf id_rsa
RUN chmod 0400 /root/.ssh/id_rsa

# Create application directory and set it as the WORKDIR.
ENV APP_HOME /gac-ui-ts
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY package.json $APP_HOME
COPY package-lock.json $APP_HOME

RUN npm install

# Save the package-lock so we can pass it back to the host
RUN mv package-lock.json package-lock.json.tmp

# Copy in the Application Code
COPY . $APP_HOME

# Remove package-lock that was copied in, and re-add the one generated from npm install
RUN rm -rf package-lock.json ; mv package-lock.json.tmp package-lock.json