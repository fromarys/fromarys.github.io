document.querySelector('.sendButton').onclick = myClick;

function myClick() {
    // Начало функции
    let number = document.querySelector('.numberArea').value;

    let plusAndEightCheck = number.includes('+') || number.indexOf('8') == 0;
    let spaceCheck = number.includes(' ');
    let dashCheck = number.includes('-');
    let hooksCheck = number.includes('\(');


    function createLink() {
        
        finalResult = result;
        if (number == "" || isNaN(+finalResult) == true) {
            document.querySelector('.errorMessage').innerHTML = 'Пожалуйста, укажите номер телефона';
            document.querySelector('.textOut').innerHTML = '';
            document.querySelector('.textOut').style.display = 'none';
            finalResult = '';
        } else {

            document.querySelector('.errorMessage').innerHTML = '';
            let link = 'https://wa.me/' + finalResult;
            document.querySelector('.textOut').innerHTML = 'Перейти в WhatsApp';
            document.querySelector('.textOut').setAttribute('href', link);
            document.querySelector('.textOut').style.display = 'block';
        }
   }

 

   function plusAndEight() { //Удаляет пробел и заменяет 8 на 7
        // 
        noPlusAndEight = number.replace('+', '');
        if (number.indexOf('8') == 0) {
            result = noPlusAndEight.replace('8', '7');
        } else {
            result = noPlusAndEight;
        }
   }

   function removeSpace() {
        result = result.replace( /\s/g, "");
   }

   function removeDash() {
       result = result.replace( /-/g, "");
   }

   function removeHooks() {
        result = result.replace(/\(/g, "").replace(/\)/g, "");
        finalResult = result;
        console.log(finalResult);
   }

// Начало условий проверки

    if (plusAndEightCheck) { // Проверка на 8 и плюс и правильность текста
        plusAndEight();

        if (spaceCheck) { // Проверка на пробелы
            removeSpace();
            if (dashCheck) { // Проверка на тире
                removeDash();
                if (hooksCheck) { // Проверка на скобки
                    removeHooks();
                    createLink();
                } else {
                    createLink();
                }
            } else {https://github.com/fromarys/fromarys.github.io.git
                if (hooksCheck) { // Проверка на скобки
                    removeHooks();
                    createLink();
                } else {
                    createLink();
                }
            }


        } else {
            if (dashCheck) { // Проверка на тире
                removeDash();
                if (hooksCheck) { // Проверка на скобки
                    removeHooks();
                    createLink();
                } else {
                    createLink();
                }
            } else {
                if (hooksCheck) { // Проверка на скобки
                    removeHooks();
                    createLink();
                } else {
                    createLink();
                }
            }
        }
        
    } else { // нет плюса и 8
        
        if (spaceCheck) { // Проверка на пробелы
            result = number;
            removeSpace();
            if (dashCheck) { // Проверка на тире
                removeDash();
                if (hooksCheck) { // Проверка на скобки
                    removeHooks();
                    createLink();
                } else {
                    createLink();
                }
            } else {
                if (hooksCheck) { // Проверка на скобки
                    removeHooks();
                    createLink();
                } else {
                    createLink();
                }
            }


        } else {
            if (dashCheck) { // Проверка на тире
                removeDash();
                if (hooksCheck) { // Проверка на скобки
                    removeHooks();
                    createLink();
                } else {
                    createLink();
                }
            } else {
                if (hooksCheck) { // Проверка на скобки
                    result = number;
                    removeHooks();
                    createLink();
                } else {
                    result = number;
                    createLink();
                }
            }
        }
    } 


    // Конец функции
   }

 

   