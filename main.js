const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const email = document.getElementById("Email");
const phone = document.getElementById("tell");
const nationality = document.getElementById("nationality");
const btn  = document.getElementById("submitBtn");
const tBody = document.getElementById("tableBody");
const gender = document.querySelectorAll('input[name=gender]');
let count = 0;
btn.addEventListener('click' , submit);

class Contact {
    constructor (arr) {
        this.arr = arr
    }

    static validate(obj) { 
        let required = obj.validate.required
        let value = obj.input.value
        let regex = obj.validate.regex
        if (required && !value) {
            throw 'input is empty!'
        }
        else if (!(regex.test(value))) {
            throw 'invalid email'
        }
        else if (obj.validate.validateFn) {
            throw `${value} is invalid`
        }
    }
    static validateForm(){
        for(let i=0;i<this.arr.length;i++){
            try {
                validate(this.arr[i])
            }catch(e){
               Catch(this.arr[i].input,e)
            }
        }
    }
    Catch(element,error){
        element.classList.add("is-invalid")
        const textErr = document.createElement("div");
        textErr.classList.add("invalid-feedback");
        textErr.innerText = error
        element.parentElement.append(textErr);   
    }
}
// function Catch(element, error) {
//     console.log(element);
//     element.classList.add("is-invalid")
//     const textErr = document.createElement("div");
//     textErr.classList.add("invalid-feedback");
//     textErr.innerText = error
//     element.parentElement.append(textErr);
// }
    // addToTabel() {
    //     if(fName.value && lName.value) {
    //         let TR = document.createElement("tr");
    //         TR.innerHTML = `
    //             <th class="counter" scope="row">${++count}</th>
    //             <td>${fName.value+" "+lName.value}</td>
    //             <td>${email.value}</td>
    //             <td>${phone.value}</td>
    //             <td>${displayRadioValue()}</td>
    //             <td>${nationality.value}</td>
    //             <td><button class="delete bg-danger border-none">Delet</button></td>
    //             `  
    //             tBody.appendChild(TR);
    //             TR.addEventListener('click' ,Remove)
    //         }
    //}
// }

class ContactList {
    constructor () {
        list = []
    }
    
    add()

    delete()

    refresh()
}

const contact = new Contact([
    {
        input: fName,
        validate: {
            required: true,
            validateFn: (value) => {value.length > 20 }

           
        }
    },
    {
        input: lName,
        validate: { required: true }
    },
    {
        input: email,
        validate: {
            required: false,
            regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        }
    }
])

// function submit(e) {
//     e.preventDefault();
//     document.querySelectorAll('.invalid-feedback').forEach((e)=>{
//         e.remove();
//     })
//     document.querySelectorAll('.is-invalid').forEach((e)=>{
//         e.classList.remove('is-invalid');
//     })
//     try{
//         validate(fName)
//         if (fName.length > 20) {
//             throw `${fName.value}isn't valid!`
//         }
//     } catch(error){
//         Catch(fName ,error)
//     }

//     try{
//         validate(lName)
//     } catch(error){
//         Catch(lName ,error)
//     }

//     try{
//        validate(phone)
//        if (phone.length !== 12) {
//         throw `${phone.value}isn't valid!`
//        }
//     } catch(error){
//         Catch(phone ,error)
//     }
//     if(fName.value && lName.value) {
//         let TR = document.createElement("tr");
//         TR.innerHTML = `
//                 <th class="counter" scope="row">${++count}</th>
//                 <td>${fName.value+" "+lName.value}</td>
//                 <td>${email.value}</td>
//                 <td>${phone.value}</td>
//                 <td>${displayRadioValue()}</td>
//                 <td>${nationality.value}</td>
//                 <td><button class="delete bg-danger border-none">Delet</button></td>
//             `  
//             tBody.appendChild(TR);
//             TR.addEventListener('click' ,Remove)
//         }
    
        
// }

// function displayRadioValue() {
//     for(i = 0; i < gender.length; i++) {
//     if(gender[i].checked)
//        return gender[i].value;
//     }
// }

// function Remove(e) {
//     if(e.target.classList.contains('delete')){
//         e.target.parentNode.parentNode.remove();
//     }

//     document.querySelectorAll("tr").forEach((tr,index)=>{
//      if(tr.querySelector("th").parentElement.parentElement.id == 'tableBody'){
//         tr.querySelector("th").innerHTML = index;
//         count = index;
//        }
//     })
// }

// function validate(input ) {
//     // !input.value ? "first name is empty" : true;    
//     if(!input.value){
//         console.log(input);
//         throw `${input.value}isn't valid!`
//     } 
//     return true
// }

