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

  const processed = content
    .split('\n');

  console.log(processed);
  // END
}