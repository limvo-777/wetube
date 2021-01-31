import routes from "./routes";

export const localMiddlewares = (req,res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.user = {
        isAuthenticated: true,
        id: 1
      };
    res.locals.routes = routes;
    next();
    
}