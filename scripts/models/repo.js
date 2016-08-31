(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
  reposObj.followers = [];

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.ajax call
    $.when(
      $.get('https://api.github.com/users/codefellows-seattle-301d10/repos' +
      '?per_page=10' +
      '&sort=updatd')
      .done(function(data))
    }
         // NOTE: since the 'data' paramter comes back as an
         // array of objects, we can reassign allRepos below.
         reposObj.allRepos = data;
       }
     }),
     $.ajax({
       url: 'https://api.github.com/users/patci/followers' +
            '?per_page=5' +
            '&sort=updated',
       type: 'GET',
       headers: { 'Authorization': 'token ' + githubToken },
       success: function(data) {
         reposObj.followers = data;
       }
     })
    ).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
