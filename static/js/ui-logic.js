if(
  window.location.href.includes('topics') === true ||
  window.location.href.includes('start') === true ||
  window.location.href.includes('api') === true
  ) {
  initializeUiChanges();
}

function initializeUiChanges() {
  //add edit button under the table of content
  const editBtn = document.querySelector('article footer .theme-edit-this-page');
  const tableOfContent = document.querySelector('.table-of-contents');
  const existingBtn = document.querySelector('.table-of-contents + a.theme-edit-this-page');

  if(editBtn && tableOfContent && existingBtn == null) {
    const cloneBtn = editBtn.cloneNode(true);
    tableOfContent.parentElement.appendChild(cloneBtn);
  }

}


