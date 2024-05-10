// app.ts

import express, { Request, Response } from 'express';
import { splitString, isLeapYear, secretHandshake} from './logic';

const app = express();
const PORT = 8000;
///To set up middleware to parse JSON bodies of requests.
app.use(express.json());

//question 1
app.get('/split/:stringToSplit', (req: Request, res: Response) => {
    const stringToSplit = req.params.stringToSplit;
    const result = splitString(stringToSplit);
    res.json(result);
});

//question 2
// Using req.params to get parameters from the route
app.get('/concat/:param1/:param2', (req: Request, res: Response) => {
    const param1 = req.params.param1;
    const param2 = req.params.param2;
    const revisedString = param1 + param2;
    res.json({ revisedString });
});

//question 2
// Using req.query to get parameters from the route
app.get('/concat', (req: Request, res: Response) => {
    const param1 = req.query.param1 as string;
    const param2 = req.query.param2 as string;
    const revisedString = param1 + param2;
    res.json({ revisedString });
});

//Exercism question 1
app.get('/isLeapYear/:year', (req: Request, res: Response) => {
    const year = parseInt(req.params.year);

    if (isNaN(year)) {
        return res.status(400).json({ error: 'Invalid year' });
    }

    const leapYear = isLeapYear(year);
    res.json({ year, isLeapYear: leapYear });
});

//Exercism question 2
app.get('/secret-handshake/:number', (req: Request, res: Response) => {
    const number = parseInt(req.params.number);
    if (isNaN(number) || number < 1 || number > 31) {
        return res.status(400).json({ error: 'Invalid number. Please provide a number between 1 and 31.' });
    }

    const handshake = secretHandshake(number);
    res.json({ handshake });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
