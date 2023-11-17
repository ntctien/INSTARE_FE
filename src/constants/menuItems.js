import {
    homeIcon,
    searchIcon,
    notificationsIcon,
    messagesIcon,
    createIcon,
    moreIcon,
    reportsIcon
} from "../assets/app_menu_items/icons";
import {
    homeSelectedIcon,
    searchSelectedIcon,
    notificationsSelectedIcon,
    messagesSelectedIcon,
    createSelectedIcon,
    moreSelectedIcon,
    reportsSelectedIcon
} from "../assets/app_menu_items/icons_selected";

const menuItems = [
    {
        id: 'home',
        name: "Home",
        icon: homeIcon,
        selectedIcon: homeSelectedIcon,
        link: '/'
    },
    {
        id: 'search',
        name: "Search",
        icon: searchIcon,
        selectedIcon: searchSelectedIcon,
    },
    {
        id: 'notifications',
        name: "Notifications",
        icon: notificationsIcon,
        selectedIcon: notificationsSelectedIcon,
    },
    {
        id: 'messages',
        name: "Messages",
        icon: messagesIcon,
        selectedIcon: messagesSelectedIcon,
        link: '/message'
    },
    {
        id: 'create',
        name: "Create",
        icon: createIcon,
        selectedIcon: createSelectedIcon,
    },
];

const reportsItem = {
    id: 'reports',
    name: 'Reports',
    icon: reportsIcon,
    selectedIcon: reportsSelectedIcon,
}

const moreItem = {
    id: 'more',
    name: "More",
    icon: moreIcon,
    selectedIcon: moreSelectedIcon,
}

export { menuItems, moreItem, reportsItem };