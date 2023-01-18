'use client'

import { useRouter } from "next/navigation";

type Props = {
  article: DataEntry
}

function ReadMoreButton({ article }: Props) {
  const router = useRouter();
  
  const handleClick = () => {
    const queryString = Object.entries(article)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };

  return (
    <button
    onClick={handleClick}
    className="bg-[rgb(133,56,56)] text-white h-10 rounded-b-lg tracking-wider lowercase font-serif hover:bg-[rgb(216,85,85)]/90"
    >
      Read More

    </button>
  )
}

export default ReadMoreButton