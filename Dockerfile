# Usamos Node 20
FROM node:20-alpine

WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install --include=dev

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto de Next.js
EXPOSE 3000

# Comando para levantar Next.js en todas las interfaces
CMD ["npm", "run", "dev"]

