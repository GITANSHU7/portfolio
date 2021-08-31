import React , {useEffect , useState} from 'react';
import Tittle from '../../components/Titlte'
import allBlogs from '../../components/allBlogs';
import { isAutheticated } from '../../auth/helper';
import { getProjects } from '../../admin/helper/adminapicall';
import { API } from '../../backend';
import ImageHelper from '../../core/helper/ImageHelper';
import { Link } from 'react-router-dom';




function BlogsPage({project}) {
    const [projects, setProjects] = useState([]);

    const { user, token } = isAutheticated();
    
    const imageurl = project
    ? `${API}/project/photo/${project._id}`
    : "";

    const preload = () => {
        getProjects().then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            setProjects(data);
          }
        });
      };
    
      useEffect(() => {
        preload();
      }, []);
    



    return (
        <div >
            <div className="b-title">
                <Tittle title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>
            <div className="BlogsPage">
            {projects.map((project, index) => {
                        return <div className="blog" key={index}>
                            <div className="blog-content">
                            <ImageHelper project={project} />
                                <a  className="blog-link text-center">
                                    {project.name}
                                </a>
                                <p>{project.description}</p>
                                <a href = {project.github_link}>{project.github_link}</a>
                                <br />
                                <br />
                                <span class="w3-tag w3-#F9B208">{project.tech_stack}</span>

                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default BlogsPage;