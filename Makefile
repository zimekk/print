default: fetch up prune

exec:
	docker-compose exec app sh

fetch:
	git fetch origin && git reset --hard origin

logs:
	docker-compose logs -f --tail=25 app

prune:
	docker ps -a && docker system prune

ps:
	docker-compose ps

up:
	docker-compose -f docker-compose.yml up --build -d
