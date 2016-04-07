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
import '/imports/ui/pages/Start_page.js';
import '/imports/ui/pages/Create_page.js';
import '/imports/ui/pages/Search_page.js';

FlowRouter.route('/', {
    name: 'Page.home',
    action() {
        BlazeLayout.render('Page_body', {main: 'Start_page'});
    }
});

FlowRouter.route('/search', {
    name: 'Page.search',
    action() {
        BlazeLayout.render('Page_body', {main: 'Search_page'});
    }
});
FlowRouter.route('/create', {
    name: 'Page.create',
    action() {
        BlazeLayout.render('Page_body', {main: 'Create_page'});
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