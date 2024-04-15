const {database} = require('./knex');

const getItemsByType = async function (type) {
	const result = await database('item').select('*').where('type',type)
	return result;
};

const getItems = async function () {
	const result = await database.select().table('item');
	return result;
};

const saveItem = async function (item) {
	await database('item').insert({
		description: item.description,
		type: item.type
	})
	return item;
};

const updateItem = async function (id, description) {
	const result = await database('item').where({id}).update({description})
	return result;
}

const deleteItem = async function (id) {
	await database('item').where({id}).del('*')
};


module.exports = {getItemsByType,getItems,saveItem,updateItem,deleteItem}