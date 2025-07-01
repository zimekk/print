FROM surnet/alpine-node-wkhtmltopdf:22.17.0-0.12.6-full

# https://pptr.dev/troubleshooting#running-on-alpine
# Installs latest Chromium (100) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      tzdata

# https://stackoverflow.com/questions/68996420/how-to-set-timezone-inside-alpine-base-docker-image
# https://docs.diladele.com/docker/timezones.html
ENV TZ=Europe/Warsaw

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

ENV WORKDIR=/app
RUN npm i -g pnpm

WORKDIR $WORKDIR
COPY package.json pnpm-*.yaml ./
COPY packages/app/package.json packages/app/
COPY packages/box/package.json packages/box/
COPY packages/doc/package.json packages/doc/
COPY packages/join/package.json packages/join/
COPY packages/quiz/package.json packages/quiz/
COPY packages/render/package.json packages/render/
COPY packages/stl/package.json packages/stl/
COPY packages/web/package.json packages/web/
COPY packages/wifi/package.json packages/wifi/
RUN pnpm i --frozen-lockfile --ignore-scripts

COPY . ./
RUN pnpm build && pnpm prune --prod --config.ignore-scripts=true

CMD ["pnpm", "serve"]
