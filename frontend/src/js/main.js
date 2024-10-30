
import welcome from "./views/welcome.js";
import home from "./views/home.js";
import signIn from "./views/signIn.js";
import signUp from "./views/SignUp.js";
import about from "./views/about.js";
import contact from "./views/contact.js";
import userinfo from "./views/userinfo.js";
import userinfoUpdate from "./views/userinfo-update.js";
import pong from "./views/pong.js";
import matchHistory from "./views/matchHistory.js";
import twoFA from "./views/twoFA.js";


const routes = {

    "/": { title: "Welcome", render: welcome, css: "./frontend/src/css/welcome.css" },
    "/home": { title: "Home", render: home, css: "./frontend/src/css/home.css" },
    "/signUp": { title: "SignUp", render: signUp, css: "./frontend/src/css/signUp.css" },
    "/signIn": { title: "SignIn", render: signIn, css: "./frontend/src/css/signIn.css" },
    "/userinfo": { title: "UserInfo", render: userinfo, css: "./frontend/src/css/userInfo.css" },
    "/about": { title: "About", render: about, css: "./frontend/src/css/about.css" },
    "/contact": { title: "Contact", render: contact, css: "./frontend/src/css/contact.css" },
    "/2FA": { title: "2FA", render: twoFA, css: "./frontend/src/css/home.css" },
    "/userinfo-update": { title: "UserInfo-update", render: userinfoUpdate, css: "./frontend/src/css/userinfo-update.css" },
    "/pong": { title: "pong", render: pong, css: "./frontend/src/css/pong.css"},
    "/matchHistory": { title: "matchHistory", render: matchHistory, css: "./frontend/src/css/matchHistory.css" }

};

let currentCSS = null;

function loadCSS(href) {
    if (currentCSS) {
        document.head.removeChild(currentCSS);
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    document.head.appendChild(link);
    //console.log(link);
    currentCSS = link;
}

export function router() {
    // const app = document.getElementById('app');
    let view = routes[location.pathname];
    if (view) {
        // console.log(view.title);
        document.title = view.title;
        app.innerHTML = view.render();
        if (view.css) {
            loadCSS(view.css);
        }
    } else {
        history.replaceState("", "", "/");
        router();
    }
}

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
