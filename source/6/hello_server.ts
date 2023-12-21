import express, { Request, Response } from 'express'

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({ greeting: 'Hello, world!' })
})

app.listen(port, () => {
	console.log('Server in ascolto a http://localhost:' + port);
})

