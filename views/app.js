/* this file is supposed to inject the masterContainer*/


const masterContainer = document.getElementById("master-container");
import {appRouter} from "../router.js"

export function App(){
    // inject master conatiner with the appropriate componet
    masterContainer.innerHTML = appRouter()
}