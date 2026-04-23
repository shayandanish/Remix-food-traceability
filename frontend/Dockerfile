# Use the official Nginx image from DockerHub
FROM nginx:alpine

# Copy your HTML and Tailwind CSS files into the Nginx web server's directory
COPY ./ /usr/share/nginx/html

# Expose port 80 to allow access to the frontend
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
