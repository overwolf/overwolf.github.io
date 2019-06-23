function addSiderbarHighlight() {
  const selectedListItem = document.getElementsByClassName('navListItemActive')[0];
  if (!selectedListItem) return;
  const listParent = selectedListItem.closest('ul').parentElement;
  const categoryTitle = listParent.getElementsByClassName('navGroupCategoryTitle')[0];
  categoryTitle.style['border-left'] = '4px solid #E5004C';
}

function moveEditButton() {
  const button = document.getElementsByClassName('edit-page-link')[0]
  if (!button) return;
  const pageNav = document.getElementsByClassName('onPageNav')[0];
  pageNav.appendChild(button);
}

window.onload = function () {
  addSiderbarHighlight();
  moveEditButton();
};