const expressError = (code) => {
  switch (code) {
    case "ER_NO_SUCH_TABLE":
      return {
        error: "Failed To Add The Image",
        message: "Failed Upload! Try again!",
      };
    case "ER_BAD_NULL_ERROR":
      return {
        error: "Fileds Ca not be empty",
        message: "Fields can not be emptry",
      };

    default:
      return {
        error: "Something is wrong",
        message: "Check your uploading details once again",
      };
  }
};

module.exports = { expressError };
