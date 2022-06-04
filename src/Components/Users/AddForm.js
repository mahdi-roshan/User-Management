import { useState } from "react"
import Validator from 'Validator'
import { addToServer } from "../../Services/Api"
import { addUser } from "../../Store/Slices/UsersSlice"
import { useDispatch } from "react-redux"
import Swal from 'sweetalert2'

const rules = {
    name: 'required',
    family: 'required',
    password: 'required|min:8',
    username: 'required|min:5',
    phone: 'required',
    role: 'required',
    email: 'required|email',
}

export default function AddForm() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [user, setUser] = useState({
        name: '',
        family: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        role: ''
    });

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

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await validation()
            let response = await addToServer(user);
            dispatch(addUser(response));
            setUser({
                name: '',
                family: '',
                username: '',
                email: '',
                phone: '',
                password: '',
                role: ''
            })
            Swal.fire(
                '',
                'کاربر با موفقیت افزوده شد',
                'success'
            )
        } catch (errors) {
            setErrors(errors)
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

    return (
        <>
            <form onSubmit={handleSubmit} className="shadow-lg p-5 rounded-lg border">
                <div className="grid grid-cols-3 gap-10">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                        <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام</label>
                        <small className="text-red-600">{errors.name}</small>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="family" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                        <label for="family" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام خانوادگی</label>
                        <small className="text-red-600">{errors.family}</small>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                        <label for="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام کاربری</label>
                        <small className="text-red-600">{errors.username}</small>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                        <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ایمیل</label>
                        <small className="text-red-600">{errors.email}</small>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                        <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">شماره تماس</label>
                        <small className="text-red-600">{errors.phone}</small>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleInput} />
                        <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">پسورد</label>
                        <small className="text-red-600">{errors.password}</small>
                    </div>
                    <div>
                        <label className="sr-only">Underline select</label>
                        <select onChange={handleInput} id="underline_select" name="role" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-900 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option defaultValue>نقش</option>
                            <option value="ادمین">ادمین</option>
                            <option value="کاربر معمولی">کاربر معمولی</option>
                            <option value="کاربر vip">کاربر vip</option>
                        </select>
                        <small className="text-red-600">{errors.role}</small>
                    </div>
                </div>
                <div className="text-left">
                    <button type="submit" className="py-2 w-32 bg-indigo-600 text-gray-50 rounded-md">ثبت</button>
                </div>
            </form>
        </>
    )
}