run-local:
	@docker-compose up

down:
	@docker-compose down

build:
	@docker-compose up --build

clean:
	@docker-compose stop && docker-compose rm -f

rebuild:	clean	build

add-country:
	sudo chmod +x ./scripts/create-country-template.sh
	./scripts/create-country-template.sh $(COUNTRY)

test:
	yarn test

run:
	@docker-compose up -d

run-test: run test down
