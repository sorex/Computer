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


    database('localhost','computerdb',function(err, db){
        if (err)
        {
            console.error(err);
            return;
        }

        // 添加
        var newRecord = {};
        newRecord.UUID = 'guid';
        newRecord.TypeID = 'test type';
        newRecord.Name = 'Jasper';
        newRecord.PublishDate = new Date();
        newRecord.CreateDate = new Date();
        newRecord.Status = 1;
        newRecord.Brand = 'a';
        newRecord.Money = '23.0005';

        db.models.materials.create(newRecord, function(err, results){
            var show = "UUID:" + results.UUID + " Money:" + results.Money;
            console.log(show);
        });

        db.models.materials.find({
            Brand: 'a'
        }, function(err, results) {
            if (err) return err;
            for (var i = 0; i < results.length; i++) {
                var show = "UUID:" + results[i].UUID + " Status:"+results[i].Status+" Money:" + results[i].Money;
                console.log(show);
            };
        });

    });
});

module.exports = router;