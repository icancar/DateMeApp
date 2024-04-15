using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.IdentityModel.Tokens;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext dataContext;

        public BuggyController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }
        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecretText() {
            return "secret text";
        }

        [HttpGet("not-found")] 
        public ActionResult<AppUser> GetNotFound() {
            var thing = this.dataContext.Users.Find(-1);
            if (thing is null) {
                return NotFound();
            }
            return thing;
        }


        [HttpGet("server-error")]
        public ActionResult<string> GetServerError() {
            var thing = this.dataContext.Users.Find(-1);
            var thingToReturn = thing.ToString();
            return thingToReturn;
        }


        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest() {
            return BadRequest("This was a bad request");
        }
    }
}