const fetch = require('node-fetch');

const home = (request, response) => {
  fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.NYTKEY}`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        const results = json.results;
        response.render('index', {results});
      });
};

const search = (request, response) => {
  const keyword = request.body.name;
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${process.env.NYTKEY}`)
      .then((res) => res.json())
      .then((json) => {
        const results = json.response.docs;
        // console.log({results});
        response.render('search', {results});
      });
};

const email = (request, response) => {
  fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.NYTKEY}`)
      .then((res) => res.json())
      .then((json) => {
        const results = json.results;
        // console.log({results});
        response.render('email', {results});
      });
};

const topDay = (request, response) => {
  fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NYTKEY}`)
      .then((res) => res.json())
      .then((json) => {
        const results = json.results;
        // console.log({results});
        response.render('top', {results});
      });
};

module.exports = {
  home,
  search,
  email,
  topDay,
};
