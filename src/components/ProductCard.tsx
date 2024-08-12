import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./Ui/Button";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  openConfirmModal: () => void;
  idx: number;
  setProductToEditIdx: (value: number) => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  openConfirmModal,
  idx,
  setProductToEditIdx,
}: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;

  /*______ Render ______*/
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  /*______ Handler ______*/
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
  };

  const onDelete = () => {
    setProductToEdit(product);
    openConfirmModal();
  };

  return (
    <div className="mx-auto border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt={"product name"}
        className="rounded-md mb-2 h-60 object-cover"
      />

      <h3 className="mb-1 font-medium text-base lg:text-lg">{title}</h3>
      <p className="text-slate-500 text-sm lg:text-base">
        {txtSlicer(description)}
      </p>

      <div className="flex items-center my-4">{renderProductColors}</div>

      <div className="flex items-center justify-between">
        <span>${price}</span>
        <div className="flex items-center gap-x-1">
          <span>{category.name}</span>
          <Image
            imageURL={category.imageURL}
            alt={category.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button
          className="bg-indigo-700 hover:bg-indigo-900 text-white"
          width="w-full"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button className="bg-red-800 hover:bg-red-900 text-white" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
