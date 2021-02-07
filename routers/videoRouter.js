import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo,
    home
  } from "../controllers/videoController";

import {uploadVideo} from "../middlewares";

const videoRouter= express.Router();

videoRouter.get(routes.home, home);

//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//detail
videoRouter.get(routes.videoDetail(), videoDetail);

//edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//delete
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;

