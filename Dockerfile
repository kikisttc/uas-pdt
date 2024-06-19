# Menggunakan Node.js sebagai base image
FROM node:alpine

# Membuat direktori kerja untuk aplikasi
WORKDIR /usr/src/app

# Menyalin file package.json dan package-lock.json
COPY package*.json ./

# Menginstall dependencies
RUN npm install

# Menyalin kode aplikasi ke dalam image
COPY . .

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000

# Menjalankan aplikasi
CMD ["npm", "start"]
