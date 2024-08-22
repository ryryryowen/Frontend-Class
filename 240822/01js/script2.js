const xhr = new XMLHttpRequest();

xhr.open("get", "student3.json");
xhr.send();

const renderHTML = (students) => {
  let output = ""; // 'ouiput' -> 'output'으로 수정

  for (let student of students) {
    output += `
     <h2>${student.name}</h2>
     <ul>
      <li>전공 : ${student.major}</li>
      <li>학년 : ${student.grade}</li>
     </ul>
     <hr/>
    `;
  }

  const result = document.querySelector("#result");
  result.innerHTML = output; // 'test' 대신 'output'으로 변경
};

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    renderHTML(students);
  }
};
