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
          <div className="font-josefin text-baseRed text-base font-medium mt-6">
            {desc}
          </div>
        </div>
        {url ? (
          <div className="cursor-pointer hover:bg-hoverRed outline-none border-none h-[50px] w-[200px] flex justify-center flex-col text-center bg-baseRed font-josefin font-bold text-4.25 relative top-4">
            <Link href={url}>
              <a className="text-white hover:text-white">{url_title}</a>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
