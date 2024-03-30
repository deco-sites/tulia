import { signal, effect } from "@preact/signals";
import Button from "deco-sites/tulia/components/ui/Button.tsx";
import Icon from "deco-sites/tulia/components/ui/Icon.tsx";

export const likeCount = signal<number>(0);
// export const totalLikeCount = signal<number>(0);

export interface Props {
  isHeader?: boolean;
  className?: string;
}

function ProductLikeButton({ isHeader = false, className = "" }: Props) {
  const handleClick = () => {
    if (isHeader) return;
    likeCount.value += 1;
  };

  return (
    <Button
      class={`!bg-transparent border-none p-0 h-fit min-h-0 ${className}`}
      onClick={handleClick}
    >
      {likeCount.value > 0 && (
        <span className="text-sm">{likeCount.value}</span>
      )}
      <Icon
        id={isHeader ? "Friends" : likeCount.value > 0 ? "SmileCheck" : "Smile"}
        width={24}
        height={24}
      />
    </Button>
  );
}

export default ProductLikeButton;
