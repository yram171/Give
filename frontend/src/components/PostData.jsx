import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/App.css'; // Import global styles for pink dots

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  variableWidth: true,
  dotsClass: "my-slick-dots",
  arrows: false,
};


const PostData = ({ post }) => {
  const hasContent = post.content && post.content.length > 0;

  return (
    <div className="w-full flex flex-col gap-4 justify-start py-4">
      <div className="text-left text-xs">{post.question}</div>
      {hasContent && (
        <Slider {...settings} className="post-slider">
          {post.content.map((image, index) => (
            <div key={index} className="flex items-center">
              <img
                src={image}
                alt={`Post image ${index + 1}`}
                className="h-28 px-2 rounded-[10%]"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default PostData;