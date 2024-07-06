const userDao = require('../dao/userDao');

exports.getWordDetal = async (wordName) => {
    const wordMeaning = await userDao.getWordDetal(wordName);
    return wordMeaning;
};

// 获取单个二维码详情信息
exports.getQRCodeDetail = async (qrcodeName) => {
    const qrcodeDetail = await userDao.getQRCodeDetail(qrcodeName);
    return qrcodeDetail[0];
};
