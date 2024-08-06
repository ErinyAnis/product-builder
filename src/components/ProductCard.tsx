import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./Ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category } = product;

  return (
    <div className="mx-auto border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt={"product name"}
        className="rounded-md mb-2 h-60 object-cover"
      />

      <h3 className="mb-1 font-medium text-base lg:text-lg">{title}</h3>
      <p className="text-slate-500 text-sm lg:text-base">{txtSlicer(description)}</p>

      <div className="flex space-x-2 items-center my-4">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 hover:bg-indigo-900" width="w-full">
          Edit
        </Button>
        <Button className="bg-red-800 hover:bg-red-900">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
