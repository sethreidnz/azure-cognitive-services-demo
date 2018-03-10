import qs from "qs";
const host = "api.cognitive.microsoft.com";
const imageSearchPath = "/bing/v7.0/images/search";
const entitiesEndpoint = "/bing/v7.0/entities";

export const imageSearch = async (
  subscriptionKey,
  searchString,
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
  if (!response.ok) {
    throw new Error(
      `Something went wrong with the request: ${response.statusText} `
    );
  }
  return await response.json();
};

export const entitySearch = async (
  subscriptionKey,
  searchString,
  params = {},
  market = "en-us"
) => {
  params.q = searchString;
  params.mkt = market;
  const response = await fetch(
    `https://${host}${entitiesEndpoint}?${qs.stringify(params)}`,
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
