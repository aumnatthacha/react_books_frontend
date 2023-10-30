import { jwtDecode } from 'jwt-decode';
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/auth/refresh', {
            withCredentials: true
        });
        // setAuth({ info: decodeData, accessToken, username });
        setAuth(prev => {
            // console.log(JSON.stringify(prev));
            const decodeData = jwtDecode(response.data.access_token)
            // console.log("decodeData",decodeData  );
            return { ...prev, accessToken: response.data.access_token, info: decodeData }
        });
        return response.data.access_token;
    }
    return refresh;
};

export default useRefreshToken;