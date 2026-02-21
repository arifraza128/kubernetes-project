pipeline {
  agent any

  stages {
    stage('Build All') {
      steps {
        sh 'docker build -t yourdockerhub/auth-service ./auth-service'
        sh 'docker build -t yourdockerhub/patient-service ./patient-service'
        sh 'docker build -t yourdockerhub/doctor-service ./doctor-service'
        sh 'docker build -t yourdockerhub/appointment-service ./appointment-service'
        sh 'docker build -t yourdockerhub/api-gateway ./api-gateway'
      }
    }

    stage('Push All') {
      steps {
        sh 'docker push yourdockerhub/auth-service'
        sh 'docker push yourdockerhub/patient-service'
        sh 'docker push yourdockerhub/doctor-service'
        sh 'docker push yourdockerhub/appointment-service'
        sh 'docker push yourdockerhub/api-gateway'
      }
    }

    stage('Deploy to K8s') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}
