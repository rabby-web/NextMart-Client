// import Address from "@/components/modules/cart/Address";
import Address from "@/components/modules/cart/Address";
import CartProducts from "@/components/modules/cart/CartProducts";
import Coupon from "@/components/modules/cart/Coupon";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";
import ProductBanner from "@/components/modules/products/banner";
import NMContainer from "@/components/ui/core/NMContainer";

const CartPage = () => {
  return (
    <NMContainer>
      <ProductBanner title="Cart Page" path="Home - Cart" />
      <div className="grid grid-cols-12 gap-8 my-5">
        <div className="col-span-8">
          <CartProducts />
        </div>
        <div className="col-span-4">
          <Coupon />
          <div className="my-3"></div>
          <Address />
          <div className="my-3"></div>
          <PaymentDetails />
        </div>
      </div>
    </NMContainer>
  );
};

export default CartPage;
