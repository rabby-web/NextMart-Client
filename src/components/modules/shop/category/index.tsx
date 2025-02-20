import { ICategory } from "@/types";
import CreateCategoryModal from "./CreateCategoryModal";

type TCategoriesProps = {
  categories: ICategory[];
};

const ManageCategories = ({ categories }: TCategoriesProps) => {
  console.log(categories);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Manage Category</h2>
        {/* <Button>Create Category</Button> */}
        <CreateCategoryModal></CreateCategoryModal>
      </div>
    </div>
  );
};

export default ManageCategories;
