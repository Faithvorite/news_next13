'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {}


function SearchBox({}: Props) {
  const [input, setInput] = useState("");
  const router = useRouter();
  
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);
  }

  return (
    <form 
      onSubmit={handleSearch}
      className='max-w-6xl mx-auto flex justify-between items-center px-5 cursor-pointer'
    >

      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search keywords..."
        className='w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400'
      />
      
      <button 
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBox