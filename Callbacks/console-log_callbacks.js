'use strict'

// wait 5 seconds and print 'Done?'
var callback = function() {
    console.log("Done?")
}

setTimeout(callback, 5000)

//anon function for above callback
setTimeout(function() {
    console.log("Done?!?!")
}, 5000)

//print 'Hello' + 'Goodbye' using callbacks
function useCallBack(x, cb) {
    console.log(x)
    cb
}

function otherCallBack() {
    console.log('Goodbye')
}

useCallBack(Hello, otherCallBack())
