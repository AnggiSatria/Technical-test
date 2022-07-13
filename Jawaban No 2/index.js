const jumlahBelanja = 1000000


function DumbWaysJos() {
    const potongan = 21.1 / 100
    const minBelanja = 50000
    const maksDiskon = 20000
    const diskon = jumlahBelanja * potongan


    if(jumlahBelanja => minBelanja){
        if(jumlahBelanja => maksDiskon){
                const totalDiskonDibawah20000 = jumlahBelanja - diskon
                console.log(totalDiskonDibawah20000);
            }else{
                const totalDiskonDiatas20000 = jumlahBelanja - maksDiskon
                console.log(totalDiskonDiatas20000);
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
        function konversi (){
            if( jumlahBelanja > minBelanja ){
                if( jumlahBelanja < maksDiskon ){
                    jumlahBelanja - diskon
                }else{
                    jumlahBelanja - maksDiskon
                }
            }else{
                console.log('anda tidak dapat diskon');
            }   

        }
            
        return konversi
    }

    DumbWaysJos()


