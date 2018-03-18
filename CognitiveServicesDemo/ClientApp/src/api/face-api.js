import qs from "qs";
const host = "api.cognitive.microsoft.com";
const faceDetectPath = "/face/v1.0/detect";

export const detectFaces = async (
  subscriptionKey,
  region,
  imageUrl,
  params = {}
) => {
  const body = {
    url: imageUrl
  };
  params.returnFaceAttributes = params.returnFaceAttributes
    ? params.returnFaceAttributes
    : "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise";
  console.log(
    `https://${region}.${host}${faceDetectPath}?${qs.stringify(params)}`
  );
  const response = await fetch(
    `https://${region}.${host}${faceDetectPath}?${qs.stringify(params)}`,
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
