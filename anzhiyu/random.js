var posts=["2024/05/25/hello-world/","2024/05/25/开服教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };