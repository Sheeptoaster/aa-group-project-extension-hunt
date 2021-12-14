'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Comments', [
    {
      "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "extensionId": 10,
      "userId": 35,
      "createdAt": "11/8/2021",
      "updatedAt": "11/27/2021"
    }, {
      "content": "Duis mattis egestas metus.",
      "extensionId": 4,
      "userId": 10,
      "createdAt": "5/21/2021",
      "updatedAt": "10/17/2021"
    }, {
      "content": "Etiam faucibus cursus urna.",
      "extensionId": 3,
      "userId": 47,
      "createdAt": "10/4/2020",
      "updatedAt": "11/12/2021"
    }, {
      "content": "Vivamus vestibulum sagittis sapien.",
      "extensionId": 8,
      "userId": 40,
      "createdAt": "5/28/2021",
      "updatedAt": "3/21/2021"
    }, {
      "content": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      "extensionId": 4,
      "userId": 33,
      "createdAt": "10/21/2021",
      "updatedAt": "12/3/2021"
    }, {
      "content": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "extensionId": 5,
      "userId": 25,
      "createdAt": "11/15/2020",
      "updatedAt": "4/10/2021"
    }, {
      "content": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "extensionId": 7,
      "userId": 35,
      "createdAt": "10/7/2021",
      "updatedAt": "7/13/2021"
    }, {
      "content": "Nam tristique tortor eu pede.",
      "extensionId": 7,
      "userId": 37,
      "createdAt": "10/28/2020",
      "updatedAt": "5/1/2021"
    }, {
      "content": "Duis mattis egestas metus. Aenean fermentum.",
      "extensionId": 4,
      "userId": 31,
      "createdAt": "5/30/2021",
      "updatedAt": "9/22/2021"
    }, {
      "content": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "extensionId": 5,
      "userId": 5,
      "createdAt": "2/1/2021",
      "updatedAt": "9/12/2021"
    }, {
      "content": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
      "extensionId": 8,
      "userId": 9,
      "createdAt": "1/15/2021",
      "updatedAt": "3/30/2021"
    }, {
      "content": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      "extensionId": 10,
      "userId": 23,
      "createdAt": "7/5/2021",
      "updatedAt": "3/13/2021"
    }, {
      "content": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "extensionId": 8,
      "userId": 5,
      "createdAt": "3/26/2021",
      "updatedAt": "12/9/2021"
    }, {
      "content": "In quis justo. Maecenas rhoncus aliquam lacus.",
      "extensionId": 1,
      "userId": 48,
      "createdAt": "10/4/2020",
      "updatedAt": "2/3/2021"
    }, {
      "content": "In congue.",
      "extensionId": 9,
      "userId": 17,
      "createdAt": "11/25/2021",
      "updatedAt": "12/16/2020"
    }, {
      "content": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
      "extensionId": 5,
      "userId": 34,
      "createdAt": "12/11/2021",
      "updatedAt": "3/23/2021"
    }, {
      "content": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
      "extensionId": 7,
      "userId": 38,
      "createdAt": "7/2/2021",
      "updatedAt": "1/6/2021"
    }, {
      "content": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
      "extensionId": 4,
      "userId": 37,
      "createdAt": "10/7/2020",
      "updatedAt": "7/13/2021"
    }, {
      "content": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
      "extensionId": 1,
      "userId": 25,
      "createdAt": "12/10/2021",
      "updatedAt": "1/15/2021"
    }, {
      "content": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
      "extensionId": 2,
      "userId": 48,
      "createdAt": "8/5/2021",
      "updatedAt": "11/27/2021"
    }, {
      "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      "extensionId": 5,
      "userId": 31,
      "createdAt": "5/19/2021",
      "updatedAt": "12/22/2020"
    }, {
      "content": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "extensionId": 1,
      "userId": 21,
      "createdAt": "9/28/2020",
      "updatedAt": "1/14/2021"
    }, {
      "content": "Donec vitae nisi.",
      "extensionId": 2,
      "userId": 43,
      "createdAt": "10/6/2020",
      "updatedAt": "6/14/2021"
    }, {
      "content": "Praesent blandit lacinia erat.",
      "extensionId": 1,
      "userId": 26,
      "createdAt": "4/7/2021",
      "updatedAt": "7/24/2021"
    }, {
      "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "extensionId": 9,
      "userId": 19,
      "createdAt": "7/22/2021",
      "updatedAt": "1/19/2021"
    }, {
      "content": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      "extensionId": 3,
      "userId": 13,
      "createdAt": "8/10/2021",
      "updatedAt": "6/6/2021"
    }, {
      "content": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
      "extensionId": 3,
      "userId": 45,
      "createdAt": "12/18/2020",
      "updatedAt": "11/6/2021"
    }, {
      "content": "Praesent blandit.",
      "extensionId": 4,
      "userId": 49,
      "createdAt": "1/31/2021",
      "updatedAt": "8/25/2021"
    }, {
      "content": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
      "extensionId": 1,
      "userId": 8,
      "createdAt": "11/15/2020",
      "updatedAt": "8/6/2021"
    }, {
      "content": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
      "extensionId": 3,
      "userId": 32,
      "createdAt": "5/25/2021",
      "updatedAt": "4/9/2021"
    }, {
      "content": "Proin eu mi.",
      "extensionId": 10,
      "userId": 40,
      "createdAt": "9/4/2021",
      "updatedAt": "3/23/2021"
    }, {
      "content": "Donec dapibus. Duis at velit eu est congue elementum.",
      "extensionId": 2,
      "userId": 11,
      "createdAt": "7/14/2021",
      "updatedAt": "12/24/2020"
    }, {
      "content": "Nulla justo.",
      "extensionId": 10,
      "userId": 12,
      "createdAt": "10/20/2021",
      "updatedAt": "5/9/2021"
    }, {
      "content": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
      "extensionId": 2,
      "userId": 42,
      "createdAt": "12/10/2021",
      "updatedAt": "11/6/2021"
    }, {
      "content": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
      "extensionId": 1,
      "userId": 44,
      "createdAt": "10/25/2020",
      "updatedAt": "10/16/2021"
    }, {
      "content": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      "extensionId": 6,
      "userId": 18,
      "createdAt": "2/3/2021",
      "updatedAt": "8/24/2021"
    }, {
      "content": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      "extensionId": 8,
      "userId": 10,
      "createdAt": "9/11/2021",
      "updatedAt": "10/10/2021"
    }, {
      "content": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
      "extensionId": 7,
      "userId": 6,
      "createdAt": "12/2/2021",
      "updatedAt": "6/7/2021"
    }, {
      "content": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "extensionId": 7,
      "userId": 17,
      "createdAt": "6/4/2021",
      "updatedAt": "2/25/2021"
    }, {
      "content": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "extensionId": 6,
      "userId": 8,
      "createdAt": "1/3/2021",
      "updatedAt": "6/26/2021"
    }, {
      "content": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      "extensionId": 10,
      "userId": 26,
      "createdAt": "12/19/2020",
      "updatedAt": "4/16/2021"
    }, {
      "content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
      "extensionId": 7,
      "userId": 4,
      "createdAt": "9/7/2021",
      "updatedAt": "12/13/2020"
    }, {
      "content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
      "extensionId": 7,
      "userId": 14,
      "createdAt": "9/30/2020",
      "updatedAt": "1/24/2021"
    }, {
      "content": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      "extensionId": 1,
      "userId": 50,
      "createdAt": "8/12/2021",
      "updatedAt": "12/11/2021"
    }, {
      "content": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
      "extensionId": 3,
      "userId": 8,
      "createdAt": "11/14/2021",
      "updatedAt": "8/10/2021"
    }, {
      "content": "Morbi ut odio.",
      "extensionId": 5,
      "userId": 24,
      "createdAt": "11/21/2021",
      "updatedAt": "1/8/2021"
    }, {
      "content": "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "extensionId": 7,
      "userId": 15,
      "createdAt": "10/31/2020",
      "updatedAt": "5/30/2021"
    }, {
      "content": "In sagittis dui vel nisl. Duis ac nibh.",
      "extensionId": 1,
      "userId": 33,
      "createdAt": "4/6/2021",
      "updatedAt": "5/1/2021"
    }, {
      "content": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "extensionId": 7,
      "userId": 40,
      "createdAt": "9/22/2020",
      "updatedAt": "6/15/2021"
    }, {
      "content": "Donec dapibus.",
      "extensionId": 4,
      "userId": 39,
      "createdAt": "7/31/2021",
      "updatedAt": "7/24/2021"
    }, {
      "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "extensionId": 6,
      "userId": 13,
      "createdAt": "6/1/2021",
      "updatedAt": "3/14/2021"
    }, {
      "content": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
      "extensionId": 10,
      "userId": 41,
      "createdAt": "6/28/2021",
      "updatedAt": "11/14/2021"
    }, {
      "content": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      "extensionId": 9,
      "userId": 17,
      "createdAt": "12/1/2020",
      "updatedAt": "4/9/2021"
    }, {
      "content": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      "extensionId": 9,
      "userId": 22,
      "createdAt": "4/11/2021",
      "updatedAt": "2/19/2021"
    }, {
      "content": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "extensionId": 9,
      "userId": 40,
      "createdAt": "6/26/2021",
      "updatedAt": "10/29/2021"
    }, {
      "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      "extensionId": 5,
      "userId": 21,
      "createdAt": "8/18/2021",
      "updatedAt": "6/4/2021"
    }, {
      "content": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
      "extensionId": 5,
      "userId": 49,
      "createdAt": "10/11/2021",
      "updatedAt": "11/3/2021"
    }, {
      "content": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      "extensionId": 10,
      "userId": 39,
      "createdAt": "12/10/2020",
      "updatedAt": "4/10/2021"
    }, {
      "content": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "extensionId": 5,
      "userId": 46,
      "createdAt": "3/23/2021",
      "updatedAt": "8/1/2021"
    }, {
      "content": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
      "extensionId": 9,
      "userId": 40,
      "createdAt": "7/27/2021",
      "updatedAt": "6/17/2021"
    }, {
      "content": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "extensionId": 2,
      "userId": 43,
      "createdAt": "2/27/2021",
      "updatedAt": "11/20/2021"
    }, {
      "content": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
      "extensionId": 2,
      "userId": 22,
      "createdAt": "12/6/2021",
      "updatedAt": "10/23/2021"
    }, {
      "content": "Vivamus tortor.",
      "extensionId": 2,
      "userId": 33,
      "createdAt": "5/17/2021",
      "updatedAt": "6/26/2021"
    }, {
      "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "extensionId": 4,
      "userId": 6,
      "createdAt": "11/8/2021",
      "updatedAt": "2/4/2021"
    }, {
      "content": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
      "extensionId": 3,
      "userId": 7,
      "createdAt": "5/8/2021",
      "updatedAt": "12/31/2020"
    }, {
      "content": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
      "extensionId": 9,
      "userId": 36,
      "createdAt": "8/12/2021",
      "updatedAt": "1/31/2021"
    }, {
      "content": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      "extensionId": 4,
      "userId": 36,
      "createdAt": "3/31/2021",
      "updatedAt": "6/17/2021"
    }, {
      "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      "extensionId": 8,
      "userId": 11,
      "createdAt": "10/4/2020",
      "updatedAt": "3/15/2021"
    }, {
      "content": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
      "extensionId": 4,
      "userId": 9,
      "createdAt": "2/6/2021",
      "updatedAt": "2/19/2021"
    }, {
      "content": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
      "extensionId": 2,
      "userId": 21,
      "createdAt": "11/9/2020",
      "updatedAt": "1/21/2021"
    }, {
      "content": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "extensionId": 1,
      "userId": 5,
      "createdAt": "3/18/2021",
      "updatedAt": "8/24/2021"
    }, {
      "content": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "extensionId": 2,
      "userId": 45,
      "createdAt": "4/15/2021",
      "updatedAt": "11/6/2021"
    }, {
      "content": "Pellentesque at nulla.",
      "extensionId": 4,
      "userId": 42,
      "createdAt": "5/21/2021",
      "updatedAt": "9/16/2021"
    }, {
      "content": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
      "extensionId": 5,
      "userId": 17,
      "createdAt": "10/18/2021",
      "updatedAt": "1/7/2021"
    }, {
      "content": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
      "extensionId": 3,
      "userId": 19,
      "createdAt": "10/27/2021",
      "updatedAt": "6/26/2021"
    }, {
      "content": "Morbi non quam nec dui luctus rutrum.",
      "extensionId": 6,
      "userId": 45,
      "createdAt": "2/25/2021",
      "updatedAt": "11/25/2021"
    }, {
      "content": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
      "extensionId": 8,
      "userId": 19,
      "createdAt": "3/19/2021",
      "updatedAt": "11/2/2021"
    }, {
      "content": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
      "extensionId": 5,
      "userId": 23,
      "createdAt": "12/30/2020",
      "updatedAt": "11/17/2021"
    }, {
      "content": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
      "extensionId": 1,
      "userId": 6,
      "createdAt": "3/12/2021",
      "updatedAt": "10/18/2021"
    }, {
      "content": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
      "extensionId": 10,
      "userId": 27,
      "createdAt": "8/4/2021",
      "updatedAt": "11/29/2021"
    }, {
      "content": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
      "extensionId": 7,
      "userId": 42,
      "createdAt": "4/15/2021",
      "updatedAt": "9/21/2021"
    }, {
      "content": "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
      "extensionId": 10,
      "userId": 13,
      "createdAt": "12/9/2021",
      "updatedAt": "7/7/2021"
    }, {
      "content": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
      "extensionId": 4,
      "userId": 13,
      "createdAt": "9/13/2021",
      "updatedAt": "7/29/2021"
    }, {
      "content": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
      "extensionId": 10,
      "userId": 44,
      "createdAt": "8/17/2021",
      "updatedAt": "8/4/2021"
    }, {
      "content": "Nulla tempus.",
      "extensionId": 5,
      "userId": 9,
      "createdAt": "11/30/2021",
      "updatedAt": "1/18/2021"
    }, {
      "content": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      "extensionId": 3,
      "userId": 13,
      "createdAt": "8/30/2021",
      "updatedAt": "1/26/2021"
    }, {
      "content": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
      "extensionId": 9,
      "userId": 19,
      "createdAt": "9/23/2021",
      "updatedAt": "4/9/2021"
    }, {
      "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
      "extensionId": 6,
      "userId": 13,
      "createdAt": "10/16/2020",
      "updatedAt": "3/22/2021"
    }, {
      "content": "Suspendisse potenti.",
      "extensionId": 5,
      "userId": 33,
      "createdAt": "12/6/2021",
      "updatedAt": "4/24/2021"
    }, {
      "content": "Donec dapibus.",
      "extensionId": 2,
      "userId": 17,
      "createdAt": "3/8/2021",
      "updatedAt": "5/25/2021"
    }, {
      "content": "Aliquam sit amet diam in magna bibendum imperdiet.",
      "extensionId": 6,
      "userId": 44,
      "createdAt": "11/27/2021",
      "updatedAt": "12/28/2020"
    }, {
      "content": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "extensionId": 8,
      "userId": 25,
      "createdAt": "1/15/2021",
      "updatedAt": "11/16/2021"
    }, {
      "content": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      "extensionId": 5,
      "userId": 21,
      "createdAt": "12/9/2020",
      "updatedAt": "11/20/2021"
    }, {
      "content": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
      "extensionId": 3,
      "userId": 47,
      "createdAt": "10/1/2020",
      "updatedAt": "4/15/2021"
    }, {
      "content": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "extensionId": 1,
      "userId": 46,
      "createdAt": "11/29/2021",
      "updatedAt": "6/25/2021"
    }, {
      "content": "Aenean lectus.",
      "extensionId": 5,
      "userId": 48,
      "createdAt": "3/7/2021",
      "updatedAt": "6/22/2021"
    }, {
      "content": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "extensionId": 2,
      "userId": 33,
      "createdAt": "2/8/2021",
      "updatedAt": "8/8/2021"
    }, {
      "content": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
      "extensionId": 5,
      "userId": 25,
      "createdAt": "6/21/2021",
      "updatedAt": "11/3/2021"
    }, {
      "content": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      "extensionId": 5,
      "userId": 35,
      "createdAt": "12/16/2020",
      "updatedAt": "5/15/2021"
    }, {
      "content": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "extensionId": 7,
      "userId": 25,
      "createdAt": "9/22/2021",
      "updatedAt": "6/20/2021"
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
