import { ProductDetailsPage } from "apps/commerce/types.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface ProductProps {
  image: ImageWidget;
  title: string;
  description: string;
  productPage?: ProductDetailsPage;
}

export default function ProductCardHorizontal({
  image,
  title,
  description,
  productPage,
}: ProductProps) {
  console.log(productPage);
  return (
    <div class="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg">
      <div class="lg:w-1/3">
        <Image src={image} alt={title} width={150} height={150} />
      </div>
      <div class="lg:w-2/3 p-4">
        <h2 class="text-xl font-bold mb-2">{title}</h2>
        <p class="text-gray-600 mb-4">{description}</p>
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
