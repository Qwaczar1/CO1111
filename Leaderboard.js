async function loadLeaderboard(){
    fetch("https://codecyprus.org/th/test-api/leaderboard?sorted&hasPrize&size=42")
    .then(responce => responce.json())
        .then(jsonObject => {
            console.log(jsonObject);
            }
        )
}
loadLeaderboard();