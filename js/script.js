function show_hidden_menu() {
  if(document.getElementById('hidden_menu').style.display == "none")
  {
    if(document.getElementById('search_div').style.display == "block")
    {
      document.getElementById('search_div').style.display = "none";
    }
    document.getElementById('hidden_menu').style.display = "block";
    document.getElementById('menu_button').innerHTML = "X";
  }
  else {
    document.getElementById('hidden_menu').style.display = "none";
    document.getElementById('menu_button').innerHTML = "MENU";
  }
}

function show_search() {
  if(document.getElementById('search_div').style.display == "none")
  {
    if(document.getElementById('hidden_menu').style.display == "block")
    {
      document.getElementById('hidden_menu').style.display = "none";
    }
    document.getElementById('search_div').style.display = "block";
  }
  else {
    document.getElementById('search_div').style.display = "none";
  }
}
