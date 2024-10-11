import SearchBar from "@/components/searchbar";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import StoredPapers from "@/components/StoredPapers";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <Navbar />
      </div>
      <div className="mt-2 flex flex-grow flex-col items-center justify-center gap-y-6">
        <div className="w-full max-w-2xl space-y-6 text-center">
          <h1 className="phonk text-2xl font-bold tracking-wider md:text-3xl">
            Built by students for students
          </h1>
          <p className="text-base font-semibold">
            Get access to past papers for CAT-1, CAT-2, and FAT right here. With
            CodeChef-VIT's papers, you're all set to study smarter, practice
            better, and ace your exams with confidence. Dive in and start
            preparing today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="rounded-full px-6 py-6 text-xs font-semibold"
            >
              NO SIGN UP REQUIRED
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 py-6 text-xs font-semibold"
            >
              FILTERED SEARCH
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 py-6 text-xs font-semibold"
            >
              FLEXIBLE DOWNLOAD
            </Button>
          </div>
        </div>
        <div className="z-20 w-full max-w-xl">
          <SearchBar />
        </div>
        <div className="max-3xl w-full">
          <StoredPapers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
