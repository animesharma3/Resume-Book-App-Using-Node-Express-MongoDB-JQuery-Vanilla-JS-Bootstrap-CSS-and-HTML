exports.getHomepage = (req, res, next) => {
    res.render('index', {
        layout: 'index.hbs'
    })
}