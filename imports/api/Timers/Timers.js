import { Meteor } from 'meteor/meteor';
import { Mongo } from  'meteor/mongo';
import { check } from 'meteor/check';

export const Timers = new Mongo.Collection('timers');


if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish Messages that are public or belong to the current user
    Meteor.publish('timers', function timersPublication() {
        return Timers.find();
    });
}


Meteor.methods({

    'timers.start'(roomid){
        check(roomid, String);

        Timers.insert({
            roomid,
            startTime: new Date().getTime()
        });
    }
});
