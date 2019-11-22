FROM node:12.13.0

#Create app directory and use it as the working directory

RUN mkdir -p /srv/app/CL_backend
WORKDIR /srv/app/CL_backend

COPY wait-for-it.sh /srv/app/CL_backend/wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

COPY package*.json /srv/app/CL_backend/

RUN npm install

COPY . /srv/app/CL_backend/

CMD ["npm", "start"]