const awesomeFunction = (req, res, next) => {
  res.json('Marcia Vallejos');
};

const returnAnotherpPerson = (req, res, next) => {
  res.json('Mon Coeur');
}

module.exports = { awesomeFunction, returnAnotherpPerson };