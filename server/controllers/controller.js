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

exports.deleteFir =  async (req,res) => {
  try {
      await FirDB.findOneAndDelete({id: req.params.id})
      await CrimeDB.findOneAndDelete({id: req.params.id})
      await CriminalDB.findOneAndDelete({id: req.params.id})
      await VictimDB.findOneAndDelete({id: req.params.id})
      res.status(200).json("fir has been deleted")
      
  } catch (err) {
    console.log(err)
  }
}

exports.deleteCrime =  async (req,res) => {
  try {
      await CrimeDB.findOneAndDelete({id: req.params.id})
      res.status(200).json("Crime has been deleted")
      
  } catch (err) {
    console.log(err)
  }
}

exports.deleteCriminal =  async (req,res) => {
  try {
      await CriminalDB.findOneAndDelete({id: req.params.id})
      res.status(200).json("Criminal has been deleted")
      
  } catch (err) {
    console.log(err)
  }
}

exports.deleteVictim =  async (req,res) => {
  try {
      await VictimDB.findOneAndDelete({id: req.params.id})
      res.status(200).json("Victim has been deleted")
      
  } catch (err) {
    console.log(err)
  }
}

exports.updateFir = async (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content cannt be empty' });
    return;
  }

  try {
    
    const updatedFir = await FirDB.findOneAndUpdate({id: req.params.id}, { $set: req.body }, {new: true});
    res.status(200).send(updatedFir)
  } catch (error) {
    console.log(error)
  }

};

exports.updateCrime = async (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content cannt be empty' });
    return;
  }

  try {
    
    const updatedCrime = await CrimeDB.findOneAndUpdate({id: req.params.id}, { $set: req.body }, {new: true});
    res.status(200).send(updatedCrime)
  } catch (error) {
    console.log(error)
  }

};

exports.updateCriminal = async (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content cannt be empty' });
    return;
  }

  try {
    
    const updatedCriminal = await CriminalDB.findOneAndUpdate({id: req.params.id}, { $set: req.body }, {new: true});
    res.status(200).send(updatedCriminal)
  } catch (error) {
    console.log(error)
  }

};

exports.updateVictim = async (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content cannt be empty' });
    return;
  }

  try {
    
    const updatedVictim = await VictimDB.findOneAndUpdate({id: req.params.id}, { $set: req.body }, {new: true});
    res.status(200).send(updatedVictim)
  } catch (error) {
    console.log(error)
  }

};