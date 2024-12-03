function checkDate()
{
    const userDate = document.forms["dateForm"]["userDate"].value;
    const outputMsg = document.getElementById('output');

    let isWeekend = checkIfWeekend(userDate);
    let isHoliday = checkIfHoliday(userDate);

    if(isWeekend || isHoliday)
    {
        outputMsg.textContent = "You can relax today.";
    }
    else
    {
        outputMsg.textContent = "It's a working day.";
    }
}
      
function checkIfWeekend(today = "")
{
    let date = new Date(today);
    // 0 - 6 
    let currentDayOfWeek = date.getUTCDay();
    if(currentDayOfWeek == 0 || currentDayOfWeek == 5 || currentDayOfWeek == 6) {
        return true;
    }

    return false;
}

function checkIfHoliday(today = "")
{
    let date = new Date(today);
    let currentDayofMonth = date.getUTCDate();
    // Add 1 because the result is zero based.
    // 0 - 11
    let currentMonth = (date.getMonth() + 1);
    if(currentMonth == 12 && currentDayofMonth == 25) {
        return true;
    }

    return false;
}