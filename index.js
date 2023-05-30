import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const keys = {
    id: 0,
    ifRated: 1,
    turns: 2,
    status: 3,
    winner: 4,
    time: 5,
    whiteId: 6,
    whiteRating: 7,
    blackId: 8,
    blackRating: 9,
    moves: 10,
    openingCode: 11,
    openingMoves: 12,
    openingFullname: 13,
    openingShortname: 14,
    openingResponse: 15,
    openingVariation: 16,
  }

  const { 
    id,
    ifRated,
    turns,
    status,
    winner,
    time,
    whiteId,
    whiteRating,
    blackId,
    blackRating,
    moves,
    openingCode,
    openingMoves,
    openingFullname,
    openingShortname,
    openingResponse,
    openingVariation
  } = keys;

  const processed = content
    .split('\r\n')
    .slice(1)
    .map((line) => line.split(','));

  // first step
  const totalGamesCount = processed.length;
  // second step
  const ratedTrue = processed
    .filter((game) => game[ifRated] === 'TRUE')
    .map((game) => game[ifRated]);

  const truesPercentage = (ratedTrue.length / processed.length).toFixed(2) * 100;
  const falsesPercentage = 100 - truesPercentage;
  // third step
  // fourth step
  // fifth step

  const finalString = `Total games count: ${totalGamesCount}
  The approximate amount of: rated games - ${truesPercentage}%, not rated games- ${falsesPercentage}%`;

  console.log(finalString);
  // node bin/app.js __fixtures__/chess_games.csv
  // END
}