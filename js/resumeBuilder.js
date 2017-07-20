      var bio = {
         name: "Harsh Vidyarthi",
         role: "Frontend Ninja",
         contacts: {
             mobile: "+919880013407",
             email: "hmohit7@gmail.com",
             github: "hmohit7",
             twitter: "@hmohit7",
             location:"New Delhi, India"
         },
         welcomeMessage: "Hi! I'm Harsh a Graphic Designer and Web Developer",
         skills: ["HTML5", "CSS3", "Javascript", "CanvasJS"],
         bioPic: "images/f.jpg",


         display: function() {
             var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
             var formattedName = HTMLheaderName.replace("%data%", bio.name);
             var contactgit = HTMLgithub.replace("%data%", bio.contacts.github);
             var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
             var contactwelmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
             var contactemail = HTMLemail.replace("%data%", bio.contacts.email);
             var contactmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
             var contacttwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
             var contactlocation = HTMLlocation.replace("%data%", bio.contacts.location);
             var allContacts = contactemail + contactmobile +contactgit +contacttwitter+contactlocation;

             $("#header").append(formattedName);
             $("#header").append(formattedRole);
             $("#header").append(contactmobile);
             $("#header").append(contactemail);
             $("#header").append(contacttwitter);
             $("#header").append(contactgit);
             $("#header").append(contactlocation);
             $("#header").append(formattedpic);
             $("#header").append(contactwelmsg);
             $("#footerContacts").append(allContacts);

             if (bio.skills.length > 0) {
                 $("#header").append(HTMLskillsStart);
                 bio.skills.forEach(function skill(cv, index, array) {
                     var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
                     $("#skills").append(formattedSkill);
                 });
             }
         }
     };
     bio.display();


 var work = {
     "jobs": [{
             "employer": "Udacity",
             "title": "Course Developer",
             "location": "New Delhi,India",
             "dates": "Feb 2014 - Current",
             "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
         },
         {
             "employer": "LearnBIG",
             "title": "Software Engineer",
             "location": "Bombay, India",
             "dates": "May 2013 - Jan 2014",
             "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
         },
         {
             "employer": "LEAD Academy Charter High School",
             "title": "Science Teacher",
             "location": "Bangalore,India",
             "dates": "Jul 2012 - May 2013",
             "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
         },
         {
             "employer": "Stratford High School",
             "title": "Science Teacher India",
             "location": "Bangalore,India",
             "dates": "Jun 2009 - Jun 2012",
             "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
         }
     ],
     "display": function() {
         $("#workExperience").append(HTMLworkStart);

         work.jobs.forEach(function(cv, job, array) {
             var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
             var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
             var formattedEmployerTitle = formattedEmployer + formattedTitle;
             $(".work-entry:last").append(formattedEmployerTitle);


             var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
             $(".work-entry:last").append(formattedDate);


             var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
             $(".work-entry:last").append(formattedDescription);


             var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
             $(".work-entry:last").append(formattedLocation);
         });
     }
 };




 var projects = {
     projects: [{
         title: ["Animal fendt ","Portfolio"],
         dates: "20th may 2017",
         description: "Lorem ipsum dolor sit amet, case doctus partiendo vis ad, an oporteat vulputate ius, in sea quis petentium assueverit. In viris exerci propriae qui, duis quaeque et quo. Ne dicta saperet vel, possim aeterno scriptorem cu nec. Quo exerci quaestio dissentiunt eu, eum in dico mollis expetendis. Eam et facilisis urbanitas, postea partiendo vel an.",
         image: [

             "images/k.jpg",
             "images/port.jpg"
         ]
     }],
     display: function() {
         $("#projects").append(HTMLprojectStart);
         projects.projects.forEach(function(cv, pro, array) {
             var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
             $(".project-entry:last").append(projectTitle);
             var projectDates = HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
             $(".project-entry:last").append(projectDates);

             var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
             $(".project-entry:last").append(projectDescription);

             var projectImage = HTMLprojectImage.replace("%data%", projects.projects[pro].image[0]);
             $(".project-entry:last").append(projectImage);

             var projectImage2 = HTMLprojectImage.replace("%data%", projects.projects[pro].image[1]);
             $(".project-entry:last").append(projectImage2);


         });
     }
 };



 var education = {
     schools: [{
             name: "ag church school",
             location: "Bettiah",
             degree: "sslc",
             dates: "15th may 2014",
             majors: ["cse"]
         },
         {
             name: "ms public school",
             location: "Karnataka",
             degree: "sslc",
             dates: "15th may 2014",
             majors: ["cse"]
         },
         {
             name: "rnsit public school",
             location: "Bangalore",
             degree: "hsslc",
             dates: "15th may 2014",
             majors: ["cse"]
         }
     ],


     onlineCourse: [{
             title: "javascript",
             school: "w3school",
             dates: "14th nov 2010",
             url: "w3school.com"
         },
         {
             title: "dbms",
             school: "udacity",
             dates: "16th nov 2011",
             url: "udacity.com"
         }


     ],
     display: function() {
         $("#education").append(HTMLschoolStart);
         education.schools.forEach(function(cv, edu, array) {
             var schoolname = HTMLschoolName.replace("%data%", education.schools[edu].name);
             $(".education-entry:last").append(schoolname);

             var schooldegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
             $(".education-entry:last").append(schooldegree);

             var schooldates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
             $(".education-entry:last").append(schooldates);

             var schoollocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
             $(".education-entry:last").append(schoollocation);

             var schoolmajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
             $(".education-entry:last").append(schoolmajor);


         });
         $(".educati").append(HTMLonlineClasses);
         education.onlineCourse.forEach(function(cv, i, array) {
             var onlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[i].title);
             $(".educati").append(onlinetitle);

             var onlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourse[i].school);
             $(".educati").append(onlineschool);

             var onlinedate = HTMLonlineDates.replace("%data%", education.onlineCourse[i].dates);
             $(".educati").append(onlinedate);

             var onlineurl = HTMLonlineURL.replace("%data%", education.onlineCourse[i].url);
             $(".educati").append(onlineurl);

         });


     }


 };

 $("#mapDiv").append(googleMap);


 $(document).click(function(loc) {
     // your code goes here
     var x = loc.pageX;
     var y = loc.pageY;
     logClicks(x, y);
 });


 work.display();
 projects.display();
 education.display();
