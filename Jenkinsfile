pipeline {
    agent any

    environment {
        GITHUB_REPO_URL = 'https://github.com/ImSonu2030/SPE-A1.git'
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    git branch: 'master', url: 'https://github.com/ImSonu2030/SPE-A1.git'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'cd SPE-A1/mycalculator/controller && npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests from the correct backend directory
                    sh 'cd SPE-A1/mycalculator/controller && npm test'
                }
            }
        }
    }
}
