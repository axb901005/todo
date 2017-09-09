
var defaultInfo = require("./default");

var DBManger = require("./DBBaseManager");

//配置数据库的信息
var dbConfig = {
    host:"localhost",
    user:"root",
    password:"",
    database:"sharetime"
};

//创建数据库操作的对象  并连接 数据库
var dbManager = new DBManger(dbConfig);

function DBManagerTool() {}

//用户相关
//获取用户信息
DBManagerTool.getUserInfo = function (values) {
    return dbManager.opretation(defaultInfo.SQL_GET_USER_INFO,values);
};


//news
//建表
DBManagerTool.createTableNews = function () {
    dbManager.opretation(defaultInfo.SQL_CREATE_NEWS_TABLE);
};
//添加
DBManagerTool.addNews = function (values) {
    return dbManager.opretation(defaultInfo.SQL_ADD_NEWS,values);
};
//查询所有数据
DBManagerTool.searchAllNews = function () {
    return dbManager.opretation(defaultInfo.SQL_SEARCH_ALL_NEWS);
};

DBManagerTool.searchAllUsersLastNews = function () {
    return dbManager.opretation(defaultInfo.SQL_SEARCH_ALL_USERS_LAST_NEWS);
};

//发送消息
DBManagerTool.sendChat = function (values) {
    return dbManager.opretation(defaultInfo.SQL_SEND_CHAT,values);
};

//接收消息
DBManagerTool.receiveChat = function (values) {
    return dbManager.opretation(defaultInfo.SQL_RECIVE_CHAT,values);
};

module.exports = DBManagerTool;