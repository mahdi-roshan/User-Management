
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    function closeSidebar() {
        const sidebar = document.getElementById('sidebar'),
            sidebarCloseIcon = document.getElementById('sidebar-close-icon'),
            overlay = document.getElementById('overlay');

        sidebar.classList.remove('absolute', 'z-50', 'flex', 'flex-row-reverse')
        sidebar.classList.add('hidden');

        sidebarCloseIcon.classList.add('hidden')
        sidebarCloseIcon.classList.remove('flex')

        document.body.classList.remove('overflow-hidden')

        overlay.classList.add('hidden')
    }

    return (
        <>
            <div className="hidden w-full h-full fixed bg-gray-900 opacity-50 top-0 right-0" onClick={closeSidebar} id="overlay"></div>
            {/* sidebar */}
            <div className="hidden fixed w-64 md:flex h-full" id="sidebar">
                <button className="hidden absolute z-50 -left-12 top-4" onClick={closeSidebar} id="sidebar-close-icon">
                    <svg className="h-6 w-6 text-white" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="bg-slate-700 flex flex-col flex-grow  overflow-y-auto" id="sidebar-content-layout">
                    <nav className="space-y-3 px-2 mt-10">
                        <NavLink to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-gray-300 flex items-center space-x-2 space-x-reverse bg-slate-800 px-3 py-2 rounded-full' : 'text-gray-300 flex items-center space-x-2 space-x-reverse p-3'
                            }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <span>کاربران</span>
                        </NavLink>
                        <NavLink to="/add-user" className={({ isActive }) =>
                            isActive ? 'text-gray-300 flex items-center space-x-2 space-x-reverse bg-slate-800 px-3 py-2 rounded-full' : 'text-gray-300 flex items-center space-x-2 space-x-reverse p-3'
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </div>
                            <span>افزودن کاربر</span>
                        </NavLink>
                        <NavLink to="/docs" href="" className={({ isActive }) =>
                            isActive ? 'text-gray-300 flex items-center space-x-2 space-x-reverse bg-slate-800 px-3 py-2 rounded-full' : 'text-gray-300 flex items-center space-x-2 space-x-reverse p-3'
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                            </div>
                            <span>مستندات</span>
                        </NavLink>
                    </nav>
                </div>
            </div>
            {/* end sidebar */}
        </>
    );


}