let arc = require('@architect/functions')
let data = require('@begin/data')

async function createPerson(req) {
  // data.set array of items 
  await data.set( req.body.data )
  return {
    type: 'application/json; charset=utf8',
    body: JSON.stringify(req.body.data)
  }
}

exports.handler = arc.http.async(createPerson)

let insertJSON = {
	"data": [ 
		{ 
			"table":"people",
			"key": "pchinjr@gmail.com",
      "userName": "paulchinjr",
      "email":"pchinjr@gmail.com", 
			"favoriteFood": ["tacos"]		 
		},
		{ 
			"table":"people",
      "key": "praise@praisecage.com",
      "userName": "praisecage",
      "email":"praise@praisecage.com",
			"favoriteFood": ["fish"]		 
    },
    { 
			"table":"foods",
      "key": "tacos",
      "email":"pchinjr@gmail.com",
		 	"userName": "paulchinjr",
			"favoriteFood": ["tacos"]		 
		},
		{ 
			"table":"foods",
      "key": "fish",
      "email":"praisecage@gmail.com",
		 	"userName": "praisecage",
			"favoriteFood": ["fish"]		 
		}  
	]
}

