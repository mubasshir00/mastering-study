import ResetPassword from '../src/modules/Myaccount/ResetPassword';
import { useRouter } from 'next/router';
const ResetPass = () => {
    const router = useRouter();
    const {token} = router.query;
    return <ResetPassword token={token} />
}
export default ResetPass;