// DOM me kisi bhi form tak jane ke liye document.element_name
let addFrm=document.addfrm;
//DOM  kahata hai ki agar aapke pass form ka reference hai to uske andar kisi bhi textbox tak pahuchane ke liye form_ka_reference.textbox_name
let text=addFrm.add;
//Agla kam user jese hi type karke enter strike kare vo jake add ho jana chahiye list ke andar 

//---EventHandling
//Agar aapke pas form tag hai to enter par fire hota hai submit event 
//submit event form ka event hota hai and fire ye textbox and button ke press hone par hoga 

//ab me form par addEventListener lagaunga ,addEventListener 2 arguments leta hai-1.Event ka name 2.callback

let ul=document.querySelector(".todos"); //yha ul ko jo classname diya usse ise access kiya hai

let addItem=(item)=>{
   let str=` <li><span>${item}</span> <i class="far fa-trash-alt delete"></i></li>`;
   //ab is str ko ul ke andar add karna hai

   ul.innerHTML+=str;//ul me jo pahle se HTML(jisko innerHTML bolte hai) hai usme add kiya hai
}

addFrm.addEventListener("submit",(e) =>{ //(e)+> hatake function(event) bhi likh sakte hai
    e.preventDefault();
    // console.log("Event fired");-ise ese hi check karne ke liye use kiya tha
    let item=text.value;
    // console.log(item);-ise ese hi check karne ke liye use kiya tha
    if(item.length>0){
      addItem(item);
      text.value="";
    }
});

ul.addEventListener("click",(e)=>{

    //check whether clicked item is i tag

    if(e.target.nodeName==="I"){//li ,span, i ye sab node ke name hai 
        // console.log("Event fired");-check karne ke liye
        //trash list item ka child hai to har DOM element ke pass ek parent element name ki property hoti hai jo aapko is DOM element ke parent ke pass pahucha degi yha i ka parent li hai aur is li tak jane ke liye-

        //Remove parent of I tag i.e entire li
        e.target.parentElement.remove();
    }
    // console.log("Event Fired");-check karne ke liye
})

//form ka default action submit ho jana hota hai to yha textbox me enter karne par form apna  default action le rha hai to use htane ke liye=e.preventDefault(); isse console vala action perform hoga ab

//Ab andar jo user type karega vo mujhe capture karna hai iske liye hum access karenge textbox ke andar content aur ye value name ki property se milta hai=textbox_name.value;

//Ab jo bhi content textbox me likha hai vo jaker add ho jana chahiye humari list me iske liye ek function banate hai aur isko eventhandler ke andar se call karlenge 

//So ek function addItem bnaya hai iska kam hai textbox ke content ko enter karne par list me add karna delete icon ke sath

//Iske bad do chije karni hai  pahli chij-add hone ke bad niche vala textbox clear ho jana chahiye iske liye textbox ki value ko empty kar do using=text.value="";

//Iske bad Dusri chij-textbox me kuch na hone par enter karenge to jabardasti ek blank list add ho jayegi ise hatane ke liye hum addItem name ki variable ko call hi tab kare jab additem variable me kuch text aaya ho iske if(item.length>0){addItem(item);text.value="";}

//Agla kam user jab trash item par click kare to pura item delete karna hai

//Agar trash item par eventHandler lagaaoge to isme do problem hai pahli problem kya aapke pas ek trash hai ya aapke pas multiple trash hai and multiple trash hone par aapko sabke liye eventHandler set karna padega aur ise loop lgakar karenge to utne hi eventHandler banenge jitne trash icon hai

//Dusri problem ye hai ki jab koi new list item add hoga to evenHandler uspar apply nhi ho payega kyoki eventHandler to pahle hi add ho gya hai and trash DOM ke andar bad me aa rha hai to isaka sabse easy tarika hota hai DOM ye kahta hai kin aap parent element par eventHandler set kar do iska aapko double fyda milega 1.Handler set karna padega ek bar 2.Agar hum parent par kuch set karte hai eventHandler to apne aap child par apply ho jata hai jab child pe vo event fire hota hai

//sare trash jo ki list me hai and sare lists jo ki ul me hai to hum ul par eventHandler apply karenge


//Last step-Items ko search kese kare iske liye-

//sabse pehla kam search ke liye eventHandler set karna hai aur ye sabse uper vale textbox par set hoga and type karte-karte aapko eventHandling karni hai to aapko keyboard events use karne padenge 

//Aur keyboard event typing ko control karne ka hota hai="keyup" event jo tab fire hota hai jab user ki taraf se key release kari jayegi

let searchText=document.querySelector(".search input");// .search means jiske class attribute ki value search hai and uske andar ka mereko input element chahiye so =".search input"

//decendance ko humesha right-to-left samajhte hai

let searchItem=(text)=>{
   //console.log("text rec:" +text);-It is use for checking
   //Hume searching puri list par karni hai iske liye iske humare pas puri list honi bhi chahiye aur ye list ul ki children property se milegi
   let listItems=ul.children;
   for(let li of listItems){
     //console.log(li.innerText);//isse textbox par type karne se sari li ke item print honge console par 
     //Ab ye dekhna hai ye jo text aaya hai aur user ne jo text type kiya hai kya ye match kar rhe hai or kya ye user ka typedtext iske andar kahi bhi aa rha hai to ye visible ho varna ye visible ho
     if(li.innerText.toLowerCase().indexOf(text)===-1){//Here text is a letter
        //-1 means list item jo hum dund rhe hai vo nhi mila
        //To mujhe is list item ko hide karna hai hta dena hai ,nhi dikhna chahiye 
        //Iske liye css me filtered class banayi end me 
        
        //Agar original list mera diya huaa text kahi bhi nhi aa rha hai to isko filtered class dedo to ye list item hide ho jayega 
        li.classList.add("filtered");
     }
     else{
        //Iska matlab hai item hai and agr item hai to hum chahte hai ki hide na ho
        //Agar vo pehle se hide huaa hai to hum use unhide bhi kar sakte hai(possible)
        //user backspace dabaye to item milega to mujhe use show karna hain to iske liye-
        li.classList.remove("filtered");
     }
   }
}

searchText.addEventListener("keyup",(e)=>{
    // console.log("search text typed");-check karne ke liye use kiya
    //Ab hume ek function call karna jo humare liye searching ka kam karega 
    searchItem(searchText.value.toLowerCase());//toLowercase search karne par kuch casesensitive bnane ke liye
})










