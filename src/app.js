const { emailTemplate } = require("./js-foundation/01-template")
require("./js-foundation/02-destructuring")
const { findByUserId } = require("./js-foundation/03-callbacks")

findByUserId(8, function (err, user) {
  if (err) {
    throw new Error(err)
  }
  console.log("User found: ", user)
})
console.log(emailTemplate)
