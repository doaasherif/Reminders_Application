/* this file is supposed to detect the hash change and inject   
 the masterContainer with pages corresponding to the route */

import {tasksPage} from "./views/pages/tasks_page.js"
import {remindersPage} from "./views/pages/reminders_page.js"
import {App} from "./views/app.js"


window.onhashchange = function (){
    /* call App to inject 
    the master container when the hash is changed */
    App()
}

window.onload = function (){
    App()
}

export const appRouter = function (){
    /* check the hash and return 
    a component corresponding to this hash */


    let hash = window.location.hash;
    let selectedComponent;
    let routes = [
        {path: "#prayer", component: 'Prayer'},
        {path: "#dashboard", component: 'Dashboard'},
        {path: "#tasks", component: tasksPage()},
        {path: "#reminders", component: remindersPage()},
        {path: "#pocket", component: 'My Pocket'},
        {path: "#categories", component: 'Categories'},
        {path: "#archive", component: 'Archive'}  
    ]

    for(let route of routes){
        hash === route.path ? selectedComponent = route.component: "";
    }

    return selectedComponent 
}

