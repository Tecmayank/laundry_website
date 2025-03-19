# Use an official Nginx image
FROM nginx:alpine

# Copy website files to Nginx directory
COPY . /usr/share/nginx/html

# Expose Port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
