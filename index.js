const { faker } = require('@faker-js/faker');

function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

module.exports = () => {
    /*const data = { signals: [] }
    for (let i = 0; i < 100; i++) {
        data.signals.push({ id: i, name: `signal-${i}` })
    }
    return data*/
    return { users: 
        faker.helpers.multiple(createRandomUser, {count: 10,})
    };
    
}

