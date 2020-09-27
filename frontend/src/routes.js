import Dashboard from "views/Dashboard.jsx";
import UpgradeToPro from "views/Upgrade.jsx";
import Cart from "views/KMeansAlgorithm.jsx"
import Stocks from "views/SMFirst";
import Welcome from "views/Welcome";

var routes = [
  {
    path: "/welcome",
    name: "Welcome",
    icon: "nc-icon nc-bank",
    component: Welcome,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-sound-wave",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/stocks",
    name: "Stocks",
    icon: "nc-icon nc-shop",
    component: Stocks,
    layout: "/admin"
  },
  {
    path: "/cart",
    name: "Cart",
    icon: "nc-icon nc-cart-simple",
    component: Cart,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin"
  }
];
export default routes;
