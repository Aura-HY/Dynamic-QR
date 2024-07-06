const router = require('express').Router();
module.exports = router;

const userService=require("../service/userService")

router.post('/getWordDetal', async (req, res, next) => {
    const result = await userService.getWordDetal(req.body.wordName);
    res.ResultVO(0, '成功', result);
});

router.post('/detail', async (req, res, next) => {
    const { qrcodeName } = req.body;
    const qrcodeDetail = await userService.getQRCodeDetail(qrcodeName);
    res.ResultVO(0, '获取单个二维码详情信息成功', qrcodeDetail);
});
