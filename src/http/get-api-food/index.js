let data = require('@begin/data')
let arc = require('@architect/functions')

async function getFood(req) {

  // let results = await data.get({
  //   table: 'people'
  // })

  // console.log(results)

  return {
    type: 'application/json; charset=utf8',
    body: JSON.stringify({"praise": "cage"})
  }
}

exports.handler = arc.http.async(getFood)