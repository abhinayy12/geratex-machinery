type ProductItem = { title: string; text: string; image: string };
type ProductsProps = { data: { title: string; subtitle: string; items: ProductItem[] } };

export default function Products({ data }: ProductsProps) {
  return (
    <section id="products" className="section-shell relative">
      <div className="mesh-blob left-10 top-20" />
      <div className="section-heading">
        <p className="section-kicker">01 / Portfolio</p>
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </div>

      <div className="relative z-10 mt-14 grid gap-7 md:grid-cols-3">
        {data.items.map((item, index) => (
          <article key={item.title} className="premium-card group animate-fade-up" style={{ animationDelay: `${index * 90}ms` }}>
            <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-[#f5ece2]">
              <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#df6f23] backdrop-blur">
                Geratex
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-black tracking-[-0.035em] text-[#232832]">{item.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#6b625b]">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
