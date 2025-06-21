const buttonsClick = document.querySelectorAll('.seats');
let count = 0;
let sumOfTotal = 0;
for (let i = 0; i < buttonsClick.length; i++) {
    buttonsClick[i].addEventListener("click", function () {
        // buttonsClick[i].style.backgroundColor = 'green';
        count++

        // console.log(buttonsClick[i].innerText)
        if (count <= 4) {
            
            const seatsLeft = document.getElementById('seats-left');
            const seatsLeftConvertToNumber = Number(seatsLeft.innerText);
            seatsLeft.innerText = seatsLeftConvertToNumber - 1;
            console.log(seatsLeftConvertToNumber)


            buttonsClick[i].style.backgroundColor = 'green';
            //   const seatTag = document.getElementById('seat-tag');
            const displaySeatTag = buttonsClick[i].innerText;
            //   seatTag.innerText = displaySeatTag;
            //   console.log(seatTag))
            const createDivTag = document.createElement('div')
            createDivTag.setAttribute('class', 'flex justify-between mb-3')
            const createSeatTag = document.createElement('p')
            const createPTagForClass = document.createElement('p')
            createPTagForClass.innerText = 'Economy';
            const createPTagForPrice = document.createElement('p')
            createPTagForPrice.innerText = 550;


            createDivTag.appendChild(createSeatTag)
            createDivTag.appendChild(createPTagForClass)
            createDivTag.appendChild(createPTagForPrice)

            createSeatTag.innerText = displaySeatTag;
            const setTag = document.getElementById('seat-tag');
            setTag.appendChild(createDivTag);

            const totalPrice = document.getElementById('total-price');
            const convertTotalPriceToNumber = Number(totalPrice.innerText)
            const convertPriceToNumber = Number(createPTagForPrice.innerText)
            convertTotalPriceToNumber.innerText = convertPriceToNumber;
            const getInnerValue = convertTotalPriceToNumber.innerText = convertPriceToNumber

            sumOfTotal = sumOfTotal + getInnerValue
            totalPrice.innerText = sumOfTotal;


            const grandTotal = document.getElementById('grand-total');
            grandTotal.innerText = sumOfTotal


            const couponApply = document.getElementById('coupon-apply');

            couponApply.addEventListener('click', function () {
                const couponInput = document.getElementById('coupon-input');
                if (couponInput.value === 'NEW15') {
                    const discountAmount = sumOfTotal * 15 /100;
                    grandTotal.innerText = sumOfTotal - discountAmount;
                    couponInput.value = ''
                } else if(couponInput.value === 'COUPLE20'){
                    const discountAmount = sumOfTotal * 20 /100;
                    grandTotal.innerText = sumOfTotal - discountAmount;
                    couponInput.value = ''
                }
            })
            
        } else {
            console.log('outside')
        }
        
    })
    
}


const inputName = document.getElementById('input-name');
inputName.addEventListener('keyup', function(){
    
    const inputNumber = document.getElementById('number');
    inputNumber.addEventListener('keyup', function(){

        const inputEmail = document.getElementById('email');
        inputEmail.addEventListener('keyup', function(){
            const submit = document.getElementById('submit');
            submit.removeAttribute('disabled')
            submit.addEventListener('click', function(){
                const main = document.getElementById('main');
                main.setAttribute('class', 'hidden');
                const success = document.getElementById('success');
                success.removeAttribute('class','hidden')
            })
        })
    })
    
})


