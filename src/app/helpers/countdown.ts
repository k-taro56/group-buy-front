export const getCountdown = (deadline: Date): string => {
    const now = new Date();
    const timeSpan = deadline.getTime() - now.getTime();
  
    if (timeSpan <= 0) {
      return "00:00:00";
    }
  
    const hours = Math.floor(timeSpan / (1000 * 60 * 60));
    const minutes = Math.floor((timeSpan % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeSpan % (1000 * 60)) / 1000);
  
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  