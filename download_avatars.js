var request = require('request');
var secrets = require('./secrets')
// var https = require('https')

// console.log('Welcome GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, handleFetchAvatarURL) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secrets.Authorizations
    }
  };

  request(options, function(err, res, body) {

    var contributors = JSON.parse(body)
    for(var i = 0; i < contributors.length; i++){
      var contributor = contributors[i];
      handleFetchAvatarURL(contributor.avatar_url);
    };
  });
};

var fetchAvatarURL = function(avatarURL){
  console.log(avatarURL);
}
  // console.log("Result:", result);


getRepoContributors("jquery", "jquery", fetchAvatarURL);


