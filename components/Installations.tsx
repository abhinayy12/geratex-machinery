import WorldMap from "./WorldMap";

type InstallationsProps = {
  data: {
    title: string;
    text: string;
    quote: string;
    author: string;
  };
};

export default function Installations({ data }: InstallationsProps) {
  return (
    <section id="installations" className="section-soft px-6 py-28 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl text-left">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-[#e87524]">
            03 / Global Reach
          </p>

          <h2 className="text-5xl font-black tracking--0.05em text-[#20242c] md:text-7xl">
            {data.title}
          </h2>

          <p className="mt-6 max-w-2xl text-xl leading-9 text-[#7b7068]">
            {data.text}
          </p>

          <div className="mt-9 h-1 w-28 rounded-full bg-[#e87524]" />
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-4xl border border-orange-100 bg-white/80 p-6 shadow-[0_30px_80px_rgba(88,56,32,0.12)]">
          <div className="aspect-16/8 w-full">
            <WorldMap />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-4xl border border-orange-100 bg-white p-8 text-center shadow-[0_20px_60px_rgba(88,56,32,0.10)]">
          <p className="text-lg italic leading-8 text-gray-700">
            “{data.quote}”
          </p>

          <p className="mt-4 font-bold text-[#e87524]">{data.author}</p>
        </div>
      </div>
    </section>
  );
}