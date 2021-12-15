const rules = {
  titleTrim: (req, res, next) => {
    let { title } = req.body;
    title = title ? title.trim() : undefined;
    req.body.title = title;
    next();
  },
  bodyTrim: (req, res, next) => {
    let { body } = req.body;

    body = body ? body.trim() : undefined;
    req.body.body = body;
    next();
  },
};
const sanitize = {
  addOne: [rules.titleTrim, rules.bodyTrim],
  updateOne: [rules.titleTrim, rules.bodyTrim],
};

module.exports = sanitize;
