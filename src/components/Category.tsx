import React from "react";

interface Props {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}
const Category = ({ categories, selected, onClick }: Props) => {
  return (
    <div className="w-1/5">
      <div className="sticky top-4 flex flex-col items-center">
        <div>Category</div>
        <div className="w-20 border-2 border-sky-600" />
        {categories.map((category, idx) => {
          return (
            <p
              className={`cursor-pointer hover:text-sky-500 ${
                category === selected && "text-sky-600"
              }`}
              key={idx}
              onClick={() => onClick(category)}
            >
              {category}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
