const express = require('express');
const { auth } = require('../../middleware/auth');
const { Post } = require('../../models/post');
const { Category } = require('../../models/category');
const { User } = require('../../models/user');

var fs = require('fs');

const router = express.Router();
const moment = require('moment');
const dotenv = require('dotenv');
const multer = require('multer');

const { isNullOrUndefined } = require('util');

dotenv.config();

// previewImg, imgIncontent upload //
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.jpg' || ext !== '.png' || ext !== '.jpeg') {
      return cb(res.status(400).end('only jpg, png, jpeg are allowed'), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single('file');
var uploadfile = multer({ dest: 'uploadedFiles/' }).single('file');

// Post All //
router.get('/', async (req, res) => {
  try {
    const postFindResult = await Post.find()
      .populate({
        path: 'creator',
      })
      .limit(9)
      .sort({ date: -1 });

    const result = { postFindResult };

    res.json(result);
  } catch (e) {
    console.log(e);
    res.json({ msg: 'No Post' });
  }
});

// LOADING ALL POSTS / GET
router.get('/skip/:skip', async (req, res) => {
  try {
    const postCount = await Post.countDocuments();
    const postFindResult = await Post.find()
      .skip(Number(req.params.skip))
      .limit(12)
      .sort({ date: -1 });

    const result = { postFindResult, postCount };

    res.json(result);
  } catch (e) {
    console.log(e);
    res.json({ msg: 'No Post' });
  }
});

// Top Rate Posts
router.get('/topRate', async (req, res) => {
  try {
    const postResult = await Post.find().sort({ views: -1 });

    res.json(postResult);
  } catch (e) {
    console.log(e);
    res.json({ msg: 'No Post' });
  }
});

// Upload Image //
router.post('/uploadimage', (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.json({ success: false, err });

    return res.json({
      success: true,
      image: res.req.file.path,
      filename: res.req.file.filename,
    });
  });
});

// Upload File //
router.post('/uploadfile', async (req, res) => {
  uploadfile(req, res, (err) => {
    if (err) return res.json({ success: false, err });

    return res.json({
      success: true,
      filedest: res.req.file.path,
      filename: res.req.file.originalname,
    });
  });
});

// Post Create //
router.post('/write', auth, async (req, res) => {
  try {
    const { title, contents, category, previewImg, file, originalfileName } =
      req.body;

    if (!contents) return res.status(400).json({ msg: '내용을 입력해주세요.' });

    // 새로운 프로젝트 생성
    const newPost = await Post.create({
      title,
      contents,
      previewImg: previewImg,
      creator: req.user.id,
      date: moment().format('MMMM DD, YYYY'),
      files: file,
      originalfileName,
    });

    const categoryFindResult = await Category.findOne({
      categoryName: category,
    });

    // 카테고리 만들면 실행
    if (isNullOrUndefined(categoryFindResult)) {
      const newCategory = await Category.create({
        categoryName: category,
      });
      await Post.findByIdAndUpdate(newPost._id, {
        $push: {
          category: newCategory._id,
        },
      });
      await Category.findByIdAndUpdate(newCategory._id, {
        $push: {
          posts: newPost._id, //mongoDB는 _id로 저장
        },
      });
      await User.findByIdAndUpdate(req.user.id, {
        $push: {
          posts: newPost._id,
        },
      });
    } else {
      // 카테고리가 존재하면 실행
      await Category.findByIdAndUpdate(categoryFindResult._id, {
        $push: { posts: newPost._id },
      });
      await Post.findByIdAndUpdate(newPost._id, {
        $push: { category: categoryFindResult._id },
      });
      await User.findByIdAndUpdate(req.user.id, {
        $push: {
          posts: newPost._id,
        },
      });
    }

    res.redirect(`/api/post/${newPost._id}`);
  } catch (e) {
    console.log(e);
  }
});

// Get file //
router.get('/uploadedFiles/:originalFileName', async function (req, res) {
  if (err) return res.json({ success: false, err });

  var stream;
  var statusCode = 200;
  try {
    await function () {
      var filePath = path.join(
        __dirname,
        '..',
        'uploadedFiles',
        this.serverFileName,
      );
      var fileExists = fs.existsSync(filePath);
      if (fileExists) {
        stream = fs.createReadStream(filePath);
      } else {
        this.processDelete();
      }
    };
  } catch (e) {
    statusCode = e;
  }

  if (stream) {
    res.writeHead(statusCode, {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename=' + file.originalFileName,
    });
    stream.pipe(res);
  } else {
    res.statusCode = statusCode;
    res.end();
  }
});

// Post Detail //
router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('creator')
      .populate({ path: 'category', select: 'categoryName' });

    post.save();

    res.json(post);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

// Post Update //
// 수정 페이지
router.get('/:id/edit', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('creator')
      .populate({ path: 'category', select: 'categoryName' });

    res.json(post);
  } catch (e) {
    console.error(e);
  }
});

// 수정 action
router.post('/:id/update', async (req, res, next) => {
  const { title, contents, Image, category } = req.body;

  try {
    const categoryFindResult = await Category.findOne({
      categoryName: category,
    });
    console.log('아이디', req.params.id);
    const update_post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title,
        contents,
        previewImg: Image,
        category: categoryFindResult._id,
        date: moment().format('MMMM DD, YYYY'),
      },
      { new: true },
    );
    res.redirect(`/api/post/${update_post._id}`);
  } catch (e) {
    console.log(e);
  }
});

// Post Delete //
router.delete('/:id/delete', auth, async (req, res) => {
  try {
    await Post.deleteMany({ _id: req.params.id });
    const edit_category = await Category.findOneAndUpdate(
      { posts: req.params.id },
      { $pull: { posts: req.params.id } },
      { new: true },
    );
    await User.findByIdAndUpdate(req.user.id, {
      $pull: {
        posts: req.params.id,
      },
    });

    if (edit_category.posts.length === 0) {
      await Category.deleteMany({ _id: edit_category });
    }

    return res.json({ success: true });
  } catch (e) {
    console.log(e);
    return res.json({ error: e });
  }
});

// Find Category
router.get('/category/:categoryName', async (req, res, next) => {
  try {
    const result = await Category.findOne(
      {
        categoryName: {
          $regex: req.params.categoryName,
          $options: 'i',
        },
      },
      'posts',
    ).populate({ path: 'posts' });

    res.send(result);
  } catch (e) {
    next(e);
  }
});

// 해당 유저가 작성한 게시글
router.get('/user/:id', async (req, res) => {
  try {
    const post = await Post.find({
      creator: req.params.id,
    });

    res.send(post);
  } catch (e) {
    console.log(e);
  }
});

// Views Load //
router.get('/:id/views', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const result = post.views;

    res.json({ views: result });
  } catch (e) {
    res.json(e);
  }
});

router.post('/:id/views', async (req, res) => {
  const userID = req.body.userID;
  try {
    const post = await Post.findById(req.params.id);
    const result = post.views + 1;

    await Post.findByIdAndUpdate(req.params.id, {
      views: result,
    });

    await User.findByIdAndUpdate(userID, {
      views: post,
    });

    res.json({ success: true, views: result });
  } catch (e) {
    res.json({ fail: e });
  }
});

module.exports = router;
