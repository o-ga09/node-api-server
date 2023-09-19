# API Server with NodeJs

- TDD
- Clean Architecture

## Theme

- user registration and sign in

## cURL メモ

```bash
# GET
curl http://localhost:3000/api/v1/users

# POST
curl -X POST -H "Content-Type: application/json" -d '{"name":"user225324","desc":"working","status":2}' http://localhost:3000/api/v1/users

# PUT
curl -X PUT -H "Content-Type: application/json" -d '{"name":"user225324","desc":"working","stat
us":2}' http://localhost:3000/api/v1/users/1

# DELETE
curl -X DELETE http://localhost:3000/api/v1/users/1
```
