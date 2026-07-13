import Link from "next/link";

type ProductItem = {
  title: string;
  text: string;
  image: string;
  slug?: string;
};

type ProductsProps = {
  data: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ProductItem[];
  };
  locale: string;
};

export default function Products({ data, locale }: ProductsProps) {
  return (
    <section id="products" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">{data.eyebrow}</p>
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {data.items.map((item) => {
          const CardContent = (
            <div className="premium-card h-full">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              <div className="p-7">
                <h3 className="text-2xl font-black text-[#e8752a]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#6b625b]">{item.text}</p>
              </div>
            </div>
          );

          if (item.slug) {
            return (
              <Link
                key={item.title}
                href={`/${locale}/products/${item.slug}`}
                className="block transition duration-300 hover:-translate-y-2"
              >
                {CardContent}
              </Link>
            );
          }

          return <div key={item.title}>{CardContent}</div>;
        })}
      </div>
    </section>
  );
}