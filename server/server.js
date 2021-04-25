const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('请在地址后面加上 index.html');
});

app.use(express.static(__dirname + './../storybook-static'))

app.listen(7751,()=>{
    console.log('服务已启动')
})