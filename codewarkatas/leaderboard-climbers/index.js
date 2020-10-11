function leaderboardSort(leaderboard, changes) {
  for (let i of changes) {
    let char = i.split(" ");

    let oldIndex = leaderboard.indexOf(char[0]);
    let newIndex = oldIndex - char[1];
    console.log({ char, oldIndex, newIndex })
    leaderboard.splice(oldIndex, 1);
    leaderboard.splice(newIndex, 0, char[0])
  }

  console.log(leaderboard)
}


leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], ['Dave +1', 'Fred +4', 'Brian -1'])