import type { PageLoad } from "./$types";

export const load = (({ params }) => {
  return {
    electionData: {
      election: "presidential",
      year: "2022",
      start_data: new Date(),
      end_date: new Date(),
      conclusion: null,

      candidates: [
        { name: "lorem", party: "apc" },
        { name: "ipsum", party: "pdp" },
        { name: "dolor", party: "aac" },
        { name: "sit amit", party: "cvv" },
      ],

      results: [
        { party: "apc", votes: 300 },
        { party: "pdp", votes: 320 },
        { party: "aac", votes: 303 },
        { party: "cvv", votes: 350 },
      ],

      registeredVoters: 123412,
      accreditedVoters: 3412,
      validVoters: 1312,

      states_results: [
        {
          title: "state1",
          results: [
            { party: "apc", votes: 300 },
            { party: "pdp", votes: 320 },
            { party: "aac", votes: 303 },
            { party: "cvv", votes: 350 },
          ],
        },
        {
          title: "state2",
          results: [
            { party: "apc", votes: 300 },
            { party: "pdp", votes: 320 },
            { party: "aac", votes: 303 },
            { party: "cvv", votes: 350 },
          ],
        },
      ],
    },
  };
}) satisfies PageLoad;
