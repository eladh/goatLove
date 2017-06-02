node {
    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){
           git poll: true ,url: 'https://github.com/eladh/goatLove.git'
       }

       stage('Cleanup'){
         echo 'prune and cleanup'
       }

    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}