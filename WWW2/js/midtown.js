(function() {
  var source = $("#grade-7th-list").html();
  var template = Handlebars.compile(source);

  var data = {
    path: "7th/"
    weeks: [
      {
        index: "1",
        days: [
          {
            day: "monday"
            link: "7th/session_1.1.pdf"
          },
          {
            day: "tuesday"
            link: "7th/session_1.2.pdf"
          },
          {
            day: "wednesday"
            link: "7th/session_1.3.pdf"
          },
          {
            day: "thursday"
            link: "7th/session_1.4.pdf"
          }
        ]
      },
      {
        index: "2",
        days: [
          {
            day: "monday"
            link: "7th/session_2.1.pdf"
          },
          {
            day: "wednesday"
            link: "7th/session_2.2.pdf"
          },
          {
            day: "thursday"
            link: "7th/session_2.3.pdf"
          },
          {
            day: "friday"
            link: "7th/session_2.4.pdf"
          }
        ]
      },
      {
        index: "3",
        days: [
          {
            day: "monday"
            link: "7th/session_3.1.pdf"
          },
          {
            day: "tuesday"
            link: "7th/session_3.2.pdf"
          },
          {
            day: "thursday"
            link: "7th/session_3.3.pdf"
          }
        ]
      },
      {
        index: "4",
        days: [
          {
            day: "monday"
            link: "7th/session_4.1.pdf"
          },
          {
            day: "tuesday"
            link: "7th/session_4.2.pdf"
          },
          {
            day: "thursday"
            link: "7th/session_4.3.pdf"
          }
        ]
      },
      {
        index: "5",
        days: [
          {
            day: "monday"
            link: "7th/session_5.1.pdf"
          },
          {
            day: "tuesday"
            link: "7th/session_5.2.pdf"
          },
          {
            day: "thursday"
            link: "7th/session_5.3.pdf"
          }
        ]
      },
      {
        index: "6",
        days: [
          {
            day: "monday"
            link: "7th/session_6.1.pdf"
          },
          {
            day: "tuesday"
            link: "7th/session_6.2.pdf"
          },
          {
            day: "thursday"
            link: "7th/session_6.3.pdf"
          }
        ]
      }
    ]
  };

  $(".grade-7th-list").append(template(data));
})();

(function() {
  var source = $("#grade-9th-list").html();
  var template = Handlebars.compile(source);

  var data = {
    path: "9th/"
    weeks: [
      {
        index: "1",
        days: [
          {
            day: "monday"
            link: "9th/session_1.1.pdf"
          },
          {
            day: "tuesday"
            link: "9th/session_1.2.pdf"
          },
          {
            day: "wednesday"
            link: "9th/session_1.3.pdf"
          },
          {
            day: "thursday"
            link: "9th/session_1.4.pdf"
          }
        ]
      },
      {
        index: "2",
        days: [
          {
            day: "monday"
            link: "9th/session_2.1.pdf"
          },
          {
            day: "wednesday"
            link: "9th/session_2.2.pdf"
          },
          {
            day: "thursday"
            link: "9th/session_2.3.pdf"
          },
          {
            day: "friday"
            link: "9th/session_2.4.pdf"
          }
        ]
      },
      {
        index: "3",
        days: [
          {
            day: "monday"
            link: "9th/session_3.1.pdf"
          },
          {
            day: "tuesday"
            link: "9th/session_3.2.pdf"
          },
          {
            day: "thursday"
            link: "9th/session_3.3.pdf"
          },
          {
            day: "friday"
            link: "9th/session_3.4.pdf"
          }
        ]
      },
      {
        index: "4",
        days: [
          {
            day: "monday"
            link: "9th/session_4.1.pdf"
          },
          {
            day: "tuesday"
            link: "9th/session_4.2.pdf"
          },
          {
            day: "thursday"
            link: "9th/session_4.3.pdf"
          },
          {
            day: "friday"
            link: "9th/session_4.4.pdf"
          }
        ]
      },
      {
        index: "5",
        days: [
          {
            day: "monday"
            link: "9th/session_5.1.pdf"
          },
          {
            day: "tuesday"
            link: "9th/session_5.2.pdf"
          },
          {
            day: "thursday"
            link: "9th/session_5.3.pdf"
          },
          {
            day: "friday"
            link: "9th/session_5.4.pdf"
          }
        ]
      },
      {
        index: "6",
        days: [
          {
            day: "monday"
            link: "9th/session_6.1.pdf"
          },
          {
            day: "tuesday"
            link: "9th/session_6.2.pdf"
          },
          {
            day: "thursday"
            link: "9th/session_6.3.pdf"
          },
          {
            day: "friday"
            link: "9th/session_6.4.pdf"
          }
        ]
      }
    ]
  };

  $(".grade-9th-list").append(template(data));
})();
