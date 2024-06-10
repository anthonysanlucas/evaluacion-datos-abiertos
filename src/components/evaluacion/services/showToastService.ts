import toast from 'react-hot-toast'

const toastEvaluationConfig = {
  duration: 3000,
  position: 'top-center',
  style: {
    border: '1px solid #10BCD0',
    padding: '16px',
    color: '#e4e4e7',
    backgroundColor: '#071E2D',
    borderRadius: '0.25rem',
    fontWeight: 'bold'
  }
}

export const showToastService = (message: string) => toast(message, toastEvaluationConfig)
