pipeline {
    agent any

    environment {
      NETLIFY_SITE_ID = '4e2e6c32-1317-48b5-ba65-cce22123e127'
      NETLIFY_AUTH_TOKEN = credentials('netlify-token')
    }

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
            npm install
            npm run test
          '''
        }
      }
      stage('Deploy') {
        agent {
          docker {
            image 'node:22.14.0-alpine'
            reuseNode true
          }
        }
        steps {
          sh '''
            npm install netlify-cli
            node_modules/.bin/netlify --version
            echo 'Deploying to Site ID: $NETLIFY_SITE_ID'
            node_modules/.bin/netlify status
            node_modules/.bin/netlify deploy --prod --dir=dist

          '''
        }
      }
    }
}
