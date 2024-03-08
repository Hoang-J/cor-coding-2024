// Part I: Print out every team that has an attendance over 30000.
// Part II: Print the list of teams in alphabetical order by name

teams = [
    {
      name: "Braves",
      city: "Atlanta", // Not really in Atlanta
      state: "GA",
      avgAttendance: 39401,
    },
    {
      name: "Reds",
      city: "Cincinatti",
      state: "OH",
      avgAttendance: 25164,
    },
    {
      name: "Yankees",
      city: "New York City",
      state: "NY",
      avgAttendance: 40862,
    },
    {
      name: "Red Sox",
      city: "Boston",
      state: "MA",
      avgAttendance: 32989,
    },
  ];

console.log("\n Teams that have over 30,000 attendance");
for (let i = 0; i <= teams.length - 1; i++) {
    if (teams[i].avgAttendance > 30000) {
        console.log(teams[i]);
    }
}

console.log("\n Teams name in alphabetical order");
for (let i = 0; i < teams.length - 1; i++) {
    if (teams[i].name > teams[i + 1].name) {
        const temp = teams[i].name;
        teams[i].name = teams[i + 1].name;
        teams[i + 1].name = temp;
        console.log(teams);
    }
}