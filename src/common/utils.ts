// normalize a port into a number, string, or false
export const normalizePort = (val: string | number) => {
  const portNum = typeof val === 'number' ? val : parseInt(val, 10);
  if (Number.isNaN(portNum)) {
    // named pipe
    return val;
  }
  if (portNum >= 0) {
    // port number
    return portNum;
  }
  return false;
};
