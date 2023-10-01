# API Server with NodeJs

- TDD
- Clean Architecture

## Theme

- Todo app

## Set up

```bash
cd backend
make migrate
make up
```

## How to Run

```bash
cd backend
bun run dev
```

## How to test

```bash
cd backend
bu run test
```

## Post Condition

in Docker containainer terminal, stopped running db in ctrl + c .

```bash
make down
```

## cURL メモ

```bash
# GET
curl http://localhost:3000/api/v1/users

# POST
curl -X POST -H "Content-Type: application/json" -d '{"name":"user225324","desc":"working","status":2}' http://localhost:3000/api/v1/users

# PUT
curl -X PUT -H "Content-Type: application/json" -d '{"name":"user225324","desc":"working","status":2}' http://localhost:3000/api/v1/users/1

# DELETE
curl -X DELETE http://localhost:3000/api/v1/users/1
```
