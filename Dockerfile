FROM        node:14.18.1-slim

RUN         mkdir -p /usr/src/nd_api/ && chown node:node /usr/src/nd_api/
WORKDIR     /usr/src/nd_api/

COPY        --chown=node:node package.json package-lock.json* ./

RUN         npm install --production

COPY        --chown=node:node . .

USER        node

CMD         [ "npm", "start" ]
