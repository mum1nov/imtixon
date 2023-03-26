var students = [{
    studentName: 'Umid',
    studentBonuses: {
        january: 40,
        febraury: 46,
        march: 30,
        april: 44,
        may: 34
    }
}, {
    studentName: 'Sardor',
    studentBonuses: {
        january: 41,
        febraury: 43,
        march: 48,
        april: 38,
        may: 49
    }
}, {
    studentName: 'Bekzod',
    studentBonuses: {
        january: 38,
        febraury: 42,
        march: 32,
        april: 48,
        may: 45
    }
}
]
for (i = 0; i < students.length; i++) {
    var elName = (students[i])
    var isma = Object.values(elName)
    var ismb = Object.values(isma[0])
    var ism = ismb.join('')
    var pul = Object.values(elName)
    var oy = Object.keys(pul[1])
    var bonus = Object.values(pul[1])
    var result = 0
    var month = ''
    for (let i = 0; i < bonus.length; i++) {
        sum+=bonus[i]
        var m = oy[i]
        var value = bonus[i]
        if (result < value) {
            result = value
            month=m
        }
    }
    console.log(ism,month,result)
    var sum=0
    var info=[]
    info.push(ism)
    for (let i = 0; i < bonus.length; i++) {
        sum+=bonus[i]
    }
    info.push(sum)
    console.log(info)
}
var son1=Object.values(students[0].studentBonuses)
var son2=Object.values(students[1].studentBonuses)
var son3=Object.values(students[2].studentBonuses)
var sonlar=son3.concat(son1.concat(son2))
var umumiy=0
 for (let i = 0; i < sonlar.length; i++) {
    umumiy+=sonlar[i]
 }
 console.log("Umumiy summa:"+umumiy)



