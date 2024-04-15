const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "admin",
  host: "localhost",
  database: "namegator",
  port: 5432,
});

client.connect();


exports.execute = async function (query, values) {
	const res = await client.query(query, values);
	return res.rows;
};