function Button({text, icon, onClick}) {
    const handleClick = onClick || (() => {})

    return (
        <button 
            onClick={handleClick} 
            className="flex items-center gap-3 relative z-10 px-6 py-2 rounded-[3px] border border-bright-green text-bright-green outline-none
          hover:text-black hover:font-medium hover:cursor-pointer
            before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-bright-green before:transition-all before:duration-500 hover:before:scale-x-100 before:scale-x-0 before:origin-left before:-z-10
            nt-sm:text-sm"
        >
            <p className="font-fira-code text-sm dt:text-base">{text}</p>
            <div className="text-xl dt:text-2xl tb:text-xl">{icon}</div>
        </button>

    )
}

export default Button