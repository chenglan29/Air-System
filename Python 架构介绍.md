# Python 架构下的 Air-System
自 1.19.2 版本之后，您可以使用 Python 架构使用 Air-System ，因为本项目主打功能非 Python 架构，因此仅作简单介绍

Python架构下对于 info.json 定义是一样的，您可以使用已有的 info.json 配置服务器


# 软件开发
软件的索引 index.json 的定义是一样的

但是，您必须添加以下的项
+ supportPython - 是否支持 Python 架构，true or false
+ pythonEvent - 捕捉事件
```js
"pythonEvent":{
    "closeConnection":[],
    "createConnection":[],
    "getMessage":[],
    "getMessage_doLogin":[],
    "initServer":[],
    "login":[],
    "ptp":[]
}
```
其中的每一项都是一个python文件集，这些文件将会被读取，通过 exec 直接执行
# 接口
+ data变量 - 接收的 websocket 客户端信息,类型为字典
+ logger类 - 打印日志信息的类,来源于 logging
+ info字典 - 来源于 info.json ,记录着服务器信息
+ userList - 来源于 info["userDataBase"]文件 ,记录着用户信息
+ appList - 记录着各个程序的索引信息
+ socket.id - 每个链接唯一的uuid
+ dataList[socket.id] - 记录单个链接的信息，即里面的数据伴随着链接

