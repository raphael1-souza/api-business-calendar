run-local:
	@docker-compose up -d util_day-app

down:
	@docker-compose down

build:
	@docker-compose up --build util_day-app

clean:
	@docker-compose stop && docker-compose rm -f

rebuild:	clean	build

add-country:
	sudo chmod +x ./scripts/create-country-template.sh
	./scripts/create-country-template.sh $(COUNTRY)

test:
	@docker-compose up -d util_day-app
	@docker-compose up --abort-on-container-exit test
