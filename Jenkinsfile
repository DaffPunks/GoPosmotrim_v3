pipeline {
  agent {
    node {
      label 'node-agent'
    }

  }
  stages {
    stage('Build') {
      steps {
        build 'npm install'
      }
    }
  }
}