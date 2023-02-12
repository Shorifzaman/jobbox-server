const { default: axios } = require("axios");

// To keep Running the Server
// axios.get('https://elite-recruiting-server.vercel.app/')
axios.get('https://jobbox-server-zeta.vercel.app/')
    .then(result => console.log(result))
    .catch(err => console.log(err))