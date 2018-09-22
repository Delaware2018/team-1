const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');

const { insertStatement, selectStatement } = require('./db');

const port = process.env.PORT || 5000;

io.on('connection', socket => {
    console.log("User has connected");

    socket.on('sendNewStory', (newStory, callback) => {
        insertStatement(newStory, 'StoryTable');

        io.emit('createNewStory', newStory);
        callback('Got your story');
    });

    socket.on('disconnect', () => {
        console.log('User has disconnected');
    })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/', indexRouter);

http.listen(port);