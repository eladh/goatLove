node('node') {
    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){
           checkout scm
       }

       stage('Cleanup'){
         echo 'prune and cleanup'
       }

    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}