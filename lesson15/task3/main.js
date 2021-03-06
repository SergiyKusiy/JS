function createLogger() {
  const memory = [];

  const warn = text => {
    memory.push({
      message: text,
      dateTime: new Date(),
      type: 'warn',
    });
  };

  const error = text => {
    memory.push({
      message: text,
      dateTime: new Date(),
      type: 'error',
    });
  };

  const log = text => {
    memory.push({
      message: text,
      dateTime: new Date(),
      type: 'log',
    });
  };

  const getRecords = string => {
    const sortMemory = memory.sort((a, b) => b.dateTime - a.dateTime);

    return string === undefined ? sortMemory : sortMemory.filter(elem => elem.type === string);
  };
  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger = createLogger();

console.log(logger.log('User logged in'));
console.log(logger.warn('User try to restricted page'));
console.log(logger.log('User logged out'));
console.log(logger.error('Unexpected error on the site'));
console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
