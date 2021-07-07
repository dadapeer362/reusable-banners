// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {id, headerText, description, className} = bannerCards
  return (
    <div className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button">Show More</button>
      </div>
    </div>
  )
}

export default BannerCardItem
