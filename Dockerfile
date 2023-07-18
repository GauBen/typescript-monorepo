FROM node:lts
WORKDIR /app/
COPY . .

RUN \
  # Install all dependencies
  yarn install --immutable &&\
  # Build all packages
  yarn build &&\
  # Remove dev dependencies
  yarn workspaces focus --production --all
