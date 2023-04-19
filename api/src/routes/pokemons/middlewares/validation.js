const validation = (req, res, next) => {
    const {name,image,up,attack,defense,types} = req.body;
    if(name&&image&&up&&attack&&defense&&types) {
        next();
    } else {
        res.status(400).json({ message: 'missing data' });
    }
}

module.exports = validation;
