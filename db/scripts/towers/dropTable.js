import db from "../../connection.js";

const response = await db.query(`DROP TABLE towers;`);

console.log(response);

db.end();
