import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Messages } from '../../api/tasks/Messages.js';

import './Message.js';
import './Chat.html';

Template.Chat.helpers({
    messages() {
        const instance = Template.instance();
        if (instance.state.get('hideCompleted')) {
            // If hide completed is checked, filter tasks
            return Messages.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
        }
        // Otherwise, return all of the tasks

        return Messages.find({}, { sort: { createdAt: 1 } });
    }
});

Template.Chat.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('messages');

});

Template.Chat.events({
    'submit .new-message'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const text = target.text.value;

        // Insert a task into the collection
        Meteor.call('messages.insert', text);

        // Clear form
        target.text.value = '';
    }
});