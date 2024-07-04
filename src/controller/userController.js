const router = require('express').Router();
module.exports = router;

router.post('/getWordDetal', async (req, res, next) => {
    const result = await userService.getWordDetal(req.body.wordName);
    res.ResultVO(0, '成功', result);
});

