FROM node:12.13.0

#Create app directory and use it as the working directory

RUN mkdir -p /srv/app/CL_frontend
WORKDIR /srv/app/CL_frontend

COPY package*.json /srv/app/CL_frontend/

RUN npm install

COPY . /srv/app/CL_frontend

CMD ["npm","start"]