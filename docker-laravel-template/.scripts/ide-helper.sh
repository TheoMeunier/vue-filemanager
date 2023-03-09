#!/bin/bash

ide_helper() {
    php artisan ide-helper:generate -H
    php artisan ide-helper:models -M
    php artisan ide-helper:meta
}

if grep -Fxq "APP_ENV=dev" .env; then
   ide_helper
fi

if grep -Fxq "APP_ENV=local" .env; then
    ide_helper
fi
