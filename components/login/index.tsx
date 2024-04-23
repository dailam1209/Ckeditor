import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './index.module.css' 
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getValueLocalStorage } from '@/funtions/function';
import { useEffect, useState } from 'react';

type LoginFormInputs = {
    username: string;
    password: string;
};

const LoginPage = () => {
    const router = useRouter();
    const [ token, setToken ] = useState<any>();
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
    const loginWithAdmin = async (data: any) => {
        const res: any = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/admin/login`,{
            "username": data?.username,
            "password": data?.password
        })
        if(res?.data.data.result) {
            const newData = res.data.data.data;
            localStorage.setItem('work247_token_admin_blog', newData.Token);
            localStorage.setItem('id_admin_blog', newData.data?.adm_id);
            localStorage.setItem('auth_admin_blog', 'admin');
            localStorage.setItem('work247_type_admin_blog', newData.data?.type);
            localStorage.setItem('phone_admin_blog', newData.data.adm_phone);
            localStorage.setItem('userName_admin_blog', newData.data.adm_name);
            
            if(newData.RefreshToken) {
                localStorage.setItem('rf_token_admin_blo', newData.RefreshToken);
            }
            localStorage.setItem('isLogin_admin_blog', 'true');
            localStorage.setItem('email_admin_blog', newData.data.adm_email);
            router.push('/');
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