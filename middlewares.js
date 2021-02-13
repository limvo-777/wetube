import routes from "./routes";

import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos" });

export const localMiddlewares = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.user = {
    isAuthenticated: false,
    id: 1,
  };
  res.locals.routes = routes;
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
