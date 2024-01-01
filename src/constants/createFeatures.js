import { CreateNewPost, EditPhoto, Crop, Adjustment, Filter, AddText, Emotion, TagUsers, EditMedia } from '../components/home/create';
import {
    cropIcon,
    adjustIcon,
    filterIcon,
    textIcon,
} from "../assets/edit_icons";

const editFeatures = [
    {
        id: "crop",
        title: "Crop",
        icon: cropIcon,
        component: Crop
    },
    {
        id: "adjustment",
        title: "Adjust",
        icon: adjustIcon,
        component: Adjustment
    },
    {
        id: 'filter',
        title: "Filter",
        icon: filterIcon,
        component: Filter
    },
    {
        id: 'text',
        title: "Add text",
        icon: textIcon,
        component: AddText
    },
];

const createFeatures = new Map([
    ["create", { component: CreateNewPost, title: "Create new post" }],
    ["emotion", { component: Emotion, title: "Emotion" }],
    ["tag", { component: TagUsers, title: "Tag users" }],
    ["edit", { component: EditPhoto, title: "Edit photo" }],
    ["edit-media", { component: EditMedia, title: "Edit media" }],
    ...editFeatures.map(feature => [`${feature.id}`, feature])
]);

export { createFeatures, editFeatures };