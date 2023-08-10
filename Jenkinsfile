pipeline {
    agent { docker { image 'node:v12.22.9' } }
    stages {
        stage('build') {
            steps {
                sh 'node test'           
                sh 'node build'
            }
        }
    }
}
