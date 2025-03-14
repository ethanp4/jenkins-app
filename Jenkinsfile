pipeline {
    agent any

    stages {
      stage('Build') {
        agent{
          docker {
            image 'node:22.14.0-alpine'
            reuseNode true
          }
        }
        steps {
          sh '''
            node --version
            npm --version
            npm install
            npm run build
            ls -la
          '''
        }
      }
      stage('Test') {
        agent{
          docker {
            image 'node:22.14.0-alpine'
            reuseNode true
          }
        }
        steps {
          sh '''
            node --version
            npm --version
            npm install
            npm run test
          '''
        }
      }
    }
}
