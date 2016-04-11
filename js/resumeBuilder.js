'use strict'; //<---Used for debugging my code

//Object #1 BIO
var bio = {
    "name": "Michael D. Cordero",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "678.504.8890",
        "email": "mcordero1206@gmail.com",
        "github": "github.com/mcordero1206",
        "location": "Atlanta, GA"
    },
    "biopic" : "images/mike.jpg",
    "welcomeMessage": "Greetings! My name is Michael and I LOVE to create things!",
    "skills": ["HTML", "CSS", "JS", "Python", "Photoshop", "Graphic Design", "Excel", "Word"],
    "display": function() {

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var bioPic = "images/mike.jpg";
        var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);
        $("#header").append(formattedbioPic);

        $("#header").append(HTMLskillsStart);
        for (var index in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[index] + " &checkmark;&nbsp;");
            $("#skills:last").append(formattedSkill);
        }
        $("#header").append(formattedWelcomeMessage);
    }

};
//Calls the function
bio.display();




//Object 2 Education
var education = {
    "schools": [{
        "name" : "CUNY New York City College of Technology",
        "location" : "Brooklyn, NY",
        "degree" : "Certificate Program",
        "majors" : ["Advertising Design"],
        "dates" : "September 2011 - December 2011",
        "url" : "http://goo.gl/f91wQv"
    }, {
        "name" : "Year Up Atlanta",
        "location" : "Atlanta, GA",
        "degree" : "Work Force Development",
        "majors" : ["Web-Development"],
        "dates" : "September 2015 - Present",
        "url" : "http://goo.gl/yS5RCs"
    }],
    "onlineCourses": [{
        "title": "Udacity",
        "school": "Intro to Programming",
        "date": "November 2015 - Present",
        "url": "http://www.udacity.com/"
    }],

    "display": function() {

        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var schools = education.schools; //<----I don't understand why I 
            //need this but without it, this object won't append properly

            var fmtschool = HTMLschoolName.replace("%data%", schools[school].name);
            fmtschool = fmtschool.replace("#", schools[school].url);
            var fmtDates = HTMLschoolDates.replace("%data%", schools[school].dates);
            var fmtmajor = HTMLschoolMajor.replace("%data%", schools[school].majors);
            var fmtLocation = HTMLschoolLocation.replace("%data%", schools[school].location);
            var fmtDegree = HTMLschoolDegree.replace("%data%", schools[school].degree);
            $(".education-entry:last").prepend(fmtschool + fmtDegree, fmtDates, 
                fmtLocation, fmtmajor);
        }

        $(".education-entry:last").append(HTMLonlineClasses);
        for (var course in education.onlineCourses) {
            var fonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            fonlineTitle = fonlineTitle.replace("#", education.onlineCourses[course].url);
            var fonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var fonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            var fonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(fonlineTitle + fonlineSchool, fonlineDates, fonlineURL);
        }
    }
};
//Calls the function
education.display();




//Object 3 Jobs
var work = {
    "jobs": [{
        "employer": "Encompass Digital Media",
        "title": "Broadcast Coordinator",
        "location": "Atlanta, GA",
        "dates": "2016 - Present",
        "description": "Ingesting of digital content into automation servers" +
        " to broadcast content onto air. Operating Master Control stations. "
    }, {
        "employer": "Home Depot",
        "location": "Kennesaw, GA",
        "title": "Pro Sales Associate",
        "dates": "2014 - 2016",
        "description": "Handling large contractor orders while offering" + 
        " excellent customer service through thorough knowledge of store" +
        " products and services."
    }],
    "display": function() {

        $("#workExperience").append(HTMLworkStart);
        for (var job in work.jobs) {

            var fEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var fDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var fTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var fLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var fDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $("#workExperience").append(fEmployer + fTitle, fDates, fLocation, fDescription);
        }
    }
};
//Calls the function
work.display();

// Object 4
var projects = {
    "projects": [{
        "title": "Align",
        "dates": "2015",
        "description": "A webpage created to promote health and spiritual" + 
        " well being through meditative practices and information thereof.",
        "images": ["images/align.PNG", "images/align2.PNG", "images/align3.PNG"],
        "url" : "http://goo.gl/fo17hD"
    }, ],
    "display": function() {

        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var fmtTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            fmtTitle = fmtTitle.replace("#", projects.projects[i].url);
            var fmtDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var fmtDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var projectURL = HTMLprojectTitle.replace("#", projects.projects[i].url);
            $(".project-entry:last").append(fmtTitle, fmtDates, fmtDescription);

            for (var img in projects.projects[i].images) {
                var fmtImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);

                $(".project-entry:last").append(fmtImage);
            }
        }
    }
};
//Calls the function
projects.display();

//Appends the google map API to the page
$("#mapDiv").append(googleMap);