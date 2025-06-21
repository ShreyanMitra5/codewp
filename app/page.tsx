import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Code, Users, BookOpen, Heart, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50 font-light antialiased">
      {/* Navigation */}
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
              <Link href="#impact" className="text-gray-700 hover:text-gray-700 transition-colors font-light">
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

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-800 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-12">
              <div className="text-white">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-light">Loved by our students and community</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-light mb-6 leading-tight tracking-tight">
                  Hey there! Ready to learn coding while making your community stronger?
                </h1>

                <p className="text-xl mb-8 text-green-200 leading-relaxed font-light">
                  Here's the thing - we're not your typical coding bootcamp. Every course you take helps fund local
                  charities. We believe learning should create ripples of positive change that extend far beyond your
                  laptop screen.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white font-light" asChild>
                    <Link href="#courses">Start Your Journey</Link>
                  </Button>
                  <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white font-light" asChild>
                    <Link href="/about">Our Story</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="h-48 relative">
                    <Image src="/coding-laptop.jpg" alt="Coding on laptop" fill className="object-cover" />
                    <div className="absolute inset-0 bg-green-900/20"></div>
                  </div>
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Code className="w-8 h-8 text-green-700 mr-2" />
                      <Heart className="w-8 h-8 text-red-500" />
                      <Users className="w-8 h-8 text-green-700 ml-2" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2 tracking-tight">Code. Give. Impact.</h3>
                    <p className="text-gray-600 font-light">Where technology meets compassion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-light text-gray-800 mb-2 tracking-tight">500+</div>
              <p className="text-gray-600 font-light">students have started their coding journey with us</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-light text-gray-800 mb-2 tracking-tight">52+</div>
              <p className="text-gray-600 font-light">countries reached through our programs</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-light text-gray-800 mb-2 tracking-tight">42+</div>
              <p className="text-gray-600 font-light">hours of quality education delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-light mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Our Courses</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Ready to make a difference through code?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Let's be honest - every enrollment helps fund local charities while you build the skills that will shape
              your future. It's learning with purpose, literally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Python 3 Course */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center">
                <Image
                  src="/python-course.png"
                  alt="Python Course"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-light">
                    Perfect for Beginners
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                  Python for Complete Beginners
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Never coded before? No worries! This course takes you from "What's Python?" to building your first
                  real projects. We'll walk through everything step-by-step, and honestly, you'll be amazed at what you
                  can create.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Start from absolute zero - no experience needed
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Build real projects you can actually show off
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Join a supportive community of learners
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    The satisfaction of helping others while you learn
                  </div>
                </div>

                <Button className="w-full bg-green-800 hover:bg-green-900 text-white font-light" asChild>
                  <Link
                    href="https://www.udemy.com/course/introduction-to-python-bootcamp/?kw=Introduction+To+Python+for+Complete+Beginners%21&src=sac"
                    target="_blank"
                  >
                    Enroll Now on Udemy
                  </Link>
                </Button>
              </div>
            </div>

            {/* Vibecoding 101 Course */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                <Image
                  src="/vibecoding-course.png"
                  alt="Vibecoding Course"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-light">
                    Creative & Fun
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">Vibecoding 101</h3>

                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Who says coding has to be boring? This course brings creativity and personality to programming. You'll
                  learn modern development while building projects that actually reflect who you are. It's coding with
                  personality.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Express yourself through code
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Learn the tools developers actually use
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Create projects that wow your friends
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-light">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Connect with a creative coding community
                  </div>
                </div>

                <Button className="w-full bg-green-800 hover:bg-green-900 text-white font-light" asChild>
                  <Link href="https://www.udemy.com/course/vibecoding-101/?kw=Vibecoding+101&src=sac" target="_blank">
                    Enroll Now on Udemy
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 font-light">
              Both courses include lifetime access, community support, and the warm feeling of making a difference
            </p>
            <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 font-light" asChild>
              <Link href="/programs">
                View All Programs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-light mb-4">
              <Heart className="w-4 h-4" />
              <span>Why we're different</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Learning that creates lasting change in your community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              We're not just another coding bootcamp. We're a movement that believes education should lift up entire
              communities, not just individuals. Here's what makes us genuinely different.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-medium mb-3 tracking-tight">Real Skills, Real Support</h3>
              <p className="text-gray-600 font-light">
                We don't just throw videos at you and hope for the best. Our courses are designed by people who actually
                care about your success, with real support when you get stuck. We're real people who genuinely care.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-medium mb-3 tracking-tight">Purpose-Driven Learning</h3>
              <p className="text-gray-600 font-light">
                Every time you enroll, 50% goes directly to local charities. You're not just learning to code - you're
                funding food banks, supporting education, and making your community stronger. That's the CodeWithPurpose
                difference.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-medium mb-3 tracking-tight">Community That Actually Cares</h3>
              <p className="text-gray-600 font-light">
                Join a group of learners who are here for the right reasons. We celebrate each other's wins and help
                each other through the tough parts. No egos, just genuine support and encouragement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6 tracking-tight">
            Ready to code with purpose?
          </h2>
          <p className="text-xl text-green-200 mb-8 font-light">
            Your coding journey starts here, and so does your impact on the community. Let's build something meaningful
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white font-light">
              Start Learning Today
            </Button>
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white font-light" asChild>
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/codewp-logo.png" alt="CodeWithPurpose Logo" width={24} height={24} className="w-6 h-6" />
                <span className="text-lg font-medium tracking-tight">CodeWithPurpose</span>
              </div>
              <p className="text-gray-400 font-light">
                Where learning meets giving. Every course creates ripples of positive change.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Learn</h4>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>
                  <Link href="/programs" className="hover:text-white transition-colors">
                    All Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Python Course
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Vibecoding 101
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Student Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Impact Report
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Partner Charities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 font-light">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/codewithpurpose"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-light">
            <p>&copy; 2024 CodeWithPurpose. Made with ❤️ for communities everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
