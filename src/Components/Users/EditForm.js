import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import { getUserFromServer, editInServer } from '../../Services/Api'
import Validator from 'Validator'
import Swal from 'sweetalert2'


const rules = {
    name: 'required',
    family: 'required',
    username: 'required|min:5',
    phone: 'required',
    role: 'required',
    email: 'required|email',
}


export default function EditForm() {
    const params = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({
        name: '',
        family: '',
        username: '',
        email: '',
        phone: '',
        role: ''
    })

    useEffect(() => {
        showInfo();
    }, [])

    const validation = () => {
        return new Promise((resolve, reject) => {
            const v = Validator.make(user, rules)
            if (v.fails()) {
                const errs = v.getErrors();
                Object.entries(errs).forEach(([key, value]) => errs[key] = value[0])
                return reject(errs)
            }
            return resolve(true)
        })
    }

    const showInfo = async () => {
        try {
            let response = await getUserFromServer(params.id);
            setUser({
                name: response.data.data.name,
                family: response.data.data.family,
                username: response.data.data.username,
                email: response.data.data.email,
                phone: response.data.data.phone,
                role: response.data.data.role
            })
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        try {
            e.preventDefault();
            await validation();
            let response = await editInServer(params.id, user);
            Swal.fire(
                '',
                'اطلاعات کاربر با موفقیت ویرایش گردید',
                'success'
            )
            setLoading(false)
            setTimeout(() => {
                navigate("../", { replace: true });
            }, 1000);
        } catch (err) {
            setErrors(err)
        }
    }

    return (
        <>
            {
                loading ? <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                </div>
                    :
                    <form onSubmit={handleSubmit} className="shadow-lg p-5 rounded-lg border">
                        <div className="grid grid-cols-3 gap-10">
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={user.name} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام</label>
                                <small className="text-red-600">{errors.name}</small>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={user.family} type="text" name="family" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="family" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام خانوادگی</label>
                                <small className="text-red-600">{errors.family}</small>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={user.username} type="text" name="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام کاربری</label>
                                <small className="text-red-600">{errors.username}</small>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={user.email} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ایمیل</label>
                                <small className="text-red-600">{errors.email}</small>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={user.phone} type="number" name="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                                <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">شماره تماس</label>
                                <small className="text-red-600">{errors.phone}</small>
                            </div>
                            <div>
                                <label className="sr-only">Underline select</label>
                                <select onChange={handleInput} id="underline_select" name="role" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-900 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option defaultValue>{user.role}</option>
                                    <option value="ادمین">ادمین</option>
                                    <option value="کاربر معمولی">کاربر معمولی</option>
                                    <option value="کاربر vip">کاربر vip</option>
                                </select>
                                <small className="text-red-600">{errors.role}</small>
                            </div>
                        </div>
                        <div className="text-left mt-4">
                            <Link to="/" type="submit" className="py-1 w-32 bg-gray-600 text-gray-50 rounded-md ml-2 text-center">بازگشت</Link>
                            <button type="submit" className="py-1 w-32 bg-indigo-600 text-gray-50 rounded-md">ثبت</button>
                        </div>
                    </form>
            }

        </>
    )
}