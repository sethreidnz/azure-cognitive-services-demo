import qs from "qs";
const host = "api.cognitive.microsoft.com";
const contentModeratorTextPath =
  "/contentmoderator/moderate/v1.0/ProcessText/Screen";

export const moderateText = async (
  subscriptionKey,
  region,
  input,
  params = {}
) => {
  const response = await fetch(
    `https://${region}.${host}${contentModeratorTextPath}?${qs.stringify(
      params
    )}`,
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "content-type": "text/plain"
      },
      body: input
    }
  );
  if (!response.ok) {
    throw new Error(
      `Something went wrong with the request: ${response.statusText} `
    );
  }
  return await response.json();
};
