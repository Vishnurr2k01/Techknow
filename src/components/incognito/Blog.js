import React from 'react'
import '../stylesheet/blog.css'

function Blog() {
    const bdata = [{
        img:'https://www.oracle.com/oce/press/assets/CONT2F6AE229113D42EC9C59FAED5BAA0380/native/og-social-java-logo.gif',
        title:'How to use Docker for Java development',
        desc:'Take advantage of Docker to ease Java development. Learn how to update a running Java codebase (without restarting the container) and to debug into a remotely running containerized Java app.',
        link:'https://www.infoworld.com/article/3638548/how-to-use-docker-for-java-development.html'
    },
]
    return (
        <div>
            {bdata.map((datas)=>{
                <div className="blogbox">
                    <div className="blogimg">
                        <img src={datas.img} alt="" />
                    </div>
                    <div className="content">
                        <h4>{datas.title} </h4>
                        <p>{datas.desc} </p>
                        <p className="link">{datas.link} </p>
                    </div>
                </div>
            })}

        </div>
    )
}

export default Blog
