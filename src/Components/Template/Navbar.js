import avatar from "./../../Assets/images/avatar.png"
export default function Navbar() {
    function openSidebar() {
        const sidebar = document.getElementById('sidebar'),
            sidebarCloseIcon = document.getElementById('sidebar-close-icon'),
            overlay = document.getElementById('overlay');

        sidebar.classList.add('absolute', 'z-50', 'flex', 'flex-row-reverse')
        sidebar.classList.remove('hidden');

        sidebarCloseIcon.classList.remove('hidden')
        sidebarCloseIcon.classList.add('flex')

        document.body.classList.add('overflow-hidden')

        overlay.classList.remove('hidden')
    }

    return (
        <>

            {/* navbar */}
            <div className="flex justify-between shadow h-16 items-center px-4">
                <button className="md:hidden ml-4 p-1 focus:ring-2 focus:ring-slate-700" onClick={openSidebar} id="sidebar-open-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div className="w-full">
                    {/* <form action="" className="flex w-full items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input type="text" className="w-full h-14 pr-4 outline-none" placeholder="جستجو" />
                    </form> */}
                </div>
                <div className="flex items-center pl-4">
                    {/* <div className="pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </div> */}
                    <div className="flex-shrink-0">
                        <img className="w-12 h-8 rounded-full"
                            src={avatar}
                            alt="" />
                    </div>
                </div>
            </div>
            {/* end navbar */}
        </>
    );
}