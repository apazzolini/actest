const core = require("@actions/core");
const { GitHub, context } = require("@actions/github");
const octokit = new GitHub(core.getInput("github-token"));

const main = async () => {
  const { pull_request } = context.payload;

  console.log('yaaaaaaaa')

  const reviewers = (core.getInput("reviewers") || "")
    .split(",")
    .map((r) => r.trim())

  console.log('rev:', reviewers)

  // await octokit.pulls.createReviewRequest({
    // owner: context.payload.repository.owner.login,
    // repo: context.payload.repository.name,
    // pull_number: context.payload.pull_request.number,
    // reviewers: reviewers,
  // });
};

main().catch((err) => core.setFailed(err.message));
