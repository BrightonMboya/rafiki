import Link from "next/link";
import { cn } from "../../utils/cn";


const tags = [
  "all",
  "students",
  "spaces",
  "events",
  "documentaries",
  "lifestyle",
];

export default function Tags({activeTag, setActiveTag}) {
    return (
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={tag === "all" ? "/filmography" : `/film?tags=${tag}`}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-colors",
              activeTag === tag
                ? "bg-white text-black"
                : "bg-[#141415] border-[1px] border-[#232222] text-white hover:bg-[#1F1F22]"
            )}
            onClick={(e) => {
              // e.preventDefault();
              setActiveTag(tag);
            }}>
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </Link>
        ))}
      </div>
    );
}