export default function TableHeader() {
    return (
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
    );
}