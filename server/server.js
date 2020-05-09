const app = require('./index')

module.exports = app.listen(3000, () => console.log(`Server running, catch it on port 3000`))