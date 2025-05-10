
type authenticationData = (email: string, password: string) => Promise<Response>;

const useApi = () => {

    const authentication: authenticationData = async (email, password) => {
        let request = {
            email : email,
            password : password
        }
        
        return await fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify(request),
            headers: { 
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8"
            },
        });
    };

    return {
        authentication
    };
};

export default useApi;
