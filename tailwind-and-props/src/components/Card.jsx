import React from 'react'

function Card({ username, btnText = 'View Profile' }) {
    const imgSrc = "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"

    return (
        <div className="relative h-[400px] w-[300px] rounded-md m-4 shadow-[8px_8px_20px_rgb(109,40,217)]">
            <img
                src={imgSrc}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{username}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                <button className="hover:bg-violet-700 bg-violet-600 mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {btnText} →
                </button>
            </div>
        </div>
    )
}

export default Card