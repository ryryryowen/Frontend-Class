let t = `<table border=1>`;
let number = 1;

for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let k = 1; k <= 5; k++) {
    t += `<td>${number}</td>`;
    number++;
  }
  t += `</tr>`;
}

t += `</table>`;

document.write(t);
