import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const content = (
    <>
      {props.link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      {/* Render the video directly if it exists, otherwise fallback to the image */}
      {props.video ? (
        <video 
          src={`/videos/${props.video}`} 
          className="portfolio-video"
          autoPlay 
          muted={true}
          playsInline={true}
          loop 
        />
      ) : (
        <img src={props.image} alt={props.alt} />
      )}
    </>
  );

  return (
    <div className="work-image" >
      {props.link ? (
        <a
          className="work-image-in"
          href={props.link}
          target="_blank"
          data-cursor={"disable"}
        >
          {content}
        </a>
      ) : (
        <div className="work-image-in" data-cursor={"disable"}>
          {content}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
