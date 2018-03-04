using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CognitiveServicesDemo.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace CognitiveServicesDemo.Controllers
{
  [Route("api/[controller]")]
  public class ConfigController : Controller
  {
    private readonly CognitivesServicesOptions _cognitiveServicesConfig;

    public ConfigController(IOptions<CognitivesServicesOptions> cognitiveServicesConfig)
    {
      _cognitiveServicesConfig = cognitiveServicesConfig.Value;
    }

    [HttpGet]
    public IActionResult Get()
    {
      return Ok(_cognitiveServicesConfig);
    }
  }
}
