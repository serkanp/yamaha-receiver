#!/usr/bin/with-contenv bashio
set +u

export YAMAHA_IP=$(bashio::config 'yamahaip')
bashio::log.info "yamahaip configured as ${YAMAHA_IP}."

bashio::log.info "Starting Yamaha receiver addon service."
npm run start