import { ProductDetailsPage } from "apps/commerce/types.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Button from "deco-sites/tulia/components/ui/Button.tsx";
import ProductLikeButton from "deco-sites/tulia/islands/ProductLikeButton.tsx";

export interface ProductProps {
  image: ImageWidget;
  title: string;
  description: string;
  productPage?: ProductDetailsPage;
  /** @hide */
  loading?: boolean;
}

export function LoadingFallback() {
  // Renderize spinners, esqueletos e outros espaços reservados
  return (
    <ProductCardHorizontal
      image=""
      title="Carregando..."
      description=""
      loading={true}
    />
  );
}

export function ErrorFallback({ err }: { err?: Error }) {
  // Sua lógica de tratamento de erro vai aqui
  // Você pode exibir uma mensagem de erro, registrar o erro ou renderizar uma interface de substituição
  return (
    <>
      <ProductCardHorizontal
        image="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4799/bc3c215f-fc39-4f3c-a7e0-86a9fb79caf0"
        title="Carpa de Suporte Emocional"
        description="Soft kitty, warm kitty, little ball of fur... Happy kitty, sleepy kitty, purr purr purr"
      />
      <Button>
        <a href="/culturas">Para saber mais</a>
      </Button>
    </>
  );
}

// export const loader = (props: ProductProps, req: Request, ctx: AppContext) => {
//   if (!props.image || !props.title || !props.description) ctx.response.status = 404;
//   return props;
//   // return {...props, title: "Carpa de Suporte Emocional"};
// }

export default function ProductCardHorizontal({
  image,
  title,
  description,
  productPage,
  loading = false,
}: ProductProps) {
  let imgSrc = image;
  if (productPage?.product?.image?.length) {
    imgSrc = productPage.product.image[0].url || image;
  }
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg max-w-2xl relative mx-auto h-52 my-6">
      <div className="w-52 flex-none">
        {loading ? (
          <div className="bg-gray-200" />
        ) : (
          <Image src={imgSrc} alt={title} width={208} height={208} />
        )}
      </div>
      <div className="p-4 h-full flex flex-col justify-between">
        <h2 className="text-xl font-bold mb-2">
          {productPage?.product?.name || title}
        </h2>
        {loading ? (
          <span className="loading" />
        ) : (
          <p className="text-gray-600 mb-4">
            {productPage?.product?.description || description}
          </p>
        )}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">R$ 99.99</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Adicionar
          </button>
        </div>
      </div>
      <div className="absolute -top-2 lg:top-2 right-2 p-2 cursor-pointer">
        <ProductLikeButton />
      </div>
    </div>
  );
}
