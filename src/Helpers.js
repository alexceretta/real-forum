export function getElapsedTime(date) {
    const fromDate = new Date(date);    
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const currDate = new Date();
    const currUtc = Date.UTC(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), currDate.getHours(), currDate.getUTCMinutes());    
    const compareUtc = Date.UTC(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate(), fromDate.getHours(), fromDate.getUTCMinutes());
    // Gets the difference in seconds    
    const difference = ((currUtc - compareUtc) / 1000);
    // Special display if less than a minute ago
    if(difference < 60) {
        return "Agora há pouco"
    }
    // Special display if less than an hour ago
    if (difference < (60 * 60)) {
        return `Há ${(difference / 60)} minutos`;
    }
    // Gets the difference in days
    const daysDiff = Math.floor((currUtc - compareUtc) / _MS_PER_DAY);
    // Special display if today
    if(daysDiff === 0) {
        return `Hoje, às ${fromDate.toLocaleTimeString()}`;
    }
    // Special display if yesterday
    if(daysDiff === 1) {
        return `Ontem, às ${fromDate.toLocaleTimeString()}`;
    }
    // If more than a day ago, just shows the date
    return `Em ${fromDate.toLocaleDateString()}`;
}