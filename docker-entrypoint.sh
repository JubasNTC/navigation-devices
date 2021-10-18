#!/bin/sh

sequelize-cli db:migrate --env production

npm start