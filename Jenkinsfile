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
                    sh 'cd mycalculator && npm install'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    sh 'cd mycalculator && npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    docker.build("${DOCKER_IMAGE_NAME}", '.')
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script{
                    docker.withRegistry('', 'docker-hub-credentials') {
                    sh 'docker tag $DOCKER_IMAGE_NAME $DOCKER_HUB_USERNAME/$DOCKER_IMAGE_NAME:latest'
                    sh 'docker push $DOCKER_HUB_USERNAME/$DOCKER_IMAGE_NAME'
                    }
                }
            }
        }

        stage('Run Ansible Playbook') {
            steps {
                script {
                    ansiblePlaybook(
                        playbook: 'playbook.yml',
                        inventory: 'inventory'
                    )
                }
            }
        }
    }
}
