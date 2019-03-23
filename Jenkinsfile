pipeline {
    agent {
        docker {
            image 'node:8'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install --unsafe-perm node-sass'
                sh 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                sh 'chmod 777 ./.jenkins/scripts/deliver.sh'
                sh './.jenkins/scripts/deliver.sh'
            }
        }
    }
}
