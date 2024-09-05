import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn ={
    // $id: string;
    // email: string;
    // userId: string;
    // dwollaCustomerUrl: string;
    // dwollaCustomerId: string;
    firstName: 'Narendra',
    lastName: 'Singh',
    // address1: string;
    // city: string;
    // state: string;
    // postalCode: string;
    // dateOfBirth: string;
    // ssn: string;
  };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image 
          src="/icons/logo.svg"
          width={30}
          height={30}
          alt="logo"
          />
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>
        {children}
      </div>
      
    </main>
  );
}
