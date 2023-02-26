FROM surnet/alpine-node-wkhtmltopdf:14.17.5-0.12.6-full

ENV WORKDIR=/app
WORKDIR $WORKDIR

COPY package.json yarn.lock ./
COPY packages/app/package.json packages/app/
COPY packages/doc/package.json packages/doc/
COPY packages/web/package.json packages/web/
RUN yarn --frozen-lockfile

COPY . ./
RUN yarn build

CMD ["yarn", "serve"]
