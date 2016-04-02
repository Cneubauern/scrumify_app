import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
//import { AccountsTemplates } from 'meteor/useraccounts:core';

import '/imports/ui/layouts/App_body.js';
import '/imports/ui/layouts/Page_body.js';
import '/imports/ui/components/Chat.js';
import '/imports/ui/pages/App_notFound.js';
import '/imports/ui/pages/About_page.js';
import '/imports/ui/pages/Agb_page.js';
import '/imports/ui/pages/Faq_page.js';
import '/imports/ui/pages/Impressum_page.js';
import '/imports/ui/pages/Start_page.js'

FlowRouter.route('/', {
    name: 'Page.home',
    action() {
        BlazeLayout.render('Page_body', {main: 'Start_page'});
    }
});

FlowRouter.route('/room/:id',{
   name: 'room',
    action(){
        BlazeLayout.render('App_body', {main: 'Chat'});
    }
});


//Static Pages 
FlowRouter.notFound = {
    action (){
        BlazeLayout.render('Page_body', {main: 'App_notFound'});
    }
};

FlowRouter.route('/about', {
    name: 'Page.about',
    action() {
        BlazeLayout.render('Page_body', {main: 'About_page'});
    }
});
FlowRouter.route('/agb', {
    name: 'Page.agb',
    action() {
        BlazeLayout.render('Page_body', {main: 'Agb_page'});
    }
});
FlowRouter.route('/faq', {
    name: 'Page.faq',
    action() {
        BlazeLayout.render('Page_body', {main: 'Faq_page'});
    }
});
FlowRouter.route('/impressum', {
    name: 'Page.impressum',
    action() {
        BlazeLayout.render('Page_body', {main: 'Impressum_page'});
    }
});