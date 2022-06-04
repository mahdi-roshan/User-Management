import AddForm from "../../Components/Users/AddForm";

export default function AddUser() {
    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-2xl font-semibold text-gray-900">افزودن کاربر</span>
            </div>
            <div className="max-w-7xl mx-auto py-4">
                <div className="">
                    <AddForm />
                </div>
            </div>
        </div>
    )
}