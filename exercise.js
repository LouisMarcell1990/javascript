const user = {
  id: 1,
  name: "John",
  age: 25,
};

function localUser() {
  localStorage.user = JSON.stringify(user);
  console.log(user)
  }

  localUser();