// All about that Who I am + Contact me
var bio = {
  "name" : "Almond Milk",
  "role" : "A Drink Worth Drought",
  "contacts" : {
    "mobile" : "303-867-5309",
    "email" : "almond@fairies.com",
    "github" : "californication",
    "instagram" : "almond-lover",
    "location" : "Desert, California"
    },
  "biopic" : "images/almond-milk.jpg",
  "welcomeMessage" : "I am a delecitable treat that cannot be beat.",
  "skills" : [ "Being the Best", "Nourishment", "Folk Music", "Kisses", "Water Sucking"]}

function formatBio() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);

  var formattedInsta = HTMLinsta.replace("%data%", bio.contacts.instagram);
  $("#topContacts").append(formattedInsta);

  var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGit);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic);

  // add in "Skills at a Glance heading"
  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    // add in stills from bio
    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace('%data%',bio.skills[skill]);
      $('#skills').append(formattedSkill);
  };
};

};
bio.format = formatBio();

// All about that work
var work = {
  jobs : [
  { "location" : "Stockholm, Sweden",
    "job" : "Resort Map Maker",
    "employeer" : "FATMAP",
    "duration" : "Winter 2015-2016",
    "title" : "Project Manager",
    "description" : "Built out 3D renderings of all major North American ski resorts using a skillful mix of propritary software, Python, javascript and SQL. Took Fridays off whenever more than 3 inches of snow fell. Led a team of interns through the wild work of startup culture."
  },
  { "location" : "Denver, CO",
    "job" : "Sustainability",
    "employeer" : "US Green Building Council",
    "duration" : "May 2015 - September 2015",
    "title" : "Website Development Intern",
    "description" : "Consistently finished activities quicker than called for often leaving myself an empty to do list. Helped refresh the web presence of USGBC Denver, plan three educational events and build out a salesforce database intended to put marketing and communication channels on a firm footing."

  },
  { "location" : "Chaing Mai, Thailand",
    "job" : "Water Analyst",
    "employeer" : "Thai Dept Natural Resources",
    "duration" : "Feb 2015 - April 2015",
    "title" : "Water Quality Chemist",
    "description" : "Collected and analyzed samples taken in the field which helped to better categorize the surface water of Thailand's northern Golden Triangle. This work took place in a lab and followed highly regulated SOP. During this time I also led English language instruction and facilitated resume building workshops for non-native English speakers."
  },
  { "location" : "Portland, OR",
    "job" : "Inventing cool recipes",
    "employeer" : "Beacon Richards",
    "duration" : "Since January 12, 1956",
    "title" : "Master Puppy Mom",
    "description" : "Bringing a puppy into the world is by all accounts a time consuming and difficult process. My partner and I have steadfastly worked to keep Beacon Richards on teh path of teh straight and narrow, but he is a criminal at heart and falls back to his passion: stealing money for treats. Learn more at danielpowell4.github.io/beacon-the-criminal"

  }

]
};
function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employeer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].duration);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    };
  };
work.formatWork = displayWork();

// All about those Projects
var projects = {
  "projects" : [
    { "title" : "Spacer Explorer",
      "dates" : "Jan 23, 1969 to Dec 19, 1972",
      "description" : "I chosen by the government to be involved in several exploratory expeditions of our solar system involving but not limited to the first human mission to Europa-- Jupiter's icey moon. Though I am unable to entirely disclose all of our findings, I am able to suggest that you should get onto the deep web and start looking for aliens. There is some really cool stuff out there.",
      "images" : [
        "images/moon.jpg",
        "images/alien.jpg"
      ]
    },
    { "title" : "Song and Speech Writer",
      "dates" : "March 2007 to September 2015",
      "description" : "I have had the pleasure of using my talents to aid of our society's most influential members. Though they would not admit it in public, the two individuals below have me in common. I was the chief speech writer during Obama's 2008 Presidential campaign as well as the lead producer for the record shattering videos related to Taylor Swift's multiplatinum 1989.",
      "images" : [
        "images/t-swift.jpg",
        "images/obama.jpg"
      ]
    },
  ]
};
function displayProject() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[project].images.length > 0){
      for (image in projects.projects[project].images){
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
}
projects.formatProject = displayProject();


var education = {
  "schools" : [
    { "name": "University of Denver",
      "location": "Denver, CO",
      "degree": "BSCh + BS",
      "major": "Chemistry (ACS) + Biological Sciences",
      "dates": "September 2010 - June 2014",
      "url": "http://du.edu"
    },
    {   "name": "International Sustainable Development Studies Institute",
        "location": "Chiang Mai, Thailand",
        "degree" : "Thai Style",
        "major": "Ecology and Thai Language",
        "dates": "September 2010 - June 2014",
        "url": "http://isdsi.org"
    }
  ],
  "onlineCourses" : [
    {   "title": "Learn SEO to Grow Your Website",
        "platform": "SkillShare",
        "stated-hours": "1.5",
        "date": "March 2015",
        "url": "https://www.skillshare.com/classes/business/Learn-SEO-to-Grow-Your-Website/986897421"
      },
    {   "title": "Context is Key: Social Media Strategy in a Noisy Online World",
        "platform": "SkillShare",
        "stated-hours": "1.5",
        "date": "March 2015",
        "url": "https://www.skillshare.com/classes/business/Context-is-Key-Social-Media-Strategy-in-a-Noisy-Online-World/101309737"
      },
    {   "title": "Make the Most of Instagram",
        "platform": "SkillShare",
        "stated-hours": "0.5",
        "date": "March 2015",
        "url": "https://www.skillshare.com/classes/photography/Make-the-Most-of-Instagram-Build-Your-Brand/456592175?via=search-layout-grid"
      }
    ]};

;;

function displaySchools() {
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);

    var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", education.schools[school].url);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolUrl + formattedSchoolName + formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);

};
};
education.formatSchools = displaySchools();

function displayOnlineClasses() {
  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    $("#education").append(HTMLonlineSchoolStart);

    var formattedOnlineClassUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].platform);
    $(".online-class-entry:last").append(formattedOnlineClassUrl + formattedOnlineTitle + formattedOnlineSchool);

    var formattedOnlineClassDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date)
    $(".online-class-entry:last").append(formattedOnlineClassDate);
  }
};
education.formatOnlineClasses = displayOnlineClasses();


//Add in a map

$('#mapDiv').append(googleMap);

// logs the location clicked on the page to the console
/*
$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;

  console.log(x,y);
});
*/

// Holds the code that if properly linked to teh internationalizeButton would change the name's case to First LAST notation
/*
function inName(name){
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
};

console.log(inName("James Dean"));

$('#main').append(internationalizeButton);
*/
