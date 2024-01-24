const footballClubs = [
  {
    name: 'FC Barcelona',
    country: 'Spain',
    coach: 'Ronald Koeman',
    captain: 'Lionel Messi',
    stadium: {
      name: 'Camp Nou',
      capacity: 99354,
      location: 'Barcelona, Spain'
    },
    players: [
      { name: 'Lionel Messi', position: 'Forward', number: 10 },
      { name: 'Gerard Piqué', position: 'Defender', number: 3 },
      { name: 'Marc-André ter Stegen', position: 'Goalkeeper', number: 1 },
    ],
    achievements: ['UEFA Champions League', 'La Liga', 'Copa del Rey']
  },
  {
    name: 'Real Madrid CF',
    country: 'Spain',
    coach: 'Carlo Ancelotti',
    captain: 'Sergio Ramos',
    stadium: {
      name: 'Santiago Bernabéu',
      capacity: 81044,
      location: 'Madrid, Spain'
    },
    players: [
      { name: 'Karim Benzema', position: 'Forward', number: 9 },
      { name: 'Raphael Varane', position: 'Defender', number: 5 },
      { name: 'Thibaut Courtois', position: 'Goalkeeper', number: 1 },
    ],
    achievements: ['UEFA Champions League', 'La Liga', 'Copa del Rey']
  }
];



function renderPlayerName(footballClubs) {
  let clubs = '';
for (let i = 0; i < footballClubs.length; i++) {
  clubs = footballClubs[i].players;
  clubs.forEach(player => {
    console.log(player.name);
  })
}
return clubs;
}

renderPlayerName(footballClubs);