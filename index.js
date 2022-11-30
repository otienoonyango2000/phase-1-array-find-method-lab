function superbowlWin(record){
    let game = record.find((game) => {
        if(game.result === 'W') {
            return true;
        }
    })
    if(game) {
        return game.year;
    }
}