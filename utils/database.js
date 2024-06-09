const fs = require('fs');
const databasePath = './src/database.json';

module.exports = {
  addUserToDatabase: (user) => {
    const data = JSON.parse(fs.readFileSync(databasePath, 'utf-8'));
    data.users.push(user);
    fs.writeFileSync(databasePath, JSON.stringify(data, null, 2), 'utf-8');
  },
  
  getUser: (id) => {
    const data = JSON.parse(fs.readFileSync(databasePath, 'utf-8'));
    return data.users.find(user => user.id === id);
  }
};
