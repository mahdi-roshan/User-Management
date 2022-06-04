import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteFromServer } from "../../Services/Api";
import { setUsers, deleteUser } from './../../Store/Slices/UsersSlice'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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

    const deleteHandler = (e) => {
        Swal.fire({
            title: 'آیا از حذف این کاربر اطمینان دارید؟',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله',
            cancelButtonText: 'خیر'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteFromServer(e.target.id);
                    dispatch(deleteUser(parseInt(e.target.id)))
                } catch (err) {
                    Swal.fire({
                        icon: 'error',
                        title: '',
                        text: err,
                    })
                }
            }
        })
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
                                        نام کاربری
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ایمیل
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        شماره تماس
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
                                                {user.role}
                                            </td>
                                            <td className="px-6 py-4 flex text-right">
                                                <Link to={`/user/${user.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ویرایش</Link>
                                                <span id={user.id} onClick={deleteHandler} className="mr-3 font-medium text-red-600 hover:underline cursor-pointer">حذف</span>
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