  

  const game = {
        team1: 'real',
        team2: 'barca',
        players: [
                [
                        'lewandowski',
                        'ansu fati',
                        'dembele',
                        'gavi',
                        'busquets',
                        'pedri',
                        'jordi alba',
                        'araujo',
                        'kounde',
                        'dest',
                        'ter stegen',
                ],
                [
                        'benzema',
                        'vinicius',
                        'valverde',
                        'kross',
                        'modric',
                        'casemiro',
                        'mendy',
                        'alaba',
                        'nacho',
                        'carvajal',
                        'courtois',
                ],

        ],
        score: '1:0',
        score: ['lewandowski'],
        data: 'nov 4th, 2033',
        odds: {
                team1: 1.33,
                x:3.25,
                team2: 6.5,
        },
  };

//1
  const [players1, players2] = game.players;

  console.log(players1, players2);
  //2
  const [gk, ...fieldPlayers] = players1;
  console.log(gk, fieldPlayers);

  //3
  const allPlayers = [...players1, ...players2];
  console.log(allPlayers);

  //4
  const playersfinal = [...players1, 'lewandowski', 'gavi','dembele'];

  //5
  const {
        odds:{team1, x: draw, team2}, 
  }= game;
  console.log(team1, draw , team2);

  //6
  const printGoals = (...players) => {
        console.log(players)
        console.log(`${players.length} bàn thắng đã được ghi`);
  };
//   printGoals('lewandowski');

  printGoals(...game.score);
  //7 
  team1 < team2 && console.log('team 1 có nhiều khả năng thắng hơn');
  team1> team2 && console.log('team 2 có nhiều khả năng thắng hơn');