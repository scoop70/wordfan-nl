$(document).ready(function () {
  $.getJSON(
    "https://www.instagram.com/explore/tags/wordfan/?__a=1",
    function (instaData) {

      var posts = instaData.graphql.hashtag.edge_hashtag_to_media.edges;

      var i = 0; //

        for (const post of posts) {
          i = 0; //
          var thumb = post.node.thumbnail_src;
          $("#post-container").append("<img class='instaimg' src='" + thumb + "'>");
          i++;
          if(i === photos.length) {
            i = 0;
          }
        }

    }
  );
});
