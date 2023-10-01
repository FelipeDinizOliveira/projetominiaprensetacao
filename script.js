function toggleMode(){
  const html = document.documentElement;

  if (html.classList.contains('light')) {
    html.classList.remove('light');
    var avatar = document.getElementById("profile-img");
    avatar.src = "assets/assets/avatar.png";
    avatar.alt = "foto de maik brito, sorrindo, de oculos e camisa preta";
  } else {
    html.classList.add('light');
    var avatar = document.getElementById("profile-img");
    avatar.src = "assets/assets/avatar-light.png";
    avatar.alt = "foto de maik brito, sorrindo, de oculos preto e jaqueta preta";
  }
}