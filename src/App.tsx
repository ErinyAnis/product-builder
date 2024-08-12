import { useState, ChangeEvent, FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/Ui/Button";
import Modal from "./components/Ui/Modal";
import { categories, colors, formInputsList, productList } from "./data";
import Input from "./components/Ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import { Select } from "./components/Ui/Select";
import { TProductNames } from "./types";
import toast, { Toaster } from 'react-hot-toast';

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
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  /*______ handler ______*/
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  // edit modal handler
  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };

  const openEditModal = () => {
    setIsOpenEditModal(true);
  };

  // delete product modal handler
  const closeConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  const openConfirmModal = () => {
    setIsOpenConfirmModal(true);
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

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProductToEdit({
      ...productToEdit,
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

  const removeProductHandler = () => {
    const filtered = products.filter((product) => product.id !== productToEdit.id);
    setProducts(filtered);
    closeConfirmModal();
    toast("Product has been deleted successfully", {
      icon: '✔️',
      style: {
        backgroundColor: "#000000",
        color: "white"
      }
    });
  }

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
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);

    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
    toast("Product has been added successfully", {
      icon: '✔️',
      style: {
        backgroundColor: "#000000",
        color: "white"
      }
    });
  };

  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = productToEdit;
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

    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };
    setProducts(updatedProducts);

    // successed then edit
    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();
    toast("Product has been edited successfully", {
      icon: '✔️',
      style: {
        backgroundColor: "#000000",
        color: "white"
      }
    });
  };

  /*______ Render ______*/
  // cards
  const renderProductList = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      openConfirmModal={openConfirmModal}
      idx={idx}
      setProductToEditIdx={setProductToEditIdx}
    />
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
        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: TProductNames
  ) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-[5px] text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]} //= productToEdit.title
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container mx-auto">
      <div className="mt-20 ml-7">
        <div className="text-center">
          <Button
            className="bg-indigo-700 me-7 hover:bg-indigo-900 text-white"
            width={"w-fit"}
            onClick={openModal}
          >
            Build a Product
          </Button>
        </div>
      </div>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>

      {/* Add Product Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
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
            <Button className="bg-indigo-700 hover:bg-indigo-900 text-white">
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

      {/* Edit Product Modal */}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="EDIT THIS PRODUCT"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {/* renderInputs */}
          {renderProductEditWithErrorMsg("title", "product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "product Description",
            "description"
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "Product image URL",
            "imageURL"
          )}
          {renderProductEditWithErrorMsg("Price", "Product Price", "price")}

          <Select
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />
          <div className="flex flex-wrap items-center">
            {renderProductColors}
          </div>
          <div className="flex flex-wrap items-center">
            {tempColors.concat(productToEdit.colors).map((color) => (
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
            <Button className="bg-indigo-700 hover:bg-indigo-900 text-white">
              Submit
            </Button>
            <Button
              className="bg-gray-300 text-black hover:bg-gray-400 hover:text-white"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Product Modal */}
      <Modal
        isOpen={isOpenConfirmModal}
        closeModal={closeConfirmModal}
        title="Are you sure you want to remove this product from your store"
        description="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will be deleted. Please make sure this os intended action."
      >
        <div className="flex items-center space-x-3">
          <Button
            className="bg-red-800 hover:bg-red-900 text-white"
            onClick={removeProductHandler}
          >
            Yes, remove
          </Button>
          <Button
            className="text-black bg-gray-300 hover:bg-gray-400 hover:text-white "
            onClick={closeConfirmModal}
          >
            Cancel
          </Button>
        </div>
      </Modal>

      <Toaster />
    </main>
  );
};

export default App;
