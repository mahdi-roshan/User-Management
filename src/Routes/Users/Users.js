import { Link } from "react-router-dom"
import List from "../../Components/Users/List"
export default function users() {
    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <span className="text-2xl font-semibold text-gray-900">کاربران</span>
                    <Link to="add-user" className="bg-indigo-500 py-1 px-2 rounded-md text-gray-50">افزودن کاربر</Link>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-4">
                <List />
            </div>
        </div>
    )
}