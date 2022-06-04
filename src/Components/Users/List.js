import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../Services/Api";
import { setUsers } from './../../Store/Slices/UsersSlice'
export default function List() {
    const users = useSelector(state => state.users.list);
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        try {
            let response = await fetchUsers()
            dispatch(setUsers(response.data.data))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {users.length
                ?
                <div className="">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        نام
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        نام خانوادگی
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        یوزرنیم
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ایمیل
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        شماره تماس
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        جنسیت
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        نقش
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        {/* <span class="sr-only">ویرایش</span> */}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {
                                    users.map(user => (
                                        <tr key={user.id} className="bg-white border-b">
                                            <th scope="row" className="px-6 py-4">
                                                {user.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {user.family}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.username}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.phone}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.gender}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.role}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ویرایش</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                : <div className="text-xl border-2 rounded-lg h-96 items-center flex justify-center">
                    <span className="">دیتایی برای نمایش وجود ندارد</span>
                </div>
            }
        </>

    );
}