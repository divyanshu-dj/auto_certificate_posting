import { TwitterApi } from "twitter-api-v2";
import fs from "fs";

export default async function postToTwitter( outCertificatePath, prAuthor, prTitle) {
    const client = new TwitterApi({
        appKey: process.env.TWITTER_CONSUMER_KEY,
        appSecret: process.env.TWITTER_CONSUMER_SECRET,
        bearerToken: process.env.TWITTER_BEARER_TOKEN,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });
    try {
        const image = fs.readFileSync(outCertificatePath);
        const mediaId = await client.v1.uploadMedia(image, { type: 'png' });
        await client.v2.tweet({
            text: `Congratulations to ${prAuthor} for their PR merge: ${prTitle}! 🎉`,
            media: { media_ids: [mediaId] },
        });
        console.log("FUCK YESS!! Posted to Twitter");
    } catch (error) {
        console.log(error);
    }
}
