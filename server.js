/* Dependencies -
    express, morgan, dotenv, mongoose, colors, express-handlebars
*/

const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')
const exphbs = require('express-handlebars')
const basicRouter = require('./routes/routes')
const builderRouter = require('./routes/builder')
const connectDB = require('./config/db')
const colors = require('colors')

// Load Config File
dotenv.config({
    path: "./config/config.env"
})

// Connect To Database
connectDB()

// Initialize the application
const app = express()

// Morgan Logging Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// View Engine and Layout
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

// Static Folder Middleware
app.use(express.static(path.join(__dirname, 'static')))

// JSON Request Body Parse
app.use(express.json())

// Routes Middleware
app.use('/', basicRouter)
app.use('/builder', builderRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    } else {
        console.log(`Server is running at http://localhost:${PORT}`.yellow.underline.bold)
    }
})

// Handling unhandled error

process.on('unhandledRejection', (err, promise) => {
    // Log the error message
    console.log(`Error: ${err.message}`.red)
    // Close the server and exit the process
    server.close(() => process.exit(1))
})