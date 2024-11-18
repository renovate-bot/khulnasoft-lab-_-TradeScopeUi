FROM node:22.4.0-alpine as ui-builder

# Install necessary dependencies
RUN apk add --update --no-cache git g++ make

# Create the app directory
RUN mkdir /app
WORKDIR /app

# Copy package.json and yarn.lock for dependency installation
COPY package.json yarn.lock .yarnrc.yml /app/
COPY .yarn/releases/ /app/.yarn/releases/

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . /app

# Build the UI
RUN yarn build

# Final stage: Serve the built UI using Nginx
FROM nginx:1.25.4-alpine

# Copy the built UI from the ui-builder stage
COPY --from=ui-builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY --from=ui-builder /app/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Command to run nginx
CMD ["nginx"]
