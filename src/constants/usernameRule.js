import containsUpperCase from "~/utils/containsUpperCase";

const usernameRule = {
    require: true,
    validator: (value) => {
      if (containsUpperCase(value))
          return "Username can't contain uppercase letters";
      if (!/^[a-zA-Z0-9\-_.]+$/.test(value))
          return "Only contain letters, numbers, dashes, underscores and periods";
  },
  }

export default usernameRule;