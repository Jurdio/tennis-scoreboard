exports.getHomePage = (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to SSR with EJS!' });
};

exports.getMatchPage = (req, res) => {
    res.render('match', { title: 'Home Page', message: 'Welcome to SSR with EJS!' });
};

exports.getMatchHistory = (req, res) => {
    res.render('matchesHistory', { title: 'Home Page', message: 'Welcome to SSR with EJS!' });
};
