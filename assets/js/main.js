// Para fixear la diferencia de altura de pantalla en mobile
// cuando se abre/cierra el menu del navegador (en iOS/Android)
const appHeight = () => {
  const vh = window.innerHeight * 0.01;
  this.document.documentElement.style.setProperty("--vh", `${vh}px`);
};
window.addEventListener("resize", appHeight);

appHeight();

// ========== SHOW HIDDEN PASSWORD ========== //

const showHiddenPass = () => {
  const input = document.getElementById("login-pass");
  const iconEye = document.getElementById("login-eye");

  iconEye.addEventListener("click", () => {
    if (input.type === "password") {
      iconEye.classList.remove("ri-eye-off-line");
      iconEye.classList.add("ri-eye-line");
      input.type = "text";
    } else {
      iconEye.classList.remove("ri-eye-on-line");
      iconEye.classList.add("ri-eye-off-line");
      input.type = "password";
    }
  });
};

showHiddenPass();
