# 设置基础镜像，若本地不存在基础镜像，会从远程服务器pull镜像
FROM node:8.9-alpine

# Author
MAINTAINER vdfor <jiakun.li@qq.com>

# 创建app目录,保存我们的代码
RUN mkdir -p /usr/src/app
# 设置工作目录
WORKDIR /usr/src/app/

# 复制所有文件到 工作目录。
COPY . /usr/src/app

# 编译运行node项目，npm安装依赖,利用镜像
# WORKDIR /usr/src/node/website
# for china
RUN npm i --production --registry=https://registry.npm.taobao.org 
# # for global
# RUN npm i --production

# 暴露container的端口
EXPOSE 8181

# 运行命令
CMD ["npm", "run", "prod_docker"]