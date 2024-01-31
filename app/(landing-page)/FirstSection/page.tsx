import Link from "next/link";

function Firstsction() {
  return (
    <section className="m:py-20 py-10 space-y-10 bg-[#E5E4E2]">
        <div className="container mx-auto text-center md:w-1/2">
            <div className="text-6xl flex justify-center pb-10">
                The Best Platform for Cross-functional work
            </div>
            <p className="text-lg md:text-1xl mb-10">
                Want more efficiency in your organizition?Bird is easy for all teams to use,so you can deliver quality work,faster.
            </p>
            
            <div className="flex gap-4 justify-center">
                <button className="bg-black text-white px-6 py-3 rounded-sm">
                    Get Started
                </button>
                <Link href="/contact">
                <button className="bg-gray-500 text-white px-6 py-3 rounded-sm">
                    See how it works
                </button>
                </Link>
            </div>

        </div>

    </section>
  )
}

export default Firstsction;