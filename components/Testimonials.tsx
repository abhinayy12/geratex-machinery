type Testimonial = {
    quote: string;
    author: string;
    company?: string;
  };
  
  type TestimonialsProps = {
    data: {
      title: string;
      subtitle: string;
      eyebrow: string;
      items: Testimonial[];
    };
  };
  
  export default function Testimonials({ data }: TestimonialsProps) {
    return (
      <section id="testimonials" className="section-shell bg-[#fffaf4]">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker">{data.eyebrow}</p>
          <h2 className="text-5xl font-black tracking-[-0.05em] text-[#20242c] md:text-7xl">
            {data.title}
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-[#7b7068]">
            {data.subtitle}
          </p>
          <div className="mt-9 h-1 w-28 rounded-full bg-[#e87524]" />
        </div>
  
        <div className="testimonial-slider overflow-hidden">
          <div className="testimonial-track flex gap-6">
            {[...data.items, ...data.items].map((item, index) => (
              <article
              key={`${item.author}-${index}`}
              className="w-[85vw] max-w-[620px] shrink-0 rounded-4xl border border-orange-100 bg-white/80 p-8 shadow-[0_24px_70px_rgba(64,43,22,0.08)] backdrop-blur-xl md:w-[560px]"
            >
              <p className="text-lg italic leading-8 text-[#303640]">
                “{item.quote}”
              </p>
            
              <div className="mt-8">
                <p className="font-black text-[#e87524]">{item.author}</p>
            
                {item.company && (
                  <p className="mt-1 text-sm font-semibold text-[#7b7068]">
                    {item.company}
                  </p>
                )}
              </div>
            </article>
            ))}
          </div>
        </div>
      </section>
    );
  }