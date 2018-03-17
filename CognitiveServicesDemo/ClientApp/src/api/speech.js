import qs from "qs";
const host = "speech.platform.bing.com";
const speechToTextEndpoint = "/speech/recognition/interactive/cognitiveservices/v1";

export const imageSearch = async (
  subscriptionKey,
  audioBlob,
  params = {}
) => {
  params.language = params.language ? params.language : "en-US";
  params.format = params.format ? params.format : "detailed";
  const response = await fetch(
    `https://${host}${imageSearchPath}?${qs.stringify(params)}`,
    {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey
      }
    }
  );
  if (!response.ok) {
    throw new Error(
      `Something went wrong with the request: ${response.statusText} `
    );
  }
  return await response.json();
};