import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sprint_08_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;

  