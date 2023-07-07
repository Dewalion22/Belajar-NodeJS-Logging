import winston, {level, loggers, transport} from "winston";
import DailyRotateFile from "winston-daily-rotate-file";


test("create new logger with console & file transport", () => {
    const logger = winston.createLogger({
        level: "info", // level menentukan siapa dan dimana yang di kirim "kalau sampai info, hanya info saja"
        transports: [
            new winston.transports.Console({}),
        ]
    });

    logger.log({level: "error", message: "Hello error"});
    logger.log({level: "warn", message: "Hello Warn"});
    logger.log({level: "info", message: "Hello info"});
    logger.log({level: "http", message: "Hello HTTP"});
    logger.log({level: "verbose", message: "Hello Verbose"});
    logger.log({level: "debug", message: "Hello Debug"});
    logger.log({level: "silly", message: "Hello Silly"});
});

test("logging with daily rotate file", () => {

    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: "app-%DATE%.log",
                zippedArchive: true,
                maxSize: "1m",
                maxFiles: "14d"
            })
        ]
    });

   for (let i = 0; i <100000; i++) {
       logger.info(`Hello Word ${i}`);
   }

});