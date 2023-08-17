const getTimeStamp = ({ hours, minutes, seconds }) => {
  const hourStr = getTimeStr(hours);
  const minutesStr = getTimeStr(minutes);
  const secondsStr = getTimeStr(seconds);

  if (hourStr !== '00') {
    return `${hourStr}:${minutesStr}:${secondsStr}`;
  }
  return `${minutesStr}:${secondsStr}`;
};

const getTimeStr = (time) => {
  if (time) {
    if (time.toString().length === 1) {
      return `0${time}`;
    } else {
      return `${time}`;
    }
  }
  return '00';
};

export default getTimeStamp;
