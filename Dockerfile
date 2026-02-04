FROM nginx:alpine

# Copiar arquivos do website para o diretório do nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY img/ /usr/share/nginx/html/img/
COPY video/ /usr/share/nginx/html/video/

# Expor porta 80 (nginx padrão)
EXPOSE 80

# Nginx já inicia automaticamente, não precisa de CMD

