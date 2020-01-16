FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./app/build /usr/share/nginx/html/

ADD source dest

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
