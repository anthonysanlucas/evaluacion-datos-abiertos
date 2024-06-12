import './index.css'

function PageLoader() {
  return (
    <div className="absolute top-0 h-full w-full bg-white/85">
      <div className="container">
        <div className="top-left"></div>
        <div className="top-right"></div>
        <div className="bottom-left"></div>
        <div className="bottom-right"></div>
      </div>
    </div>
  )
}

export default PageLoader
