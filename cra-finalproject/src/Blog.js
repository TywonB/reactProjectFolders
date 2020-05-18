import React, { Component } from 'react';

class Blog extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            blog: {}
        }
    }

    // const [ posts, setPosts ] = useState([])

    componentDidMount() {
        this.setState({loading: true})
        fetch("http://localhost:3001/api/post")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    blog: data
                })
            })
    }

    render() {
        const text = this.state.loading ? 'Loading...' : this.state.blog.map((post => (
            <>
            <hr />
            <div className="Blog" key={post.id}>
                <img src="media/grey-box.jpg" alt="" className="grey-box img-responsive" />
            </div>
            <div style={{display: "inline-block"}}>
                <h2 className='blog-title'>{post.title}</h2>
                <p style={{marginLeft: "20px"}}>.............................................................................................</p>
                <p style={{marginLeft: "20px", /* fontSize: "15px",*/ marginTop: "-12px", marginBottom: "-20px"}}>By {post.name} on {post.date}</p>
                <p style={{marginLeft: "20px"}}>.............................................................................................</p>
                <p className="blog-post">{post.body}</p>
            </div>
            </>
            )))
        return (
            <>
            <h1>Blog</h1>
            <p>{text}</p>
            </>
        )
    }
}


export default Blog