import generateCertificate from "./util/generateCertificate.js";
import postToTwitter from "./util/postToTwitter.js";
import dotenv from "dotenv";

dotenv.config();

const prAuthor = process.env.PR_USER;
const prTitle = process.env.PR_TITLE;

const outCertificatePath = `${prAuthor}-${prTitle.replace(/\W+/g, '_').toLowerCase()}.png`;

generateCertificate(prAuthor, prTitle, outCertificatePath)

postToTwitter(outCertificatePath, prAuthor, prTitle)
