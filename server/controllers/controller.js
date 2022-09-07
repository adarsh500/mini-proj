var CriminalDB = require('../models/criminal');
var CrimeDB = require('../models/cime');
var FirDB = require('../models/fir');
var VictimDB = require('../models/victim');

//create new criminal record
exports.createcriminal = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content cannt be empty' });
    return;
  }

  //new criminal
  const criminal = new CriminalDB({
    cid: req.body.cid,
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    adhaar: req.body.adhaar,
    address: req.body.address,
  });

  //save criminal in db
  criminal
    .save(criminal)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error while creating criminal record',
      });
    });
};

//create fir
exports.createfir = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content cannt be empty' });
    return;
  }

  const Fir = new FirDB({
    id: req.body.id,
    description: req.body.description,
    type: req.body.type,
  });

  Fir.save(Fir)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error while creating FIR record',
      });
    });
};

//create crime record
exports.createcrime = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content cannt be empty' });
    return;
  }

  const Crime = new CrimeDB({
    id: req.body.id,
    name: req.body.name,
    type: req.body.type,
    location: req.body.location,
    date: req.body.date,
    adhaar: req.body.adhaar,
    address: req.body.address,
  });

  Crime.save(Crime)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error while creating CRIME record',
      });
    });
};

//create victim record
exports.createvictim = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content cannt be empty' });
    return;
  }

  const victim = new VictimDB({
    vid: req.body.vid,
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    adhaar: req.body.adhaar,
    address: req.body.address,
  });

  victim
    .save(victim)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error while creating VICTIM record',
      });
    });
};

//get all firs
exports.findAllFirs = (req, res) => {
  FirDB.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error occured while retrieving fir data',
      });
    });
};
//get all criminals
exports.findAllcriminals = (req, res) => {
  CriminalDB.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error occured while retrieving fir data',
      });
    });
};
//get all Crime record
exports.findAllCrime = (req, res) => {
  CrimeDB.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error occured while retrieving fir data',
      });
    });
};
//get all Victim record
exports.findAllVictim = (req, res) => {
  VictimDB.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error occured while retrieving fir data',
      });
    });
};

//get fir with fir id
exports.findFirId = async (req, res) => {
  try {
    const fir = await FirDB.find({ id: req.params.id });
    const crime = await CrimeDB.find({ id: req.params.id });
    const criminal = await CriminalDB.find({ id: req.params.id });
    const vitcim = await VictimDB.find({ id: req.params.id });
    res.status(201).json({
      fir: fir,
      crime: crime,
      criminal: criminal,
      victim: vitcim,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Error occured while retrieving fir id data',
    });
  }
};
