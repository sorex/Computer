var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var session      = require('express-session');
var SessionStore = require('express-mysql-session');
var hbs          = require('hbs');
var marked       = require('marked');

var routes    = require('./routes/index');
var users     = require('./routes/users');
var notebooks = require('./routes/notebooks');
var tablets   = require('./routes/tablets');
var phones    = require('./routes/phones');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var blocks = {};

hbs.registerHelper('extend', function(name, options) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(options.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];
    return val;
});

hbs.registerHelper('markdown', function(options){
    return marked(options.fn(this));
});

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'session_cookie_secret',
    resave: true,
    saveUninitialized: true,
    store: new SessionStore({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'p@ssw0rd',
        database: 'session_test'
    })
}));

app.use('/', routes);
app.use('/users', users);
app.use('/notebooks', notebooks);
app.use('/tablets', tablets);
app.use('/phones', phones);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;