

var bio = {
  "name" : "Julia Richards",
  "role" : "GIS Wizard",
  "contacts" : {
    "mobile" : "303-100-0006",
    "email" : "julia.richards@fairies.com",
    "github" : "juliaboolea",
    "instagram" : "jul2ski",
    "location" : "Stockholm, Sweden",

  },

  "biopic" : "https://cdn.fbsbx.com/hphotos-xft1/v/t59.2708-21/11109486_10206799892378565_328754219_n.gif?oh=ac223d83943bad0625531c68deb77e0e&oe=564D8E0E",
  "welcomeMessage" : "I am the best and you should totally give me a job.",
  "skills" : [ "Being the Best", "Remote sensing", "Tiny Houses", "Kisses", "Calculus"
]

};


var work = {
  jobs : [
  { "location" : "Denver, CO",
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
        "major": "Ecology and Thai Language",
        "dates": "September 2010 - June 2014",
        "url": "http://isdsi.org"
    }
  ],
  "onlineCourses" : [
    {   "title": "Learn SEO to Grow Your Website",
        "platform": "SkillShare",
        "stated-hours": "1.5",
        "date": " ",
        "url": "https://www.skillshare.com/classes/business/Learn-SEO-to-Grow-Your-Website/986897421"
      },
    {   "title": "Context is Key: Social Media Strategy in a Noisy Online World",
        "platform": "SkillShare",
        "stated-hours": "1.5",
        "date": " ",
        "url": "https://www.skillshare.com/classes/business/Context-is-Key-Social-Media-Strategy-in-a-Noisy-Online-World/101309737"
      },
    {   "title": "Make the Most of Instagram",
        "platform": "SkillShare",
        "stated-hours": "0.5",
        "date": " ",
        "url": "https://www.skillshare.com/classes/photography/Make-the-Most-of-Instagram-Build-Your-Brand/456592175?via=search-layout-grid"
      },
    {   "title": "Strategic Design The-Art and Science of Branding",
        "platform": "SkillShare",
        "stated-hours": "0.75",
        "date": " ",
        "url": "https://www.skillshare.com/classes/design/Strategic-Design-The-Art-and-Science-of-Branding/329177585"
      },
      {   "title": "Strategic Design The-Art and Science of Branding",
          "platform": "SkillShare",
          "stated-hours": "0.75",
          "date": " ",
          "url": "https://www.skillshare.com/classes/design/Strategic-Design-The-Art-and-Science-of-Branding/329177585"
      },
    ]};


var projects = {
  "projects" : [
    { "title" : "Project Name 1",
      "dates" : "Jan 23 to Dec 19",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images" : [
        "images/beacon_wink_square.gif",
        "images/beacon-card-carrier.jpg"
      ]
    },
    { "title" : "Project Name 2",
      "dates" : "Nov 23 to Dec 17",
      "description" : "Beacon is a deathly criminal who must be feared under all circumstances.",
      "images" : [
        "images/beacon-law-breaker.jpg",
        "images/beacon-in-garden.jpg"
      ]
    },
  ]
};

// add name and title
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// add in "Skills at a Glance heading"
if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  // add in stills from bio
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace('%data%',bio.skills[skill]);
    $('#skills').append(formattedSkill);
}};

//add in Work info
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
displayWork();

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

displayProject();

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
