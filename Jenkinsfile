pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'scientific-calculator'
        GITHUB_REPO_URL = 'https://github.com/ImSonu2030/SPE-A1.git'
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials'
        DOCKER_HUB_USERNAME = 'MT2024152'
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    // Clone the repository
                    git branch: 'main', url: "${https://github.com/ImSonu2030/SPE-A1.git}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install backend dependencies
                    sh 'cd backend && npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run backend tests
                    sh 'cd backend && npm test'
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

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Push Docker image to Docker Hub
                    docker.withRegistry('', "${DOCKER_HUB_CREDENTIALS}") {
                        sh "docker tag ${DOCKER_IMAGE_NAME} ${DOCKER_HUB_USERNAME}/${DOCKER_IMAGE_NAME}:latest"
                        sh "docker push ${DOCKER_HUB_USERNAME}/${DOCKER_IMAGE_NAME}"
                    }
                }
            }
        }
    }
}