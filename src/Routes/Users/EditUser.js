
import EditForm from "../../Components/Users/EditForm";
export default function EditUser() {
    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-2xl font-semibold text-gray-900">ویرایش کاربر</span>
            </div>
            <div className="max-w-7xl mx-auto py-4">
                <div className="">
                    <EditForm />
                </div>
            </div>
        </div>
    )
}