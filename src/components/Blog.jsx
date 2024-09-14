const Blog = ({ id, title, desc, thumbnail }) => {
  return (
    <div className="relative" data-id={id}>
      <div className="h-[250px] border  border-solid border-gray-10 rounded-4xl overflow-hidden">
        <img src={thumbnail} alt={name} />
      </div>

      <div className="relative dark:bg-gray-800 flex flex-col gap-y-4 w-[85%] h-[115px] p-4 mt-[calc(-115px/2)] mx-auto bg-white border border-solid border-gray-10 rounded-4xl">
        <p className="text-xl leading-none text-gray-10 dark:text-gray-200 line-clamp-2">{title}</p>

        <p className="overflow-hidden text-base text-ellipsis whitespace-nowrap text-gray-60 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Blog;
