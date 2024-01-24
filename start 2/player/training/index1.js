let footballTeams = {
    teams: [
      {
        name: "FC Barcelona",
        country: "Spain",
        homeStadium: "Camp Nou",
        coach: ["Ronald Koeman"],
        players: ["Lionel Messi", "Gerard Piqué", "Jordi Alba", "Antoine Griezmann"]
      },
      {
        name: "Real Madrid",
        country: "Spain",
        homeStadium: "Santiago Bernabeu",
        coach: ["Carlo Ancelotti"],
        players: ["Karim Benzema", "Sergio Ramos", "Toni Kroos", "Eden Hazard"]
      },
      {
        name: "Manchester United",
        country: "England",
        homeStadium: "Old Trafford",
        coach: ["Ole Gunnar Solskjær"],
        players: ["Bruno Fernandes", "Harry Maguire", "Paul Pogba", "Marcus Rashford"]
      }
    ]
  };

  let teamNames = [];

  footballTeams.teams.forEach(team => {
    teamNames.push(team.name);
  });
  
  console.log(teamNames);