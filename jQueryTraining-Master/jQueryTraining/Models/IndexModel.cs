using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace jQueryTraining.Models {
    public class IndexModel {
        public string firstName { get; set; }
        public string lastName { get; set; }
        [EmailAddress]
        public string emailAddress { get; set; }
        public string slType {get; set;}
        public string acceptTerms { get; set; }

        public string FormPostMessage { get; set; }
    }
}