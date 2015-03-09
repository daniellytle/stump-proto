/* Timely - Daniel Wilson */


// Authentifcation Codes //
module.exports = {

    'facebookAuth' : {
        'clientID'      : 576135949186286, // your App ID
        'clientSecret'  : '8a64a0fa23ef2c44b6c7803fc5ebee28', // your App Secret
        'callbackURL'   : '/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
