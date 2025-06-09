import { useCallback, useState } from "react";
import { MemoizedButton } from "./RegularButton";

export default function CallbackExample() {
  const [count, setCount] = useState(0); // 부모 컴포넌트 리렌더링 유발용 상태
  const [itemQty, setItemQty] = useState(1); // 콜백 함수가 의존하는 상태

  console.log("ParentComponentForCallback is rendering!");

  // ParentComponentForCallback이 리렌더링될 때마다 이 함수는 새로 생성됩니다.
  const handleAddToCartWithoutCallback = () => {
    console.log(`[useCallback X]  ${itemQty} 를 장바구니에 담았습니다.`);
  };

  // itemQty가 변경되지 않는 한, ParentComponentForCallback이 리렌더링되어도 이전에 메모리제이션된 동일한 함수를 재사용합니다.
  const handleAddToCartWithCallback = useCallback(() => {
    console.log(`[useCallback O] ${itemQty} 를 장바구니에 담았습니다.`);
  }, [itemQty]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        Parent State 증가 (Count: {count})
      </button>

      <button
        onClick={() => setItemQty((q) => q + 1)}
        style={{ marginLeft: "10px" }}
      >
        상품 수량 변경 (Qty: {itemQty})
      </button>

      <MemoizedButton onClick={handleAddToCartWithoutCallback}>
        장바구니에 담기 (useCallback X)
      </MemoizedButton>

      {/* useCallback으로 메모리제이션된 함수 전달 */}
      <MemoizedButton onClick={handleAddToCartWithCallback}>
        장바구니에 담기 (useCallback O)
      </MemoizedButton>
    </div>
  );
}
