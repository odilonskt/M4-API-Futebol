import { times } from '../database/db.js';

class TimeController{
    getAllTime(req, res) {
        res.send(times);
      
    }
}


export default new TimeController()