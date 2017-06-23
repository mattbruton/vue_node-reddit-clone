import db from './../models';

const postController = {
  post: (req, res) => {
    const {title, text, link, userId} = req.body;
    const post = new db.Post({title, text, link, _creator: userId});

    post.save().then((newPost) => {
      return res.status(200).json({success: true, data: newPost})
    }).catch((err) => {
      return res.status(500).json({message: err});
    })
  },
  getAll: (req, res) => {
    db.Post.find({}).then((allPosts) => {
      return res.status(200).json({success: true, data: allPosts})
    }).catch((err) => {
      return res.status(200).json({message: err});
    })
  }
};


export default postController;
