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
        {
          name: "Muktar Abdulfatai",
          party: "aad",
          image:
            "https://lh3.google.com/u/0/d/1TnABgq7Oommgab11qDTSHwUb6bkXHEhc=w1366-h695-iv1",
        },
        {
          name: "Kamol Oduola",
          party: "fcc",
          image:
            "https://lh3.google.com/u/0/d/11IumsshJg5iGV0zaMZ5GXf7tTRFPoXv-=w1366-h695-iv1",
        },
        {
          name: "Abdrasheed Taiwo",
          party: "rad",
          image:
            "https://lh3.google.com/u/0/d/1v5ma7sLEZmMq9jewbilXIVPbiwC8X8p-=w1366-h695-iv1",
        },
        {
          name: "Happy Adaga",
          party: "tig",
          image:
            "https://lh3.google.com/u/0/d/1CO_LhLQXZpyHRXs5d2VBZY-SajNZf2Lv=w1366-h695-iv1",
        },
      ],

      results: [
        { party: "aad", votes: 300 },
        { party: "fcc", votes: 320 },
        { party: "rad", votes: 303 },
        { party: "tig", votes: 350 },
      ],

      registeredVoters: 123412,
      accreditedVoters: 3412,
      validVoters: 1312,

      states_results: [
        {
          title: "kwara",
          results: [
            { party: "aad", votes: 300 },
            { party: "fcc", votes: 320 },
            { party: "rad", votes: 303 },
            { party: "tig", votes: 350 },
          ],
        },
        {
          title: "niger",
          results: [
            { party: "aad", votes: 300 },
            { party: "fcc", votes: 320 },
            { party: "rad", votes: 303 },
            { party: "tig", votes: 350 },
          ],
        },
      ],
    },
  };
}) satisfies PageLoad;
