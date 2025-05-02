import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <>
        <h1 className=' font-bold mb-4'>Login with</h1>
        <div className=' space-y-3'>
           <button className=' btn w-full btn-outline btn-secondary'><FcGoogle size={24} />Login with Google</button>
           <button className=' btn w-full btn-outline btn-primary'><FaGithub size={24} />Login with Github</button>
        </div>
        </>
    );
};

export default SocialLogin;