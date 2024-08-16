const button = document.querySelector("#tweetButton");

button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += `#yum #어떤데 #엄외 #A숴`;

  const encodedText = encodeURIComponent(tweetText);

  const tweetURl = `https://twitter.com/intent/tweet=${encodedText}`;

  window.open(tweetURl);
});
