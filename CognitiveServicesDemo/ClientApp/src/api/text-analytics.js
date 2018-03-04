import qs from "qs";
const host = "api.cognitive.microsoft.com";
const detectLanguagePath = "/vision/v1.0/analyze";
const keyPhrasesPath = "/vision/v1.0/analyze";
const sentimentPath = "/vision/v1.0/analyze";

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

export const getSentiment = async(
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
    `https://${region}.${host}${sentimentPath}?${qs.stringify(params)}`,
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
  region,
  params = {}
) => {
  const documents = generateDocuments(texts)
  const body = {
    documents
  };
  const response = await fetch(
    `https://${region}.${host}${keyPhrasesPath}?${qs.stringify(params)}`,
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
  return text.map((text, index) => { return { id: index, text: '' } });
}
