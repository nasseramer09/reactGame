# 1. Använd en Node-bild som bas
FROM node:18 as build

# 2. Ställ in arbetskatalogen i containern
WORKDIR /app

# 3. Kopiera package.json och package-lock.json till arbetskatalogen
COPY package*.json ./

# 4. Installera beroenden
RUN npm install

# 5. Kopiera allt från projektmappen till containern
COPY . .

# 6. Bygg appen
RUN npm run build

# 7. Använd en serverbild för att serva den byggda applikationen
FROM nginx:alpine

# 8. Kopiera byggfilerna till Nginx webroot
COPY --from=build /app/dist /usr/share/nginx/html

# 9. Exponera port 80
EXPOSE 80

# 10. Starta Nginx
CMD ["nginx", "-g", "daemon off;"]
