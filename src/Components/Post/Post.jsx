import React from "react";
import "./post.css"

function Post(){
    return(
        <div className = "postImg">
            <img src="https://s.hs-data.com/gfx/person/l/172166.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sed obcaecati consequatur quis.</span>
            <span className="postDate">1 hour ago</span>   
        </div>
        <p className = "postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil natus minima voluptatum beatae est sit tenetur libero! Eius vitae nihil accusamus numquam ex asperiores laboriosam, qui quia voluptatum officiis repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil natus minima voluptatum beatae est sit tenetur libero! Eius vitae nihil accusamus numquam ex asperiores laboriosam, qui quia voluptatum officiis repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil natus minima voluptatum beatae est sit tenetur libero! Eius vitae nihil accusamus numquam ex asperiores laboriosam, qui quia voluptatum officiis repellat.
        </p>
        </div>
    )
}
export default Post