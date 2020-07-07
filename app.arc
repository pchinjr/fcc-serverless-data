@app
fcc-serverless-data

@static

@http
get /api/:name
get /api/:personId
get /api/:food
post /person

@tables
data
  scopeID *String
  dataID **String
  ttl TTL