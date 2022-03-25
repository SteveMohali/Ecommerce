const format = ["_REQUEST", "_COMPLETE", "_SUCCESS", "FAILED"];

const types = ["AUTH", "CATEGORY", "COURSE"];

const others = {
  RESET: "RESET",
  LOG_OUT: "LOG_OUT",
};

export default {
  ...types
    .map((t) => format.map((i) => `${i}${t}`))
    .reduce((obj, v) => {
      obj[v] = v;
      return obj;
    }, {}),
  others,
};
