import toast from "react-hot-toast";


export const ToastNotifications = {
    notifyRegister: () => toast.success("The Register was successfully!", {
        duration: 4000,
        position: 'top-center',
        style: {
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '16px',
            color: '#ffffff',
            background: '#0dcc5d'
        }
    }),

    notifyError: (errorMessage) => toast.error(`${errorMessage}`, {
        duration: 4000,
        position: 'top-center',
        style: {
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '16px',
            color: '#ffffff',
            background: '#cc390d'
        },
    })
}