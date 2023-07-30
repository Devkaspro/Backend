// const allowedOrigins = require('./allowedOrigins');
// SHA256:FV8IMJ4IYjYUTnd6on7PqbRjaZf4c1EhhEBgeUdE94I.
const allowedOrigins = [
    'http://localhost:5001',
    'http://localhost:3000'
]

const corsOptions = {
    // origin: '*',
    methods: [
        'GET',
        'POST',
      ],
    origin: (origin, callback) =>{
        console.log(
            allowedOrigins.indexOf(origin),
            origin,
            // origin == 'undefined', 
            "allowedOrigins"
        )
        // POSTMAN
        // if(true && origin == 'undefined') return callback(null, true);

        // if(allowedOrigins.indexof(origin) !== -1 || origin) {
            if(origin || (allowedOrigins.indexOf(origin) != -1)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    allowedHeaders: [
        'Content-Type',
      ],
    optionsSuccessStatus: 200
}

module.exports = corsOptions;