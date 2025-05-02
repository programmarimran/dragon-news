import { FaRegBookmark, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router";
import { IoMdShare } from "react-icons/io";

const NewsCard = ({ news }) => {
  console.log(news);
  const {
    // id,
    title,
    author,
    total_view,
    rating,

    image_url,
    details,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-GB"
  );

  return (
    <div className="card bg-gray-50 mb-6 ">
      {/* Header */}
      <div className="flex items-center rounded-t-lg bg-base-300 justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className=" flex gap-2">
          <FaRegBookmark size={24} />
          <IoMdShare size={24} />
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pt-4">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <img
          src={image_url}
          alt="news"
          className="rounded-lg w-full h-56 object-cover mb-3"
        />
        <p className="text-sm text-gray-600">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>
        <Link
        //   to={`/news/${id}`}
          className="text-orange-600 font-semibold inline-block mt-2"
        >
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t flex justify-between text-sm text-gray-500 items-center">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-orange-500 font-bold">
          {Array.from({ length: 5 }, (_, i) => (
            <AiFillStar
              key={i}
              className={
                i < Math.round(rating?.number)
                  ? "text-orange-500"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-700 ml-1">{rating?.number}</span>
        </div>

        {/* Total Views */}
        <div className="flex items-center gap-1">
          <FaRegEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
