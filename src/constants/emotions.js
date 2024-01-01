const emotions = [
    {
        "unified": "1f60c",
        "name": "positive"
    },
    {
        "unified": "1f337",
        "name": "hopeful"
    },
    {
        "unified": "1f60a",
        "name": "joyful"
    },
    {
        "unified": "1f634",
        "name": "tired"
    },
    {
        "unified": "1f614",
        "name": "alone"
    },
    {
        "unified": "1f620",
        "name": "angry"
    },
    {
        "unified": "1f637",
        "name": "sick"
    },
    {
        "unified": "1f61e",
        "name": "sad"
    },
    {
        "unified": "1f61f",
        "name": "emotional"
    },
    {
        "unified": "1f603",
        "name": "awesome"
    },
    {
        "unified": "1f62b",
        "name": "exhausted"
    },
    {
        "unified": "1f60d",
        "name": "loved"
    },
    {
        "unified": "1f60a",
        "name": "bissful"
    },
    {
        "unified": "1f616",
        "name": "worried"
    },
    {
        "unified": "1f615",
        "name": "confused"
    },
    {
        "unified": "1f601",
        "name": "happy"
    },
    {
        "unified": "1f609",
        "name": "winking"
    },
    {
        "unified": "1f60b",
        "name": "delicious"
    },
    {
        "unified": "1f60f",
        "name": "smirking"
    },
    {
        "unified": "1f612",
        "name": "unamused"
    },
    {
        "unified": "1f60b",
        "name": "yummy"
    }
]

export const EMOTION_MAP = emotions.reduce((result, item) => {
    result[item.unified] = { ...item };
    return result;
}, {});

export default emotions;
