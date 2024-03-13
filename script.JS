
    
    function Month(){
    
        var month = document.getElementById('month').value;
        
        switch(month){
            case '1':
                case'2':
                case'12': alert("Зима")
            return;
            case '3':case'4':case'5': 
            alert("Весна")
            return;
            case '6':case'7':case'8': 
            alert("Лето")
            return;
            case '9':case'10':case'11': 
            alert("Осень")
            return; 
            default:
                alert('Некорректные данные');
                return;
        }
           
    }  
    
 
    
    function Zadacha(){
        var stroka = 'Нажми на меня нежно(ок или отмена)';
        var txt; 
        if(confirm(stroka) == true){
           txt = 'ок';
            
        }else{
            txt ='отмена';
        }
        document.getElementById('p').innerHTML = txt;
    }