FROM node:latest as node

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/acme /usr/share/nginx/html

# ARG WORK_DIR=/app
# ENV PATH ${WORK_DIR}/node-modules/.bin:$PATH

# RUN mkdir ${WORK_DIR}
# WORKDIR ${WORK_DIR}

# COPY package.json ${WORK_DIR}
# COPY package-lock.json ${WORK_DIR}

# RUN npm install @angular/cli
# RUN npm install

# COPY . ${WORK_DIR}

# EXPOSE 4200

# CMD ng serve --host 0.0.0.0
