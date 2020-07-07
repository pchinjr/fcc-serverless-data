let data = require('@begin/data')
let arc = require('@architect/functions')

async function getFood(req) {
  let table = 'foods'
  // let food = req.pathParameters.food
  //console.log(food)
  let results = await data.get({
    table
  })
  console.log(results)
  return {
    type: 'application/json; charset=utf8',
    body: JSON.stringify({"praise": "cage"})
  }
}

exports.handler = arc.http.async(getFood)