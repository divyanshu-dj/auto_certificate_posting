import generateCertificate from "./util/generateCertificate.js";
import postToTwitter from "./util/postToTwitter.js";

const prAuthor = process.env.GITHUB_ACTOR || "John Doe";
const prTitle =
    process.env.PR_TITLE ||
    "lorum aifjie sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem lorem lorem lorendjfisjaifjisajf ijasfijasoi aisjfiasj";

const outCertificatePath = `./image/generatedImage/${prAuthor}-${prTitle.toLowerCase()}.png`;

generateCertificate(prAuthor, prTitle, outCertificatePath).then(() =>
    console.log("Certificate generated.")
);

postToTwitter(outCertificatePath, prAuthor, prTitle).then(() =>
    console.log("Posted to Twitter.")
);
