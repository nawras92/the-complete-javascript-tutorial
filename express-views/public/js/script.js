//delete post function
const deletePost = (id) => {
  const fetchRequest = async (postID) => {
    const data = await requests.deleteOne(postID);
    const { message } = data;
    alert(message);
    window.location.reload();
  };
  fetchRequest(id);
};

// Add post
const addPost = (target) => {
  //get alerts
  const okAlert = target.querySelector("div[name='ok']");
  const koAlert = target.querySelector("div[name='ko']");
  okAlert.style.display = "none";
  koAlert.style.display = "none";

  // get form data
  const postTitle = target.querySelector("input[name='post-title']");
  const postBody = target.querySelector("textarea[name='post-body']");
  const formValues = { title: postTitle.value, body: postBody.value };

  //send data
  const fetchRequest = async (dataToSend) => {
    const results = await requests.addOne(dataToSend);
    const { response, data } = results;
    if (response.ok) {
      okAlert.textContent = "The post has been submitted successfully";
      okAlert.style.display = "block";
    } else if (data) {
      const err = data.err || {};
      const errName = err.name || "";
      if (errName === "Validation Error") {
        koAlert.textContent = err.message;
        koAlert.style.display = "block";
      }
    } else {
      koAlert.textContent = "Unknown Error";
      koAlert.style.display = "block";
    }
  };
  fetchRequest(formValues);

  return false;
};

// update post
const updatePost = (target, id) => {
  //get alerts
  const okAlert = target.querySelector("div[name='ok']");
  const koAlert = target.querySelector("div[name='ko']");
  okAlert.style.display = "none";
  koAlert.style.display = "none";

  // get form data
  const postTitle = target.querySelector("input[name='post-title']");
  const postBody = target.querySelector("textarea[name='post-body']");
  const formValues = { title: postTitle.value, body: postBody.value };

  //send data
  const fetchRequest = async (id, dataToSend) => {
    const results = await requests.updateOne(id, dataToSend);
    const { response, data } = results;
    if (response.ok) {
      okAlert.textContent = "The post has been updated successfully";
      okAlert.style.display = "block";
    } else if (data) {
      const err = data.err || {};
      const errName = err.name || "";
      if (errName === "Validation Error") {
        koAlert.textContent = err.message;
        koAlert.style.display = "block";
      }
    } else {
      koAlert.textContent = "Unknown Error";
      koAlert.style.display = "block";
    }
  };
  fetchRequest(id, formValues);

  return false;
};
