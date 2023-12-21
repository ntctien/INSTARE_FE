import {
    loveIcon,
    likeIcon,
    laughIcon,
    sadIcon,
    angryIcon,
} from "~/assets/react_icons";

const reactions = [
    {
        value: "LOVE",
        name: "Love",
        icon: loveIcon,
    },
    {
        value: "LIKE",
        name: "Like",
        icon: likeIcon,
    },
    {
        value: "LAUGH",
        name: "Laugh",
        icon: laughIcon,
    },
    {
        value: "SAD",
        name: "Sad",
        icon: sadIcon,
    },
    {
        value: "ANGRY",
        name: "Angry",
        icon: angryIcon,
    },
];

export const REACTION_MAP = reactions.reduce((result, item) => {
    result[item.value] = { ...item };
    return result;
}, {});

export default reactions;