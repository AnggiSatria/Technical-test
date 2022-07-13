function DumbWaysJos() {
    const potongan = 21.1 / 100
    const minBelanja = 50000
    const maksDiskon = 20000
    let jumlahBelanja
    const diskon = jumlahBelanja * potongan
    const konversiPotongan = () => {
            if(jumlahBelanja > minBelanja){
                if(jumlahBelanja < maksDiskon){
                    jumlahBelanja - diskon
                }else{
                    jumlahBelanja - maksDiskon
                    console.log('Anda melebihi maksimal diskon sebesar Rp 20.000');
                }
            }else{
                console.log('Anda Belum Berhak Mendapatkan Diskon');
                
            }
        }
        return konversiPotongan
    }

    function DumbWaysMantap() {
        const potongan = 30 / 100
        const minBelanja = 80000
        const maksDiskon = 40000
        let jumlahBelanja
        const diskon = jumlahBelanja * potongan
        const konversiPotongan = () => {
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
        return konversiPotongan
    }

const hitungDumbWaysJos = DumbWaysJos()

console.log(hitungDumbWaysJos.konversiPotongan);