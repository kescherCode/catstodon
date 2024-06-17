#!/usr/bin/env bash

if [[ -f "$1" ]]; then
  sed -e '/^#.*$/d' \
      -e 's/^SECRET_KEY_BASE=.*/SECRET_KEY_BASE=[REDACTED]/gi' \
      -e 's/^OTP_SECRET=.*/OTP_SECRET=[REDACTED]/gi' \
      -e 's/^VAPID_PRIVATE_KEY=.*/VAPID_PRIVATE_KEY=[REDACTED]/gi' \
      -e 's/^VAPID_PUBLIC_KEY=.*/VAPID_PUBLIC_KEY=[REDACTED]/gi' \
      -e 's/^DB_HOST=.*/DB_HOST=[REDACTED]/gi' \
      -e 's/^DB_PORT=.*/DB_PORT=[REDACTED]/gi' \
      -e 's/^DB_NAME=.*/DB_NAME=[REDACTED]/gi' \
      -e 's/^DB_USER=.*/DB_USER=[REDACTED]/gi' \
      -e 's/^DB_PASS=.*/DB_PASS=[REDACTED]/gi' \
      -e 's/^REDIS_HOST=.*/REDIS_HOST=[REDACTED]/gi' \
      -e 's/^REDIS_PORT=.*/REDIS_PORT=[REDACTED]/gi' \
      -e 's/^REDIS_PASSWORD=.*/REDIS_PASSWORD=[REDACTED]/gi' \
      -e 's/^PAPERCLIP_ROOT_PATH=.*/PAPERCLIP_ROOT_PATH=[REDACTED]/gi' \
      -e 's/^SMTP_PORT=.*/SMTP_PORT=[REDACTED]/gi' \
      -e 's/^SMTP_LOGIN=.*/SMTP_LOGIN=[REDACTED]/gi' \
      -e 's/^SMTP_PASSWORD=.*/SMTP_PASSWORD=[REDACTED]/gi' \
      -e 's/^SMTP_AUTH_METHOD=.*/SMTP_AUTH_METHOD=[REDACTED]/gi' \
      -e 's/^SMTP_OPENSSL_VERIFY_MODE=.*/SMTP_OPENSSL_VERIFY_MODE=[REDACTED]/gi' \
      -e 's/^ES_HOST=.*/ES_HOST=[REDACTED]/gi' \
      -e 's/^ES_PORT=.*/ES_PORT=[REDACTED]/gi' \
      -e 's/^ES_PREFIX=.*/ES_PREFIX=[REDACTED]/gi' \
      -e 's/^ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY=.*/ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY=[REDACTED]/gi' \
      -e 's/^ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT=.*/ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT=[REDACTED]/gi' \
      -e 's/^ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY=.*/ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY=[REDACTED]/gi' \
      "$1"
fi