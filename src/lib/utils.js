export function extractParties(dataset) {
  let parties = [];
  dataset.results.forEach((result) => {
    parties = [...parties, result.party];
  });
  return parties;
}
export function extractPartiesVotes(dataset) {
  let votes = [];
  dataset.results.forEach((result) => {
    votes = [...votes, result.votes];
  });
  return votes;
}
export function extractStateWinner(state) {
  let winner = state.results[0];

  state.results.map((party) => {
    if (party.score > winner.score) {
      winner = party;
    }
  });
  return winner;
}
export function extractStatesWinners(election) {
  let parties = extractParties(election);

  let output = [];
  parties.forEach((party) => {
    output.push({ party, count: 0 });
  });
  let party;

  election.states_results.forEach((state_result) => {
    let state_winner = extractStateWinner(state_result);
    output.find((party) => {
      return party.party == state_winner.party;
    }).count += 1;
  });

  return output;
}
export function getPartyCandidate(party, dataset) {
  let candidate = dataset.candidates.find(
    (candidate) => candidate.party == party
  );
  return candidate;
}
