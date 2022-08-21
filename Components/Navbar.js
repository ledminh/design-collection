export default function Navbar() {

    return (
        <nav className="flex flex-wrap justify-between items-end mb-6">
            <Logo />
            <Menu />
            <LetTalk />    
        </nav>
    )
}

const Logo = () => (
    <div className="md:basis-1/5 basis-full">
        <div className="md:text-2xl md:text-left md:mb-0 text-3xl text-center mb-4">
            <span className="font-bold">Naya</span>
            <span>Home</span>
        </div>
    </div>
)

const Menu = () => (
    <ul className="flex flex-wrap md:basis-3/5 md:mb-0 mb-4 basis-full md:max-w-xl">
        <li className="md:basis-1/4 basis-full text-center">PROPERTY</li>
        <li className="md:basis-1/4 basis-full text-center ">SERVICES</li>
        <li className="md:basis-1/4 basis-full text-center ">TESIMONIALS</li>
        <li className="md:basis-1/4 basis-full text-center">ABOUT</li>
    </ul>

)

const LetTalk = () => (
    <div className="md:basis-1/5 basis-full text-center">
        <button className="md:float-right bg-black text-white border-2 border-bgColor hover:bg-bgColor hover:text-black hover:border-black active:scale-95 px-3 py-0.5 transiton duration-100 ease-linear">LET&apos;S TALK</button>
    </div>
)