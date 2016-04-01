import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
//import { AccountsTemplates } from 'meteor/useraccounts:core';

import '/imports/ui/layouts/App_body.js';
import '/imports/ui/components/Chat.js';
import '/imports/ui/pages/App_notFound.js';
import '/imports/ui/pages/About_page.js';
import '/imports/ui/pages/Agb_page.js';
import '/imports/ui/pages/Faq_page.js';
import '/imports/ui/pages/Impressum_page.js';

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


FlowRouter.route('/about', {
    name: 'App.about',
    action() {
        BlazeLayout.render('App_body', {main: 'About_page'});
    }
});
FlowRouter.route('/agb', {
    name: 'App.agb',
    action() {
        BlazeLayout.render('App_body', {main: 'Agb_page'});
    }
});
FlowRouter.route('/faq', {
    name: 'App.faq',
    action() {
        BlazeLayout.render('App_body', {main: 'Faq_page'});
    }
});
FlowRouter.route('/impressum', {
    name: 'App.impressum',
    action() {
        BlazeLayout.render('App_body', {main: 'Impressum_page'});
    }
});