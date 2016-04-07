
var role = "Front-End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);


var name = "Michael D. Cordero";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);



//Object #1 BIO
var bio = {
  "name" : "Michael",
  "role" : "Jr. Front-End Web Developer",
  "contacts" : {
    "mobile" : "678.504.8890",
    "email" : "mcordero1206@gmail.com",
    "github" : "github.com/mcordero1206",
    "location" : "Atlanta, GA"
  },
  "welcomeMsg" : "Greetings! My name is Michael and I LOVE to create things!",
  "skills" : ["HTML &checkmark;&nbsp;", "CSS &checkmark;&nbsp;", "JS &checkmark;&nbsp; ", "Python &checkmark;&nbsp;", "Photoshop &checkmark;&nbsp;", "Graphic Design &checkmark;&nbsp;", "Excel &checkmark;&nbsp;", "Word &checkmark;&nbsp;"],
  "display" : function(){

      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      
      
      $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
      $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
     
      var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);   
  
      var bioPic = "images/mike.jpg";
      var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);
        
      var newformattedPic = formattedbioPic + formattedWelcomeMessage;
      $("#header").append(newformattedPic);

$("#header").append(HTMLskillsStart);
for (index in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
    $("#skills:last").append(formattedSkill);
}
  }
   
};

bio.display();




//Object 2 Education
var education = {
  "schools": [
    {
      "name" : "CUNY New York City College of Technology",
      "majors" : "Advertising Design",
      "location" : "Brooklyn, NY",
      "dates" : "September 2011 - December 2011",
      "url" : "http://goo.gl/f91wQv"
    },
    {
      "name" : "Year Up - Atlanta",
      "location" : "Atlanta, GA",
      "majors" : "Web-Development",
      "dates" : "September 2015 - Present",
      "url" : "http://goo.gl/yS5RCs"
    },
  ],
  "onlineCourses": [
    {
      "title": "Intro to Programming",
      "school": "Udacity",
      "date": "November 2015 - Present",
      "url": "http://www.udacity.com/"
    },
  ],
  "display" : function(){
    var schools = education.schools;
    $("#education").append(HTMLschoolStart);

    var schoolFirst = HTMLschoolName.replace("%data%", schools[1].name);
    var formattedDates = HTMLschoolDates.replace("%data%", schools[1].dates);
    var majorFirst = HTMLschoolMajor.replace("%data%", schools[1].majors);
    var formattedLocation = HTMLschoolLocation.replace("%data%", schools[1].location);
  
    $(".education-entry").append(schoolFirst, formattedDates, majorFirst, formattedLocation);
    $(".education-entry:last").append(HTMLonlineClasses);
  }

};

education.display();




//Object 3 Jobs
var work = {
  "jobs":[
    {
      "employer": "Encompass Digital Media",
      "title": "Broadcast Coordinator",
      "location": "Atlanta, GA",
      "dates": "2016 - Present",
      "description": "Ingesting of digital content into automation servers to broadcast content onto air. Operating Master Control stations. "
    },
    {
      "employer": "Home Depot",
      "location": "Kennesaw, GA",
      "title": "Pro Sales Associate",
      "dates": "2014 - 2016",
      "description": "Handling large contractor orders while offering excellent customer service through thorough knowledge of store products and services."
    }
  ],
  "display": function() {

      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);

      $("#workExperience").append(formattedEmployer, formattedDates, formattedTitle, formattedLocation, formattedDescription);

  }
};

work.display();

// Object 4
var projects = {
  "projects":[
    {
      "title": "Align",
      "dates": "2015",
      "description": "Website created to promote health and spiritual well being through meditative practices and information thereof.",
      "images": ["images/align.png", "images/align2.png", "images/align3.png"]
    },
  ],
  "display": function() {

    for (var i=0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      var fmtTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      var fmtDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var fmtDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(fmtTitle, fmtDates, fmtDescription);

      for (var img in projects.projects[i].images) {
      var fmtImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);

        $(".project-entry:last").append(fmtImage);
      }
    }
  }
};

projects.display();


$("#mapDiv").append(googleMap);


