run-local:
	@docker-compose up -d util_day-app

down:
	@docker-compose down

build:
	@docker-compose build --no-cache

clean:
	@docker-compose stop && docker-compose rm -f

rebuild:	clean	build

add-country:
	sudo chmod +x ./scripts/create-country-template.sh
	./scripts/create-country-template.sh $(COUNTRY)

test:
	@docker-compose down
	@docker-compose up -d util_day-app
	@sleep 3
	@docker-compose up --abort-on-container-exit test

inside-container:
	@docker-compose run util_day-app bash

