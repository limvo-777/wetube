"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Global
var HOME = "/";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout";
var SEARCH = "/search"; // Users

var USERS = "/users";
var EDIT_PROFILE = "/edit-profile";
var CHANGE_PASSWORD = "/change-password";
var ME = "/me";
var USER_DETAIL = "/:id"; // Videos

var VIDEOS = "/videos";
var UPLOAD = "/upload";
var VIDEO_DETAIL = "/:id";
var EDIT_VIDEO = "/:id/edit";
var DELETE_VIDEO = "/:id/delete"; //Github

var GITHUB = "/auth/github";
var GITHUB_CALLBACK = "/auth/github/callback"; //Google

var GOOGLE = "/auth/google";
var GOOGLE_CALLBACK = "/auth/google/callback"; // API

var API = "/api";
var REGISTER_VIEW = "/:id/view";
var ADD_COMMENT = "/:id/comment";
var DELETE_COMMENT = "/:id/delete";
var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: function userDetail(id) {
    if (id) {
      return "/users/".concat(id);
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: function videoDetail(id) {
    if (id) {
      return "/videos/".concat(id);
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: function editVideo(id) {
    if (id) {
      return "/videos/".concat(id, "/edit");
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: function deleteVideo(id) {
    if (id) {
      return "/videos/".concat(id, "/delete");
    } else {
      return DELETE_VIDEO;
    }
  },
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK,
  me: ME,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  deleteComment: function deleteComment(id) {
    if (id) {
      return "/api/".concat(id, "/delete");
    } else {
      return DELETE_COMMENT;
    }
  }
};
var _default = routes;
exports["default"] = _default;