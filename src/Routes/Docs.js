import Users from "./../Assets/images/users.PNG"
import addUser from "./../Assets/images/adduser.PNG"
import editUser from "./../Assets/images/edituser.PNG"
import deleteUser from "./../Assets/images/deleteuser.PNG"

export default function Documents() {
    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-2xl font-semibold text-gray-900">مستندات</span>
            </div>
            <div className="max-w-7xl mx-auto py-4">
                <div className="">
                    <p>این پروژه برای مدیریت بهتر لیست کاربران سامانه شما طراحی و توسعه یافته است،
                        در ادامه بخش های مختلف و نحوه کار با آن ها توضیح داده خواهد شد.
                    </p>
                    <div>
                        <h4 className="mt-5 text-xl font-bold text-gray-500">نحوه ی راه اندازی پروژه : </h4>
                        <p className="mt-4 text-gray-500">ابتدا پروژه را از آدرس <a className="text-blue-400" href="https://github.com/mahdi-roshan/User-Management">https://github.com/mahdi-roshan/User-Management</a> دریافت کنید.</p>
                        <p className="mt-2 text-gray-500">با دستور <span className="font-bold text-gray-900">npm i </span>یا <span className="font-bold text-gray-900">npm install</span> پیش نیاز های پروژه نصب کنید.</p>
                        <p className="mt-2 text-gray-500">سپس با دستور <span className="font-bold text-gray-900">npm run start</span> پروژه برای شما راه اندازی خواهد شد.</p>
                    </div>
                    <h4 className="mt-5 text-xl font-bold text-gray-500">لیست API </h4>
                    <hr></hr>
                    <div>
                        <h4 className="mt-5 text-lg font-semibold text-gray-500">لیست کاربران : </h4>
                        <p className="mt-2 text-gray-500 text-sm">برای دریافت لیست کاربران باید از API زیر استفاده کنید.</p>
                        <ul className="space-y-3 mt-4 border-2 p-3 rounded-lg">
                            <li className="text-left font-semibold">Method : GET</li>
                            <li className="text-left font-semibold">Url : https://629b1c36e67470ca4dec847a.endapi.io/users_list</li>
                        </ul>
                        <h5 className="my-2 text-gray-500">خروجی : </h5>
                        <div className="border-2 p-3 rounded-lg h-50">
                            <img className="h-full" src={Users} />
                        </div>
                    </div>
                    <div>
                        <h4 className="mt-5 text-lg font-semibold text-gray-500">افزودن کاربر : </h4>
                        <p className="mt-2 text-gray-500 text-sm">برای افزودن کاربر باید از API زیر استفاده کنید</p>
                        <ul className="space-y-3 mt-4 border-2 p-3 rounded-lg">
                            <li className="text-left font-semibold">Method : POST</li>
                            <li className="text-left font-semibold">Url : https://629b1c36e67470ca4dec847a.endapi.io/users_list</li>
                            <li className="text-left font-semibold">body : {'{name: string , family : string , email : string , username : string , phone : string , password : string , role : string}'}</li>
                        </ul>
                        <h5 className="my-2 text-gray-500">خروجی : </h5>
                        <div className="border-2 p-3 rounded-lg h-50">
                            <img className="h-full" src={addUser} />
                        </div>
                    </div>
                    <div>
                        <h4 className="mt-5 text-lg font-semibold text-gray-500">ویرایش کاربر : </h4>
                        <p className="mt-2 text-gray-500 text-sm">برای ویرایش کاربر باید از API زیر استفاده کنید</p>
                        <ul className="space-y-3 mt-4 border-2 p-3 rounded-lg">
                            <li className="text-left font-semibold">Method : PUT</li>
                            <li className="text-left font-semibold">Url : https://629b1c36e67470ca4dec847a.endapi.io/users_list/:userId</li>
                            <li className="text-left font-semibold">Body : {'{name: string , family : string , email : string , username : string , phone : string , password : string , role : string}'}</li>
                        </ul>
                        <h5 className="my-2 text-gray-500">خروجی : </h5>
                        <div className="border-2 p-3 rounded-lg h-50">
                            <img className="h-full" src={editUser} />
                        </div>
                    </div>
                    <div>
                        <h4 className="mt-5 text-lg font-semibold text-gray-500">حذف کاربر : </h4>
                        <p className="mt-2 text-gray-500 text-sm">برای حذف کاربر باید از API زیر استفاده کنید</p>
                        <ul className="space-y-3 mt-4 border-2 p-3 rounded-lg">
                            <li className="text-left font-semibold">Method : DELETE</li>
                            <li className="text-left font-semibold">Url : https://629b1c36e67470ca4dec847a.endapi.io/users_list/:userId</li>
                        </ul>
                        <h5 className="my-2 text-gray-500">خروجی : </h5>
                        <div className="border-2 p-3 rounded-lg h-50">
                            <img className="h-full" src={deleteUser} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}