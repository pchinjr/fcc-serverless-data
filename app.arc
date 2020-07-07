@app
fcc-serverless-data

@static

@http
get /api/:name
get /api/food
get /foods
post /person

@tables
data
  scopeID *String
  dataID **String
  ttl TTL