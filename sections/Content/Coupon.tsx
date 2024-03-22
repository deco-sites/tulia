export interface CouponProps {
  coupon: string;
  description?: string;
}

export default function Coupon({ coupon, description }: CouponProps) {
  return (
    <div class="w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 lg:py-36">
      <h4 class="font-bold text-xl">
        Cupom <span class="uppercase">{coupon}</span>
      </h4>
      {description && <div>{description}</div>}
    </div>
  );
}
