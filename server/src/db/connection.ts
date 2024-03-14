import { Sequelize } from 'sequelize';

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('sprint_08_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export default sequelize;


/*
  casa: 'sprint_08_db', 'root', '24MyCaboSQL25',

it: 'sprint_08_db', 'root', '', 

*/