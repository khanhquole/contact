/**
 * Created by crawler on 18/08/2016.
 */
/**
 * Created by crawler on 16/08/2016.
 */
// initialize and setup facebook js sdk
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1771462336434922',
        xfbml      : true,
        version    : 'v2.7'
    });

    FB.getLoginStatus(function(response) {
        console.log(response);
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    // js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
      setTimeout(
          function () {
              FB.api('/100009792287830', 'GET', {fields: 'about,name,id,picture.width(225).height(225)'}, function(response) {
                  console.log(response);
                  document.getElementById('bach-duong').src = response.picture.data.url;
              });
          }
          , 500);
      setTimeout(
          function () {
              FB.api('/100000054517865', 'GET', {fields: 'about,name,id,picture.width(225).height(225),email'}, function(response) {
                  console.log(response);
                  document.getElementById('vu-anh').src = response.picture.data.url;
              });
          }, 500);
      setTimeout(
          function () {
              FB.api('/100000690588911', 'GET', {fields: 'about,name,id,picture.width(225).height(225),email'}, function(response) {
                  console.log(response);
                  document.getElementById('tuanlm').src = response.picture.data.url;
              });
          }, 500);
      setTimeout(
          function () {
              FB.api('/100001382479364', 'GET', {fields: 'about,name,id,picture.width(225).height(225),email'}, function(response) {
                  console.log(response);
                  document.getElementById('hung-viet').src = response.picture.data.url;
              });
          }, 500);
  }
};