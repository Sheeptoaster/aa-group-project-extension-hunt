'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const upvotesArr = []
        let storedUsers = {}
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j < 51; j++) {
                let randomUser = Math.floor((Math.random() * 50) + 1)
                if (!storedUsers[randomUser]) {
                    let seed = { extensionId: i, userId: randomUser, createdAt: new Date(), updatedAt: new Date() }
                    upvotesArr.push(seed)
                    storedUsers[randomUser] = true
                }
            }
            storedUsers = {}
        }
        return queryInterface.bulkInsert('ExtensionUpvotes', upvotesArr , {})
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('ExtensionUpvotes', null, {})
    }
};
