const ageUser = prompt('Для посещения атракциона "Американнские горки" ответьте на вопрос: сколько вам лет?');

if (ageUser<0){
    alert("Это невозможно!");
}

    else
        if (ageUser>=18 && ageUser<=60) {
        alert("Приятно провести время на наших горках!");
    }
    else
        if(ageUser<12 || ageUser>80){
            alert('К сожалению, вы не можете посетить наши горки.');
        

    }
    else 
        if ((ageUser>60 && ageUser<80) || (ageUser>12 && ageUser<18)){
            const havePermit = confirm("Разрешение от взрослых есть?");
            if (havePermit ){
                alert("Добро пожаловать на горки!");
            }
        else {
            alert("К сожалению, вы не можете посетить наши горки");
        } 

        }
    else {
        alert("Попробуйте правильно ввести свой возраст!");
    }