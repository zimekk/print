FROM surnet/alpine-node-wkhtmltopdf:20.11.0-0.12.6-full

ENV WORKDIR=/app
RUN npm i -g pnpm

WORKDIR $WORKDIR
COPY package.json pnpm-*.yaml ./
COPY packages/app/package.json packages/app/
COPY packages/doc/package.json packages/doc/
COPY packages/join/package.json packages/join/
COPY packages/render/package.json packages/render/
COPY packages/web/package.json packages/web/
RUN pnpm i

COPY . ./
RUN pnpm build && pnpm prune --prod --config.ignore-scripts=true

CMD ["pnpm", "serve"]
