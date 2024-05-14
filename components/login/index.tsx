import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './index.module.css' 
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getValueLocalStorage } from '@/funtions/function';
import { useEffect, useState } from 'react';
import { cookies } from 'next/headers'
import { setMultipleCookie } from '../service';

type LoginFormInputs = {
    username: string;
    password: string;
};

const LoginPage = () => {
    const router = useRouter();
    const [ token, setToken ] = useState<any>();
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
    const loginWithAdmin = async (data: any) => {
        const res: any = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API_ADMIN}/admin/login`,{
            "username": data?.username,
            "password": data?.password
        })
        if(res?.data.data.result) {
            const newData = res.data.data.data;
            setMultipleCookie(newData.Token, newData.data.adm_email, newData.data?.adm_id, 'admin', newData.data?.type, newData.data.adm_name, newData.data.adm_phone, newData.RefreshToken)
            router.push('/blog');
        }
    };

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data: any) => {
        await loginWithAdmin(data)
    };

    useEffect(() => {
        const newtoken = getValueLocalStorage('work247_token_admin_blog');
        if(newtoken) {
            setToken(newtoken)
        }
    }, [])

    return (
        <div className={styles.container}>
            <form className={styles['login-form']} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Vui lòng nhập tên đăng nhập'
                    }}
                    render={({ field }) => (
                        <>
                            <input
                                type="text"
                                className={styles['login-input']}
                                placeholder="Tên đăng nhập"
                                {...field}
                            />
                            {errors.username && typeof errors.username?.message === 'string' && (
                                <span className={styles.text_error}>{errors.username?.message}</span>
                            )}
                        </>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Vui lòng nhập mật khẩu'
                    }}
                    render={({ field }) => (
                        <input
                            type="password"
                            className={styles['login-input']}
                            placeholder="Mật khẩu"
                            {...field}
                        />
                    )}
                />
                <button type="submit" className={styles['login-button']}>Log In</button>
            </form>
        </div>
    );
};

export default LoginPage;

function setCookie(arg0: string, Token: any, arg2: number) {
    throw new Error('Function not implemented.');
}
