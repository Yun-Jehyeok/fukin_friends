import Link from "next/link";

interface IHeader {
  title: string;
  desc: string;
  url?: string;
  url_title?: string;
}

export default function ViewHeader({ title, desc, url, url_title }: IHeader) {
  return (
    <div className="w-full h-[286px] bg-[#f6f5ff] flex justify-center">
      <div className="w-default mt-[90px] flex justify-between">
        <div>
          <div className="text-4xl font-bold font-josefin text-[#101750]">
            {title}
          </div>
          <div className="font-josefin text-basered text-base font-medium mt-6">
            {desc}
          </div>
        </div>
        {url ? (
          <div className="cursor-pointer outline-none border-none h-[50px] w-[200px] bg-basered font-josefin font-bold text-[17px] relative top-4">
            <Link className="text-white hover:bg-[#f72182]" href={url}>
              {url_title}
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
