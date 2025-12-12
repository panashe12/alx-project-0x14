import { MovieProps } from "@/interfaces"
import Image from "next/image"

const MovieCard: React.FC<MovieProps> = ({ title, posterImage, releaseYear }) => {
  return (
    <div className="h-[563px]">
      <div>
        <Image className="h-[430px] w-full rounded-md hover:cursor-pointer" src={posterImage} width={100} height={100} alt={title} />

      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xl text-[#E2D609]">{releaseYear}</p>
      </div>
    </div>
  )
}

export default MovieCard
Create the Loading Component:

Create a new file named Loading.tsxin your components/commons directory.

Replace the content with the following:

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 animate-pulse">
          Loading...
        </h1>
        <p className="text-lg text-gray-300">Please wait, we&apos;re getting next set of movies ready for you.</p>
      </div>
    </div>
  );
};

export default Loading;
