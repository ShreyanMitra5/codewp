import Link from "next/link"
import { Heart, Copyright } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <Copyright className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500 font-light">
                            2024 CodeWithPurpose. All rights reserved.
                        </span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 font-light">Made with</span>
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-500 font-light">for our community</span>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link href="/about" className="text-sm text-gray-600 hover:text-gray-800 transition-colors font-light">
                            About Us
                        </Link>
                        <Link href="/programs" className="text-sm text-gray-600 hover:text-gray-800 transition-colors font-light">
                            Programs
                        </Link>
                        <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-800 transition-colors font-light">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 