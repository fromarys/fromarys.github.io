let maxPhoneLength = 11;
document.querySelector('.sendButton').onclick = myClick;

function myClick() {
    let userText = document.querySelector('.numberArea').value;
    if (userText.includes(' ') || userText.includes('+')) {
        noSpacesAndPlus = userText.replace( /\s/g, ""); // '\s - это регулярное выражение для "пробелов", а g - это "глобальный" флаг, что означает соответствие всем \s (пробелам).'
        noSpacesAndPlus = noSpacesAndPlus.replace('+', '');
        if (noSpacesAndPlus.indexOf('8') == 0) {
            allRemoved = noSpacesAndPlus.replace('8', '7');
            finalResult = allRemoved;
        } else {
            finalResult = noSpacesAndPlus;
        }
    } else 
        if (userText.indexOf('8') == 0) {
            noEight = userText.replace('8', '7');
            finalResult = noEight;
        } else          
            if (userText == "" || isNaN(+userText) == true || userText.length > maxPhoneLength) {
                document.querySelector('.errorMessage').innerHTML = 'Пожалуйста, укажите номер телефона';
                document.querySelector('.textOut').innerHTML = '';
                finalResult = '';
            } else {
                finalResult = userText;
            }

    if (userText !== "" && isNaN(+userText) == false && userText.length <= maxPhoneLength) {
        document.querySelector('.errorMessage').innerHTML = '';
        let link = 'https://wa.me/' + finalResult;
        document.querySelector('.textOut').innerHTML = 'Перейти в WhatsApp';
        document.querySelector('.textOut').setAttribute('href', link);
        document.querySelector('.textOut').style.display = 'block'
    }
   }