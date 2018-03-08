import qs from "qs";
const host = "api.cognitive.microsoft.com";
const imageSearchPath = "/bing/v7.0/images/search";
const entitiesEntpoint = "/bing/v7.0/entities";

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

export const entitySearch = async (
  searchString,
  subscriptionKey,
  params = {},
  market = 'en-us'
) => {
  params.q = searchString;
  params.mkt = market;
  const response = await fetch(
    `https://${host}${entitiesEntpoint}?${qs.stringify(params)}`,
    {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey
      }
    }
  );
  return await response.json();
};