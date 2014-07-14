var express = require('express');
var router  = express.Router();

var database = require('../db/database');

/* GET home page. */
router.get('/', function(req, res) {
    var session = req.session;
    console.log('start session');
    if (session.item) {
        session.item++;
        console.log('this has item:' + session.item);
        res.render('home/index', {
            title: 'Express',
            user: {
                id: 'abcd',
                name: '' + session.item
            }
        });
    } else {
        console.log('do not have item');
        res.render('home/index', {
            title: 'Express',
            user: {
                id: 'abcd',
                name: 'jasper'
            }
        });
        session.item = 1;
        console.log('save item:'+session.item);
    }
    session.save();


    // database('localhost','computerdb',function(err, db){
    //     if (err)
    //     {
    //         console.error(err);
    //         return;
    //     }

    //     var newRecord = {};
    //     newRecord.GUID = 'guid';
    //     newRecord.TypeID = 'test type';
    //     newRecord.Name = 'Jasper';
    //     newRecord.PublishDate = new Date();
    //     newRecord.CreateDate = new Date();
    //     newRecord.Status = 1;
    //     newRecord.Brand = 'this is a test';

    //     db.models.materials.create(newRecord, function(err, results){
    //         console.log('results');
    //     });

    // });
});

module.exports = router;