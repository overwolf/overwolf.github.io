MediumWidget.Init({
  renderTo: '#medium-widget',
  params: {
    "resource":"https://medium.com/overwolf",
    "postsPerLine":3,
    "limit":3,
    "picture":"none",
    "fields":["description","publishAt"],
    "ratio":"landscape"}
});


// check if medium widget has posts hide the "latest from our blog section" TODO: investigate later to see if the server is not down forever
setTimeout(() => {

  let checkBlogPostsLength = document.querySelector('.medium-widget__wrapper').children.length;
  let section = document.querySelector('.main-content section.blog');

  if(checkBlogPostsLength === 0) {
    section.style.display = "none"
  }

}, 500);






