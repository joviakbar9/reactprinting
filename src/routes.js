// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import AddBox from "@material-ui/icons/AddBox";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import CreateOrder from "views/CreateOrder/CreateOrder.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import SignIn from "views/SignIn/SignIn.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Transaksi",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Create Order",
    icon: LibraryBooks,
    component: CreateOrder,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/SignIn",
    name: "Extra",
    icon: AddBox,
    component: SignIn,
    layout: "/admin"
  },
];

export default dashboardRoutes;
