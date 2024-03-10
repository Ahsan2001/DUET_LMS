import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast: React.FC = () => {
    return (
        <ToastContainer
            position="bottom-right"
            autoClose={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="dark"
            transition={Flip}
        />
    )
}