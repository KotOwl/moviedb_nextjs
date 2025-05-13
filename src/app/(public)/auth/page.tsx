import {AuthComponent} from "@/components/Auth/AuthComponent";
export const generateMetadata= async ()=>{

    return{
        title:"Authentication page",
        description:'Page where user can enter to the system'
    }
}

const AuthPage = () => {
    return (
        <>
            <AuthComponent/>
        </>
    );
};
export default AuthPage