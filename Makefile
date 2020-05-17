run-local:
	docker-compose up
down:
	docker-compose down
build:
	docker-compose up --build
clean:
	docker-compose stop && docker-compose rm -f
rebuild:	clean	build
