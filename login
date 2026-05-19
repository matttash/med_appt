TASK 17 - LOGIN USER

COMMAND:
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john@example.com",
  "password": "password123"
}'

OUTPUT:
HTTP/1.1 500 Internal Server Error
Internal Server Error
