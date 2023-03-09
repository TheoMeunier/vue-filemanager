# Laravel docker template
## Setup a new project
### Step-by-step setup
- Update composer.json, you can change the project name / description and tags for example
- Move .env.example or .env.prod.example to .env and edit it according to your project
- Start containers with `docker-compose up -d`
- Run into the php container with `docker-compose exec php bash`
- Install php libs with `composer install`
- Install javascript libs with `npm install`
- Run either `npm run dev` or `npm run prod`
- Generate application secret key with `php artisan key:generate`
- Enjoy :)

### Fast setup
```bash
git clone https://github.com/loic-fremaux/docker-laravel-template.git
cd docker-laravel-template
cp .env.example .env
docker-compose up -d
docker-compose exec php composer install
docker-compose exec php npm install
docker-compose exec php npm run dev
docker-compose exec php php artisan key:generate
```

## Other commands
### 1. Install bootstrap

Run the following commands into the php container
- `composer require laravel/ui`
- `php artisan ui bootstrap`
- `npm install && npm run dev`

Or use fast setup
```bash
docker-compose exec php composer require laravel/ui
docker-compose exec php php artisan ui bootstrap
docker-compose exec php npm install
docker-compose exec php npm run dev
```
