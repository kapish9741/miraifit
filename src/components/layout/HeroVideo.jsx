import HeroVideoDialog from "../cards/heroVideoDemo.jsx";

export default function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/ru9K_dopVSw"
        thumbnailSrc="thumbnail.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}
