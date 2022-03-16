import { Router } from "https://unpkg.com/@vaadin/router@1.7.4/dist/vaadin-router.js";
// import "https://unpkg.com/@webcomponents/webcomponentsjs";
// import "https://unpkg.com/@material/mwc-button";
const outlet = document.getElementById('outlet');
export const router = new Router(outlet);

import "./pages/Home.page.js";
import "./pages/About.page.js";
import "./pages/Profile.page.js";
// import "./pages/Dashboard.page.js";

import "./components/Topbar.js"
// import "./pages/About.page.js";
// import "./pages/NotFound.page.js";


router.setRoutes([
  { path: '/', component: 'home-page-comp' },
  { path: '/about', component: 'about-page-comp' },
  // {path: '/users/:user', component: 'x-user-profile'},
  {path: '/profile/:id', component: 'profile-page-comp'},
  {path: '/dashboard', component: 'dashboard-page'},
  { path: '(.*)', component: '404-page-comp' },
]);
