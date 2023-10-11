document.addEventListener("DOMContentLoaded", function () {
  const id = document.getElementById("id");
  const adv = document.getElementById("pp");
  const diceImg = document.querySelector(".dice");

  diceImg.addEventListener("click", function () {
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        id.innerHTML = data.slip.id;
        adv.innerHTML = '"' + data.slip.advice + '"';
        // console.log(adv);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  });
});
