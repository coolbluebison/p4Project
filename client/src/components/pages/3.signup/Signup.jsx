import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const Signup = ({setCurrentUser}) => {
    // console.log('signup')
    const nav = useNavigate();
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Required').email('Invalid email address'),
            username: Yup.string().required('Required'),
            password: Yup.string().required('Required')
                .min(3, 'Password should be over 7 characters long')
                // .matches(/[a-zA-Z]/, 'Password must contain at least one letter.')
                // .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, 'Password must contain at least one special character.'),
        }),
        onSubmit: values => {
            console.log('Form data', values);

            const userObject = {
                "email": values.email,
                "username": values.username,
                "password": values.password
            }
            console.log(userObject);

            fetch('/api/user_table', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObject)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response error");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setCurrentUser(data);
                    nav("/");
                })
                .catch(error => {
                    console.log("error", error.message);
                });

        },
    });
    return (
        <form onSubmit={(e) => {
            formik.handleSubmit(e);
            // nav("/");
        }}>
            <div className="input-group">
                <label>Email</label>
                <input
                    type="email"
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="input-group">
                <label>Username</label>
                <input
                    type="text"
                    {...formik.getFieldProps('username')}
                />
                {formik.touched.username && formik.errors.username ? (
                    <div className="error">{formik.errors.username}</div>
                ) : null}
            </div>

            <div className="input-group">
                <label>Password</label>
                <input
                    type="password"
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                ) : null}
            </div>

            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;