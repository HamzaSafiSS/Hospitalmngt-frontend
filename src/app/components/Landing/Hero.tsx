import { ArrowRight, Phone, Video, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
// import doctorImg from "../../../assets/doctor_hero.png"; // Placeholder for local asset
const doctorImg = "https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg"; // Fallback URL


export default function Hero() {
    return (
        <section className="relative bg-[#F4F7FF] pt-32 pb-20 overflow-hidden font-sans">
            {/* Background decoration (faint circle for depth) */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-block">
                        <span className="text-gray-500 font-medium tracking-wide uppercase text-sm">
                            Dedicated Doctors
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Search & Find Clinic <br />
                        For <span className="text-blue-600 relative inline-block">
                            Your Surgery
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-600 opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5 L 100 8 Q 50 13 0 8 Z" fill="currentColor" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-gray-500 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Our skilled doctor have tremendous experience with wide range of diseases to serve the needs of our patients.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            to="/ask-doctor"
                            className="px-8 py-4 bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:bg-blue-800 transition transform hover:-translate-y-0.5"
                        >
                            Ask A Doctor Online
                        </Link>
                        <Link
                            to="/chat"
                            className="px-8 py-4 bg-white text-gray-700 font-medium rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition transform hover:-translate-y-0.5"
                        >
                            Unlimited Chat
                        </Link>
                    </div>

                    <div className="pt-8 flex gap-8 justify-center lg:justify-start text-gray-400 font-medium text-sm">
                        <a href="#" className="hover:text-blue-600 transition">Facebook</a>
                        <a href="#" className="hover:text-blue-600 transition">Instagram</a>
                        <a href="#" className="hover:text-blue-600 transition">Tweeter</a>
                    </div>
                </div>

                {/* Right Content - Image & decorations */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Main Doctor Image Container */}
                    <div className="relative">
                        {/* Background blobs/circles behind doctor */}
                        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-10 -left-4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                        {/* Doctor Image */}
                        <img
                            src={doctorImg}
                            alt="Doctor"
                            className="relative z-10 w-[400px] lg:w-[480px] object-cover drop-shadow-2xl mask-image-gradient"
                        // Masking at bottom for smooth blend if needed, or just let it sit.
                        // For now just standard image.
                        />

                        {/* Floating Icons */}
                        <div className="absolute top-1/4 -left-12 bg-white p-3 rounded-full shadow-lg z-20 animate-bounce-slow">
                            <Phone className="w-6 h-6 text-gray-700" />
                        </div>

                        <div className="absolute top-1/3 -right-8 bg-white p-3 rounded-full shadow-lg z-20 animate-bounce-slow delay-700">
                            <Video className="w-6 h-6 text-gray-700" />
                        </div>

                        <div className="absolute bottom-1/3 -left-8 bg-white p-3 rounded-full shadow-lg z-20 animate-bounce-slow delay-1000">
                            <MessageCircle className="w-6 h-6 text-gray-700" />
                        </div>

                        {/* Floating Badge: Reviews */}
                        <div className="absolute bottom-16 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-float">
                            <div className="text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 text-lg">1600+</div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Reviews</div>
                            </div>
                        </div>

                        {/* Floating Badge: Profile/Rating */}
                        <div className="absolute bottom-24 -left-10 bg-white p-3 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-float delay-500">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                <img src="https://i.pravatar.cc/150?img=12" alt="User" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-800 text-sm">Mr. Jonas</div>
                                <div className="flex text-yellow-400 text-xs gap-0.5">
                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                </div>
                            </div>
                        </div>
                  
                    </div>
                </div>
            </div>
        </section>
    );
}
