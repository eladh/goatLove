node {
    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){
           git pull: true ,url: 'https://github.com/eladh/goatLove.git'
       }

         stage('Test'){

                env.NODE_ENV = "test"

                print "Environment will be : ${env.NODE_ENV}"

                sh 'node -v'
                sh 'npm prune'
                sh 'npm install'
                sh 'npm test'

               step([$class: 'JUnitResultArchiver', testResults: '**/build/test-results/*.xml'])
              }

       stage('Cleanup'){
         echo 'prune and cleanup'
       }

    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}