import { Picture, Source } from "apps/website/components/Picture.tsx";
import Image from "apps/website/components/Image.tsx";
import Header from "../../components/ui/SectionHeader.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "deco-sites/tulia/components/ui/Button.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

/**
 * @titleBy alt
 */
export interface Banner {
  srcMobile: ImageWidget;
  srcDesktop?: ImageWidget;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description Adicione um link
   */
  href: string;
}

export interface Props {
  title?: string;
  description?: string;
  /**
   * @minItems 3
   */
  banners: Banner[];
  /**
   * @description Qtd de banners a serem exibidos
   */
  show: number;
}

function Banner({ srcMobile, srcDesktop, alt, href }: Banner) {
  return (
    <a href={href} class="overflow-hidden">
      <Picture>
        <Source
          width={150}
          // height={190}
          media="(max-width: 767px)"
          src={srcMobile}
        />
        <Source
          width={300}
          // height={420}
          media="(min-width: 768px)"
          src={srcDesktop || srcMobile}
        />
        <Image
          width={200}
          class="w-full h-full object-cover"
          src={srcMobile}
          alt={alt}
          loading="lazy"
        />
      </Picture>
    </a>
  );
}

export default function PartialImageGallery({
  title,
  description,
  banners,
  show,
}: Props) {
  const showBanners = banners.filter((item, index) => index < show);
  return (
    <section class="container px-4 py-8 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0">
      {(title || description) && (
        <Header title={title} description={description} alignment="center" />
      )}
      <ul class="flex gap-4 list-none">
        {showBanners.map((banner: Banner) => (
          <li>
            <Banner {...banner} />
          </li>
        ))}
      </ul>
      {banners.length > show && (
        <Button
          {...usePartialSection<typeof PartialImageGallery>({
            props: { show: show + 1 },
          })}
        >
          Ver mais
        </Button>
      )}
    </section>
  );
}
