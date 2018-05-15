
// IF ALL PLAYERS ARE REMOVED ADD THIS PLAYERS SO THE LIST IS NOT EMPTY


const initialState = 
{
  "players" : {
    "-LCPuGRilA-Sg-GQaG9m" : {
      "defense" : "9",
      "img" : "https://tmssl.akamaized.net//images/portrait/originals/8198-1413207036.jpg",
      "name" : "Cristiano Ronaldo",
      "offense" : "9",
      "skills" : [ {
        "ballManipulation" : "9"
      }, {
        "kickingAbilities" : "8"
      }, {
        "passingAbilities" : "9"
      }, {
        "duelTackling" : "9"
      }, {
        "fieldCoverage" : "7"
      }, {
        "blockingAbilities" : "9"
      }, {
        "gameStrategy" : "9"
      }, {
        "playmakingRisks" : "9"
      } ]
    },
    "-LCPuTbYJvzOdGwRfXgj" : {
      "defense" : "9",
      "img" : "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p9808.png",
      "name" : "Zlatan Ibrahimovic",
      "offense" : "8",
      "skills" : [ {
        "ballManipulation" : "9"
      }, {
        "kickingAbilities" : "8"
      }, {
        "passingAbilities" : "8"
      }, {
        "duelTackling" : "9"
      }, {
        "fieldCoverage" : "8"
      }, {
        "blockingAbilities" : "7"
      }, {
        "gameStrategy" : "9"
      }, {
        "playmakingRisks" : "9"
      } ]
    },
    "-LCPulT8Ie6xbUmIEIuL" : {
      "defense" : "9",
      "img" : "https://pbs.twimg.com/profile_images/884325009178722304/ckR65gYv.jpg",
      "name" : "Wayne Rooney",
      "offense" : "8",
      "skills" : [ {
        "ballManipulation" : "8"
      }, {
        "kickingAbilities" : "9"
      }, {
        "passingAbilities" : "8"
      }, {
        "duelTackling" : "7"
      }, {
        "fieldCoverage" : "7"
      }, {
        "blockingAbilities" : "8"
      }, {
        "gameStrategy" : "9"
      }, {
        "playmakingRisks" : "8"
      } ]
    },
    "-LCPv9RiTaEGAZlh4tRz" : {
      "defense" : "7",
      "img" : "https://media-public.fcbarcelona.com/20157/0/document_thumbnail/20197/150/102/254/50226838/1.0-1/50226838.jpg",
      "name" : "Andres Iniesta",
      "offense" : "8",
      "skills" : [ {
        "ballManipulation" : "7"
      }, {
        "kickingAbilities" : "6"
      }, {
        "passingAbilities" : "7"
      }, {
        "duelTackling" : "8"
      }, {
        "fieldCoverage" : "9"
      }, {
        "blockingAbilities" : "7"
      }, {
        "gameStrategy" : "6"
      }, {
        "playmakingRisks" : "8"
      } ]
    },
    "-LCPvM4s-53BnfIJYV1L" : {
      "defense" : "9",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Zidane_Zizu.jpg",
      "name" : "Zinedine Zidane",
      "offense" : "9",
      "skills" : [ {
        "ballManipulation" : "9"
      }, {
        "kickingAbilities" : "8"
      }, {
        "passingAbilities" : "9"
      }, {
        "duelTackling" : "9"
      }, {
        "fieldCoverage" : "9"
      }, {
        "blockingAbilities" : "8"
      }, {
        "gameStrategy" : "9"
      }, {
        "playmakingRisks" : "8"
      } ]
    },
    "-LCPvSj5b_Pxn11RpLsx" : {
      "defense" : "7",
      "img" : "https://static.foba1.com/bilder/spieler/gross/3936.jpg",
      "name" : "Arjen Robben",
      "offense" : "8",
      "skills" : [ {
        "ballManipulation" : "8"
      }, {
        "kickingAbilities" : "8"
      }, {
        "passingAbilities" : "7"
      }, {
        "duelTackling" : "6"
      }, {
        "fieldCoverage" : "8"
      }, {
        "blockingAbilities" : "8"
      }, {
        "gameStrategy" : "8"
      }, {
        "playmakingRisks" : "7"
      } ]
    },
    "-LCPvYVlOdEzw91wmTgU" : {
      "defense" : "8",
      "img" : "https://tmssl.akamaized.net//images/portrait/originals/44501-1413206117.jpg",
      "name" : "Marcelo Vieira",
      "offense" : "8",
      "skills" : [ {
        "ballManipulation" : "8"
      }, {
        "kickingAbilities" : "8"
      }, {
        "passingAbilities" : "9"
      }, {
        "duelTackling" : "8"
      }, {
        "fieldCoverage" : "7"
      }, {
        "blockingAbilities" : "7"
      }, {
        "gameStrategy" : "7"
      }, {
        "playmakingRisks" : "8"
      } ]
    },
    "-LCPvczBHEgCkUxDu4eL" : {
      "defense" : "8",
      "img" : "https://tmssl.akamaized.net//images/portrait/originals/15951-1464251996.jpg",
      "name" : "Dani Alves",
      "offense" : "7",
      "skills" : [ {
        "ballManipulation" : "7"
      }, {
        "kickingAbilities" : "7"
      }, {
        "passingAbilities" : "8"
      }, {
        "duelTackling" : "8"
      }, {
        "fieldCoverage" : "7"
      }, {
        "blockingAbilities" : "9"
      }, {
        "gameStrategy" : "7"
      }, {
        "playmakingRisks" : "6"
      } ]
    },
    "-LCPvitAoyXh7SWnmRf7" : {
      "defense" : "8",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Roberto_Carlos_2012.jpg/150px-Roberto_Carlos_2012.jpg",
      "name" : "Roberto Carlos",
      "offense" : "9",
      "skills" : [ {
        "ballManipulation" : "8"
      }, {
        "kickingAbilities" : "8"
      }, {
        "passingAbilities" : "9"
      }, {
        "duelTackling" : "8"
      }, {
        "fieldCoverage" : "9"
      }, {
        "blockingAbilities" : "9"
      }, {
        "gameStrategy" : "7"
      }, {
        "playmakingRisks" : "8"
      } ]
    },
    "-LCPvpb8dVLX0nELioDo" : {
      "defense" : "6",
      "img" : "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p37572.png",
      "name" : "Sergio Aguero",
      "offense" : "7",
      "skills" : [ {
        "ballManipulation" : "7"
      }, {
        "kickingAbilities" : "7"
      }, {
        "passingAbilities" : "8"
      }, {
        "duelTackling" : "8"
      }, {
        "fieldCoverage" : "7"
      }, {
        "blockingAbilities" : "6"
      }, {
        "gameStrategy" : "7"
      }, {
        "playmakingRisks" : "8"
      } ]
    },
    "-LCPvvM7izau_mfFl16X" : {
      "defense" : "8",
      "img" : "http://oi64.tinypic.com/wj9grc.jpg",
      "name" : "Luis Figo",
      "offense" : "9",
      "skills" : [ {
        "ballManipulation" : "9"
      }, {
        "kickingAbilities" : "9"
      }, {
        "passingAbilities" : "8"
      }, {
        "duelTackling" : "7"
      }, {
        "fieldCoverage" : "8"
      }, {
        "blockingAbilities" : "9"
      }, {
        "gameStrategy" : "8"
      }, {
        "playmakingRisks" : "8"
      } ]
    },
    "-LCPw2HCgFqLvLDi4DZO" : {
      "defense" : "8",
      "img" : "https://media-public.fcbarcelona.com/20157/0/document_thumbnail/20197/84/103/254/50227028/1.0-1/50227028.jpg",
      "name" : "Luis Suarez",
      "offense" : "8",
      "skills" : [ {
        "ballManipulation" : "7"
      }, {
        "kickingAbilities" : "8"
      }, {
        "passingAbilities" : "9"
      }, {
        "duelTackling" : "8"
      }, {
        "fieldCoverage" : "8"
      }, {
        "blockingAbilities" : "9"
      }, {
        "gameStrategy" : "8"
      }, {
        "playmakingRisks" : "7"
      } ]
    }
  }
}  


export default function(state = initialState, action) {
  switch(action.type) {
    
    default:
      return state;
  }
}


