up:
	git fetch origin && git reset --hard origin
	docker-compose -f docker-compose.yml up --build -d && docker system prune

logs:
	docker-compose logs -f --tail=25 app

exec:
	docker-compose exec app sh
