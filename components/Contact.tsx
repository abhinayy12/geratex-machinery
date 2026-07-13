type ContactProps = { data: { eyebrow: string; title: string; text: string; email: string; button: string } };

export default function Contact({ data }: ContactProps) {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 md:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(232,117,42,0.18),transparent_28%),linear-gradient(135deg,#262a31,#17191d)]" />
      <div className="relative z-10 mx-auto max-w-5xl rounded-[2.3rem] border border-white/10 bg-white/[0.07] p-10 text-center shadow-[0_32px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-16">
        <p className="section-kicker text-[#f3b47c]">{data.eyebrow}</p>
        <h2 className="text-5xl font-black tracking-[-0.055em] text-white md:text-6xl">{data.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">{data.text}</p>
        <a href={`mailto:${data.email}`} className="btn-primary mt-9 inline-flex">{data.button}</a>
        <p className="mt-6 text-white/70">{data.email}</p>
      </div>
    </section>
  );
}
