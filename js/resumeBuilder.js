 function contactDetail() {
     var name = "Harsh Vidyarthi";
     var role = "Frontend Ninja";
     var formattedRole = HTMLheaderRole.replace("%data%", role);
     $("#header").prepend(formattedRole);
     var formattedName = HTMLheaderName.replace("%data%", name);
     $("#header").prepend(formattedName);

     var mobile = "+919880013407";
     var contactmobile = HTMLmobile.replace("%data%", mobile);
     $("#header").append(contactmobile);

     var email = "hmohit7@gmail.com";
     var contactemail = HTMLemail.replace("%data%", email);
     $("#header").append(contactemail);

     var twitter = "twitter/mohitvidyarthi";
     var contacttwitter = HTMLtwitter.replace("%data%", twitter);
     $("#header").append(contacttwitter);

     var github = "github.com/hmohit7";
     var contactgit = HTMLgithub.replace("%data%", github);
     $("#header").append(contactgit);

     var conlocation = "Bangalore";
     var contactlocation = HTMLlocation.replace("%data%", conlocation);
     $("#header").append(contactlocation);
     var formattedpic = HTMLbioPic.replace("%data%", "images/f.jpg");
     $("#header").prepend(formattedpic);

     var welcomemsg = "To work in a dynamic environment which fuels my professional growth and to enhance my skills to the best, to contribute towards company’s growth.";
     var contactwelmsg = HTMLwelcomeMsg.replace("%data%", welcomemsg);
     $("#header").append(contactwelmsg);
 }
 contactDetail();




 var bio = {
     "name": "Harsh Vidyarthi",
     "role": "Frontend webdeveloper",
     "contact": 9880013407,
     "message": "welcome to my website",
     "age": 22,
     "skills": ["javascript", "teaching", "DBMS", "php", "GYM"]
 };

 if (bio.skills.length > 0) {

     $("#header").append(HTMLskillsStart);
     bio.skills.forEach(function skill(cv, index, array) {
         var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
         $("#skills").append(formattedSkill);
     });
 }

 var work = {
     "jobs": [{
             "employer": "Udacity",
             "title": "Course Developer",
             "location": "Mountain View, CA",
             "dates": "Feb 2014 - Current",
             "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
         },
         {
             "employer": "LearnBIG",
             "title": "Software Engineer",
             "location": "Seattle, WA",
             "dates": "May 2013 - Jan 2014",
             "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
         },
         {
             "employer": "LEAD Academy Charter High School",
             "title": "Science Teacher",
             "location": "Nashville, TN",
             "dates": "Jul 2012 - May 2013",
             "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
         },
         {
             "employer": "Stratford High School",
             "title": "Science Teacher",
             "location": "Nashville, TN",
             "dates": "Jun 2009 - Jun 2012",
             "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
         }
     ],
     "display": function() {

         for (var job in work.jobs) {
             $("#workExperience").append(HTMLworkStart);

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
         }
     }
 };
 work.display();



 var projects = {
     project: [{
         title: " animal fendt ",
         dates: "20th may 2017",
         description: "Lorem ipsum dolor sit amet, case doctus partiendo vis ad, an oporteat vulputate ius, in sea quis petentium assueverit. In viris exerci propriae qui, duis quaeque et quo. Ne dicta saperet vel, possim aeterno scriptorem cu nec. Quo exerci quaestio dissentiunt eu, eum in dico mollis expetendis. Eam et facilisis urbanitas, postea partiendo vel an.",
         image: [

             "https://www.planwallpaper.com/static/images/offset_WaterHouseMarineImages_62652-2-660x440.jpg",
             "https://www.planwallpaper.com/static/images/images_1_05GM1zY.jpg"

         ]
     }],
     display: function() {
         for (var pro in projects.project) {
             $("#projects").append(HTMLprojectStart);
             var projectTitle = HTMLprojectTitle.replace("%data%", projects.project[pro].title);
             $(".project-entry:last").append(projectTitle);
             var projectDates = HTMLprojectDates.replace("%data%", projects.project[pro].dates);
             $(".project-entry:last").append(projectDates);

             var projectDescription = HTMLprojectDescription.replace("%data%", projects.project[pro].description);
             $(".project-entry:last").append(projectDescription);

             var projectImage = HTMLprojectImage.replace("%data%", projects.project[pro].image[0]);
             $(".project-entry:last").append(projectImage);

             var projectImage = HTMLprojectImage.replace("%data%", projects.project[pro].image[1]);
             $(".project-entry:last").append(projectImage);


         }
     }
 };
 projects.display();


 var education = {
     schools: [{
             name: "ag church school",
             location: "bettiah",
             degree: "sslc",
             dates: "15th may 2014",
             major: "cse"
         },
         {
             name: "ms public school",
             location: "karnataka",
             degree: "sslc",
             dates: "15th may 2014",
             major: "cse"
         },
         {
             name: "rnsit public school",
             location: "bangalore",
             degree: "hsslc",
             dates: "15th may 2014",
             major: "cse"
         }
     ],


     onlinecourse: [{
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



         for (var edu in education.schools) {
             var schoolname = HTMLschoolName.replace("%data%", education.schools[edu].name);
             $(".education-entry:last").append(schoolname);

             var schooldegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
             $(".education-entry:last").append(schooldegree);

             var schooldates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
             $(".education-entry:last").append(schooldates);

             var schoollocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
             $(".education-entry:last").append(schoollocation);

             var schoolmajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
             $(".education-entry:last").append(schoolmajor);


         }
         $(".educati").append(HTMLonlineClasses);
         for (var i = 0; i < education.onlinecourse.length; i++) {
             var onlinetitle = HTMLonlineTitle.replace("%data%", education.onlinecourse[i].title);
             $(".educati").append(onlinetitle);

             var onlineschool = HTMLonlineSchool.replace("%data%", education.onlinecourse[i].school);
             $(".educati").append(onlineschool);

             var onlinedate = HTMLonlineDates.replace("%data%", education.onlinecourse[i].dates);
             $(".educati").append(onlinedate);

             var onlineurl = HTMLonlineURL.replace("%data%", education.onlinecourse[i].url);
             $(".educati").append(onlineurl);

         }


     }


 };
 education.display();
$("#mapDiv").append(googleMap);


 $(document).click(function(loc) {
     // your code goes here
     var x = loc.pageX;
     var y = loc.pageY;
     logClicks(x, y);
 });
