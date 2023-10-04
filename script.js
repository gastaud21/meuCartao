function toggleMode() {
  const html = document.documentElement;

  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }

  //função abaixo faz a mesma coisa do que o if else acima

  html.classList.toggle("light");

  //pegar tag img

  const img = document.querySelector("#profile img");

  //substituir a imagem

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/AvatarRodrigo.png");
  }
}
