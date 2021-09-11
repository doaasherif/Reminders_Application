const mainAside = document.getElementById('aside');

const mainAsideObj = {

    state: true,

    asideHeader: {
        appLogo: "iD0-reminder",
        appName: "Reminders"
    },

    asideItems: [
        {icon: "iD0-prayer", title: "Prayer", route: "#prayer", active: true},
        {icon: "iD0-dashboard", title: "Dashboard", route: "#dashboard", active: false},
        {icon: "iD0-tasks", title: "Tasks", route: "#tasks", active: false},
        {icon: "iD0-reminder-li", title: "Reminders", route: "#reminders", active: false},
        {icon: "iD0-pocket", title: "My Pocket", route: "#pocket", active: false},
        {icon: "iD0-categories", title: "Categories", route: "#categories", active: false},
        {icon: "iD0-archive", title: "Archive", route: "#archive", active: false}]
}

function mainAsideTemp(){

    let asideTemp = `
                    <section class="D0-aside-con d-flex flex-column">

                        
                    <header class="D0-rem-header cD0-bg-white-gray w-100 cD0-gray fD0-size-29 fD0-arial uD0-click d-flex uD0-gap-24 align-items-center">
                        <i class="${mainAsideObj.asideHeader.appLogo} ${mainAsideObj.state? "d-inline-block" : "d-none"} uD0-cover uD0-size-42-36"></i>
                        ${mainAsideObj.state ? mainAsideObj.asideHeader.appName : ""}
                        <i onclick="moveAside(event)" class="iD0-menu uD0-cover uD0-size-32 d-inline-block uD0-m-l-auto"></i>
                    </header>


                    <ul class="ps-0 uD0-click">
                    `
        for(let [index, item] of mainAsideObj.asideItems.entries()){
            asideTemp+= `<li onclick="toggleActive(${index}); router(${index});" class="${item.active ? "cD0-bg-blue" : false} D0-aside-li d-flex cD0-white-gray fD0-size-29 fD0-arial uD0-gap-24 align-items-center">
                        <i class="${item.icon} uD0-cover uD0-size-32 d-inline-block"></i>
                        ${mainAsideObj.state? item.title : ""}
                        </li>`
        }

        asideTemp+= `
                    </ul>

                    <div class="D0-user-sec cD0-white-gray fD0-arial fD0-size-32 cD0-bg-blue-30 d-flex flex-wrap-reverse align-items-center mt-auto uD0-gap-24">
                        <i class="iD0-user uD0-cover uD0-size-72 d-inline-block"></i>
                        ${mainAsideObj.state? "User Name" : ""}
                        <i class ="${mainAsideObj.state? "": ""}iD0-logout uD0-cover uD0-size-32 d-inline-block uD0-m-l-auto"></i>
                    </div>

                    </section>
                    `

    return asideTemp
}

function toggleActive(index){
    for (let item of mainAsideObj.asideItems){
        item.active= false;
    }
    mainAsideObj.asideItems[index].active= true;
    componentRender()
}

function router(index){
    for (let item of mainAsideObj.asideItems){
        if (item.active){
            var route = item.route;
            break;
        }
    }
    window.location.hash = route 
}

function obtainRoute(){
    var hash = window.location.hash
    for (let [index, item] of mainAsideObj.asideItems.entries()){
        item.route == hash ? toggleActive(index) : false
    }
}

function componentRender(){
    mainAside.innerHTML = mainAsideTemp()
}

function moveAside(event) {
    let open = mainAsideObj.state;
    switch (open){
        case true:
            mainAsideObj.state = false;
            mainAside.style.minWidth= "0px";
            mainAside.style.width= "80px";
            componentRender()
            break;
        case false:
            mainAsideObj.state = true;
            mainAside.style.minWidth= "462px";
            setTimeout(() => {
                componentRender()
            },300)
            break;
    }
}


componentRender()
obtainRoute()
