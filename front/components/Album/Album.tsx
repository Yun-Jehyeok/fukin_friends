import ViewHeader from "components/ViewHeader";

const datas = [
  { id: 0, title: "Comfort Handy Craft" },
  { id: 1, title: "Comfort Handy Craft" },
  { id: 2, title: "Comfort Handy Craft" },
  { id: 3, title: "Comfort Handy Craft" },
  { id: 4, title: "Comfort Handy Craft" },
  { id: 5, title: "Comfort Handy Craft" },
  { id: 6, title: "Comfort Handy Craft" },
  { id: 7, title: "Comfort Handy Craft" },
  { id: 8, title: "Comfort Handy Craft" },
  { id: 9, title: "Comfort Handy Craft" },
];

export default function Album() {
  return (
    <div className="w-full">
      <ViewHeader
        title="Album Page"
        desc="It's Just Album Page"
        url="/album/create"
        url_title="Add Photo"
      />
      <div className="w-full flex justify-center">
        <div className="w-default">
          <div className="w-full h-11 mt-[124px] mb-36">
            <div className="font-josefin text-[22px] font-bold text-darkBlue">
              Ecommerce Accesories & Fashion item
            </div>
            <div className="font-lato text-xs text-subTextColor">
              About 9,620 results
            </div>
          </div>
          <div className="w-full flex gap-[48.5px] flex-wrap">
            {datas.map((item) => (
              <div key={item.id} className="w-[360px] h-[306px] mb-40">
                <div className="w-full h-[270px] bg-slate-500"></div>
                <div className="w-full h-9 flex justify-center flex-col">
                  <div className="w-fit font-josefin text-darkBlue text-base border-b border-b-[#EEEFFB]">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
