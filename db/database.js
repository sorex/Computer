var orm = require("orm");

var connections = {};

function setup(db) {
  var materials = db.define('materials', {
    'GUID': {
      type: 'text',
      key: true,
      required: true,
      size: 32
    },
    'TypeID': {
      type: 'text',
      size: 32
    },
    'Name': {
      type: 'text',
      size: 200
    },
    'PublishDate': {
      type: 'date',
      time: true
    },
    'CreateDate': {
      type: 'date',
      time: true
    },
    'Status': {
      //type: 'enum',
      //values: [ "OK", "DELETE"]
      type: 'integer'
    },
    'Brand': {
      type: 'text',
      size: 200
    }
  });
}

module.exports = function (host, database, next) {
  if (connections[host] && connections[host][database]) {
    return connections[host][database];
  }

  var opts = {
    user     : 'root',
    password : 'p@ssw0rd',
    host     : host,
    database : database,
    protocol : 'mysql',
    port     : '3306',
    query    : { pool: true }
  };

  orm.connect(opts, function (err, db) {
    if (err) return next(err);

    connections[host] = connections[host] || {};
    connections[host][database] = db;
    setup(db);
    next(null, db);
  });  
};