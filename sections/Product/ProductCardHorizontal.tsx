import { useSignal } from "@preact/signals";
import { ProductDetailsPage } from "apps/commerce/types.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
// import ProductCardHorizontal from "deco-sites/tulia/components/product/ProductCardHorizontal.tsx";
import Image from "apps/website/components/Image.tsx";
import Button from "deco-sites/tulia/components/ui/Button.tsx";

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
        image="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4799/4c9dc50e-c2f6-4ca7-9f7a-6fdec9adf887"
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
    <div class="flex flex-col lg:flex-row bg-white rounded-lg">
      <div class="lg:w-1/3">
        {loading
          ? <div class="bg-gray-200 w-full h-full" />
          : <Image src={imgSrc} alt={title} width={150} height={150} />}
      </div>
      <div class="lg:w-2/3 p-4">
        <h2 class="text-xl font-bold mb-2">
          {productPage?.product?.name || title}
        </h2>
        {loading ? <span class="loading" /> : (
          <p class="text-gray-600 mb-4">
            {productPage?.product?.description || description}
          </p>
        )}
        <div class="flex justify-between items-center">
          <span class="text-lg font-bold">R$ 99.99</span>
          <button class="px-4 py-2 bg-blue-500 text-white rounded">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
