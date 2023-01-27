import HeartIcon from "../../components/icons/HeartIcon";
import Footer from "../../components/partials/Footer";
import NavBar from "../../components/partials/NavBar";

const WishListPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-5 max-w-7xl">
        <div className="mt-3 mb-20">
          <h1 className="font-bold text-2xl mt-3 mb-20 flex justify-start">
            My Wishlist
          </h1>
          <div className="flex flex-col items-center px-12 py-24">
            <span className="border border-dashed border-black flex items-center justify-center w-24 h-24 rounded-lg">
              <HeartIcon />
            </span>
            <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
              Your Wishlist is empty
            </h2>
            <p className="px-10 text-center pt-2 text-[#868e96]">
              Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishListPage;
