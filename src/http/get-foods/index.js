let data = require('@begin/data')
let arc = require('@architect/functions')

async function getFood(req) {
  console.log(req.query)
  let results = await data.get({table:'foods', key: req.query.food})
  console.log(results)
  return {
    type: 'application/json; charset=utf8',
    body: JSON.stringify(results)
  }
}

exports.handler = arc.http.async(getFood)