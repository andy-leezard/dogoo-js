/**
 * Calculates the duration between two dates in terms of days, hours, minutes, and seconds.
 *
 * @param time_a The first date as a Unix timestamp in milliseconds.
 * @param time_b The second date as a Unix timestamp in milliseconds.
 * @returns An object containing the duration split into days, accumulated and specific hours, minutes, and seconds.
 */
export const unixMilliDiff = (time_a: number, time_b: number) => {
    let diff = Math.abs(time_a - time_b);
    const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= daysDiff * (1000 * 60 * 60 * 24);
    const hoursDiff = Math.floor(diff / (1000 * 60 * 60));
    const acc_hours = Math.floor(hoursDiff + daysDiff * 24);
    diff -= hoursDiff * (1000 * 60 * 60);
    const minutesDiff = Math.floor(diff / (1000 * 60));
    const acc_minutes = Math.floor(minutesDiff + acc_hours * 60);
    diff -= minutesDiff * (1000 * 60);
    const secondsDiff = Math.floor(diff / 1000);
    const acc_seconds = Math.floor(secondsDiff + acc_minutes * 60);
  
    return {
      days: daysDiff,
      acc_hours,
      hours: hoursDiff,
      acc_minutes,
      minutes: minutesDiff,
      acc_seconds,
      seconds: secondsDiff,
    };
  };