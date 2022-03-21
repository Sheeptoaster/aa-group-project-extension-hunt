'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Comments', [
    {
      "content": "Killer colours :-)",
      "extensionId": 1,
      "userId": 35,
      "createdAt": "11/8/2021",
      "updatedAt": "11/27/2021"
    }, {
      "content": "Cool work you have here.",
      "extensionId": 2,
      "userId": 10,
      "createdAt": "5/21/2021",
      "updatedAt": "10/17/2021"
    }, {
      "content": "You just won the internet!",
      "extensionId": 3,
      "userId": 47,
      "createdAt": "10/4/2020",
      "updatedAt": "11/12/2021"
    }, {
      "content": "I want to learn this kind of navigation! Teach me.",
      "extensionId": 4,
      "userId": 40,
      "createdAt": "5/28/2021",
      "updatedAt": "3/21/2021"
    }, {
      "content": "Mission accomplished. It's engaging dude",
      "extensionId": 5,
      "userId": 33,
      "createdAt": "10/21/2021",
      "updatedAt": "12/3/2021"
    }, {
      "content": "Such icons, many hero, so sublime",
      "extensionId": 6,
      "userId": 25,
      "createdAt": "11/15/2020",
      "updatedAt": "4/10/2021"
    }, {
      "content": "Very sleek, friend.",
      "extensionId": 7,
      "userId": 35,
      "createdAt": "10/7/2021",
      "updatedAt": "7/13/2021"
    }, {
      "content": "I approve your concept, friend.",
      "extensionId": 8,
      "userId": 37,
      "createdAt": "10/28/2020",
      "updatedAt": "5/1/2021"
    }, {
      "content": "Nice use of light in this texture!",
      "extensionId": 9,
      "userId": 31,
      "createdAt": "5/30/2021",
      "updatedAt": "9/22/2021"
    }, {
      "content": "Highly cool notification =)",
      "extensionId": 10,
      "userId": 5,
      "createdAt": "2/1/2021",
      "updatedAt": "9/12/2021"
    }, {
      "content": "Overly incredible dude",
      "extensionId": 1,
      "userId": 9,
      "createdAt": "1/15/2021",
      "updatedAt": "3/30/2021"
    }, {
      "content": "very handy",
      "extensionId": 2,
      "userId": 23,
      "createdAt": "7/5/2021",
      "updatedAt": "3/13/2021"
    }, {
      "content": "Does a great job in what it should do. When features like 'create an environment' are added, this would be perfect!",
      "extensionId": 3,
      "userId": 5,
      "createdAt": "3/26/2021",
      "updatedAt": "12/9/2021"
    }, {
      "content": "Very Useful extension, try adding features to generate virtual environment, reading requirents.txt",
      "extensionId": 4,
      "userId": 48,
      "createdAt": "10/4/2020",
      "updatedAt": "2/3/2021"
    }, {
      "content": "Very useful.",
      "extensionId": 5,
      "userId": 17,
      "createdAt": "11/25/2021",
      "updatedAt": "12/16/2020"
    }, {
      "content": "Its good",
      "extensionId": 6,
      "userId": 34,
      "createdAt": "12/11/2021",
      "updatedAt": "3/23/2021"
    }, {
      "content": "Amazing!",
      "extensionId": 7,
      "userId": 38,
      "createdAt": "7/2/2021",
      "updatedAt": "1/6/2021"
    }, {
      "content": "Hey it works great. And not using memory at all.",
      "extensionId": 8,
      "userId": 37,
      "createdAt": "10/7/2020",
      "updatedAt": "7/13/2021"
    }, {
      "content": "good",
      "extensionId": 9,
      "userId": 25,
      "createdAt": "12/10/2021",
      "updatedAt": "1/15/2021"
    }, {
      "content": "I love this extension.",
      "extensionId": 10,
      "userId": 48,
      "createdAt": "8/5/2021",
      "updatedAt": "11/27/2021"
    }, {
      "content": "Amazing...",
      "extensionId": 1,
      "userId": 31,
      "createdAt": "5/19/2021",
      "updatedAt": "12/22/2020"
    }, {
      "content": "Good. You are relsoved all problems. Thanks for all.",
      "extensionId": 2,
      "userId": 21,
      "createdAt": "9/28/2020",
      "updatedAt": "1/14/2021"
    }, {
      "content": "I rolled back the plugin version",
      "extensionId": 3,
      "userId": 43,
      "createdAt": "10/6/2020",
      "updatedAt": "6/14/2021"
    }, {
      "content": "Finally!!! :)",
      "extensionId": 4,
      "userId": 26,
      "createdAt": "4/7/2021",
      "updatedAt": "7/24/2021"
    }, {
      "content": "what a amazing extension!!!",
      "extensionId": 5,
      "userId": 19,
      "createdAt": "7/22/2021",
      "updatedAt": "1/19/2021"
    }, {
      "content": "Excellent! Works as expected!",
      "extensionId": 6,
      "userId": 13,
      "createdAt": "8/10/2021",
      "updatedAt": "6/6/2021"
    }, {
      "content": "It's great!",
      "extensionId": 7,
      "userId": 45,
      "createdAt": "12/18/2020",
      "updatedAt": "11/6/2021"
    }, {
      "content": "Perfect!",
      "extensionId": 8,
      "userId": 49,
      "createdAt": "1/31/2021",
      "updatedAt": "8/25/2021"
    }, {
      "content": "Great extension.",
      "extensionId": 9,
      "userId": 8,
      "createdAt": "11/15/2020",
      "updatedAt": "8/6/2021"
    }, {
      "content": "bad extension",
      "extensionId": 10,
      "userId": 32,
      "createdAt": "5/25/2021",
      "updatedAt": "4/9/2021"
    }, {
      "content": "Very promising feature",
      "extensionId": 1,
      "userId": 40,
      "createdAt": "9/4/2021",
      "updatedAt": "3/23/2021"
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
