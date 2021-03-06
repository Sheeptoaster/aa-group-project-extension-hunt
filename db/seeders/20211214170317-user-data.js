'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        "firstName": "Jorgan",
        "lastName": "Muldownie",
        "username": "jmuldownie0",
        "email": "jmuldownie0@comsenz.com",
        "bio": "Assimilated value-added emulation",
        "hashedPassword": "oikz4UyYS",
        "avatarURL": "https://dummyimage.com/157x100.png/cc0000/ffffff",
        "createdAt": "3/5/2021",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Jermain",
        "lastName": "Muckian",
        "username": "jmuckian1",
        "email": "jmuckian1@hp.com",
        "bio": "Visionary human-resource implementation",
        "hashedPassword": "dzwDg8vD3R0",
        "avatarURL": "https://dummyimage.com/148x100.png/ff4444/ffffff",
        "createdAt": "5/8/2019",
        "updatedAt": "12/11/2021"
      }, {
        "firstName": "Aguste",
        "lastName": "Illingsworth",
        "username": "aillingsworth2",
        "email": "aillingsworth2@globo.com",
        "bio": null,
        "hashedPassword": "gbaQLoRAiO",
        "avatarURL": "https://dummyimage.com/180x100.png/5fa2dd/ffffff",
        "createdAt": "1/3/2020",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Conchita",
        "lastName": "Climance",
        "username": "cclimance3",
        "email": "cclimance3@ameblo.jp",
        "bio": null,
        "hashedPassword": "9VyrRite2b6",
        "avatarURL": "https://dummyimage.com/136x100.png/dddddd/000000",
        "createdAt": "6/25/2019",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Vita",
        "lastName": "Jakubovicz",
        "username": "vjakubovicz4",
        "email": "vjakubovicz4@vk.com",
        "bio": null,
        "hashedPassword": "3t4UP6yyBs6",
        "avatarURL": "https://dummyimage.com/223x100.png/5fa2dd/ffffff",
        "createdAt": "5/6/2019",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Pippa",
        "lastName": "Lancley",
        "username": "plancley5",
        "email": "plancley5@xrea.com",
        "bio": "Persistent tangible installation",
        "hashedPassword": "FQWPeM9e",
        "avatarURL": "https://dummyimage.com/179x100.png/dddddd/000000",
        "createdAt": "12/29/2019",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Hulda",
        "lastName": "Sartin",
        "username": "hsartin6",
        "email": "hsartin6@ucoz.com",
        "bio": "Diverse zero defect artificial intelligence",
        "hashedPassword": "0wi33xIP85P",
        "avatarURL": null,
        "createdAt": "11/18/2021",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Pauly",
        "lastName": "Cheson",
        "username": "pcheson7",
        "email": "pcheson7@goodreads.com",
        "bio": null,
        "hashedPassword": "QuxonqBfhb2I",
        "avatarURL": "https://dummyimage.com/235x100.png/cc0000/ffffff",
        "createdAt": "4/10/2019",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Web",
        "lastName": "McGenn",
        "username": "wmcgenn8",
        "email": "wmcgenn8@cyberchimps.com",
        "bio": "Pre-emptive reciprocal utilisation",
        "hashedPassword": "FsP3nb7D9C5",
        "avatarURL": null,
        "createdAt": "11/9/2019",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Waldemar",
        "lastName": "Brewers",
        "username": "wbrewers9",
        "email": "wbrewers9@google.pl",
        "bio": "Object-based systemic installation",
        "hashedPassword": "hB7Qmgzgt",
        "avatarURL": "https://dummyimage.com/114x100.png/dddddd/000000",
        "createdAt": "7/28/2020",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Gretta",
        "lastName": "Goldsbury",
        "username": "ggoldsburya",
        "email": "ggoldsburya@whitehouse.gov",
        "bio": "Profit-focused user-facing functionalities",
        "hashedPassword": "2wkrZX6s",
        "avatarURL": "https://dummyimage.com/125x100.png/dddddd/000000",
        "createdAt": "10/5/2020",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Carney",
        "lastName": "Ondrousek",
        "username": "condrousekb",
        "email": "condrousekb@cyberchimps.com",
        "bio": "Optimized local structure",
        "hashedPassword": "vHk8W4",
        "avatarURL": "https://dummyimage.com/192x100.png/cc0000/ffffff",
        "createdAt": "6/13/2020",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Bennie",
        "lastName": "Haselgrove",
        "username": "bhaselgrovec",
        "email": "bhaselgrovec@nsw.gov.au",
        "bio": "Persistent systemic budgetary management",
        "hashedPassword": "K6jBzTO",
        "avatarURL": "https://dummyimage.com/108x100.png/5fa2dd/ffffff",
        "createdAt": "8/21/2020",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Gibbie",
        "lastName": "Evill",
        "username": "gevilld",
        "email": "gevilld@constantcontact.com",
        "bio": null,
        "hashedPassword": "kITctDEMqfXk",
        "avatarURL": "https://dummyimage.com/204x100.png/ff4444/ffffff",
        "createdAt": "12/14/2019",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Romonda",
        "lastName": "Crosthwaite",
        "username": "rcrosthwaitee",
        "email": "rcrosthwaitee@mail.ru",
        "bio": "Profound fresh-thinking interface",
        "hashedPassword": "TuxnHC",
        "avatarURL": "https://dummyimage.com/146x100.png/ff4444/ffffff",
        "createdAt": "7/7/2021",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Brittani",
        "lastName": "Edger",
        "username": "bedgerf",
        "email": "bedgerf@nymag.com",
        "bio": "Grass-roots 4th generation solution",
        "hashedPassword": "BH4SkwnwB",
        "avatarURL": "https://dummyimage.com/196x100.png/cc0000/ffffff",
        "createdAt": "5/29/2020",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Petronille",
        "lastName": "St Clair",
        "username": "pstclairg",
        "email": "pstclairg@kickstarter.com",
        "bio": "Implemented non-volatile internet solution",
        "hashedPassword": "x4WGTYWu",
        "avatarURL": "https://dummyimage.com/218x100.png/ff4444/ffffff",
        "createdAt": "10/11/2021",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Farica",
        "lastName": "Bockmann",
        "username": "fbockmannh",
        "email": "fbockmannh@timesonline.co.uk",
        "bio": "Synchronised object-oriented database",
        "hashedPassword": "v98Sfzh",
        "avatarURL": "https://dummyimage.com/110x100.png/dddddd/000000",
        "createdAt": "9/9/2021",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Carrie",
        "lastName": "Dulanty",
        "username": "cdulantyi",
        "email": "cdulantyi@ning.com",
        "bio": "Secured directional complexity",
        "hashedPassword": "ZSQIaYNNwR",
        "avatarURL": "https://dummyimage.com/123x100.png/dddddd/000000",
        "createdAt": "12/17/2019",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Daniele",
        "lastName": "Knight",
        "username": "dknightj",
        "email": "dknightj@youtube.com",
        "bio": null,
        "hashedPassword": "dkFOVry",
        "avatarURL": null,
        "createdAt": "8/21/2020",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Donny",
        "lastName": "Cornuau",
        "username": "dcornuauk",
        "email": "dcornuauk@vistaprint.com",
        "bio": "Profit-focused stable capacity",
        "hashedPassword": "TqtSGsOzaYn",
        "avatarURL": "https://dummyimage.com/116x100.png/dddddd/000000",
        "createdAt": "4/20/2019",
        "updatedAt": "12/11/2021"
      }, {
        "firstName": "Rich",
        "lastName": "Lofts",
        "username": "rloftsl",
        "email": "rloftsl@zimbio.com",
        "bio": "Stand-alone multimedia website",
        "hashedPassword": "Vz0kj4gERvGU",
        "avatarURL": "https://dummyimage.com/224x100.png/dddddd/000000",
        "createdAt": "11/4/2020",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Aristotle",
        "lastName": "Dukelow",
        "username": "adukelowm",
        "email": "adukelowm@stumbleupon.com",
        "bio": "Visionary bi-directional open system",
        "hashedPassword": "VCl3qoojn",
        "avatarURL": "https://dummyimage.com/107x100.png/cc0000/ffffff",
        "createdAt": "8/30/2021",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Demetre",
        "lastName": "Kettleson",
        "username": "dkettlesonn",
        "email": "dkettlesonn@google.co.uk",
        "bio": "Profound attitude-oriented definition",
        "hashedPassword": "1lyhAM7",
        "avatarURL": "https://dummyimage.com/184x100.png/cc0000/ffffff",
        "createdAt": "9/10/2021",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Felicio",
        "lastName": "Tuson",
        "username": "ftusono",
        "email": "ftusono@narod.ru",
        "bio": "Business-focused transitional benchmark",
        "hashedPassword": "X9zCD8O",
        "avatarURL": "https://dummyimage.com/127x100.png/dddddd/000000",
        "createdAt": "11/8/2020",
        "updatedAt": "12/11/2021"
      }, {
        "firstName": "Sissy",
        "lastName": "Smart",
        "username": "ssmartp",
        "email": "ssmartp@hud.gov",
        "bio": "Upgradable bottom-line database",
        "hashedPassword": "edZJgI0zBoDl",
        "avatarURL": null,
        "createdAt": "5/6/2021",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Keefer",
        "lastName": "Gullberg",
        "username": "kgullbergq",
        "email": "kgullbergq@auda.org.au",
        "bio": "Business-focused leading edge circuit",
        "hashedPassword": "2cfwjl",
        "avatarURL": "https://dummyimage.com/203x100.png/dddddd/000000",
        "createdAt": "10/15/2019",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Leigha",
        "lastName": "McQuaid",
        "username": "lmcquaidr",
        "email": "lmcquaidr@nasa.gov",
        "bio": "Down-sized bottom-line task-force",
        "hashedPassword": "ZvW5W9",
        "avatarURL": "https://dummyimage.com/183x100.png/ff4444/ffffff",
        "createdAt": "5/31/2020",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Jaquenetta",
        "lastName": "Vanderplas",
        "username": "jvanderplass",
        "email": "jvanderplass@jugem.jp",
        "bio": "Team-oriented 6th generation paradigm",
        "hashedPassword": "SXYA5Pu4TbUZ",
        "avatarURL": "https://dummyimage.com/102x100.png/5fa2dd/ffffff",
        "createdAt": "3/5/2019",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Phylis",
        "lastName": "Szach",
        "username": "pszacht",
        "email": "pszacht@ning.com",
        "bio": null,
        "hashedPassword": "jdEgRJ",
        "avatarURL": "https://dummyimage.com/153x100.png/ff4444/ffffff",
        "createdAt": "7/9/2019",
        "updatedAt": "12/11/2021"
      }, {
        "firstName": "Felix",
        "lastName": "Gianilli",
        "username": "fgianilliu",
        "email": "fgianilliu@shinystat.com",
        "bio": "Intuitive secondary system engine",
        "hashedPassword": "j6LUhWlpM",
        "avatarURL": "https://dummyimage.com/159x100.png/ff4444/ffffff",
        "createdAt": "1/23/2020",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Etheline",
        "lastName": "Bertson",
        "username": "ebertsonv",
        "email": "ebertsonv@ycombinator.com",
        "bio": "Operative system-worthy policy",
        "hashedPassword": "qOege69IVvH9",
        "avatarURL": "https://dummyimage.com/125x100.png/5fa2dd/ffffff",
        "createdAt": "6/29/2021",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Ellis",
        "lastName": "Paolacci",
        "username": "epaolacciw",
        "email": "epaolacciw@guardian.co.uk",
        "bio": "Multi-tiered coherent superstructure",
        "hashedPassword": "Sqa5mDHuArY",
        "avatarURL": "https://dummyimage.com/179x100.png/ff4444/ffffff",
        "createdAt": "9/5/2020",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Lenore",
        "lastName": "Boick",
        "username": "lboickx",
        "email": "lboickx@gravatar.com",
        "bio": "Pre-emptive multi-tasking parallelism",
        "hashedPassword": "Q54nKpl1FQ8O",
        "avatarURL": "https://dummyimage.com/141x100.png/cc0000/ffffff",
        "createdAt": "2/28/2020",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Violette",
        "lastName": "Gounin",
        "username": "vgouniny",
        "email": "vgouniny@lulu.com",
        "bio": "Business-focused zero defect middleware",
        "hashedPassword": "ruf61V0jktX",
        "avatarURL": "https://dummyimage.com/229x100.png/dddddd/000000",
        "createdAt": "11/8/2021",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Boigie",
        "lastName": "Radborne",
        "username": "bradbornez",
        "email": "bradbornez@wiley.com",
        "bio": null,
        "hashedPassword": "TGEvh4F",
        "avatarURL": "https://dummyimage.com/135x100.png/dddddd/000000",
        "createdAt": "5/17/2020",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Coop",
        "lastName": "Rubanenko",
        "username": "crubanenko10",
        "email": "crubanenko10@oaic.gov.au",
        "bio": "Inverse 3rd generation initiative",
        "hashedPassword": "i3wYmoN",
        "avatarURL": "https://dummyimage.com/228x100.png/cc0000/ffffff",
        "createdAt": "4/30/2020",
        "updatedAt": "12/11/2021"
      }, {
        "firstName": "Justinn",
        "lastName": "Vagges",
        "username": "jvagges11",
        "email": "jvagges11@nature.com",
        "bio": "Digitized 3rd generation knowledge base",
        "hashedPassword": "hfcZW5ntQ",
        "avatarURL": "https://dummyimage.com/115x100.png/5fa2dd/ffffff",
        "createdAt": "7/10/2021",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Rich",
        "lastName": "Coultass",
        "username": "rcoultass12",
        "email": "rcoultass12@blogtalkradio.com",
        "bio": "Intuitive demand-driven info-mediaries",
        "hashedPassword": "YYsFNC1Z6AN",
        "avatarURL": "https://dummyimage.com/120x100.png/ff4444/ffffff",
        "createdAt": "8/20/2020",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Janey",
        "lastName": "Axten",
        "username": "jaxten13",
        "email": "jaxten13@mit.edu",
        "bio": "Multi-tiered tertiary customer loyalty",
        "hashedPassword": "n352ObYBE",
        "avatarURL": "https://dummyimage.com/226x100.png/cc0000/ffffff",
        "createdAt": "12/30/2019",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Kylie",
        "lastName": "Casone",
        "username": "kcasone14",
        "email": "kcasone14@goo.ne.jp",
        "bio": "Re-engineered multi-tasking info-mediaries",
        "hashedPassword": "TS1PKOcPpost",
        "avatarURL": "https://dummyimage.com/152x100.png/5fa2dd/ffffff",
        "createdAt": "10/23/2021",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Kain",
        "lastName": "Hamlington",
        "username": "khamlington15",
        "email": "khamlington15@sfgate.com",
        "bio": "Versatile upward-trending model",
        "hashedPassword": "rujARQTZJsc3",
        "avatarURL": null,
        "createdAt": "1/8/2021",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Nicol",
        "lastName": "Dyson",
        "username": "ndyson16",
        "email": "ndyson16@wordpress.com",
        "bio": null,
        "hashedPassword": "KQ9BiDU0",
        "avatarURL": "https://dummyimage.com/181x100.png/dddddd/000000",
        "createdAt": "1/12/2020",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Fionnula",
        "lastName": "Lemm",
        "username": "flemm17",
        "email": "flemm17@independent.co.uk",
        "bio": "Re-contextualized background projection",
        "hashedPassword": "Hhw1mHwF",
        "avatarURL": "https://dummyimage.com/244x100.png/dddddd/000000",
        "createdAt": "4/6/2021",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Hermann",
        "lastName": "MacNulty",
        "username": "hmacnulty18",
        "email": "hmacnulty18@feedburner.com",
        "bio": null,
        "hashedPassword": "islLXhm",
        "avatarURL": "https://dummyimage.com/180x100.png/dddddd/000000",
        "createdAt": "7/9/2019",
        "updatedAt": "12/11/2021"
      }, {
        "firstName": "Mylo",
        "lastName": "Tellenbrook",
        "username": "mtellenbrook19",
        "email": "mtellenbrook19@squarespace.com",
        "bio": null,
        "hashedPassword": "5aUkGmLx",
        "avatarURL": "https://dummyimage.com/146x100.png/5fa2dd/ffffff",
        "createdAt": "8/9/2019",
        "updatedAt": "12/13/2021"
      }, {
        "firstName": "Coretta",
        "lastName": "Klug",
        "username": "cklug1a",
        "email": "cklug1a@senate.gov",
        "bio": "Re-engineered client-driven secured line",
        "hashedPassword": "Xv1E58Om",
        "avatarURL": "https://dummyimage.com/224x100.png/dddddd/000000",
        "createdAt": "4/7/2020",
        "updatedAt": "12/10/2021"
      }, {
        "firstName": "Atlante",
        "lastName": "Ibeson",
        "username": "aibeson1b",
        "email": "aibeson1b@posterous.com",
        "bio": null,
        "hashedPassword": "sr57rjdFBf0",
        "avatarURL": "https://dummyimage.com/192x100.png/dddddd/000000",
        "createdAt": "5/6/2020",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Catharina",
        "lastName": "Klimshuk",
        "username": "cklimshuk1c",
        "email": "cklimshuk1c@sun.com",
        "bio": "Future-proofed optimal info-mediaries",
        "hashedPassword": "B7gvM23TI",
        "avatarURL": "https://dummyimage.com/215x100.png/5fa2dd/ffffff",
        "createdAt": "7/13/2019",
        "updatedAt": "12/12/2021"
      }, {
        "firstName": "Curcio",
        "lastName": "Bausor",
        "username": "cbausor1d",
        "email": "cbausor1d@e-recht24.de",
        "bio": "Exclusive needs-based protocol",
        "hashedPassword": "JT6rEt2MiIj",
        "avatarURL": "https://dummyimage.com/163x100.png/cc0000/ffffff",
        "createdAt": "5/20/2020",
        "updatedAt": "12/13/2021"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
