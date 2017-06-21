const defaultController = {
  get: (res, req) => {
    req.json({
      message: 'Welcome to the API.'
    });
  }
};

export default defaultController;
