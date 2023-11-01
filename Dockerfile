FROM surnet/alpine-node-wkhtmltopdf:16.18.0-0.12.6-full

ENV WORKDIR=/app
WORKDIR $WORKDIR

COPY package.json yarn.lock ./
COPY packages/app/package.json packages/app/
COPY packages/doc/package.json packages/doc/
COPY packages/join/package.json packages/join/
COPY packages/web/package.json packages/web/
RUN yarn --frozen-lockfile

COPY . ./
RUN yarn build && yarn --prod

CMD ["yarn", "serve"]