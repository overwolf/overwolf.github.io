function addSiderbarHighlight() {
  const selectedListItem = $(".navListItemActive");
  if (!selectedListItem) return;
  const listParent = selectedListItem.parents('ul').last().parent();
  const categoryTitle = listParent.children('.navGroupCategoryTitle').last();
  categoryTitle.addClass('is-active');
}

function moveEditButton() {
  const button = document.getElementsByClassName('edit-page-link')[0]
  if (!button) return;
  const pageNav = document.getElementsByClassName('onPageNav')[0];
  pageNav.appendChild(button);
  button.style.display = "inline-block";
}

window.onload = function () {
  addSiderbarHighlight();
  moveEditButton();
  setNavScrollbarPosition();
  window.addEventListener("resize", setNavScrollbarPosition);


  let navButtons = document.querySelectorAll(".toc .toggleNav .navGroup .navGroupCategoryTitle");

  navButtons.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      setNavScrollbarPosition();
    });
});


};

//position navbar scrollbar 

function setNavScrollbarPosition() {
  const NavScrollBar = document.querySelector('#docsNav > div.os-scrollbar.os-scrollbar-vertical > div');
  if(NavScrollBar) {
    let pageOffsetLeft = document.querySelector('.docMainWrapper.wrapper').offsetLeft;
    let menuWidth = document.querySelector('#docsNav > div.os-padding > div').offsetWidth;
    NavScrollBar.style.left = `${(pageOffsetLeft + menuWidth) + 14}px`;

  }

}