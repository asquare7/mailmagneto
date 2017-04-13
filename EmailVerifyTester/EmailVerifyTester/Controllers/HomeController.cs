using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EmailVerifyTester.MyCustomClass;
using NLog;

namespace EmailVerifyTester.Controllers
{
    public class HomeController : Controller
    {
        EmailValidators.Validator validator = new EmailValidators.Validator();
        private Logger logger = LogManager.GetCurrentClassLogger();

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult VerifyEmail(string email)
        {
           Dictionary<string, string> verifyMessage = new Dictionary<string, string>();
            GetEmailResults getEmailResult = new GetEmailResults();
           // string message = "";
            bool isValid = false;
            if (email != null)
            {
                string domain = validator.GetDomain(email);
                string getMx = validator.GetMX(domain, "203.130.26.105");
                isValid = validator.ValidatEmailAddress("mail@mailmagneto.com", email, getMx);
                if(isValid == true)
                {
                    getEmailResult.valid = "True";
                    getEmailResult.domain = domain;
                    getEmailResult.details = getMx;
                  
                }
                else if(getMx == "No such host is known" || getMx == "No such host is known")
                    {
                    getEmailResult.valid = "False";
                    getEmailResult.domain = "";
                    getEmailResult.details = getMx;
                    }
                else
                {
                    getEmailResult.valid = "False";
                    getEmailResult.domain = domain;
                    getEmailResult.details = getMx;

                }
                //logger.Log(LogLevel.Info, "Sample informational message");
                logger.Info("Email: " + email +  ","+ " Valid: " + getEmailResult.valid +","+ " Domain: " + getEmailResult.domain +","+ " Details: " + getMx);
            }
            return Json(getEmailResult, JsonRequestBehavior.AllowGet);
            //return new JsonResult { Data = message, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

    }
}