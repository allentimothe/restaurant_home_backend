//Require model
const Clockin = require('../models/clockin')

async function index(req, res) {
// Index action
    try {
      const clockins = await Clockin.find({ uid: req.query.uid }).sort('-level');
      res.status(200).json(clockins); //  send JSON data as an HTTP response
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'something went wrong' }); // res.status(400)<<--- "400" set the error code.
    }
    }


    async function create(req, res) {
      try {
          const clockin = await Clockin.create(req.body);
          req.query.uid = clockin.uid;
          //res.status(201).json({ msg: 'Punch Logged Successfully' });
          index(req, res);
      } catch (error) {
          res.status(401).json({ error: 'something went wrong' });
      }
  }

  async function deleteClockin(req, res) {
    try {
        const deletedClockin = await Clockin.findByIdAndDelete(req.params.id);
        req.query.uid = deletedClockin.uid;
        index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}

async function update(req, res) {
  try {
      const updatedClockin = await Clockin.findByIdAndUpdate(
          req.params.id, req.body, { new: true }
          );
          req.query.uid = updatedClockin.uid;
          index(req, res);
      } catch (error) {
          res.status(401).json({ error: 'something went wrong' });
  }
}


module.exports = {
  index,
  create,
  delete: deleteClockin,
  update
};