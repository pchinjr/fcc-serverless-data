let data = require('@begin/data')
let arc = require('@architect/functions')

async function getName(req) {
  // example of getting a single document
  let table = 'people'
  let name = req.pathParameters.name
  console.log(name)
  let results = await data.get({
    table,
    key: name
  })
  return {
    type: 'application/json; charset=utf8',
    body: JSON.stringify(results)
  }
}

exports.handler = arc.http.async(getName)