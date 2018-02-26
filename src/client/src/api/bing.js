import qs from "qs";
const host = "api.cognitive.microsoft.com";
const imageSearchPath = "/bing/v7.0/images/search";

export const imageSearch = async (
  searchString,
  subscriptionKey,
  params = {}
) => {
  params.q = searchString;
  const response = await fetch(
    `https://${host}${imageSearchPath}?${qs.stringify(params)}`,
    {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey
      }
    }
  );
  return await response.json();
};
