function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Please sign in to start a session.");
  res.redirect("/signin");
}

const checkPremium = (req, res, next) => {
  if (req.user && req.user.premium) {
    next();
  } else {
    req.flash('error', 'Forbidden. Premium users only.');
    res.redirect('/dash'); 
  }
};

module.exports = {
  isAuthenticated,
  checkPremium
};
