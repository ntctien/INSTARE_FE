const passwordRule = {
    require: true,
    validator: (value) => {
        if (value.length < 6) return "Must contains 6+ characters";
    },
}

export default passwordRule;