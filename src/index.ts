import express from 'express';
import cors from 'cors';

import { config } from 'dotenv';
config();

const PORT = 3001;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('Tiny API Built using Express.js');
});

app.listen(PORT, () => {
	console.log(`API listening on http://localhost:${PORT}`);
});
