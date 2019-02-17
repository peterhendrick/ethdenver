import { Request, Response } from 'express';
// import { Pool } from 'pg';
import * as request from 'request-promise';

async function receiveRequest(req: Request, res: Response) {
    try {
        // await request('');
        res.status(200).json({message: 'Success'});
        // const [xmrRes, ltcRes, dogeRes, saltRes, usdRes] = await Promise.all([
        //     request('https://www.ShapeShift.io/rate/btc_xmr'),
        //     request('https://www.ShapeShift.io/rate/btc_ltc'),
        //     request('https://www.ShapeShift.io/rate/btc_doge'),
        //     request('https://www.ShapeShift.io/rate/btc_salt'),
        //     request('https://api.coinbase.com/v2/prices/spot?currency=USD')
        // ]);
        // const xmrRate = !xmrRes || JSON.parse(xmrRes).error ? null : JSON.parse(xmrRes).rate;
        // const ltcRate = !ltcRes || JSON.parse(ltcRes).error ? null : JSON.parse(ltcRes).rate;
        // const dogeRate = !dogeRes || JSON.parse(dogeRes).error ? null : JSON.parse(dogeRes).rate;
        // const saltRate = !saltRes || JSON.parse(saltRes).error ? null : JSON.parse(saltRes).rate;
        // const usdRate = !usdRes || JSON.parse(usdRes).error ? null : JSON.parse(usdRes).data.amount;

        // const saveResults = await _saveRates(xmrRate, ltcRate, dogeRate, saltRate, usdRate);
    } catch (error) {
        res.status(500).json({message: error.message});
        throw error;
    }
}

async function _saveRates(xmrRate, ltcRate, dogeRate, saltRate, usdRate) {
    // return await pool.query('INSERT INTO rates (xmr, ltc, doge, salt, usd, id) VALUES ($1, $2, $3, $4, $5, 1)',
    // [xmrRate, ltcRate, dogeRate, saltRate, usdRate]);
}

export const api = {
    receiveRequest
};
