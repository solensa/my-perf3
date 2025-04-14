import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen  relative overflow-hidden">
      {/* Centered content container */}
      <div className="container mx-auto px-4 py-0 flex justify-center">
        <div className="flex max-w-[1024px] relative">
          {/* Flow line - bottom layer */}
          <div className="relative w-[150px] h-[1214px] flex-shrink-0 z-0">
            <Image
              src="/flow-line2.svg"
              alt="Flow line"
              width={150}
              height={1200}
              className="w-[150px] h-[1214px] object-contain"
              priority
              style={{ maxWidth: "150px", maxHeight: "1214px" }}
            />
          </div>

          {/* Guide images - middle layer */}
          <div className="absolute z-10 -top-5 right-[-200px]">
            <Image
              src="/colleague.png"
              alt="Colleague Guide"
              width={405}
              height={270}
              className="transform rotate-6"
            />
          </div>

          <div className="absolute z-10 bottom-[140px] left-[-80px]">
            <Image
              src="/manager.png"
              alt="Manager Guide"
              width={405}
              height={270}
              className="transform -rotate-12"
            />
          </div>

          {/* Next Steps content - top layer */}
          <div className="max-w-2xl z-20 relative pt-[90px] pl-2">
            <h1 className="text-white text-3xl font-bold mb-8">Next Steps</h1>

            {/* Cards */}
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="bg-white rounded-lg p-6 relative hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">Schedule a Review Meeting</h2>
                <p className="text-sm my-2 text-black">
                  Schedule a 1-hour review meeting with your manager.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg p-6 hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">
                  Prepare for your Review Meeting
                </h2>
                <p className="text-sm my-2 text-black">
                  Prepare using LOR Learn resources including colleague and manager guides.
                  It&apos;s important for everyone to prepare for their conversation and to
                  understand the process.
                </p>
                <div className="mt-4 flex gap-4">
                  <Link
                    href="https://performancemanager5.successfactors.eu/sf/learning?destUrl=https%3a%2f%2flor%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dONLINE%5fCONTENT%5fSTRUCTURE%26componentID%3dITEM16267%26componentTypeID%3dONLINE%26revisionDate%3d1744193040000%26fromSF%3dY&company=LORProd"
                    target="_blank"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm"
                  >
                    Colleague Guide
                  </Link>
                  <Link
                    href="https://performancemanager5.successfactors.eu/sf/learning?destUrl=https%3a%2f%2flor%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dONLINE%5fCONTENT%5fSTRUCTURE%26componentID%3dITEM16269%26componentTypeID%3dONLINE%26revisionDate%3d1744193340000%26fromSF%3dY&company=LORProd"
                    target="_blank"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm"
                  >
                    Manager Guide
                  </Link>
                  <Link
                    href="https://performancemanager5.successfactors.eu/sf/home?company=LORProd&_s.crb=tx0mWvi2iDhIOvv8tl7a%252fPTKPa1PqzpPYKHMbFvnFFM%253d"
                    target="_blank"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm"
                  >
                    Access Your Form
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg p-6 hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">
                  Register for a Manager LIVE Webinar
                </h2>
                <p className="text-sm my-2 text-black">
                  Register for a LIVE manager webinar on performance reviews and goal setting.
                </p>
                <div className="mt-4">
                  <Link
                    href="https://forms.office.com/r/fKjDHRgtXJ"
                    target="_blank"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm"
                  >
                    Register Now
                  </Link>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-lg p-6 relative hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">
                  Update Your SuccessFactors Profile
                </h2>
                <p className="text-sm my-2 text-black">
                  Update your SuccessFactors profile for career possibilities. We want
                  everyone&apos;s career to benefit from the pipeline of exciting projects secured.
                  By updating your profile on SuccessFactors, our People team will have the most up
                  to date picture of your experience and skills to inform the business to plan
                  resource on future projects. Click here to complete your sector experience,
                  location preferences and to add your most recent CV.
                </p>
                <div className="mt-4">
                  <Link
                    href="https://performancemanager5.successfactors.eu/sf/liveprofile"
                    target="_blank"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm"
                  >
                    Update Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
