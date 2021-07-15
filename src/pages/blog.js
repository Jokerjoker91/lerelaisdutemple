import {React, useEffect} from 'react';
import useWindowDimensions from '../components/windowDims'
const Blog = () => {

  let {height, width} = useWindowDimensions();
  if (width > 768) {height = height - 80;} 
  else {height = height - 60;}

  useEffect(() => {
    window.FB.XFBML.parse();
}, []);

  return (
    <div
        style={{background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(239,239,239,1) 30%, rgba(239,239,239,1) 70%, rgba(255,255,255,1) 100%)", width: "100vw", height: height}}>
      <div
        style={{justifyContent: "center", margin: "0 auto", width:"min(100%, 500px)"}}>
        {/* <iframe title="fb-rdt" src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flerelaisdutemple&tabs=timeline%2C%20messages&width=500&height="
        +height+"&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"} 
        width="500" height={height} 
        // style={width>768?{border:"none",overflow:"hidden", transform:"scale(1.5) translate(0, 20%)"}:{border:"none",overflow:"hidden"}} 
        style={{border:"none",overflow:"hidden"}}
        scrolling="yes" allowfullscreen="true" frameborder="0" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
        <div className="fb-page"
          data-href="https://www.facebook.com/lerelaisdutemple" 
          data-tabs="timeline" 
          data-width="500" 
          data-height={height}
          data-small-header="false" 
          data-adapt-container-width="true" 
          data-hide-cover="false" 
          data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/lerelaisdutemple" 
              class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/lerelaisdutemple">
                  Le Relais du Temple
                </a>
            </blockquote>
          </div>
      </div>
    </div>
  );
};
  
  export default Blog;