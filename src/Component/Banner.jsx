

const Banner = () => {
    return (
        <div
            className="hero min-h-[600px] rounded-xl"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/dfC0LxX/Rectangle-1.jpg)"
            }}
        >
            <div className="hero-overlay bg-opacity-30 rounded-xl " />
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:w-8/12">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-7">
                    Join our personalized cooking classes to explore diverse cuisines, refine skills, and unleash culinary creativity! Start your flavorful journey now.
                    </p>
                    <div className=" flex flex-col lg:flex-row gap-4 justify-center">
                    <button className="btn rounded-full px-7 bg-[#0BE58A] border-none font-bold">Explore Now</button>
                    <button className="btn rounded-full px-7 bg-transparent text-white border-2">Our Feedback</button>
                   
                    </div>
                   
                </div>
            </div>
        </div>

    );
};

export default Banner;