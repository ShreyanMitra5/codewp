import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const teamMembers = [
  {
    name: "Shreyan Mitra",
    role: "Co-Founder",
    description: "Passionate about creating accessible coding education and building meaningful connections between technology and community impact.",
    initials: "SM",
  },
  {
    name: "Bruhatt Rao",
    role: "Co-Founder",
    description: "Dedicated to empowering learners through innovative educational approaches and fostering a community-driven learning environment.",
    initials: "BR",
  },
  {
    name: "Samanyu Goyal",
    role: "Chief Marketing Officer",
    description: "Focused on spreading awareness about our mission and connecting with communities to maximize our educational and charitable impact.",
    initials: "SG",
  },
];

export default function TeamPage() {
  return (
    <>
    <Header />
    <div className="bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="text-center space-y-4">
          <Badge className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-medium">Meet Our Team</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Team</h1>
          <p className="max-w-3xl mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Meet the passionate individuals behind CodeWithPurpose who are dedicated to making coding education accessible while supporting local communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader>
                <Avatar className="mx-auto w-24 h-24 mb-4 bg-green-100">
                  <AvatarFallback className="text-green-800 text-3xl font-bold">{member.initials}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <p className="text-sm text-green-600">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
} 