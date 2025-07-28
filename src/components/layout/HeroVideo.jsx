import HeroVideoDialog from "../cards/heroVideoDemo.jsx";

export default function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/watch?v=ru9K_dopVSw"
        thumbnailSrc="thumbnail.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/watch?v=ru9K_dopVSw"
        thumbnailSrc="thumbnail.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}
