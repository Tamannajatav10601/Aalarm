document.getElementById('setAlarmButton').addEventListener('click', function() {
    const eventDateTime = document.getElementById('eventDateTime').value;
    if (!eventDateTime) {
        alert('Please select a date and time.');
        return;
    }

    const alarmTime = new Date(eventDateTime).getTime();
    const now = new Date().getTime();
    
    if (alarmTime < now) {
        alert('Please select a future date and time.');
        return;
    }

    const alarmId = setTimeout(() => {
        document.getElementById('song').play()
        // alert('Alarm! Your event is happening now!');
        
        removeAlarm(alarmId);
    }, alarmTime - now);

    addAlarmToList(eventDateTime, alarmId);
});

function addAlarmToList(dateTime, alarmId) {
    const alarmList = document.getElementById('alarmList');
    const li = document.createElement('li');
    li.textContent = `Alarm set for: ${dateTime}`;
    li.setAttribute('data-alarm-id', alarmId);
    alarmList.appendChild(li);
}

function removeAlarm(alarmId) {
    const alarmList = document.getElementById('alarmList');
    const alarms = alarmList.getElementsByTagName('li');

    for (let i = 0; i < alarms.length; i++) {
        if (alarms[i].getAttribute('data-alarm-id') == alarmId) {
            alarmList.removeChild(alarms[i]);
            break;
        }
    }
}
