var schedule = require("node-schedule");

var rule = new schedule.RecurrenceRule();

　　

　　
rule.second = [0,30];

var j = schedule.scheduleJob(rule, function() {　　

　
});

//j.cancel();