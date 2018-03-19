import qs from "qs";
const host = "api.cognitive.microsoft.com";
const imageSearchPath = "/bing/v7.0/images/search";
const spellCheckPath = "/bing/v7.0/spellcheck/";
const entitiesEndpoint = "/bing/v7.0/entities";

export const imageSearch = async (
  subscriptionKey,
  searchString,
  params = {}
) => {
  const searchStringSpellingCorrected = await checkSpelling(subscriptionKey, searchString);
  const spellingCorrected = searchStringSpellingCorrected !== searchString;
  params.q = spellingCorrected ? searchStringSpellingCorrected : searchString;
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
  const searchResult = await response.json();
  return {
    ...searchResult,
    searchText: params.q,
    spellingCorrected
  };
};

export const checkSpelling = async (
  subscriptionKey,
  text,
  params = {}
) => {
  params.text = text;
  params.mode = params.mode ? params.mode : "spell";
  const response = await fetch(
    `https://${host}${spellCheckPath}?${qs.stringify(params)}`,
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
  const spellCheckResponse = await response.json();
  let correctedText = text;
  spellCheckResponse.flaggedTokens.map(token => {
    if(token.suggestions.length > 0 && token.suggestions[0].score > .8){
      correctedText = correctedText.replace(token.token, token.suggestions[0].suggestion)
    }
  });
  return correctedText;
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
