let para = document.getElementsByTagName('p');

for (let i = 0; i < para.length; i++) {
    let br = document.createElement('br')
    para[i].before(br)
}