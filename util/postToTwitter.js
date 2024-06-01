import { TwitterApi } from "twitter-api-v2";

export default async function postToTwitter( outCertificatePath, prAuthor, prTitle) {
    try {
        const client = new TwitterApi({
            appKey: process.env.TWITTER_CONSUMER_KEY || "SfMetP0OJr24ivXwD5ycthTNO",
            appSecret: process.env.TWITTER_CONSUMER_SECRET || "11jtrHjL3Tgj1031IXkyCCQOZTvpBem81eYdOEaNge3VvcLTcl",
            bearerToken: process.env.TWITTER_BEARER_TOKEN || "AAAAAAAAAAAAAAAAAAAAAKJFuAEAAAAAtOvW55PmiOKfyDjtv1FVfRaSAuo%3DpaY8V2YJ2ErrjAiUWrEtKV2eFQohkMWr68m2RBOWZSWEzQHXPK",
            accessToken: process.env.TWITTER_ACCESS_TOKEN || "1796530445368115200-36kMB6FTAxm9e2dEOuxnb7Ycg6tXDj",
            accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET || "R60kD3XbgGJPtVmRd4voBSEXkLKrssUTVOeu5khsOPMtF",
        });

        const mediaId = await client.v1.uploadMedia(outCertificatePath, { type: 'png' });
        await client.v2.tweet({
            text: `Congratulations to ${prAuthor} for their PR merge: ${prTitle}! 🎉`,
            media: { media_ids: [mediaId] },
        });
        console.log("FUCK YESS!! Posted to Twitter");
    } catch (error) {
        console.log(error);
    }
}
