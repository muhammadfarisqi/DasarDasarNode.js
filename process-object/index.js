const initialMemoryUsage=process.memoryUsage().heapUsed;
const yourName= process.argv[2];// TODO 2
const environment = process.env.NODE_ENV;// TODO 3



for (let i =0; i<=10000;i++){
    //proses looping ini akan membuat memori naik
}

const currentMemoryUsage= process.memoryUsage().heapUsed; // TODO 4
console.log(`Hai ${yourName}`);
console.log(`Mode environment:${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);