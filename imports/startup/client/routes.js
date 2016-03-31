import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
//import { AccountsTemplates } from 'meteor/useraccounts:core';

import '/imports/ui/layouts/App_body.js'
import '/imports/ui/components/Chat.js'

FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', {main: 'Chat'});
    }
});

FlowRouter.notFound = {
    action (){
        BlazeLayout.render('App_body', {main: 'App_notFound'});
    }
};