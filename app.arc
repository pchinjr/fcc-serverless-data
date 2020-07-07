@app
fcc-serverless-data

@static

@http
# reads
get /api/:name
get /api/:personId
get /api/:food

# writes
post /person
post /api/:name/:food

@tables
data
  scopeID *String
  dataID **String
  ttl TTL