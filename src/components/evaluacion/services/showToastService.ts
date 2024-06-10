import toast from 'react-hot-toast'

const toastEvaluationConfig = {
  duration: 4000,
  position: 'bottom-center',
  style: {
    border: '1px solid #0367A6',
    padding: '16px',
    color: '#d4d4d8',
    backgroundColor: '#000',
    borderRadius: '0.25rem',
    fontWeight: 'bold'
  },
  iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE'
  }
}

export const showToastService = (message: string) => toast(message, toastEvaluationConfig)
