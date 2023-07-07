import winston, {format, level, loggers, transport} from "winston";


test("logging with combine format", () => {
    const logger = winston.createLogger({
        level: "info", // level menentukan siapa dan dimana yang di kirim "kalau sampai info, hanya info saja"
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()

        ),
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
