// node fileName.js start of event loop
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];
// file.runContents()

function shouldContinue() {
    //check 1: any pending timers such as setTimeout(),setInterval(), setIntermidiate()
    //check 2: any pending OS tasks such as network, disk I/O (runnnig a server on port)
    //check 3: any pending long running operations such as file I/O (reading a file)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// entire body of event loop executes in one 'tick'
while (shouldContinue()) {
    // 1) Node looks at pendingTimers and see if any functions are ready to be called
    // 2) Node looks at pendingOSTasks and pendingOperations and calls relavant callbacks
    // 3) Pause execution. Continue when...
    //    a) a new pendingOSTask is done
    //    b) a new pendingOperation is done
    //    c) a timer is about to complete
    // 4) Look at pendingTimers. Call any setImmediate()
    // 5) Handle any 'close' events
    
}

//exit the loop