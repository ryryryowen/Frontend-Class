const xhr = new XMLHttpRequest();

xhr.open("GET", "https://reqres.in/api/products/10", true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const product = response.data;

    document.querySelector("#product-title").innerText = product.name;
    document.querySelector(
      "#product-description"
    ).innerText = `Year: ${product.year}`;
    document.querySelector(
      "#product-price"
    ).innerText = `Price: $${product.id}00`;
    document.querySelector("#product-color").style.backgroundColor =
      product.color;
  }
};
