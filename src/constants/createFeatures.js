import CreateNewPost from "../components/home/create/CreateNewPost";
import EditPhoto from "../components/home/create/EditPhoto";
import Crop from "../components/home/create/Crop";

const features = new Map([
    ["create", { component: CreateNewPost, title: "Create new post" }],
    ["edit", { component: EditPhoto, title: "Edit photo" }],
    ["crop", { component: Crop, title: "Crop" }],
]);

export default features;