node {
    currentBuild.result = "SUCCESS"

checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'DisableRemotePoll']], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '896f2647-09d8-473a-89b1-63defe6ebacd', url: 'https://github.com/eladh/goatLove.git']]])

}