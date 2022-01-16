function businessHours(dayNumber, hourNumber) {
    var hourNumber = parseInt(prompt("Ingresa la hora en que quieras ser atendido (En formato de 24 horas!): "));
    var dayNumber = parseInt(prompt("Ingresa el día de la semana en que quieras ser atendido con formato en numero (considera Domingo como el 0) "));

    if (hourNumber >= 9 && hourNumber <= 18 && dayNumber >= 1 && dayNumber <=5){
        alert("Horario laboral, lo podemos atender :)");
        //return true;
    } else if (hourNumber > 0 || hourNumber > 18 || hourNumber <= 24 || hourNumber < 9 && dayNumber == 0){
        alert("Fuera de horario laboral, lo sentimos, no podemos atenderlo ): ");
        //return false;
    } else if (hourNumber > 24 || hourNumber < 0) {
        alert("Ingrese una hora valida (Recuerde, formato 24 horas)");
    } else if(dayNumber < 0 || dayNumber > 6){
        alert("Ingrese un valor válido para día");
    }else {
        alert("Dato invalido");
    }
}
businessHours();


function active(hourNumber, auxDayS, auxJan, auxYear){
    var hourNumber = parseInt(prompt("Ingresa la hora en que quieras ser atendido (En formato de 24 horas!): "));
    //var dayNumber = auxDayS
    //var auxDayS = getDayNumber.auxYear % 7;
    var auxJan = parseInt(prompt("Ingresa el día de la semana en que quieras ser atendido con formato en numero (considera Domingo como el 0). "));

    var auxYear = parseInt(prompt("Escribe un número del 0 al 365 para saber en que día de la semana va a caer: "));

    if (auxYear % 7 == 0 && auxJan == 0){
        alert("Ese día es Domingo");
        var auxDayS = 0;
    } else if (auxYear % 7 == 1 && auxJan == 0){
        alert("Ese día es Lunes");
        var auxDayS = 1;
    } else if (auxYear % 7 == 2 && auxJan == 0){
        alert("Ese día es Martes");
        var auxDayS = 2;
    } else if (auxYear % 7 == 3 && auxJan == 0){
        alert("Ese día es Miércoles");
        var auxDayS = 3;
    } else if (auxYear % 7 == 4 && auxJan == 0){
        alert("Ese día es Jueves");
        var auxDayS = 4;
    } else if (auxYear % 7 == 5 && auxJan == 0){
        alert("Ese día es Viernes");
        var auxDayS = 5;
    } else if (auxYear % 7 == 6 && auxJan == 0){
        alert("Ese día es Sabado");
        var auxDayS = 6;
    }  else if (auxYear % 7 == 0 && auxJan == 1){
        alert("Ese día es Lunes");
        var auxDayS = 1;
    } else if (auxYear % 7 == 1 && auxJan == 1){
        alert("Ese día es Martes");
        var auxDayS = 2;
    } else if (auxYear % 7 == 2 && auxJan == 1){
        alert("Ese día es Miércoles");
        var auxDayS = 3;
    } else if (auxYear % 7 == 3 && auxJan == 1){
        alert("Ese día es Jueves");
        var auxDayS = 4;
    } else if (auxYear % 7 == 4 && auxJan == 1){
        alert("Ese día es Viernes");
        var auxDayS = 5;
    } else if (auxYear % 7 == 5 && auxJan == 1){
        alert("Ese día es Sábado");
        var auxDayS = 6;
    } else if (auxYear % 7 == 6 && auxJan == 1){
        alert("Ese día es Domingo");
        var auxDayS = 0;
    }  else if (auxYear % 7 == 0 && auxJan == 2){
        alert("Ese día es Martes");
        var auxDayS = 2;
    } else if (auxYear % 7 == 1 && auxJan == 2){
        alert("Ese día es Miércoles");
        var auxDayS = 3;
    } else if (auxYear % 7 == 2 && auxJan == 2){
        alert("Ese día es Jueves");
        var auxDayS = 4;
    } else if (auxYear % 7 == 3 && auxJan == 2){
        alert("Ese día es Viernes");
        var auxDayS = 5;
    } else if (auxYear % 7 == 4 && auxJan == 2){
        alert("Ese día es Sábado");
        var auxDayS = 6;
    } else if (auxYear % 7 == 5 && auxJan == 2){
        alert("Ese día es Domingo");
        var auxDayS = 0;
    } else if (auxYear % 7 == 6 && auxJan == 2){
        alert("Ese día es Lunes");
        var auxDayS = 1;
    }  else if (auxYear % 7 == 0 && auxJan == 3){
        alert("Ese día es Miércoles");
        var auxDayS = 3;
    } else if (auxYear % 7 == 1 && auxJan == 3){
        alert("Ese día es Jueves");
        var auxDayS = 4;
    } else if (auxYear % 7 == 2 && auxJan == 3){
        alert("Ese día es Viernes");
        var auxDayS = 5;
    } else if (auxYear % 7 == 3 && auxJan == 3){
        alert("Ese día es Sábado");
        var auxDayS = 6;
    } else if (auxYear % 7 == 4 && auxJan == 3){
        alert("Ese día es Domingo");
        var auxDayS = 0;
    } else if (auxYear % 7 == 5 && auxJan == 3){
        alert("Ese día es Lunes");
        var auxDayS = 1;
    } else if (auxYear % 7 == 6 && auxJan == 3){
        alert("Ese día es Martes");
        var auxDayS = 2;
    }  else if (auxYear % 7 == 0 && auxJan == 4){
        alert("Ese día es Jueves");
        var auxDayS = 4;
    } else if (auxYear % 7 == 1 && auxJan == 4){
        alert("Ese día es Viernes");
        var auxDayS = 5;
    } else if (auxYear % 7 == 2 && auxJan == 4){
        alert("Ese día es Sábado");
        var auxDayS = 6;
    } else if (auxYear % 7 == 3 && auxJan == 4){
        alert("Ese día es Domingo");
        var auxDayS = 0;
    } else if (auxYear % 7 == 4 && auxJan == 4){
        alert("Ese día es Lunes");
        var auxDayS = 1;
    } else if (auxYear % 7 == 5 && auxJan == 4){
        alert("Ese día es Martes");
        var auxDayS = 2;
    } else if (auxYear % 7 == 6 && auxJan == 4){
        alert("Ese día es Miércoles");
        var auxDayS = 3;
    }  else if (auxYear % 7 == 0 && auxJan == 5){
        alert("Ese día es Viernes");
        var auxDayS = 5;
    } else if (auxYear % 7 == 1 && auxJan == 5){
        alert("Ese día es Sábado");
        var auxDayS = 6;
    } else if (auxYear % 7 == 2 && auxJan == 5){
        alert("Ese día es Domingo");
        var auxDayS = 0;
    } else if (auxYear % 7 == 3 && auxJan == 5){
        alert("Ese día es Lunes");
        var auxDayS = 1;
    } else if (auxYear % 7 == 4 && auxJan == 5){
        alert("Ese día es Martes");
        var auxDayS = 2;
    } else if (auxYear % 7 == 5 && auxJan == 5){
        alert("Ese día es Miércoles");
        var auxDayS = 3;
    } else if (auxYear % 7 == 6 && auxJan == 5){
        alert("Ese día es Jueves");
        var auxDayS = 4;
    }  else if (auxYear % 7 == 0 && auxJan == 6){
        alert("Ese día es Sábado");
        var auxDayS = 6;
    } else if (auxYear % 7 == 1 && auxJan == 6){
        alert("Ese día es Domingo");
        var auxDayS = 0;
    } else if (auxYear % 7 == 2 && auxJan == 6){
        alert("Ese día es Lunes");
        var auxDayS = 1;
    } else if (auxYear % 7 == 3 && auxJan == 6){
        alert("Ese día es Martes");
        var auxDayS = 2;
    } else if (auxYear % 7 == 4 && auxJan == 6){
        alert("Ese día es Miércoles");
        var auxDayS = 3;
    } else if (auxYear % 7 == 5 && auxJan == 6){
        alert("Ese día es Jueves");
        var auxDayS = 4;
    } else if (auxYear % 7 == 6 && auxJan == 6){
        alert("Ese día es Viernes");
        var auxDayS = 5;
    }  else {
        alert("Error");
    }

    if (hourNumber >= 9 && hourNumber <= 18 && auxDayS >= 1 && auxDayS <=6){
        alert("Horario laboral, lo podemos atender :)");
        //var true;
    } else if (hourNumber > 0 || hourNumber > 18 || hourNumber <= 24 || hourNumber < 9 && auxDayS == 0){
        alert("Fuera de horario laboral, lo sentimos, no podemos atenderlo ): ");
        //var false;
    } else if (hourNumber > 24 || hourNumber < 0) {
        alert("Ingrese una hora valida (Recuerde, formato 24 horas)");
    } else if(auxDayS < 0 || auxDayS > 6){
        alert("Ingrese un valor válido para día");
    }else {
        alert("Dato invalido");
    }
}
active();