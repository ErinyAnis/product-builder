import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/Ui/Button";
import Modal from "./components/Ui/Modal";
import { formInputsList, productList } from "./data";
import Input from "./components/Ui/Input";

const App = () => {
  /*______ state ______*/
  const [isOpen, setIsOpen] = useState(false);

  /*______ handeler ______*/
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  /*______ Render ______*/
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-[5px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
  ));

  return (
    <main className="container mx-auto">
      <div className="mt-20 ml-7">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Latest <span className="text-indigo-700">Products</span>
          </h1>
          <Button
            className="bg-indigo-700 me-7 hover:bg-indigo-900"
            width={"w-fit"}
          >
            Build now
          </Button>
        </div>
        <Button
          className="bg-indigo-700 hover:bg-indigo-900 mt-7"
          width="w-fit"
          onClick={openModal}
        >
          Add
        </Button>
      </div>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-900">
              Submit
            </Button>
            <Button className="bg-gray-400 text-black hover:bg-gray-600 hover:text-white">
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
