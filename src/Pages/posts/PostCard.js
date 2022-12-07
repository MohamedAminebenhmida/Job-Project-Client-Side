
import axios from 'axios'
import React, { useEffect, useState } from 'react'



import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './PostCard.css'
function PostCard() {

  const [post, setPost] = useState({});
const fetchPost = async () => {
        try {
            const res = await axios.get(`/post/${post._id}`);
            setPost(res.data.post);
        } catch (error) {
            toast.error(error.message);
        }
    };
    useEffect(() => {
        fetchPost();
    });
  return (
    <div>
     <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="container primary-content">
          {/* PRIMARY CONTENT HEADING */}
          <div className="primary-content-heading clearfix">
            <h2>{post?.designation}</h2>
            <hr style={{border: '1px solid #fff'}} />
            <div className="sticky-content pull-right">
              <div className="btn-group btn-dropdown">
                <button type="button" className="btn btn-default btn-sm btn-favorites" data-toggle="dropdown"><i className="fa fa-android-star" /> Favorites</button>
                <ul className="dropdown-menu dropdown-menu-right list-inline">
                  <li><Link to="#"><i className="fa fa-pie-graph" /> <span>Statistics</span></Link></li>
                  <li><Link to="#"><i className="fa fa-email" /> <span>Inbox</span></Link></li>
                  <li><Link to="#"><i className="fa fa-chatboxes" /> <span>Chat</span></Link></li>
                  <li><Link to="#"><i className="fa fa-help-circled" /> <span>Help</span></Link></li>
                  <li><Link to="#"><i className="fa fa-gear-a" /> <span>Settings</span></Link></li>
                  <li><Link to="#"><i className="fa fa-help-buoy" /> <span>Support</span></Link></li>
                </ul>
              </div>
              <button type="button" className="btn btn-default btn-sm btn-quick-task" data-toggle="modal" data-target="#quick-task-modal"><i className="fa fa-edit" /> Quick Task</button>
              <br />
              <br />
            </div>
            {/* quick task modal */}
            <div className="modal fade" id="quick-task-modal" tabIndex={-1} role="dialog" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 className="modal-title" id="myModalLabel">Quick Task</h4>
                  </div>
                  <div className="modal-body">
                    
                      <div className="form-group">
                        <label htmlFor="task-title" className="control-label sr-only">Title</label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="task-title" placeholder="Title" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label sr-only">Description</label>
                        <div className="col-sm-12">
                          <textarea className="form-control" name="task-description" rows={5} cols={30} placeholder="Description" defaultValue={""} />
                        </div>
                      </div>
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save Task</button>
                    
                  </div>
                </div>
              </div>
            </div>
            {/* end quick task modal */}
          </div>
          {/* END PRIMARY CONTENT HEADING */}
          <div className="row">
            <div className="col-md-8">
              <div className="project-section general-info">
                <h3>Job Description</h3>
                <button type="button" className="btn btn-sm btn-default pull-right"><i className="fa fa-compose" /> Edit Post</button>
                <p>{post?.text}</p>
                <div className="row">
                  <div className="col-sm-9">
                    <dl className="dl-horizontal">
                      <div className='inline'>
                      <dt style={{Display:"inlineBlock"}}>Date:</dt>
                      <dd style={{Display:"inlineBlock"}}>20-09-2014 - 20-12-2014</dd>
                      </div>
                      <div className='inline'>
                      <dt>Duration:</dt>
                      <dd>90 days <span className="text-muted"><small>(50 days remaining)</small></span></dd>
                      </div>
                      <div className='inline'>
                      <dt>Client:</dt>
                      <dd><Link to="#">ZenArt</Link></dd>
                      </div>
                      <div className='inline'>
                      <dt>Priority:</dt>
                      <dd><span className="label label-danger">HIGH</span></dd>
                      </div>
                      <div className='inline'>
                      <dt>Status:</dt>
                      <dd><span className="label label-success">ACTIVE</span></dd>
                      </div>
                      <div className='inline'>
                      <dt>Team:</dt>
                      <dd>
                        <ul className="list-inline team-list">
                          <li>
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-circle" alt="Avatar" />
                            <p><Link to="#"><strong>Antonius</strong></Link></p>
                            <span className="text-muted">Project Leader</span>
                          </li>
                          <li>
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="img-circle" alt="Avatar" />
                            <p><Link to="#"><strong>Michael</strong></Link></p>
                            <span className="text-muted">Art Director</span>
                          </li>
                          <li>
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="img-circle" alt="Avatar" />
                            <p><Link to="#"><strong>Stella Ray</strong></Link></p>
                            <span className="text-muted">Account Executive</span>
                          </li>
                          <li>
                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="img-circle" alt="Avatar" />
                            <p><Link to="#"><strong>Jane Doe</strong></Link></p>
                            <span className="text-muted">Marketing</span>
                          </li>
                          <li>
                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="img-circle" alt="Avatar" />
                            <p><Link to="#"><strong>Jason</strong></Link></p>
                            <span className="text-muted">Operational</span>
                          </li>
                          
                        </ul>
                      </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="project-section activity">
                <h3>What our employers say about our company</h3>
                <ul className="list-unstyled project-activity-list">
                  <li>
                    <div className="media activity-item">
                      <i className="fa fa-checkmark-circled pull-left text-success" />
                      <div className="media-body">
                        <p className="activity-title">It's an amazing journey</p>
                        <small className="text-muted">2m ago</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media activity-item">
                      <Link to="#" className="pull-left">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Avatar" className="media-object avatar" />
                      </Link>
                      <div className="media-body">
                        <p className="activity-title"><Link to="#">Michael</Link> Your dream is just one click ahead</p>
                        <small className="text-muted">36m ago</small>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              {/* MY TODO LIST */}
              <div className="widget">
                <div className="widget-header clearfix">
                  <h3><i className="fa fa-calendar" /> <span>MY TODO LIST</span></h3>
                  <div className="btn-group widget-header-toolbar">
                    <Link to="#" title="Expand/Collapse" className="btn btn-link btn-toggle-expand"><i className="fa fa-ios-arrow-up" /></Link>
                    <Link to="#" title="Remove" className="btn btn-link btn-remove"><i className="fa fa-ios-close-empty" /></Link>
                  </div>
                </div>
                <div className="widget-content">
                  <ul className="list-unstyled simple-todo-list">
                    <li>
                      <p className="text-muted f-15 mb-0"><i className="mdi mdi-account mr-1" />{post?.designation? post?.designation : "software engineer" }</p>
                    </li>
                    <li>
                      <p className="f-15 mb-0"><Link to="#" className="text-muted"><i className="mdi mdi-map-marker mr-1" />{post?.localisation? post?.localisation : "Scenic Way Atlanta ,US"}</Link></p>
                    </li>
                    <li>
                      <p className="text-muted f-15 mb-0"><i className="mdi mdi-currency-usd mr-1" />{post?.offeredSalary? post?.offeredSalary  : "$700 - $900/month"}</p>
                    </li>
                    <li>
                     <p className="text-muted mt-1 mb-0">Skills : {post?.skills? post?.skills :"HTML, CSS, JavaScript"}</p>
                    </li>
                    <li>
                      <p className="text-muted mt-1 mb-0">Gender : {post?.gender? post?.gender :"Undefined"}</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* END MY TODO LIST */}
              {/* RECENT FILES */}
              <div className="widget">
                <div className="widget-header clearfix">
                  <h3><i className="fa fa-document" /> <span>RECENT FILES</span></h3>
                  <div className="btn-group widget-header-toolbar">
                    <Link to="#" title="Expand/Collapse" className="btn btn-link btn-toggle-expand"><i className="fa fa-ios-arrow-up" /></Link>
                    <Link to="#" title="Remove" className="btn btn-link btn-remove"><i className="fa fa-ios-close-empty" /></Link>
                  </div>
                </div>
                <div className="widget-content">
                  <ul className="fa-ul recent-file-list bottom-30px">
                    <li><i className="fa-li fa fa-file-pdf-o" /><Link to="#">Project Requirements.pdf</Link></li>
                    <li><i className="fa-li fa fa-file-word-o" /><Link to="#">[DRAFT] System Specifications.docx</Link></li>
                    <li><i className="fa-li fa fa-file-picture-o" /><Link to="#">Marketing Content-v2.jpg</Link></li>
                    <li><i className="fa-li fa fa-file-zip-o" /><Link to="#">All-files-backup.zip</Link></li>
                  </ul>
                  <button type="button" className="btn btn-sm btn-primary"><i className="fa fa-upload" /> Upload</button> <Link to="#" className="btn btn-sm btn-default"><i className="fa fa-folder" /> See all files</Link>
                </div>
              </div>
              {/* END RECENT FILES */}
            </div>
          </div>
        </div>   
        </div>
  )
}

export default PostCard