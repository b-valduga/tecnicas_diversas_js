const div_data = document.getElementById('div_data');
const div_relogio = document.getElementById('div_relogio');

const data = new Date();

let dia = data.getDate();
dia = dia < 10 ? '0' + dia : dia;

let mes = data.getMonth();
mes = mes < 10 ? '0' + mes : mes;

const data_resumida = dia + '/' + mes + '/' + data.getFullYear();

div_data.innerHTML = data_resumida;

const relogio  = () =>{
    const data = new Date();
    let hora = data.getHours();
    hora = hora < 10 ? '0' + hora : hora;
    let minuto = data.getMinutes();
    minuto = minuto < 10 ? '0' + minuto : hora;
    let segundo = data.getSeconds();
    segundo = segundo < 10 ? '0' + segundo : segundo;

    const hora_completa = hora + ':' + minuto + ':' + segundo;
    div_relogio.innerHTML = hora_completa;
}

const intervalo = setInterval(relogio, 1000) //o setInterval vai chamar a função relogio a cada 1 segundo




// console.log(Date.now()) //Timestamp
// console.log(data);
// console.log(data.getTime());
// console.log(data.toDateString());
// console.log(data.toString())
// console.log(`Dia: ${data.getDate()}`);



// getDate() = Dia do mês
// getDay() = Dia da semana (número)
// getFullYear() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês 
// getSeconds() = Segundos
// getTime() = Timestamp .. milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC
// Date.now() = TimeStamp .. milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data 
// setMonth() = Define um dia do mês para a data 
// setFullYear() = Define um ano para a data
// setHours() = Define as horas 
// setMinutes() = Define os minutos 
// setSeconds() = Define os Segundos
// setMilliseconds() = Define os milisegundos 
// toDateString() = Retorna somente a data 

