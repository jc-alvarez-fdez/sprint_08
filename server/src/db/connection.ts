import { Sequelize } from 'sequelize';

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('sprint_08_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;

  