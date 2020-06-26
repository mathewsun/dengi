FROM richarvey/nginx-php-fpm:1.6.8
LABEL maintainer="Alexei Rosokhatyy a.rosokhatyy@click2.money"

RUN apk add curl

RUN set -x \
    && rm -rf /var/www/errors \
    && sed -i '/error_page 404/,/on socket/d' /etc/nginx/sites-available/default.conf \
    && sed -i '/error_page 404/,/on socket/d' /etc/nginx/sites-available/default-ssl.conf \
    && sed -i 's/sendfile off/sendfile on/' /etc/nginx/sites-available/default.conf \
    && sed -i 's/sendfile off/sendfile on/' /etc/nginx/sites-available/default-ssl.conf \
    && sed -i '/location \~\* \\\.(jpg/,/\# deny access/d' /etc/nginx/sites-available/default.conf \
    && sed -i '/location \~\* \\\.(jpg/,/\# deny access/d' /etc/nginx/sites-available/default-ssl.conf


WORKDIR /var/www/html
ENV SKIP_COMPOSER 1
ENV HIDE_NGINX_HEADERS 1
ENV PHP_ERRORS_STDERR 1
COPY . .

EXPOSE 80
