import Link from "next/link";


export default function Home() {
  return (
    <main className="m-auto h-[70vh]">
      {/* category slider */}
      <div className="container">
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl">
       
            <Link 
              href="/all-categories"
              className="btn-main !py-3 !px-10  group"
            >
             All Categories
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}