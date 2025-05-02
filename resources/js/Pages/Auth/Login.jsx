import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>


            <Head title="Log in" />
            <div className='container d-flex flex-column  align-items-center vh-100 justify-content-center'>

            {status && (
                <div className="alert alert-success" role="alert">
                    {status}
                </div>
            )}

            <form onSubmit={submit}  className="card p-4">
                <div className="mb-3 mt-5">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="form-control mt-1"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="text-danger mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="form-control mt-1"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="text-danger mt-2" />
                </div>

                <div className="form-check mb-3">
                    <Checkbox
                        id="remember"
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                        className="form-check-input"
                    />
                    <label htmlFor="remember" className="form-check-label ms-2">
                        Remember me
                    </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-decoration-underline text-secondary"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton
                        className="btn btn-primary"
                        disabled={processing}
                    >
                        Log in
                    </PrimaryButton>
                </div>
            </form>


            </div>
        </GuestLayout>
    );
}
