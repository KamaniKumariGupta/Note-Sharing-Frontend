import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
  return (
    <Carousel autoPlay showArrows={false} showStatus={false} infiniteLoop stopOnHover={false}
    showThumbs={false}  >
      <div >
        <img className = 'rounded-xl max-h-[90vh]' src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill%2Cf_auto%2Ch_630%2Cw_1200/v1464051370/zewn7jsdcyy5apqndiac.jpg" />
      </div>
      <div>
        <img className = 'rounded-xl max-h-[90vh]'src="https://thumbs.dreamstime.com/z/business-exchange-ideas-brainstorm-hands-table-making-notes-sharing-chart-light-bulb-vector-73154708.jpg" />
      </div>
      <div>
        <img className = 'rounded-xl max-h-[90vh]'src="https://thumbs.dreamstime.com/b/writing-note-showing-sharing-business-photo-showcasing-to-share-give-portion-something-another-possess-common-concept-141710102.jpg" />
      </div>
    </Carousel>
  )
}
