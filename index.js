import generateCertificate from "./util/generateCertificate.js";
import postToTwitter from "./util/postToTwitter.js";

const prAuthor = process.env.GITHUB_ACTOR;
const prTitle = process.env.PR_TITLE;

const outCertificatePath = `${prAuthor}-${prTitle.toLowerCase()}.png`;

generateCertificate(prAuthor, prTitle, outCertificatePath).then(() =>
    console.log("Certificate generated.")
);

postToTwitter(outCertificatePath, prAuthor, prTitle).then(() =>
    console.log("Posted to Twitter.")
);
