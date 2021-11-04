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
};