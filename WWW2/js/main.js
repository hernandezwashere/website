(function() {
  var source = $("#experience-list").html();
  var template = Handlebars.compile(source);

  var data = {
    experiences: [
      {
        icon: "fa-file-text-o",
        link: "resume.pdf",
        title: "Resume // pdf",
        description: "I've interned at Facebook twice — first in Menlo Park and last in New York. At MPK, I redesigned and optimized the grammar query pipeline (graph search) on the Search NLP team. Last summer, at NYC, I added a multi-regional cache to a Messenger data service on the Messenger Infrastructure team. If you'd like to get in touch, email me at josehdz at cs dot stanford dot edu."
      },
      {
        icon: "fa-github",
        link: "//github.com/hernandezjose",
        title: "GitHub // hernandezjose",
        description: "I am the king of private repos, but this year many more projects will see the light of day. First, with faculty consent, I will be publishing my python script used to test my COOL compiler, written for Stanford's Compiler class last year. It fuzz tested the lexer, and auto-generated COOL code to test the parser and semantic-analyzer."
      },
      {
        icon: "fa-database",
        link: "http://infolab.stanford.edu/",
        title: "Stanford Infolab // [modest undergrad]",
        description: "I had the opportunity to research on a team in the Stanford Infolab. The long-term goal is to auto-generate studyguides for MOOCs. We focused on developing a method for extracting keywords from video lectures, which would be used for a studyguide. Check out our (recently submitted) research paper."
      },
      {
        icon: "fa-book",
        link: "//stanfordesp.org/teach/teachers/josehdz/bio.html",
        title: "Stanford Splash // [teaching profile]",
        description: "Here is my teaching profile for Stanford Spash (education for students by students). I have taught classes in game theory, bike repair, California housing history (Proposition 13), and origami. My favorite has been game theory — I'm excited to iterate and improve it! Kawasaki rose by following this diagram. Looking forward to teach more classes next year."
      },
      {
        icon: "fa-medium",
        link: "//medium.com/@josehdz",
        title: "Medium // @josehdz",
        description: "Elevating the mental grub in the world."
      },
      {
        icon: "fa-linkedin-square",
        link: "//linkedin.com/in/josehdz",
        title: "LinkedIn // josehdz",
        description: "My professional profile."
      }
    ]
  };

  $(".experience-list").append(template(data));
})();

(function() {
  var source = $("#teaching-list").html();
  var template = Handlebars.compile(source);

  var data = {
    experiences: [
      {
        link: "",
        title: "Mission Bit",
        description: "Talk about Mission Bit"
      },
      {
        link: "",
        title: "Midtown",
        description: "Talk about midtown"
      },
      {
        link: "",
        title: "Section leading",
        description: "Talk about section leading"
      },
      {
        link: "",
        title: "Stanford splash",
        description: "Talk about splash"
      }
    ]
  };

  $(".teaching-list").append(template(data));
})();

// experiences: [
//   {
//     icon: "fa-file-text-o",
//     link: "resume.pdf",
//     title: "Resume // pdf",
//     description: "I've interned at Facebook twice — first in Menlo Park and last in New York. At MPK, I redesigned and optimized the grammar query pipeline (graph search) on the Search NLP team. Last summer, at NYC, I added a multi-regional cache to a Messenger data service on the Messenger Infrastructure team. If you'd like to get in touch, email me at josehdz at cs dot stanford dot edu."
//   },
//   {
//     icon: "fa-github",
//     link: "//github.com/hernandezjose",
//     title: "GitHub // hernandezjose",
//     description: "I am the king of private repos, but this year many more projects will see the light of day. First, with faculty consent, I will be publishing my python script used to test my COOL compiler, written for Stanford's Compiler class last year. It fuzz tested the lexer, and auto-generated COOL code to test the parser and semantic-analyzer."
//   },
//   {
//     icon: "fa-database",
//     link: "http://infolab.stanford.edu/",
//     title: "Stanford Infolab // [modest undergrad]",
//     description: "I had the opportunity to research on a team in the Stanford Infolab. The long-term goal is to auto-generate studyguides for MOOCs. We focused on developing a method for extracting keywords from video lectures, which would be used for a studyguide. Check out our (recently submitted) research paper."
//   },
//   {
//     icon: "fa-book",
//     link: "//stanfordesp.org/teach/teachers/josehdz/bio.html",
//     title: "Stanford Splash // [teaching profile]",
//     description: "Here is my teaching profile for Stanford Spash (education for students by students). I have taught classes in game theory, bike repair, California housing history (Proposition 13), and origami. My favorite has been game theory — I'm excited to iterate and improve it! Kawasaki rose by following this diagram. Looking forward to teach more classes next year."
//   },
//   {
//     icon: "fa-medium",
//     link: "//medium.com/@josehdz",
//     title: "Medium // @josehdz",
//     description: "Elevating the mental grub in the world."
//   },
//   {
//     icon: "fa-linkedin-square",
//     link: "//linkedin.com/in/josehdz",
//     title: "LinkedIn // josehdz",
//     description: "My professional profile."
//   }
// ]
