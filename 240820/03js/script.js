const userDataList = [
  { name: "곰", age: 18 },
  { name: "여우", age: 27 },
  { name: "사자", age: 32 },
  { name: "얼룩말", age: 41 },
  { name: "기린", age: 56 },
];

const buttons = document.querySelectorAll(".button");

const updateList = (fillteredList) => {
  let listHtml = "";
  fillteredList.forEach((data) => {
    listHtml += `<li>${data.name} : ${data.age}</li>`;
  });
  document.querySelector(".user_list").innerHTML = listHtml;
};

const onClickButton = (e) => {
  const targetAge = e.target.dataset.age;
  const fillteredList = userDataList.filter((data) => data.age >= targetAge);
  updateList(fillteredList);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    onClickButton(e);
  });
});
