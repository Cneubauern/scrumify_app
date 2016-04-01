import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';

import {Timers} from '../../api/Timers/Timers.js'

import './Timer.html'

Template.Timer.onCreated(function bodyOnCreated() {
    Meteor.subscribe('timers');

});

Template.Timer.helpers({
  
    time(){

        var date = new Date().getTime() - Timers.findOne().startTime;

        return date;
    }

});

Template.Timer.events({

    'click #startBtn'(){
        Meteor.call('timers.start','1');
    }
    
});