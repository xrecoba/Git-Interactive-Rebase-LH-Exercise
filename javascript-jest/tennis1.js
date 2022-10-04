'use strict';

function getScore(pointsFirstPlayer, pointsSecondPlayer) {
    var score = "";
    var tempScore = 0;
    if (pointsFirstPlayer === pointsSecondPlayer) {
        return evenResult(pointsFirstPlayer);
    } else if (pointsFirstPlayer >= 4 || pointsSecondPlayer >= 4) {
        return lateGameResult(pointsFirstPlayer, pointsSecondPlayer);
    } else {
        return earlyGameResult(pointsFirstPlayer, pointsSecondPlayer);
    }
    return score;

    function earlyGameResult(pointsFirstPlayer, pointsSecondPlayer) {
        var score = "";
        for (var i = 1; i < 3; i++) {
            if (i === 1) { tempScore = pointsFirstPlayer; }
            else {
                score += "-";
                tempScore = pointsSecondPlayer;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
        return score;
    }

    function lateGameResult(pointsFirstPlayer, pointsSecondPlayer) {
        var minusResult = pointsFirstPlayer - pointsSecondPlayer;
        if (minusResult === 1) { return "Advantage player1"; }
        else if (minusResult === -1) { return "Advantage player2"; }
        else if (minusResult >= 2) { return "Win for player1"; }
        else { return "Win for player2"; }
    }

    function evenResult(pointsFirstPlayer) {
        switch (pointsFirstPlayer) {
            case 0:
                return "Love-All";
            case 1:
                return "Fifteen-All";                
            case 2:
                return "Thirty-All";                            
        }
        return "Deuce";                
    }
}

module.exports = getScore;
