FROM php:apache
COPY . /var/www/html
RUN apt-get update
RUN apt-get install -y ssl-cert
RUN a2enmod ssl
RUN a2ensite default-ssl.conf
