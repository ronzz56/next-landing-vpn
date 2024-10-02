const options = {
  title: "RonzzAPI",
  creator: "Ronzz YT",
  
  limit: 25,
  standardLimit: 500,
  premiumLimit: 1000
}

const mongoURL = ""

const google = {
  clientId: "170073054644-f1l2mdd22dv66iq8bdavm5i1qiopg7ap.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "https://next-landing-vpn-beta.vercel.app/auth/google/callback"
}

const smtp = {
  email: "zikxzz4@gmail.com",
  pass: "fzmvnnnkdympwhwt"
}

module.exports = {
  options,
  mongoURL,
  google,
  smtp
}
