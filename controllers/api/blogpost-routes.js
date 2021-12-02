const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
    try {
      const newBlogPost = await BlogPost.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlogPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // PUT update a blogpost
router.put('/:id', async (req, res) => {
    try {
      const blogpostData = await BlogPost.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!blogpostData[0]) {
        res.status(404).json({ message: 'No blogpost with this id!' });
        return;
      }
      res.status(200).json(blogpostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogpostData = await BlogPost.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogpostData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(blogpostdataData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;