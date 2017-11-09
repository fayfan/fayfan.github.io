$(document).ready(function() {
  users = []
  repos = []
  $(".ghbtn").each( function () {
    var user = $(this).attr('user');
    var repo = $(this).attr('repo');
    repos.push(user + '/' + repo);
      if (users.indexOf($(this).attr('user')) === -1) {
        users.push($(this).attr('user'))
      }
  })
  // console.log(1, users, repos)
  for (var i = 0; i < users.length; i++) {
    $.ajax({
    type: "GET",
    url: "https://api.github.com/users/" + users[i] + "/repos?per_page=100",
    tryCount : 0,
    retryLimit : 3,
    async: true,
    dataType: "json",
      }
    }
  })}
});
