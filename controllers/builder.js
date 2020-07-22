exports.getBuilderPage = (req, res, next) => {
    res.render('builder', {
        layout: 'index'
    })
}

exports.getPreviewPage = (req, res, next) => {
    res.send('Preview Page')
}