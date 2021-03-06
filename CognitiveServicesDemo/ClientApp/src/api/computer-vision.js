import qs from "qs";
const host = "api.cognitive.microsoft.com";
const computerVisionPath = "/vision/v1.0/analyze";

export const analyseImage = async (
  subscriptionKey,
  region,
  imageUrl,
  params = {}
) => {
  const body = {
    url: imageUrl
  };
  const response = await fetch(
    `https://${region}.${host}${computerVisionPath}?${qs.stringify(params)}`,
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    }
  );
  if (!response.ok) {
    throw new Error(
      `Something went wrong with the request: ${response.statusText} `
    );
  }
  return await response.json();
};
