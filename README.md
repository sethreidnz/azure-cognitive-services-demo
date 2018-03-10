# Cognitive Services Demo

This repository was created for a talk given at [Wellington Azure Meetup](https://www.meetup.com/Wellington-Azure-Lunchtime-Meetup/events/248149753/) and is a showcase of a few of the Azure Cognitive Service APIs including:

- [Computer Vision API](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/home)
- [Bing Image Search API](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-image-search/overview)

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

Restore packages for the API by running the following from the root of the project

``` bash
cd src/CognitiveServicesDemo
dotnet restore
```

Restore packages for the client app by running the following from the root of the project

``` bash
cd src/CognitiveServicesDemo/ClientApp
npm install
``` 

### Configuring your free Cognitive Service keys

Now you are run the application but you will need to add the Azure Cognitive Service Keys for the services used. You can go to the site and get free keys by logging in with a Microsoft, Facebook, LinkedIn or Github account. You will need to add a user secrets to the project for each of your keys.

#### Computer Vision API

- Open the [Computer Vision API page here](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/)
- Click on "Try Computer Vision API"
- Click Get API Key on the right of "Computer Vision API"
- Accept the terms and follow the login prompt
- Below you can see the key and the region highlighted in red:

  ![Endpoint Region](/images/ComputerVisionApiKey.JPG)

**Add Key and region to the app**

Open up a terminal or command window and run the from the root of the project replacing **ComputerVisionKeyHere** and **ComputerVisionRegionHere** with your key and region as in the above screenshot:

``` bash
cd CognitiveServicesDemo
dotnet user-secrets set CognitiveServices:ComputerVision:Key ComputerVisionKeyHere
dotnet user-secrets set CognitiveServices:ComputerVision:Region ComputerVisionRegionHere
```

#### Text Analytics API

- Open the [Text Analytics API page here](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/)
- Click on "Try Text Analytics API"
- Click Get API Key on the right of "Text Analytics API"
- Accept the terms and follow the login prompt
- Below you can see the key and the region highlighted in red:

  ![Endpoint Region](/images/TextAnalyticsKey.JPG)

**Add Key and region to the app**

Open up a terminal or command window and run the from the root of the project replacing **TextAnalyticsKeyHere** and **TextAnalyticsRegionHere** with your key and region as in the above screenshot:

``` bash
cd CognitiveServicesDemo
dotnet user-secrets set CognitiveServices:TextAnalytics:Key TextAnalyticsKeyHere
dotnet user-secrets set CognitiveServices:TextAnalytics:Region TextAnalyticsRegionHere
```

#### Content Moderator

- Open the [Content Moderator page here](https://azure.microsoft.com/en-us/services/cognitive-services/content-moderator/)
- Click on "Get Started"
- Click Sign In and use your your Microsoft Account to login
- Once logged into the content moderator over over the cog in the header and select *credentials*
- Below you can see the key and the region highlighted in red:

  ![Endpoint Region](/images/ContentModeratorKey.JPG)

**Add Key and region to the app**

Open up a terminal or command window and run the from the root of the project replacing **ContentModeratorKeyHere** and **ContentModeratorRegionHere** with your key and region as in the above screenshot:

``` bash
cd CognitiveServicesDemo
dotnet user-secrets set CognitiveServices:ContentModerator:Key ContentModeratorKeyHere
dotnet user-secrets set CognitiveServices:ContentModerator:Region ContentModeratorRegionHere
```

#### Bing Search APIs v7

- Open the [Bing Search APIs page here](https://azure.microsoft.com/en-us/services/cognitive-services/bing-web-search-api/)
- Click on "Try Bing Web Search API"
- Click Get API Key on the right of "Bing Search APIs v7"
- Accept the terms and follow the login prompt
- Below you can see the key highlighted in red:

  ![Endpoint Region](/images/BingSearchApiKey.JPG)

**Add Key and region to the app**

Open up a terminal or command window and run the from the root of the project replacing **BingSearchKeyHere** with your key as in the above screenshot:

``` bash
cd CognitiveServicesDemo
dotnet user-secrets set CognitiveServices:BingSearch:Key BingSearchKeyHere
```

If you need to set the region for individual API keys you created then you can run the following (this is for ComputerVision):

``` bash
dotnet user-secrets set CognitiveServices:ComputerVision:Region RegionHere
```

### Running the app

**From Visual Studio Code**

Install [Visual Studio Code](https://code.visualstudio.com), open the root folder and press F5.

**From Visual Studio**

Install [Visual Studio](https://visualstudio.com) open the project file `CognitiveServicesDemo.csproj` and press F5.

**From the command line**

Set the an environment variable `ASPNETCORE_ENVIRONEMENT` to the value "Development"

Then run the following in a terminal:

``` bash
cd src/api
dotnet restore
dotnet run
```

