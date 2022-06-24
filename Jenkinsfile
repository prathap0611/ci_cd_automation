pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker { image 'node:16.13.1-alpine' }
            }
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            agent {
                docker { image 'node:16.13.1-alpine' }
            }
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}