import qs from "qs";
const host = "api.cognitive.microsoft.com";
const detectLanguagePath = "/text/analytics/v2.0/languages";
const keyPhrasesPath = "/text/analytics/v2.0/keyPhrases";
const sentimentPath = "/text/analytics/v2.0/sentiment";

export const analyseText = async (
  text,
  shouldDetectLanguage,
  shouldGetKeyPhrases,
  shouldGetSentiment,
  subscriptionKey,
  region
) => {

  let language;
  if (shouldDetectLanguage) {
    language = await detectLanguage([text], subscriptionKey, region);
  }

  let keyPhrases;
  if (shouldGetKeyPhrases) {
    keyPhrases = await getKeyPhrases([text], subscriptionKey, region);
  }

  let sentiment;
  if (shouldGetSentiment) {
    sentiment = await getSentiment([text], subscriptionKey, region);
  }
  return {
    language,
    keyPhrases,
    sentiment
  }
}

export const detectLanguage = async (
  texts,
  subscriptionKey,
  region,
  params = {}
) => {
  const documents = generateDocuments(texts)
  const body = {
    documents
  };
  const response = await fetch(
    `https://${region}.${host}${detectLanguagePath}?${qs.stringify(params)}`,
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  );
  return await response.json();
};

export const getKeyPhrases = async(
  texts,
  subscriptionKey,
  region
) => {
  const documents = generateDocuments(texts)
  const body = {
    documents
  };
  const response = await fetch(
    `https://${region}.${host}${keyPhrasesPath}`,
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  );
  return await response.json();
};

export const getSentiment = async (
  texts,
  subscriptionKey,
  region
) => {
  const documents = generateDocuments(texts)
  const body = {
    documents
  };
  const response = await fetch(
    `https://${region}.${host}${sentimentPath}`,
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  );
  return await response.json();
};

const generateDocuments = (arrayOfText) => {
  return arrayOfText.map((text, index) => { return { id: index, text } });
}
