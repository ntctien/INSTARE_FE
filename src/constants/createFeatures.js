import CreateNewPost from "../components/home/create/CreateNewPost";
import EditPhoto from "../components/home/create/EditPhoto";

const features = new Map([
    ["create", { component: CreateNewPost, title: "Create new post" }],
    ["edit", { component: EditPhoto, title: "Edit photo" }],
]);

export default features;