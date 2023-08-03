const { randomFillSync } = require('crypto');
const fs = require('fs');
const path = require('path');
const busboy = require('busboy');
const Content = require('../model/Content');

// const random = (() => {
//     const buf = Buffer.alloc(16);
//     return () => randomFillSync(buf).toString('hex');
// })();

// Create a new content with an expiration date
const expirationDurationInMinutes = 60;

const uploadFile = (req, res) => {
    const link = localStorage.getItem('STORELINK');
    const bb = busboy({ headers: req.headers });
    let fileName = '';
    bb.on('file', (name, file, info) => {
        fileName = info.filename;
        const saveTo = path.join(__dirname, '..', 'public/images', `${  .filename }`);
        file.pipe(fs.createWriteStream(saveTo));
    });
    bb.on('close', () => {
        res.writeHead(200, { 'Connection': 'close' });
        console.log('Endpoint : ', `${ link }/files/${ fileName }`);
        res.end("File successfully uploaded!");
    });
    req.pipe(bb);
    return;
};

// CRUD
const createNewFile = async (req, res) => {
    const link = localStorage.getItem('STORELINK');
    const bb = busboy({ headers: req.headers });

    bb.on('file', async (name, file, info) => {
        const fileName = info.filename;
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + expirationDurationInMinutes * 60 * 1000);

        const saveTo = path.join(__dirname, '..', 'public/images', `${ info.filename }`);
        file.pipe(fs.createWriteStream(saveTo));
        console.log(fileName, "fileName");

        if (!fileName)
        {
            return res.status(400).json({ 'message': 'File is required.' });
        }
        try
        {
            const result = await Content.create({
                filename: fileName,
                link: `${ link }/files/${ fileName }`,
                downloadLink: 'http://192.168.1.21:5001/files/' + fileName,
                timeStamp: new Date(),
                expirationDate: expirationDate,
            });
            res.status(201).json(result);
        } catch (err)
        {
            console.error(err);
        }
    });
    req.pipe(bb);
    return;
};

const getSingleFile = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'messge': 'File ID required' });
    const file = await Content.findOne({ _id: req.params.id });
    if (!file)
    {
        return res.status(204).json({ 'message': `No File metches ID ${ req.params.id }` });
    }
    res.json(file);
};


module.exports = {
    uploadFile,
    createNewFile,
    getSingleFile
};