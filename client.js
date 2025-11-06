window.TrelloPowerUp.initialize({
  'card-back-section': function(t, options) {
    return {
      title: 'Work Size',
      icon: 'https://deinbaum.github.io/trello-worksize/appicon.png',
      content: {
        type: 'iframe',
        url: 'https://deinbaum.github.io/trello-worksize/index.html',
        height: 230
      }
    };
  }
});
