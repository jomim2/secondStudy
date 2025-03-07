const fs = require('fs').promises;

fs.readdir('./folder')
    .then((dir) => {
        console.log('폴더 내용 확인', dir);
        return fs.unlink('./folder/newfile.js');
    })
    .then(() => {
        console.log('파일삭제 성공');
        return toString.rmdir('./folder');
    })
    .catch((err) => {
        console.log(err);
    });

