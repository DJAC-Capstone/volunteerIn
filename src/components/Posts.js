

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userStyles} from '../utils/userStyles'
import {createPost} from '../redux/posts'
class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        files: [],
        imagePreviewUrl:{},
        comment:'',
        userId:  0,
        
      };
     
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleCommentChange=this._handleCommentChange.bind(this)
      
    }
    
      componentDidUpdate(){
        if(this.state.userId ===  0){
          this.setState({userId: this.props.user.id})
        }
      }

    _handleSubmit(e) {
      e.preventDefault();
      this.props.createPost({...this.state})
     console.log(this.state)	
      this.setState({
        file: '',
        imagePreviewUrl:'',
        comment:'',
        
     });	
      this.props.history.push('/home')
     
    }

    // _handleCommentSubmit(e) {
    //   e.preventDefault();
    //   this.props.createPost2(this.state)
    //  console.log(this.state)	
    //   this.setState({
        
    //     comment:'',
        
    //  });	
    //   this.props.history.push('/home')
     
    // }

  
    _handleImageChange(e) {
      e.preventDefault();
   
  
    let files = Array.from(e.target.files)
    //const  comment=e.target.comment;
   
        console.log(files[0])
        const image= files[0]
   
      console.log(image.name)
      
   
     
    this.setState({      
       //file:image,
      imagePreviewUrl: image.name,
     
    });
    }
    _handleCommentChange(e){
      this.setState({      
        [e.target.name]: e.target.value,
        
      });
      console.log(e.target.value)

    }
  
    render() {
   
   
      return (
        
        <div style={{ marginTop: '100px',marginLeft: '50px' }}>
        <form style={userStyles} onSubmit={this._handleSubmit}>
          <div style={{ margin: '20px' }}>
            <h3>UPLOAD PHOTO</h3>
            <div className="form-group">
              <input type="file" className="form-control" placeholder="File" onChange={this._handleImageChange} value='' />
            </div>
            
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Comment" name="comment" onChange={this._handleCommentChange} value={this.state.comment} />
            </div>
            
            <button type="submit" className="btn btn-primary"  onClick={this._handleSubmit}> ADD COMMENT </button>
          </div>
        </form>
       
      </div> 
      )
    }
  
  }

  export default connect(
  (state) =>({
    user: state.users.user
  }),
  (dispatch) => ({
    createPost: (infoObject) => dispatch(createPost(infoObject)),
 
  }),
 )(Posts);





// import React, {Component} from 'react';
// import firebase from './firebase'
// import {userStyles} from '../utils/userStyles'
// import {connect} from 'react-redux'
// import {createPost} from '../redux/posts'

// export  class Posts extends Component{

//   constructor(props){
//     super(props)
//     this.state={
//       files:null,
//       //imagePreviewUrl:{},
//     }
//     this._handleImageChange=this._handleImageChange.bind(this);
//     this._handleSave=this._handleSave.bind(this);
//     this._showImage=this._showImage.bind(this)
//   }
//   _handleImageChange(files){
//     console.log(files[0])
//     const image= files[0]
//     console.log(image.name)
//     this.setState({
//       //imagePreviewUrl:image.name
//       files:files
//     })
//   }
//   _handleSave(){
   
//     let bucketName='images';
//     let file =this.state.files[0];
//     let storageRef=firebase.storage().ref(`${bucketName}/${file.name}`)
//     let uploadTask =storageRef.put(file);
//     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
//       ()=>{
//         let downloadURL=uploadTask.snapshot.downloadURL
//       })
//         //  this.props.createPost({...this.state})
//         //  console.log(this.state)	
//         //   this.setState({
//         //     file: '',
//         //     //imagePreviewUrl:'',
            
            
//         //  });	
//       //this.props.history.push('/home')
//   }
//   _showImage(){
//     let storageRef=firebase.storage().ref();
//     //let spaceRef =storageRef.child('images/'+this.state.files[0].name);
//     storageRef.child('images/'+this.state.files[0].name).getDownloadURL().then((url)=>{
//       console.log(url)
//       document.getElementById('new-img').src=url
//       //imagePreviewUrl=url
     
//     })
//     this.props.history.push('/home')

//   }

//   render(){
//     return(
//       <div>
//                <form style={userStyles} onSubmit={this._handleSave}>
//                  <div style={{ margin: '20px' }}>
//                    <h3>UPLOAD PHOTO</h3>
//                    <div className="form-group">
//                      <input type="file" className="form-control" placeholder="File" onChange={(e)=>{this._handleImageChange(e.target.files)}}  />
//                    </div>
                  
                 
                  
//                    <button type="submit" className="btn btn-primary"  onClick={this._handleSave}> SAVE IMAGE </button>
//                    <button type="submit" className="btn btn-primary"  onClick={this._showImage}> SHOW IMAGE </button>
//                    <img id='new-img'/>
//                  </div>
//                </form>
             
//              </div> 
//     )
//   }
  
// }

// //   export default connect(
// //   (state) =>({
// //     user: state.users.user
// //   }),
// //   (dispatch) => ({
// //     createPost: (infoObject) => dispatch(createPost(infoObject)),
 
// //   }),
// // )(Posts);
// export default Posts