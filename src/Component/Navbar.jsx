

const Navbar = () => {
    return (
        <>

            {/* ==== */}
            <div className="navbar  bg-base-100 my-10  flex gap-5 flex-col lg:flex-row  items-start sticky top-0 z-[9999] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52 text-gray-500 font-semibold"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                            <a href="#recipes">Recipes</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li >
                                <a>Search</a>

                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl lg:text-4xl font-bold pl-0">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-gray-500 font-semibold">
                        <li className="navBtn">
                            <a  href="banner">Home</a>
                        </li>
                        <li className="navBtn">
                        <a href="#recipes">Recipes</a>
                        </li>
                        <li className="navBtn">
                            <a>About</a>
                        </li>
                        <li className="navBtn" >
                            <a>Search</a>

                        </li>
                    </ul>
                </div>
                <div className="lg:navbar-end flex ">
                    <div className="flex gap-2 ">
                        <div className="form-control ">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input    md:w-auto rounded-full bg-[#150B2B0D]"
                            />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Navbar;