document.querySelector('.sendButton').onclick = myClick;

function myClick() {
    // Начало функции
    number = document.querySelector('.numberArea').value;
    // if (userText.includes(' ') || userText.includes('+')) {
    //     spcAndPls();
    //     if (noSpacesAndPlus.indexOf('8') == 0) {
    //         eightToSeven();
    //     } else {
    //         finalResult = noSpacesAndPlus;
    //     }
    // } else 
    //     if (userText.indexOf('8') == 0) {
    //         removeEight();
    //     } else          
    //         if (userText == "" || isNaN(+userText) == true) {
    //             errorMessage();
    //         } else {
    //             finalResult = userText;
    //         }

    // if (userText !== "" && isNaN(+finalResult) == false) {
    //     createLink();
    // }
    plusAndEightCheck = number.includes('+') || number.indexOf('8') == 0;
    spaceCheck = number.includes(' ');
    dashCheck = number.includes('-');
    hooksCheck = number.includes('/\(\)/');
    // rightText = number !== "" && isNaN(+finalResult) == false;
    // wrongText = number == "" && isNaN(+finalResult) == true;

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
                    removeHooks();
                    createLink();
                } else {
                    result = number;
                    createLink();
                }
            }
        }
    } 
    // if (wrongText) {
    //     errorMessage();
    // }

    // Конец функции
   }

   /*global finalResult, noSpacesAndPlus, allRemoved, noEight */

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

 

//    function errorMessage() {
//         document.querySelector('.errorMessage').innerHTML = 'Пожалуйста, укажите номер телефона';
//         document.querySelector('.textOut').innerHTML = '';
//         document.querySelector('.textOut').style.display = 'none';
//         finalResult = '';
//    }

   function plusAndEight() { //Удаляет пробел и заменяет 8 на 7
        // 
        noPlusAndEight = number.replace('+', '');
        result = noPlusAndEight.replace('8', '7');
   }

   function removeSpace() {
        result = result.replace( /\s/g, "");
   }

   function removeDash() {
       result = result.replace( /-/g, "");
   }

   function removeHooks() {
        finalResult = result.replace( /\s/g, "");
   }