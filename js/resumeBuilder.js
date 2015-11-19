

var bio = {
  "name" : "Julia Richards",
  "role" : "GIS Wizard",
  "contacts" : {
    "mobile" : "303-100-0006",
    "email" : "julia.richards@fairies.com",
    "github" : "juliaboolea",
    "instagram" : "jul2ski",
    "location" : "Yurt",

  },
  "biopic" : "https://cdn.fbsbx.com/hphotos-xft1/v/t59.2708-21/11109486_10206799892378565_328754219_n.gif?oh=ac223d83943bad0625531c68deb77e0e&oe=564D8E0E",
  "welcomeMessage" : "I am the best and you should totally give me a job.",
  "skills" : [ "Being the Best", "Remote sensing", "Knowing about Tiny Houses", "Kisses", "Raising a <a href='http://danielpowell4.github.io/beacon-the-criminal'>criminal</a>"
]

}



var work = {
  "city" : "Fairy Land",
  "job" : "Inventing cool recipes",
  "employeer" : "Beacon Richards",
  "duration" : "Since January 12, 1956"
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
        "date": ,
        "url": "https://www.skillshare.com/classes/business/Learn-SEO-to-Grow-Your-Website/986897421"
      },
    {   "title": "Context is Key: Social Media Strategy in a Noisy Online World",
        "platform": "SkillShare",
        "stated-hours": "1.5",
        "date": ,
        "url": "https://www.skillshare.com/classes/business/Context-is-Key-Social-Media-Strategy-in-a-Noisy-Online-World/101309737"
      },
    {   "title": "Make the Most of Instagram",
        "platform": "SkillShare",
        "stated-hours": "0.5",
        "date": ,
        "url": "https://www.skillshare.com/classes/photography/Make-the-Most-of-Instagram-Build-Your-Brand/456592175?via=search-layout-grid"
      },
    {   "title": "Strategic Design The-Art and Science of Branding",
        "platform": "SkillShare",
        "stated-hours": "0.75",
        "date": ,
        "url": "https://www.skillshare.com/classes/design/Strategic-Design-The-Art-and-Science-of-Branding/329177585"
      },
      {   "title": "Strategic Design The-Art and Science of Branding",
          "platform": "SkillShare",
          "stated-hours": "0.75",
          "date": ,
          "url": "https://www.skillshare.com/classes/design/Strategic-Design-The-Art-and-Science-of-Branding/329177585"
      },
    ]}


var projects = {
  "projects" : [
    { "title" : "Project Name 1",
      "dates" : "Jan 23 to Dec 19",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images" : [
        "http://image1",
        "http://image2"
      ]
    },
    { "title" : "Project Name 2",
      "dates" : "Nov 23 to Dec 17",
      "description" : "Beacon is a deathly criminal who must be feared under all circumstances.",
      "images" : [
        "http://image1",
        "http://image2"
      ]
    },
  ]
}


if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace('%data%',bio.skills[0]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%',bio.skills[1]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%',bio.skills[2]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%',bio.skills[3]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%',bio.skills[4]);
  $('#skills').append(formattedSkill);
}

for (jobs in work.job) {
  
}
//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
