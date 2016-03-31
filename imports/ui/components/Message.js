import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Messages } from '../../api/tasks/Messages.js';

import './Message.html';

Template.Message.helpers({
    isOwner() {
        return this.owner === Meteor.userId();
    }
});

Template.Message.events({
  
});