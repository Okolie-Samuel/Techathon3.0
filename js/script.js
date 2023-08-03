let paragraph = document.getElementById("test");

document.addEventListener(
  "click",
  (clickme = () => {
    paragraph.innerHTML = "this is working";
    console.log("working");
  })
);
