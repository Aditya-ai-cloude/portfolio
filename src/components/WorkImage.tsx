import { useState, useRef, useEffect } from "react";
import { MdArrowOutward, MdVolumeUp, MdVolumeOff } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  isActive?: boolean;
}

const WorkImage = (props: Props) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (props.isActive) {
        // Play the video when active
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Autoplay prevented:", error);
          });
        }
      } else {
        // Pause and reset when inactive
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [props.isActive]);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const content = (
    <>
      {props.link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      {/* Render the video directly if it exists, otherwise fallback to the image */}
      {props.video ? (
        <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "var(--lightest-bg)" }}>
          {props.isActive ? (
            <>
              <video 
                ref={videoRef}
                src={`/videos/${props.video}`} 
                className="portfolio-video"
                muted={isMuted}
                playsInline={true}
                loop 
                preload="auto"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button 
                onClick={toggleMute}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  cursor: "pointer",
                  zIndex: 10,
                  backdropFilter: "blur(4px)",
                  transition: "all 0.3s ease"
                }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)"}
              >
                {isMuted ? <MdVolumeOff size={24} /> : <MdVolumeUp size={24} />}
              </button>
            </>
          ) : (
            <img 
              src={props.image || "/images/placeholder.webp"} 
              alt={props.alt} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          )}
        </div>
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
