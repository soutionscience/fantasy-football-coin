const request = require('request');
let Player = require('./models/players');
let playerController = require('./controllers/players.contoller')


exports.makeRequest =()=>{
    request('https://fantasy.premierleague.com/drf/bootstrap-static',  function (error, response, body) {
  if (!error && response.statusCode == 200) {
    let myresp = JSON.parse(body)
    console.log(myresp.elements[0].web_name) // Print the google web page.
   
   // playerData.push({"web_name": "Kito"});
   // console.log(playerData)

    const element = myresp.elements
    Player.deleteMany({})
    .exec(function(err, resp){
        if(err) throw err;
    })
    for(let i=0; i< element.length; i++){
        let playerData= {"web_name": element[i].web_name,
                         "first_name": element[i].first_name,
                          "second_name": element[i].second_name,
                           "squad_number": element[i].squad_number,
                           "now_costs": element[i].now_costs  }
        let newPlayer = new Player(playerData)
        newPlayer.save(function(err, resp){
            if(err) throw err;
            // console.log('player saved')
        })
 

    }
  }
});

}


