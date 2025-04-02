function Button({text, icon, title, onClick}) {
    const handleClick = onClick || (() => {})

    return (
        <button 
            title={title}
            onClick={handleClick} 
            className="flex items-center gap-3 px-6 py-2 rounded-[3px] border border-bright-green text-bright-green outline-none
          hover:text-black hover:bg-bright-green hover:scale-105 hover:font-medium hover:cursor-pointer transition-all duration-400"
        >
            <p className="font-fira-code text-xs dt:text-sm">{text}</p>
            <div className="text-base dt:text-xl tb:text-lg">{icon}</div>
        </button>

    )
}

export default Button