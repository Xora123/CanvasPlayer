let uploadBtn = document.querySelector("#");
uploadBtn.addEventListener("change", changeBG);
function changeBG() {
  let reader;
  if (this.files && this.files[0]) {
    reader = new FileReader();
    reader.onload = (e) => {
      bgObject.img.src = e.target.result;
      drawCanvas();
    };
    reader.readAsDataURL(this.files[0]);
  }
}