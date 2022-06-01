import express from 'express';
import cors from 'cors';

import { config } from 'dotenv';
config();

import { createSingleWish, getWishes } from './services/wishlist.service';

const PORT = 3001;
const app = express();
app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
	try {
		await createSingleWish(req.body);
		res.send(200);
	} catch (err) {
		res.status(400).send({
			message: 'Unable to create a wishlist. See error message',
		});
	}
});

app.get('/', async (req, res) => {
	const wishlists = await getWishes();
	res.send(wishlists);
});

app.listen(PORT, () => {
	console.log(`API listening on http://localhost:${PORT}`);
});
