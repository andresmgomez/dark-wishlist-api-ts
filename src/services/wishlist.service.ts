import { connectDb } from '../gateway/mongo';

interface Wish {
	name: string;
	type: string;
	price: number;
	priority: number;
	desireToBuy: boolean;
}

export const getWishCollection = async () => {
	const db = await connectDb();
	return db.collection<Wish>('wishlists');
};

export const createSingleWish = async (wish: Wish) => {
	const col = await getWishCollection();
	// if (!wish.desireToBuy) {
	// 	throw new Error('Sorry! This item is not in your wishlist');
	// }

	const { insertedId } = await col.insertOne(wish);
	return insertedId.toString();
};

export const getWishes = async () => {
	const col = await getWishCollection();
	return col.find().toArray();
};
