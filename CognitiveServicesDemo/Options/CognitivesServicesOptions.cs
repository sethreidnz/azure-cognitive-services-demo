namespace CognitiveServicesDemo.Options
{
  public class CognitivesServicesOptions
  {
    public string DefaultRegion { get; set; }

    public CognitiveServiceKey ComputerVision { get; set; }

    public CognitiveServiceKey TextAnalytics { get; set; }

    public CognitiveServiceKey ContentModerator { get; set; }

    public CognitiveServiceKey BingSearch { get; set; }

    public CognitiveServiceKey BingSpeech { get; set; }
  }

  public class CognitiveServiceKey
  {
    public string Key { get; set; }

    public string Region { get; set; }
  }
}