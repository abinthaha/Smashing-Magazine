function show_hidden_menu() {
  var menu_btn = document.getElementById('hidden_menu');
  var search_btn = document.getElementById('search_div');

  if((menu_btn.className == "hide_menu")||(menu_btn.className == "")) {
    if(search_btn.className == "search_div_show")
    {
      search_btn.className = "search_div_hide"
    }
    menu_btn.className = "show_menu";
  }
  else {
    menu_btn.className = "hide_menu";
  }
}

// function show_hidden_menu() {
//   if(document.getElementById('hidden_menu').style.display == "none")
//   {
//     if(document.getElementById('search_div').style.display == "block")
//     {
//       document.getElementById('search_div').style.display = "none";
//     }
//     document.getElementById('hidden_menu').style.display = "block";
//     document.getElementById('menu_button').innerHTML = "X";
//   }
//   else {
//     document.getElementById('hidden_menu').style.display = "none";
//     document.getElementById('menu_button').innerHTML = "MENU";
//   }
// }

function show_search() {
  var menu_btn = document.getElementById('hidden_menu');
  var search_btn = document.getElementById('search_div');

  if((search_btn.className == "search_div_hide")||(menu_btn.className == "")) {
    if(menu_btn.className == "show_menu")
    {
      menu_btn.className = "hide_menu"
    }
    search_btn.className = "search_div_show";
  }
  else {
    search_btn.className = "search_div_hide";
  }
}

// function show_search() {
//   if(document.getElementById('search_div').style.display == "none")
//   {
//     if(document.getElementById('hidden_menu').style.display == "block")
//     {
//       document.getElementById('hidden_menu').style.display = "none";
//     }
//     document.getElementById('search_div').style.display = "block";
//   }
//   else {
//     document.getElementById('search_div').style.display = "none";
//   }
// }
