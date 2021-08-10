function HeaderItem({ Icon, title }) {
    return (
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white hover:animate-bounce">
            <Icon className="h-8 mb-1" />
            <p className="tracking-widest uppercase opacity-0 group-hover:opacity-100">
                {title}
            </p>
        </div>
    );
}

export default HeaderItem;
