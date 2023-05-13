const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * 8 * * 1', function () {
    console.log('Running task 1!', new Date().getSeconds())

    setTimeout(function () {
        task1.cancel()
        console.log('Canceling task 1!')
    }, 20000)
})

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)]
rule.hour = 8
rule.second = 30

const task2 = schedule.scheduleJob(rule, function () {
    console.log('Running task 2!', new Date().getSeconds())
})