FROM        node:14.18.1-slim

RUN         mkdir -p /usr/src/nd_api/ && chown node:node /usr/src/nd_api/
RUN         mkdir -p /usr/src/nd_api/config && chown node:node /usr/src/nd_api/config
WORKDIR     /usr/src/nd_api/

COPY        --chown=node:node package.json package-lock.json* ./
COPY        --chown=node:node config/config.js ./config/config.js
COPY        --chown=node:node docker-entrypoint.sh ./docker-entrypoint.sh

RUN         npm install --production

RUN         npm i sequelize-cli -g

COPY        --chown=node:node . .

USER        node

RUN         chmod +x docker-entrypoint.sh

CMD         ["sh", "./docker-entrypoint.sh"]
