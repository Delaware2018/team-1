const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
//const feedRouter = require('./routes/feed');

const { insertStatement, selectStatement } = require('./db');

const port = process.env.PORT || 5000;

io.on('connection', socket => {
    console.log("User has connected");

    socket.on('sendFeed', (newFeed, callback) => {
        insertStatement(newFeed, 'feeds')
            .then((newFeed) => {
                io.emit('createFeed', newFeed);
                callback('Got your story');
            })
    });

    socket.on('disconnect', () => {
        console.log('User has disconnected');
    })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));;
app.use(cors());
app.use(morgan('dev'));

app.use('/', indexRouter);
//app.use('/feed', feedRouter);

http.listen(port);