const db = require('../utils/dbConnPool/mariadb');

exports.getWordDetal = async (wordName) => {
    const sql = `
    SELECT 
        word_id AS wordId,
        word_name AS wordName,
        word_meaning AS wordMeaning,
        img
    FROM 
        word
    WHERE
        word_name = ?
    `;
    const sqlParams = [wordName];
    return await db.query(sql, sqlParams);
};

// 获取单个二维码详情信息
exports.getQRCodeDetail = async (qrcodeName) => {
    const sql = `
        SELECT
            QR_content_code_url as erWeima,
            QR_code_name as qrcodeName
        FROM
            qr_code_table
        WHERE
            QR_code_name = ?
    `;
    const sqlParams = [qrcodeName];
    return await db.query(sql, sqlParams);
};