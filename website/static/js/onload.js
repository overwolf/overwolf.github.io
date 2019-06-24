function addSiderbarHighlight() {
  const selectedListItem = $(".navListItemActive");
  if (!selectedListItem) return;
  const listParent = selectedListItem.parents('ul').last().parent();
  const categoryTitle = listParent.children('.navGroupCategoryTitle').last();
  categoryTitle.css('border-left', '4px solid #E5004C');
}

function moveEditButton() {
  const button = document.getElementsByClassName('edit-page-link')[0]
  if (!button) return;
  const pageNav = document.getElementsByClassName('onPageNav')[0];
  pageNav.appendChild(button);
}

function initScrollbars() {
  let options = {
    className: 'os-theme-block-light',

  }
  $("body").overlayScrollbars(options);
  $(".hljs").overlayScrollbars(options);
  $(".docsNavContainer").overlayScrollbars(options);
}

window.onload = function () {
  initScrollbars();
  addSiderbarHighlight();
  moveEditButton();
};