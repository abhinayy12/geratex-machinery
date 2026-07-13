type AboutProps = {
    data: {
      eyebrow: string;
      title: string;
      text: string;
      missionEyebrow: string;
      missionTitle: string;
      missionText: string;
      values: string[];
    };
  };
  
  export default function About({ data }: AboutProps) {
    return (
      <section id="about" className="section-shell bg-[#fffaf4]">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="section-kicker">{data.eyebrow}</p>
  
            <h2 className="text-5xl font-black tracking-[-0.05em] text-[#20242c] md:text-7xl">
              {data.title}
            </h2>
  
            <p className="mt-6 text-xl leading-9 text-[#7b7068]">
              {data.text}
            </p>
  
            <div className="mt-9 h-1 w-28 rounded-full bg-[#e87524]" />
          </div>
  
          <div className="premium-card p-8">
            <p className="section-kicker">{data.missionEyebrow}</p>
  
            <h3 className="text-4xl font-black tracking-[-0.04em] text-[#20242c] md:text-5xl">
              {data.missionTitle}
            </h3>
  
            <p className="mt-6 text-lg leading-8 text-[#6b625b]">
              {data.missionText}
            </p>
  
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {data.values.map((value) => (
                <div key={value} className="feature-tile min-h-0 text-center">
                  <p className="mt-0 text-sm font-black uppercase tracking-[0.18em] text-[#e87524]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }