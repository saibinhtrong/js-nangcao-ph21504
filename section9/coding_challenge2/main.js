  

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
        score: '4:0',
        score: ['lewandowski', 'lewandowski','gavi','dembele'],
        data: 'nov 4th, 2033',
        odds: {
                team1: 1.33,
                x:3.25,
                team2: 6.5,
        },
  };


  //1
  for(const[i, players] of game.score.entries()){
        console.log(`Vào ${i + 1}: ${[players]}`);
  }
  //2
  const odds = Object.values(game.odds);
  let average = 0;
  for(const odd of odds) 
        average += odd;
        average /= odds.length;

        console.log(average);
  
//3
for(const[team, odd] of Object.entries(game.odds)){
        const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
        console.log(`odd of ${teamStr} ${odd} `);
}