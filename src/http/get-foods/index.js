let data = require('@begin/data')
let arc = require('@architect/functions')

async function getFood(req) {
  console.log('/api/food')
  return {
    type: 'application/json; charset=utf8',
    body: JSON.stringify({"praise": "cage"})
  }
}

exports.handler = arc.http.async(getFood)