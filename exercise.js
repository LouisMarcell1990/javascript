const user = {
  id: 1,
  name: "John",
  age: 25,
};

function localUser() {
  const item = localStorage.getItem(user)
  localStorage.item = JSON.stringify(user);
  console.log(user)
  }

  localUser();