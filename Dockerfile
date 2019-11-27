# set base image
FROM node:12.13-alpine

# Author
LABEL vdfor <jiakun.li@qq.com>

# mkdir app dir
RUN mkdir -p /usr/src/app
# set workdir
WORKDIR /usr/src/app/

# copy files to workdir
COPY . /usr/src/app

# build
RUN yarn --registry=https://registry.npm.taobao.org
RUN yarn run build
# remove node_modules and aource code
RUN rm -rf node_modules
RUN rm -rf src
# install dependencies
RUN yarn --production --registry=https://registry.npm.taobao.org 

# export container port
EXPOSE 8181

# run
CMD ["npm", "run", "prod_docker"]