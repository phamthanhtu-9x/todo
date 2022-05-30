/* Test for Kangxi radicals */

const kangxiArray = ['⼀', '⼁', '⼂', '⼃', '⼄', '⼅', '⼆', '⼇', '⼈', '⼉', '⼊', '⼋', '⼌', '⼍', '⼎', '⼏', '⼐', '⼑', '⼒', '⼓', '⼔', '⼕', '⼖', '⼗', '⼘', '⼙', '⼚', '⼛', '⼜', '⼝', '⼞', '⼟', '⼠', '⼡', '⼢', '⼣', '⼤', '⼥', '⼦', '⼧', '⼨', '⼩', '⼪', '⼫', '⼬', '⼭', '⼮', '⼯', '⼰', '⼱', '⼲', '⼳', '⼴', '⼵', '⼶', '⼷', '⼸', '⼹', '⼺', '⼻', '⼼', '⼽', '⼾', '⼿', '⽀', '⽁', '⽂', '⽃', '⽄', '⽅', '⽆', '⽇', '⽈', '⽉', '⽊', '⽋', '⽌', '⽍', '⽎', '⽏', '⽐', '⽑', '⽒', '⽓', '⽔', '⽕', '⽖', '⽗', '⽘', '⽙', '⽚', '⽛', '⽜', '⽝', '⽞', '⽟', '⽠', '⽡', '⽢', '⽣', '⽤', '⽥', '⽦', '⽧', '⽨', '⽩', '⽪', '⽫', '⽬', '⽭', '⽮', '⽯', '⽰', '⽱', '⽲', '⽳', '⽴', '⽵', '⽶', '⽷', '⽸', '⽹', '⽺', '⽻', '⽼', '⽽', '⽾', '⽿', '⾀', '⾁', '⾂', '⾃', '⾄', '⾅', '⾆', '⾇', '⾈', '⾉', '⾊', '⾋', '⾌', '⾍', '⾎', '⾏', '⾐', '⾑', '⾒', '⾓', '⾔', '⾕', '⾖', '⾗', '⾘', '⾙', '⾚', '⾛', '⾜', '⾝', '⾞', '⾟', '⾠', '⾡', '⾢', '⾣', '⾤', '⾥', '⾦', '⾧', '⾨', '⾩', '⾪', '⾫', '⾬', '⾭', '⾮', '⾯', '⾰', '⾱', '⾲', '⾳', '⾴', '⾵', '⾶', '⾷', '⾸', '⾹', '⾺', '⾻', '⾼', '⾽', '⾾', '⾿', '⿀', '⿁', '⿂', '⿃', '⿄', '⿅', '⿆', '⿇', '⿈', '⿉', '⿊', '⿋', '⿌', '⿍', '⿎', '⿏', '⿐', '⿑', '⿒', '⿓', '⿔', '⿕'];
const ignoreList = ['.jpg', '.jpeg', '.png', '.svg', '.gif', '.psd', '.ai', '.tif', '.tiff', '.bmp', '.eps', '.raw'];
const fs = require('fs');
const path = require('path');
const files = getFiles('src');
let isKangxiProblem = false;

function getFiles(dir, fileArr) {
  fileArr = fileArr || [];
  const files = fs.readdirSync(dir);
  for (let i in files) {
    let name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, fileArr);
    } else {
      fileArr.push(name);
    }
  }
  return fileArr;
}

for (let i = 0; i < files.length; i++) {
  let isImage = false;
  for (let k = 0; k < ignoreList.length; k++) {
    if (files[i].indexOf(ignoreList[k]) !== -1) isImage = true;
  }
  if (!isImage) {
    if (files[i].indexOf('/img') === -1) {
      let filePath = path.join(files[i]);
      fs.readFile(filePath, {
        encoding: 'utf-8'
      }, function (err, data) {
        if (!err) {
          for (let j = 0; j < kangxiArray.length; j++) {
            if (data.indexOf(kangxiArray[j]) !== -1) {
              isKangxiProblem = true;
              console.log('[Kangxi Radical] In file: ' + files[i] + ', contains: ' + kangxiArray[j]);
            }
          }
        }
      });
    }
  }
}

if (!isKangxiProblem) {
  console.log('No Kangxi Radical Problem');
}