import toast from 'react-hot-toast'

const toastEvaluationConfig = {
  duration: 3000,
  position: 'top-center',
  style: {
    padding: '16px',
    color: '#FFFFFF',
    backgroundColor: '#EF8E7D',
    borderRadius: '0.25rem',
    fontWeight: 'bold'
  }
}

export const showToastService = (message: string) => toast(message, toastEvaluationConfig)
