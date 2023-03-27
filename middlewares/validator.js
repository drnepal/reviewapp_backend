
const {check, validationResult} = require("express-validator");// from express validators library do not want to destroy app with the dummy datas for some Reason Human love to do -TImm



exports.userValidtor = [
    check("name").trim().not().isEmpty().withMessage("Name is missing!"),
    check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
    check("password")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Password is missing!")
        .isLength({ min: 8, max: 20 })
        .withMessage("Password must be 8 to 20 characters long!"),
];

exports.validate = (req, res, next) => {
    const error = validationResult(req).array();
    if (error.length) {
        return res.json({ error: error[0].msg });
    }

    next();
};