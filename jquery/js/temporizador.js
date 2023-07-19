(function($) {
    $.fn.timer = function (options) {
        const finalOptions = $.extend({
            message: 'Soon!',
            time: '23:59:59',
        }, options)

        const hourTen = $('<span class="digito">').html('0')
        const hourUnit = $('<span class="digito">').html('0')
        const minuteTen = $('<span class="digito">').html('0')
        const minuteUnit = $('<span class="digito">').html('0')
        const secondTen = $('<span class="digito">').html('0')
        const secondUnit = $('<span class="digito">').html('0')
         
        const separatorHour = $('<span class="separador">').html(':')
        const separatorMinute = $('<span class="separador">').html(':')
        const message = $('<div class="mensagem">').html(finalOptions.message)

        $(this).addClass('temporizador')
        $(this).append(hourTen, hourUnit, separatorHour,
            minuteTen, minuteUnit, separatorMinute, 
            secondTen, secondUnit, message)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const targetTime = regex.exec(finalOptions.time)
        //console.log(targetTime)
        
        let timer = setInterval(() => {
            const now = new Date()
            const Target = new Date()
            Target.setHours(targetTime[1])
            Target.setMinutes(targetTime[2])
            Target.setSeconds(targetTime[3])

            const differenceInMili = Target.getTime() - now.getTime()
            if(differenceInMili >= 0) {
                const difference = regex.exec(new Date(differenceInMili).toISOString())
                //console.log(difference) índice [0] representa a hora, minutos e segundos mesclados no array.

                hourTen.html(difference[1] [0])//[1] pega o primeiro índice que é a hora do array difference ("Hh"); [0] pega o primeiro dígito da hora.
                hourUnit.html(difference[1] [1])//[1] pega o primeiro índice que é a hora do array difference ("hH"); [1] pega o segundo dígito da hora.
                minuteTen.html(difference[2] [0])//[2] pega o segundo índice que são os minutos do array difference ("Mm"); [0] pega o primeiro dígito do minuto.
                minuteUnit.html(difference[2] [1])//[2] pega o segundo índice que são os minutos do array difference ("mM"); [1] pega o segundo dígito do minuto.
                secondTen.html(difference[3] [0])//[3] pega o terceiro índice que são os segundos do array difference ("Ss"); [0] pega o primeiro dígito do segundo.
                secondUnit.html(difference[3] [1])//[3] pega o terceiro índice que são os segundos do array difference ("sS"); [0] pega o segundo dígito do segundo.
            } else {
                clearInterval(timer)
            }
        }, 1000)

        return this
    }
}) (jQuery)