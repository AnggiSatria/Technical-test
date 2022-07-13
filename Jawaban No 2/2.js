const jumlahBelanja = 150000

function DumbWaysJos() {
    const potongan = 21.1 / 100
    const minBelanja = 50000
    const maksDiskon = 20000
    const diskon = jumlahBelanja * potongan

    if(jumlahBelanja > minBelanja){
        if( jumlahBelanja < 100000 ){
                const totalDiskonDibawah20000 = jumlahBelanja - diskon
                console.log(`total belanja adalah ${totalDiskonDibawah20000}`);
                const kembalian1 = jumlahBelanja - totalDiskonDibawah20000
                console.log(`total kembalian adalah ${kembalian1}`);
            }else{
                const totalDiskonDiatas20000 = jumlahBelanja - maksDiskon
                console.log(`total belanja adalah  ${totalDiskonDiatas20000}`);
                const kembalian2 = jumlahBelanja - totalDiskonDiatas20000
                console.log(`total belanja adalah  ${kembalian2}`);
            }
        }else{
                console.log('Anda Belum Berhak Mendapatkan Diskon');
                
        }

        return
}

    function DumbWaysMantap() {
        const potongan = 30 / 100
        const minBelanja = 80000
        const maksDiskon = 40000
        const diskon = jumlahBelanja * potongan
       
            if( jumlahBelanja > minBelanja ){
                if( jumlahBelanja < 133000 ){
                    const diatasDiskon = jumlahBelanja - diskon
                    console.log(`total belanja adalah ${diatasDiskon}`);
                    const kembalian = jumlahBelanja - diatasDiskon
                    console.log(`total kembalian adalah ${kembalian}`);
                }else{
                    const dibawahDiskon = jumlahBelanja - maksDiskon
                    console.log(`total belanja adalah ${dibawahDiskon}`);
                    const kembalian2 = jumlahBelanja - dibawahDiskon
                    console.log(kembalian2);
                }
            }else{
                console.log('anda tidak dapat diskon');
            }   
            
        return 
    }

   DumbWaysMantap() 
