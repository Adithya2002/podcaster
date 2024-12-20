import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative flex flex-col">
            <main className="relative flex bg-black-3">
                <LeftSidebar />
                <section className="border-2 border-red-50 flex min-h-screen flex-1 flex-col px-4 sm:px-12">
                    <div className="mx-auto flex max-w-5xl w-full flex-col max-sm:px-4">
                        <div className="flex h-16 items-center justify-between md:hidden" >
                            <Image 
                            src="/icons/logo.svg"
                            height={28}
                            width={28}
                            alt="logo"
                            />
                            <MobileNav/>
                        </div>
                        <div className="flex flex-col md:pb-12">
                            Toaster
                            {children}
                        </div>
                    </div>
                </section>

                <RightSidebar />
            </main>
        </div>
    );
}
