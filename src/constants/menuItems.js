import {
    homeIcon,
    searchIcon,
    notificationsIcon,
    messagesIcon,
    createIcon,
    moreIcon
} from "../assets/app_menu_items/icons";
import {
    homeSelectedIcon,
    searchSelectedIcon,
    notificationsSelectedIcon,
    messagesSelectedIcon,
    createSelectedIcon,
    moreSelectedIcon
} from "../assets/app_menu_items/icons_selected";

const menuItems = [
    {
        name: "Home",
        icon: homeIcon,
        selectedIcon: homeSelectedIcon,
    },
    {
        name: "Search",
        icon: searchIcon,
        selectedIcon: searchSelectedIcon,
    },
    {
        name: "Notifications",
        icon: notificationsIcon,
        selectedIcon: notificationsSelectedIcon,
    },
    {
        name: "Messages",
        icon: messagesIcon,
        selectedIcon: messagesSelectedIcon,
    },
    {
        name: "Create",
        icon: createIcon,
        selectedIcon: createSelectedIcon,
    },
];

const moreItem = {
    name: "More",
    icon: moreIcon,
    selectedIcon: moreSelectedIcon,
}

export { menuItems, moreItem };