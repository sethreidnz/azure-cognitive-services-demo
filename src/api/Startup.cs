using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CognitiveServicesDemo.Api.Options;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace CognitiveServicesDemo.Api
{
  public class Startup
  {
    public Startup(IConfiguration configuration, IHostingEnvironment env)
    {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
          .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
          .AddEnvironmentVariables();

      if (env.IsDevelopment())
      {
        builder.AddUserSecrets<Startup>();
      }

      Configuration = builder.Build();
      HostingEnvironment = env;
    }

    public IHostingEnvironment HostingEnvironment { get; }

    public IConfigurationRoot Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddCors(options => options.AddPolicy(
        "CorsAllowAll",
        p => p.AllowAnyOrigin()
          .AllowAnyMethod()
          .AllowAnyHeader()));

      // setup appsettings options
      services.Configure<CognitivesServicesOptions>(Configuration.GetSection("CognitiveServices"));

      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      loggerFactory.AddConsole(Configuration.GetSection("Logging"));
      loggerFactory.AddDebug();

      if (env.IsDevelopment())
      {
        app.UseCors("CorsAllowAll");
        app.UseDeveloperExceptionPage();
      }

      app.UseMvc();
    }
  }
}
