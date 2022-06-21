export const checkError = (file, title, description) => {
  let fileMsg;
  let titleMsg;
  let descMsg;
  let msg = "noErrors";
  if (!file) {
    fileMsg = "file Cannot be Empty";
  }
  if (!title) {
    titleMsg = "Title Cannot be Empty";
  }
  if (!description) {
    descMsg = "Description Cannot be Empty";
  }
  if (file && title && description) {
    return msg;
  } else {
    return {
      title: titleMsg,
      file: fileMsg,
      description: descMsg,
    };
  }
};
//Error checking for project adding functions
export const checkErrorProjects = (file, title, description, url) => {
  let fileMsg = "";
  let titleMsg = "";
  let descMsg = "";
  let urlMsg = "";
  let msg = "noErrors";
  if (!file) {
    fileMsg = "file Cannot be Empty";
  }
  if (!title) {
    titleMsg = "Title Cannot be Empty";
  }
  if (!description) {
    descMsg = "Description Cannot be Empty";
  }
  if (!url) {
    urlMsg = "Site URL Cannot be Empty";
  }
  if (file && title && description && url) {
    return msg;
  } else {
    return {
      title: titleMsg,
      file: fileMsg,
      description: descMsg,
      url: urlMsg,
    };
  }
};

//////Error Check when there is no uploaded filter:
export const noUpdateErrorCheck = (title, description) => {
  let titleMsg;
  let descMsg;
  let msg = "noErrors";
  if (!title) {
    titleMsg = "Title Cannot be Empty";
  }
  if (!description) {
    descMsg = "Description Cannot be Empty";
  }
  if (title && description) {
    return msg;
  } else {
    return {
      title: titleMsg,
      description: descMsg,
    };
  }
};

//////Error Check when there is no uploaded filter: Project adding page
export const noUpdateErrorCheckForProjectAdd = (title, description, url) => {
  let titleMsg;
  let descMsg;
  let urlMsg;
  let msg = "noErrors";
  if (!title) {
    titleMsg = "Title Cannot be Empty";
  }
  if (!description) {
    descMsg = "Description Cannot be Empty";
  }
  if (!url) {
    urlMsg = "URL Cannot be Empty";
  }
  if (title && description && url) {
    return msg;
  } else {
    return {
      title: titleMsg,
      description: descMsg,
    };
  }
};
