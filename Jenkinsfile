pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'scientific-calculator'
        GITHUB_REPO_URL = 'https://github.com/ImSonu2030/SPE-A1.git'
        GIT_BRANCH = 'main'
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials'
        DOCKER_HUB_USERNAME = 'imsonu2030'
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    git branch: 'main', url: 'https://github.com/ImSonu2030/SPE-A1.git'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'cd mycalculator/controller && npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'cd mycalculator/controller && npm test'
                }
            }
        }
    }
}
