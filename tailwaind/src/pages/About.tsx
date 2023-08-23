

export default function About(){

    return(
        <>
        <div className="h-screen w-full flex items-center justify-center">
            <div className="flex flex-col justify-around items-center bg-slate-500 rounded-2xl shadow-xl p-5">
                <h2>معلومات المعسكر</h2>
                <p>نهدف لنساعد طلابنا على التطور وايجاد وظائف ملائمة عند التخرد</p>
                <a href="/login">تسجيل الدخول</a>
            </div>
        </div>
        </>
    )
}
