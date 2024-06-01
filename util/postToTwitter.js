import { TwitterApi } from "twitter-api-v2";

export default async function postToTwitter( outCertificatePath, prAuthor, prTitle) {
    try {
        const client = new TwitterApi({
            appKey: "",
            appSecret: "",
            bearerToken: "",
            accessToken: "",
            accessSecret: "",
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
