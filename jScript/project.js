// console.log("working");
var idea_card = document.getElementsByClassName('herbal');
// console.log(idea_card);

idea_card.addEventListener("click",function(){
  var form = document.getElementsByClassName("default_form")[0];
  form.classList.remove("not_display");
  form.scrollIntoView();
})
