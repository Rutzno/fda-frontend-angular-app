pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('DOCKER_HUB_CREDENTIAL')
        VERSION = "${env.BUILD_ID}"
        GIT_REPO = "git@github.com:Rutzno/fda-deployment.git"
        GIT_BRANCH = "main"
    }

    tools {
        nodejs "Nodejs"
    }

    stages {
        stage("Install Dependencies") {
            steps {
                sh "npm ci"
            }
        }

        stage("Build Project") {
            steps {
                sh "npm run build"
            }
        }

        stage("Docker Build & Push PACKAGE") {
            steps {
                sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
                sh "docker build -t macktb/food-delivery-app-fe:${VERSION} ."
                sh "docker push macktb/food-delivery-app-fe:${VERSION}"
            }
        }

        stage("Cleanup Workspace") {
            steps {
                deleteDir()
            }
        }

        stage("Update Image Tag in GitOps") {
            steps {
                checkout scmGit(branches: [[name: "*/${GIT_BRANCH}"]], extensions: [], userRemoteConfigs: [[ credentialsId: 'git-ssh', url: "${GIT_REPO}"]])
                script {
                    // Set the new image tag with the Jenkins build  number
                    sh '''
			git config user.email "d.rutzno@gmail.com"
                	git config user.name "Rutzno"
                        sed -i "s/image:.*/image: macktb\\/food-delivery-app-fe:${VERSION}/" aws/angular-manifest.yaml
			git checkout ${GIT_BRANCH}
                    	git add .
                    	git commit -m "Update image tag to ${VERSION}"
                    '''
                    sshagent(["git-ssh"]) {
                        sh("git push")
                    }
                }
            }
        }
    }
}
