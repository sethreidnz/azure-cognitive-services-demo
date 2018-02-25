# Cognitive Services Demo

This repository was created for a talk given at [Wellington Azure Meetup](https://www.meetup.com/Wellington-Azure-Lunchtime-Meetup/events/248149753/) and is a showcase of a few of the Azure Cognitive Service APIs including:

- [Computer Vision API](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/home)
- [Bing Image Search API](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-image-search/overview)

The app is made up of two parts:

- **src/api** - A .Net Core WebAPI application
- **src/client** - A React JavaScript app

## Pre-requisites

- [.NET Core](https://www.microsoft.com/net/learn/get-started/windows)
- [Node.js >= 8](https://nodejs.org/en/)

## Running the app

You can run this app yourself locally on Windows, Mac or Linux but you will need to first install the packages, get your free Cognitive Services keys and add them to your application using .Net Core user secrets. Follow the instructions below.

### Installing packages

To get started first clone the repository:

``` bash
git clone https://github.com/sethreidnz/azure-cognitive-services-demo
```

Restore packages for the api

``` bash
cd src/api
dotnet restore
```

Restore packages for the client

``` bash
cd src/client
npm install
``` 

### Getting free Cognitive Service keys

Now you are ready to run both the applications but you will need to add the Azure Cognitive Service Keys for the services used. You will need a Microsoft account to access free keys from the links below. For simplicity make sure you choose the same region for each key. You can change the user region for each one but this means adding more user-secrets.

- Computer Vision API - [Get a free key here, click on "Try Computer Vision API"](https://azure.microsoft.com/en-us/services/cognitive-services/bing-web-search-api/)
- Bing Search v7 - To get a free key [click here and then click on "Try Bing Web Search API"](https://azure.microsoft.com/en-us/services/cognitive-services/bing-web-search-api/)

### Adding keys to your app with user-secrets

You will need to add a user secret for each of the keys you got above. This involves opening up a terminal window and running the following from the root of the project, replacing the last value in each line with the corresponding key / region:

``` bash
cd src/api
dotnet user-secrets set CognitiveServices:DefaultRegion DefaultRegionHere
dotnet user-secrets set CognitiveServices:ComputerVision:Key ComputerVisionKeyHere
dotnet user-secrets set CognitiveServices:BingSearch:Key BingSearchKeyHere
```

If you need to set the region for individual API keys you created then you can run the following (this is for ComputerVision):

``` bash
dotnet user-secrets set CognitiveServices:ComputerVision:Region RegionHere
```

### Running the app

The final step is to run both the client and the API app together. You can do them both using a terminal window:

**API**

First you need to set the an environment variable `ASPNETCORE_ENVIRONEMENT` to the value "Development". This is different on every platform.

Then run the following in a terminal:

``` bash
cd src/api
dotnet restore
```

An alternative is just to install [Visual Studio Code](https://code.visualstudio.com) and press F5.

**Client**

``` bash
cd src/client
npm start
```

That should run the app and it will display at [http://localhost:3000](http://localhost:3000)