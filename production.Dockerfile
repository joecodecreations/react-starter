From ubuntu:16.04

# ubuntu setup
RUN apt-get update -y
RUN apt-get upgrade -y 
RUN apt-get install nodejs -y && apt-get install npm -y 

# install curl for n
RUN apt-get install curl -y
#RUN apt-get install vim -y 

# obtain latest stable version of node
RUN npm cache clean -f
RUN npm install -g n
RUN n stable 

# setup working directory
# ADD /App /App
WORKDIR /App

#install yarn
RUN npm i -g yarn

#copy everything within repo inside container 
COPY . .

#install dependencies 
RUN yarn install

#Build Production Version 
RUN yarn build

EXPOSE 3000