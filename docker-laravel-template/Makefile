.PHONY: help
.DEFAULT_GOAL = help

dc = docker compose
de = $(dc) exec

## —— Docker1 🐳  ———————————————————————————————————————————————————————————————
.PHONY: start
start:	## project installation
	$(dc) up -d
	$(de) php bash -c 'composer install'
	$(de) php bash -c 'npm install && npm run dev'
	$(de) php bash -c 'php artisan key:generate'
	$(de) php bash -c 'php artisan migrate'

.PHONY: build
build:	## Installation of the production project
	$(dc) up -d
	$(de) php bash -c 'composer install'
	$(de) php bash -c 'npm install && npm run prod'
	$(de) php bash -c 'php artisan key:generate'
	$(de) php bash -c 'php artisan migrate'

.PHONY: dev
dev:	## start container
	$(dc) up -d

.PHONY: in-dc
in-dc:	## connexion container php
	$(de) php bash

.PHONY: delete
delete:	## delete container
	$(dc) down
	$(dc) kill
	$(dc) rm

## —— Tools 🛠️️ ———————————————————————————————————————————————————————————————
.PHONY: cs
cs:  ## code style check
	./vendor/bin/pint -v --test
	npx prettier --check 'resources/**/*.+(js|json|scss|sass|css|vue)' '.prettierrc.json' 'composer.json' 'package.json' 'pint.json'

.PHONY: fix
fix:  ## code style fix
	./vendor/bin/pint
	npx prettier --write 'resources/**/*.+(js|json|scss|sass|css|vue)' '.prettierrc.json' 'composer.json' 'package.json' 'pint.json'

.PHONY: phpstan
phpstan:  ## phpstan
	vendor/bin/phpstan analyse --memory-limit=2G

.PHONY: test
test: cs phpstan  ## test this project

## —— Others 🛠️️ ———————————————————————————————————————————————————————————————
help: ## listing command
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
