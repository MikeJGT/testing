pipeline {
 agent any
    stages {
        stage('build') {
            steps {
                sh 'node test'           
                sh 'node build'
            }
        }
    }
}
