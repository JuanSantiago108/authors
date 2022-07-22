const Author = require("./../models/author.model")




module.exports.addAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}


module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}


module.exports.oneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json(err))
}


module.exports.updateAuthor = (req, res) => {
    const updatedValue = req.body
    Author.findOneAndUpdate(
        { _id: req.params.id },
        updatedValue,
        { new: true, runValidators: true }
    )
        .then(updatedValue => res.json(updatedValue))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(message => res.json(message))
        .catch(err => res.status(400).json(err))
}





