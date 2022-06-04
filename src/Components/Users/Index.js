import Navbar from './../Template/Navbar'
import Sidebar from './../Template/Sidebar'
import Users from './../../Routes/Users';
import AddUser from './../../Routes/AddUser';
import Docs from './../../Routes/Docs'
// import routes
import { Routes, Route } from "react-router-dom";

export default function UserList() {
    return (
        <>
            <Sidebar />
            <div className="flex flex-col md:pr-64">
                <Navbar />
                {/* content */}
                <main>
                    <Routes>
                        <Route path="/" element={<Users />}></Route>
                        <Route path="/add-user" element={<AddUser />}></Route>
                        <Route path="/docs" element={<Docs />}></Route>
                    </Routes>
                </main>
                {/* end content */}
            </div>
        </>
    )
}