const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const feedRouter = require('./routes/feed');
const userRouter = require('./routes/user');

const { insertStatement, selectStatement } = require('./db');

const port = process.env.PORT || 5000;

io.on('connection', socket => {
  console.log('User has connected');

  socket.on('sendFeed', newFeed => {
    console.log(newFeed);
    let feed = {
      type: newFeed.feedType,
      feedName: newFeed.feedName,
      feedContent: newFeed.feedContent,
      urlLink: newFeed.feedUrl,
      feedLocation: newFeed.feedLocation,
      feedDate: new Date().toISOString()
    };
    insertStatement(feed, 'feeds')
      .then(newFeed => {
        io.emit('createFeed', feed);
        console.log('data inserted');
      })
      .catch(error => {
        console.log(error);
      });
  });

  socket.on('disconnect', () => {
    console.log('User has disconnected');
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));

app.use('/', indexRouter);
app.use('/feed', feedRouter);
app.use('/users', userRouter);

http.listen(port);
