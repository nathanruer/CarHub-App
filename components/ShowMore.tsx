"use client";

import { useRouter } from "next/navigation";

import { updateSearchParams } from "@/utils";
import Button from "./Button";

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore:React.FC<ShowMoreProps> = ({
  pageNumber,
  isNext,
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          type="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;