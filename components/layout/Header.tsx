import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <Image src="/codewp-logo.png" alt="CodeWithPurpose Logo" width={32} height={32} className="w-8 h-8" />
                        <span className="text-xl font-medium text-gray-800 tracking-tight">CodeWithPurpose</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/programs" className="text-gray-700 hover:text-gray-700 transition-colors font-light">
                            Programs
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-gray-700 transition-colors font-light">
                            About
                        </Link>
                        <Link href="/team" className="text-gray-700 hover:text-gray-700 transition-colors font-light">
                            Our Team
                        </Link>
                        <Link href="/#impact" className="text-gray-700 hover:text-gray-700 transition-colors font-light">
                            Impact
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-gray-700 transition-colors font-light">
                            Contact
                        </Link>
                    </div>

                    <Button className="bg-green-800 hover:bg-green-900 text-white font-light" asChild>
                        <Link href="/programs">Join Our Mission</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
} 