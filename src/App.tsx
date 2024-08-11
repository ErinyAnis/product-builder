import { useState, ChangeEvent, FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/Ui/Button";
import Modal from "./components/Ui/Modal";
import { colors, formInputsList, productList } from "./data";
import Input from "./components/Ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  /*______ state ______*/
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  /*______ handeler ______*/
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onCancel = () => {
    closeModal();
    setProduct(defaultProductObj);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    //** check if any property has a value of "" && check if all properties have a value of ""
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    //sucess and send it to the server
    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColors }, ...prev,
    ]);

    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
  };

  /*______ Render ______*/
  // cards
  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  //inputs
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[5px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
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
            onClick={openModal}
          >
            Build now
          </Button>
        </div>
      </div>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex flex-wrap items-center">
            {renderProductColors}
          </div>
          <div className="flex flex-wrap items-center">
            {tempColors.map((color) => (
              <span
                key={color}
                className="px-2 py-1 mr-2 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-900">
              Submit
            </Button>
            <Button
              className="bg-gray-400 text-black hover:bg-gray-600 hover:text-white"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
