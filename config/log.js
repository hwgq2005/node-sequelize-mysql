
// 日志配置文件
const log4js = require('log4js');

log4js.configure({
  	appenders: [
    	{ type: 'console' },
	    { 
	    	"category":"log_file",  
            "type": "file",  
            "filename": "./logs/log_file/file.log",  
            "maxLogSize": 104800,  
            "backups": 100  
	    },
	    {  
            "category":"log_date",  
            "type": "dateFile",  
            "filename": "./logs/log_date/date",  
            "alwaysIncludePattern": true,  
            "pattern": "-yyyy-MM-dd-hh.log"  

        }  
  	],
  	replaceConsole:true,
	levels:  {  
	    "log_file":"ALL",  
	    "console":"ALL",  
	    "log_date":"ALL"  
	}  
});

const logger = log4js.getLogger('log_file');

module.exports = logger ;