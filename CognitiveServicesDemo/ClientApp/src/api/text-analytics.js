import { entitySearch } from "./bing";
import { moderateText } from "./content-moderator";
const host = "api.cognitive.microsoft.com";
const detectLanguagePath = "/text/analytics/v2.0/languages";
const keyPhrasesPath = "/text/analytics/v2.0/keyPhrases";
const sentimentPath = "/text/analytics/v2.0/sentiment";

export const analyseText = async (
  textAnalyticsKey,
  textAnalyticsRegion,
  contentModeratorKey,
  contentModeratorRegion,
  entitySearchKey,
  text,
  shouldDetectLanguage,
  shouldGetKeyPhrases,
  shouldGetSentiment,
  shouldGetEntities
) => {
  let language;
  if (shouldDetectLanguage) {
    language = await detectLanguage(textAnalyticsKey, textAnalyticsRegion, [
      text
    ]);
  }

  let keyPhrases;
  if (shouldGetKeyPhrases) {
    keyPhrases = await getKeyPhrases(textAnalyticsKey, textAnalyticsRegion, [
      text
    ]);
  }

  let sentiment;
  if (shouldGetSentiment) {
    sentiment = await getSentiment(textAnalyticsKey, textAnalyticsRegion, [
      text
    ]);
  }

  let entities;
  if (shouldGetEntities) {
    entities = await entitySearch(entitySearchKey, text);
  }

  // const contentModeration = await moderateText(
  //   contentModeratorKey,
  //   contentModeratorRegion,
  //   text
  // );

  return {
    text,
    language,
    keyPhrases,
    sentiment,
    entities,
    // profanity: contentModeration && contentModeration.Terms ? contentModeration.Terms : []
  };
};

export const detectLanguage = async (
  subscriptionKey,
  region,
  texts,
  params = {}
) => {
  const documents = generateDocuments(texts);
  const body = {
    documents
  };
  console.log(body);
  const response = await fetch(
    `https://${region}.${host}${detectLanguagePath}`,
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

export const getKeyPhrases = async (
  subscriptionKey,
  region,
  texts,
  params = {}
) => {
  const documents = generateDocuments(texts);
  const body = {
    documents
  };
  const response = await fetch(`https://${region}.${host}${keyPhrasesPath}`, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error(
      `Something went wrong with the request: ${response.statusText} `
    );
  }
  return await response.json();
};

export const getSentiment = async (
  subscriptionKey,
  region,
  texts,
  params = {}
) => {
  const documents = generateDocuments(texts);
  const body = {
    documents
  };
  const response = await fetch(`https://${region}.${host}${sentimentPath}`, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error(
      `Something went wrong with the request: ${response.statusText} `
    );
  }
  return await response.json();
};

const generateDocuments = arrayOfText => {
  return arrayOfText.map((text, index) => {
    return { id: index, text };
  });
};
