FROM node:current AS builder
COPY ./ /website
WORKDIR /website

RUN yarn install --frozen-lockfile && yarn next build

FROM nginx:stable-alpine
COPY --from=builder /website/_build/ /usr/share/nginx/html/