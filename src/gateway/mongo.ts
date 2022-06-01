import { MongoClient } from 'mongodb';

export const connectDb = async () => {
	const client = new MongoClient(process.env.MONGO_URL!);
	await client.connect();
	return client.db('products');
};
