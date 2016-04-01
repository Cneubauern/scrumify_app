import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish Messages that are public or belong to the current user
    Meteor.publish('messages', function tasksPublication() {
        return Messages.find({
            $or: [
                {private: {$ne: true}},
                {owner: this.userId}
            ]
        });
    });
}
Meteor.methods({
    'messages.insert'(text) {
        check(text, String);

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Messages.insert({
            text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    'messages.remove'(taskId) {
        check(taskId, String);

        const task = Messages.findOne(taskId);

        if (task.private && task.owner !== Meteor.userId()) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error('not-authorized');
        }
    }
});