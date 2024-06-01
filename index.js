import generateCertificate from "./util/generateCertificate.js";
import postToTwitter from "./util/postToTwitter.js";

const prAuthor = process.env.GITHUB_ACTOR;
const prTitle = process.env.PR_TITLE;

const outCertificatePath = `${prAuthor}-${prTitle.replace(/\W+/g, '_').toLowerCase()}.png`;

generateCertificate(prAuthor, prTitle, outCertificatePath)

postToTwitter(outCertificatePath, prAuthor, prTitle)
