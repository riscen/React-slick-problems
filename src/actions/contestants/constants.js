export const contestantsUrl = contestId => {
  return (
    "http://codeforces.com/api/contest.standings?contestId=" +
    contestId +
    "&from=1&count=10&showUnofficial=true"
  );
};

export const CONTESTANT_ACTIONS = {
  REQUEST_CONTESTANT: "REQUEST_CONTESTANT",
  SUCCESS_CONTESTANT: "SUCCESS_CONTESTANT",
  ERROR_CONTESTANT: "ERROR_CONTESTANT"
};
