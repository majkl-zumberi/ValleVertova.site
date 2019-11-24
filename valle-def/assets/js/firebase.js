var config = {
    apiKey: "AIzaSyDd6InhMWoFug1cGt3OiC1JIXmNRHrDfSs",
    authDomain: "feedbackvallevertova.firebaseapp.com",
    databaseURL: "https://feedbackvallevertova.firebaseio.com",
    projectId: "feedbackvallevertova",
    storageBucket: "feedbackvallevertova.appspot.com",
    messagingSenderId: "524379967789"
};
firebase.initializeApp(config);
var db = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
db.settings(settings);
const categories = document.querySelector("#app");
const news_db=document.querySelector("#ul_news_container");
var feedback = [];
var rate = [];
window.value=0;
window.uid="";


db.collection("feedbacks").onSnapshot(function(querySnapshot) {
    while (categories.hasChildNodes()) {
        categories.removeChild(categories.lastChild);
    }
    feedback = [];
    rate = [];

    querySnapshot.forEach(function(doc) {


        /* if(doc.data().utente==userEmail)*/

        feedback.push(doc.id);
        rate.push(doc.data().rate);
       if(doc.data().user==em){
           this_id=doc.id;
       }

    });
    //    var d = new Date(2018, 0, 23, 10, 33, 30, 1001);
    //  actualTimeStamp=timestamps.split(" ");
    if (typeof feedback !== 'undefined' && feedback.length > 0) {
        // the array is defined and has at least one element
        getFeed();
    } else {
        getFeed();
        //nessun ordine attivo
        //noSpartiti();
    }


});

function getFeed() {

    /*for (let index = 0; index < feedback.length; index++) {}*/
    /*  docRef = db.collection("feedbacks").doc(feedback[index]);

      docRef.get().then(function(doc) {
          if (doc.exists) {




          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:" + error);
      });*/
    //console.log("counter: " + getCountRate(5));
    if (getCountRate(5) > 0) {
        var five_star = getCountRate(5);
        var progress_perc5 = (100 * five_star) / rate.length;

    }
    if (getCountRate(4) > 0) {
        var four_star = getCountRate(4);
        var progress_perc4 = (100 * four_star) / rate.length;

    }
    if (getCountRate(3) > 0) {
        var three_star = getCountRate(3);
        var progress_perc3 = (100 * three_star) / rate.length;

    }
    if (getCountRate(2) > 0) {
        var two_star = getCountRate(2);
        var progress_perc2 = (100 * two_star) / rate.length;

    }
    if (getCountRate(1) > 0) {
        var one_star = getCountRate(1);
        var progress_perc1 = (100 * one_star) / rate.length;

    }
    if (typeof five_star != 'undefined') {
        // console.log(five_star + " persone per 5 stelle, percentuale: " + progress_perc5);
        var five = document.getElementById("Rate_five");
        five.setAttribute("style", "width: " + Math.floor(progress_perc5) + "%");
        five.innerHTML = Math.floor(progress_perc5) + "%";

    } else {
        var five = document.getElementById("Rate_five");
        five.setAttribute("style", "width: " + "0%");
        five.innerHTML = "0%";
    }
    if (typeof four_star != 'undefined') {
        // console.log(four_star + " persone per 4 stelle, percentuale: " + progress_perc4);
        var four = document.getElementById("Rate_four");
        four.setAttribute("style", "width: " + Math.floor(progress_perc4) + "%");
        four.innerHTML = Math.floor(progress_perc4) + "%";
    } else {
        var four = document.getElementById("Rate_four");
        four.setAttribute("style", "width: " + "0%");
        four.innerHTML = "0%";
    }
    if (typeof three_star != 'undefined') {
        // console.log(three_star + " persone per 3 stelle, percentuale: " + progress_perc3);
        var three = document.getElementById("Rate_three");
        three.setAttribute("style", "width: " + Math.floor(progress_perc3) + "%");
        three.innerHTML = Math.floor(progress_perc3) + "%";
    } else {
        var three = document.getElementById("Rate_three");
        three.setAttribute("style", "width: " + "0%");
        three.innerHTML = "0%";
    }
    if (typeof two_star != 'undefined') {
        // console.log(two_star + " persone per 2 stelle, percentuale: " + progress_perc2);
        var two = document.getElementById("Rate_two");
        two.setAttribute("style", "width: " + Math.floor(progress_perc2) + "%");
        two.innerHTML = Math.floor(progress_perc2) + "%";
    } else {
        var two = document.getElementById("Rate_two");
        two.setAttribute("style", "width: " + "0%");
        two.innerHTML = "0%";
    }
    if (typeof one_star != 'undefined') {
        // console.log(one_star + " persoe per 1 stella, percentuale: " + progress_perc1);
        var one = document.getElementById("Rate_one");
        one.setAttribute("style", "width: " + Math.floor(progress_perc1) + "%");
        one.innerHTML = Math.floor(progress_perc1) + "%";
    } else {
        var one = document.getElementById("Rate_one");
        one.setAttribute("style", "width: " + "0%");
        one.innerHTML = "0%";
    }
    if (rate.length == 1) {
        var feed_tot = document.getElementById("feed_tot");
        feed_tot.innerHTML = rate.length + " recensione";
        //<a onclick=view()> Visualizza le recenzioni</a>
        //feed_tot.innerHTML+="<br><a id='viewFeeds'> Visualizza le recensioni</a>";
    } else {
        var feed_tot = document.getElementById("feed_tot");
        feed_tot.innerHTML = rate.length + " recensioni";
        feed_tot.innerHTML+="<br><a id='viewFeeds' class='uk-button uk-button-text'>  Visualizza le recensioni</a>";
        
                                            
    }
    var viewFeeds_modal=document.getElementById("viewFeeds").addEventListener("click",function () {
       // console.log("hai cliccato 'visualizza recensioni!!'");
        startToView();
    });
    
    
    console.log("avg: " + getAvg());
    var avg = document.getElementById("avgRate").innerHTML = getAvg() + "<i class='fas fa-xs fa-star'></i>";
    /*console.log("ciaone");
    console.log(feedback);
    console.log(rate);
    //console.log(five_star + " persone per 5 stelle, percentuale: " + progress_perc5);
    console.log(typeof five_star != 'undefined');*/
    //var sas = document.getElementById("sas").setAttribute("style", "width: 100%");
    // var five=document.getElementById("five");


}


function getCountRate(type_star) {
    let count = 0;
    for (let i = 0; i < rate.length; i++) {
        if (parseInt(rate[i]) == type_star) {
            count++;
        }

    }
    return count;
}

function getAvg() {
    var avg = 0;
    var sum = 0;
    for (let index = 0; index < rate.length; index++) {
    	console.log(rate[index]);
        sum += parseInt(rate[index]);

    }
    avg = (sum / rate.length).toPrecision(2);
    if (rate.length == 0) {
        return "0.0";
    }
    console.log("avg is:"+avg);
    return avg;
}

//var googleBtn=document.getElementById("googleSignInBtn").addEventListener("click",auth);
var auth = document.getElementById("auth");
auth.addEventListener("click", auth);
var out_ = document.getElementById("signOut").addEventListener("click", signOut);
function showLogin() {
    // console.log("d");
     document.getElementById("modal_login_btn").click();
     document.getElementById("modal_login_btn").click();

}
function auth() {
    
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        //console.log("loggatoh: " + result);
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
    //    console.log(error);
        // ...
    });
}


function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("log out eseguito correttamente");
        
    }).catch(function(error) {
        // An error happened.
        console.log("errore durante il log out " + error);
    });

    document.getElementById("remSurvey").style.display="none";
    document.getElementById("submitSurvey").style.display="";
    document.getElementById("textarea_").disabled=false;
    document.getElementById("textarea_").value="";
 setRating(0);
 content="";
 rate=0;
 em="";
 hasAlreadyRate=false  
 isLogged=false;
 window.uid="";
 
 document.getElementById("email-izi").value="";
 document.getElementById("passw-izi").value="";
 var recens=document.getElementById("tBody_adm_feed");
                     while (recens.hasChildNodes()) {
                        recens.removeChild(recens.lastChild);
                    }
                    document.getElementById("recens").style.display="none";

 var news=document.getElementById("tBody_adm_news");
                    while (news.hasChildNodes()) {
                       news.removeChild(news.lastChild);
                   }
                   document.getElementById("news_ad").style.display="none";                    
}







var isLogged=false;
var imgauth=document.getElementById("imgAuth");
var nome=document.getElementById("user_name");
var em;
var nomeA='';
var srcImg='';
var hasAlreadyRate=false;
var rate;
var content;
var this_id;

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log("logged!");
        // console.log(firebaseUser);
        //   btnLogOut.classList.remove('hide');
        // window.location.href = ('login.html');
        firebaseUser.providerData.forEach(function(profile) {
            if(profile.providerId=="google.com"){
                isLogged=true;
            }
            
         //  console.log("Sign-in provider: " + profile.providerId);
         //   console.log("  Provider-specific UID: " + profile.uid);
         //   console.log("vera uid"+firebaseUser.uid);
            window.uid=firebaseUser.uid;
         //   console.log("  Name: " + profile.displayName);
            nomeA=profile.displayName;
        ///    console.log("  Email: " + profile.email);
            em=profile.email;
           /* console.log("  Email: " + profile.emailVerified);
            console.log("  Password: " + profile.password);*/
            
           // console.log(profile.photoURL);
           srcImg=profile.photoURL;

            var out = document.getElementById("out").style.display = "";
            var log = document.getElementById("liAuth_modal").style.display = "none";
            if(isLogged){
                imgauth.setAttribute("src",profile.photoURL);
            
                nome.innerHTML=profile.displayName;
            }
            
          //  console.log(em);

          var docRef = db.collection("users").doc(firebaseUser.uid);

          docRef.get().then(function(doc) {
              if (doc.exists) {
                 // console.log("Document data:", doc.data());
                  if(doc.data().moderator){
                    document.getElementById("passw-izi").value="";
                    document.getElementById("email-izi").value="";
                    //  console.log("sono un moderatore");
                      document.getElementById("closeLogModal").click();
                     // var li_modify=document.createElement("li");
                     document.getElementById("recens").style.display="";
                     var recens=document.getElementById("tBody_adm_feed");
                     while (recens.hasChildNodes()) {
                        recens.removeChild(recens.lastChild);
                    }
                    document.getElementById("news_ad").style.display="";
                    var news=document.getElementById("tBody_adm_news");
                    while (news.hasChildNodes()) {
                       news.removeChild(news.lastChild);
                   }
                   
                     db.collection("feedbacks").get().then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            // doc.data() is never undefined for query doc snapshots
                         //   console.log(doc.id, " => ", doc.data());
                            insertTD(doc.data().nome,doc.data().content,doc.data().rate,doc.id);
                        });
                    });

                    db.collection("dateNews").get().then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            // doc.data() is never undefined for query doc snapshots
                          //  console.log(doc.id, " => ", doc.data());
                            insertTDNews(doc.data().data,doc.data().news,doc.id);
                        });
                    });
                  }
                  else{
                   //   console.log("non sono un moderatore..");
                  }
              } else {
                  // doc.data() will be undefined in this case
                  //console.log("No such document!");


                  db.collection("users").doc(firebaseUser.uid).set({
                    user:profile.email,
                    moderator: false
                })
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
                



              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });




            db.collection("feedbacks").where("user", "==", em)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                  //  console.log(doc.id, " => ", doc.data());
                    rate=parseInt(doc.data().rate);
                    this_id=doc.id;
                    content=doc.data().content;
                    hasAlreadyRate=true;
                });
    if(hasAlreadyRate && isLogged){
    //console.log(hasAlreadyRate);
                var survey=document.getElementById("submitSurvey");
                survey.style.display="none";
                var rrs=document.getElementById("remSurvey");
                rrs.style.display="";
                setRating(parseInt(rate));
                //console.log("ho messo "+rate+" stelle");
                      // var stars=document.getElementById("rateStar");
                   //    stars.style.display="none";
          
            
               /* for (let i = 0; i < rate; i++) {
                    console.log("pieno");
                    document.getElementById("footer_rate").innerHTML += '<i class="fas fa-star"></i>';
                }
                var mancanti = 5 - rate;
                for (let j = 0; j < mancanti; j++) {
    console.log("vuoto");
                    document.getElementById("footer_rate").innerHTML += '<i class="far fa-star"></i>';
                }*/
                document.getElementById("textarea_").disabled=false;
            document.getElementById("textarea_").value=content;
          //  console.log("ho messo in txa: "+content);
            document.getElementById("textarea_").setAttribute("disabled","");
    }
                
                
    
        
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });

             



        });
        
    } else {
        console.log('not logged in');
        var out = document.getElementById("out").style.display = "none";
        var log = document.getElementById("liAuth_modal").style.display = "";
        isLogged=false;
        imgauth.setAttribute("src","");
        nome.innerHTML="";
        em="";
        window.uid="";
    }
});

function insertTD(utente,commento,giudizio,id) {
    // tBody_adm_feed
    var tr= document.createElement("tr");
    var td_user=document.createElement("td");
    var td_user_text=document.createTextNode(utente);
    td_user.appendChild(td_user_text);
    var td_comm=document.createElement("td");
    var td_comm_text=document.createTextNode(commento);
    td_comm.appendChild(td_comm_text);
    var td_giud=document.createElement("td");
    var td_giud_text=document.createTextNode(giudizio);
    td_giud.appendChild(td_giud_text);
    var td_del=document.createElement("td");
    var td_bt=document.createElement("button");
    td_bt.setAttribute("class","uk-button uk-button-default uk-button-small");
    td_bt.setAttribute("type","button");
    //td_bt.setAttribute("id",id);
    var td_ico=document.createElement("icon");
    td_ico.setAttribute("class","fas fa-trash-alt");
    td_bt.appendChild(td_ico);
    td_del.appendChild(td_bt);
    tr.setAttribute("id",id);
    tr.appendChild(td_user);
    tr.appendChild(td_comm);
    tr.appendChild(td_giud);
    tr.appendChild(td_del);
    document.getElementById("tBody_adm_feed").appendChild(tr);
    td_bt.addEventListener("click",function(){
       // console.log("hai cliccato bottone con user="+utente);
        document.getElementById("close_recens").click();
        iziToast.question({
            timeout: 20000,
            close: false,
            overlay: true,
            theme: 'light',
            displayMode: 'once',
            id: 'question1',
            zindex: 999,
            title: 'Hey',
            message: 'Cancellare la recensione di '+utente+"? 🗑",
            position: 'center',
            buttons: [
                ['<button><b>Si</b></button>', function (instance, toast) {
         
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'yes');
         
                }, true],
                ['<button>No</button>', function (instance, toast) {
         
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'no');
         
                }],
            ],
            onClosing: function(instance, toast, closedBy){
               // console.info('Closing | closedBy: ' + closedBy);
                 
            },
            onClosed: function(instance, toast, closedBy){
                //console.info('Closed | closedBy: ' + closedBy);
                if(closedBy=="yes"){
                    db.collection("feedbacks").doc(id).delete().then(function() {
                      //  console.log("Document successfully deleted!");
                        iziToast.success({
                            title: 'OK',
                            message: 'Recensione eliminata con Successo!',
                        });
                        var element = document.getElementById(id);
                        element.parentNode.removeChild(element);
                        document.getElementById("open_r").click();
                    }).catch(function(error) {
                        console.error("Error removing document: ", error);
                        iziToast.error({
                            title: 'Errore',
                            message: error,
                        });
                    });
                }
                else{
                    document.getElementById("open_r").click();
                }
            }
        });
    });
}


function insertTDNews(data,avviso,id) {
    // tBody_adm_feed
    var tr= document.createElement("tr");
    var td_data=document.createElement("td");
    var q= Date(data);
//         console.log(t);
       var w=new Date(q);
 //        console.log(s.getDay());

    
    var td_data_text=document.createTextNode(data);
    //console.log(w.getDay()+"/"+w.getMonth()+"/"+w.getFullYear());
    td_data.appendChild(td_data_text);
    var td_avv=document.createElement("td");
    var td_avv_text=document.createTextNode(avviso);
    td_avv.appendChild(td_avv_text);
    var td_del=document.createElement("td");
    var td_bt=document.createElement("button");
    td_bt.setAttribute("class","uk-button uk-button-default uk-button-small");
    td_bt.setAttribute("type","button");
    //td_bt.setAttribute("id",id);
    var td_ico=document.createElement("icon");
    td_ico.setAttribute("class","fas fa-trash-alt");
    td_bt.appendChild(td_ico);
    td_del.appendChild(td_bt);
    tr.setAttribute("id",id);
    tr.appendChild(td_data);
    tr.appendChild(td_avv);
    tr.appendChild(td_del);
    document.getElementById("tBody_adm_news").appendChild(tr);
    td_bt.addEventListener("click",function(){
       // console.log("hai cliccato bottone con avviso="+avviso);
        document.getElementById("close_news_ad").click();
        iziToast.question({
            timeout: 20000,
            close: false,
            overlay: true,
            theme: 'light',
            displayMode: 'once',
            id: 'question1',
            zindex: 999,
            title: 'Hey',
            message: 'Cancellare la news del '+data+" contentente "+avviso+"? 🗑",
            position: 'center',
            buttons: [
                ['<button><b>Si</b></button>', function (instance, toast) {
         
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'yes');
         
                }, true],
                ['<button>No</button>', function (instance, toast) {
         
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'no');
         
                }],
            ],
            onClosing: function(instance, toast, closedBy){
               // console.info('Closing | closedBy: ' + closedBy);
                 
            },
            onClosed: function(instance, toast, closedBy){
                //console.info('Closed | closedBy: ' + closedBy);
                if(closedBy=="yes"){
                    db.collection("dateNews").doc(id).delete().then(function() {
                      //  console.log("Document successfully deleted!");
                        iziToast.success({
                            title: 'OK',
                            message: 'news eliminata con Successo!',
                        });
                        var element = document.getElementById(id);
                        element.parentNode.removeChild(element);
                        document.getElementById("open_n").click();
                    }).catch(function(error) {
                        console.error("Error removing document: ", error);
                        iziToast.error({
                            title: 'Errore',
                            message: error,
                        });
                    });
                }
                else{
                    document.getElementById("open_n").click();
                }
            }
        });
    });
}



var ss = document.getElementById("errHandler");
//console.log(ss);
ss.addEventListener("click", function() {
   // console.log("ti pregou");
   // console.log(window.value);
})

var rs=document.getElementById("remSurvey");
rs.addEventListener("click",removeSurvey);
function removeSurvey() {
   // console.log("pronto per elimiare");



    iziToast.question({
        timeout: 20000,
        close: false,
        overlay: true,
        theme: 'light',
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'Hey',
        message: 'Cancellare la recensione?❌',
        position: 'center',
        buttons: [
            ['<button><b>Si</b></button>', function (instance, toast) {
     
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'yes');
     
            }, true],
            ['<button>No</button>', function (instance, toast) {
     
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'no');
     
            }],
        ],
        onClosing: function(instance, toast, closedBy){
           // console.info('Closing | closedBy: ' + closedBy);
             
        },
        onClosed: function(instance, toast, closedBy){
            //console.info('Closed | closedBy: ' + closedBy);
            if(closedBy=="yes"){
                db.collection("feedbacks").doc(this_id).delete().then(function() {
                  //  console.log("Document successfully deleted!");
                    iziToast.success({
                        title: 'OK',
                        message: 'Recensione eliminata con Successo!',
                    });
                    
                  //  console.log("pronto per resettare la survey nuova");
                    submit.style.display="";
                    
                    rs.style.display="none";
                    setRating(0);
                    this_id="";
                    document.getElementById("textarea_").disabled=false;
                    document.getElementById("textarea_").value="";
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                    iziToast.error({
                        title: 'Errore',
                        message: error,
                    });
                });
            }
        }
    });




    
}

var submit=document.getElementById("submitSurvey");
submit.addEventListener("click", submitSurvey_);

function submitSurvey_(){
   //console.log("hai cliccato");
    if(!isLogged){
        //var clicky = document.getElementById("errHandler").click();
       // console.log("entrato nell if");
       // var fireEvent=document.getElementById("auth").click();
       document.getElementById("modal_login_btn").click();
    }
    else{
       // console.log("pronto per inviare il feed");
        if(window.value<=0){
            var clicky = document.getElementById("errHandler").click();
        }
        else{
        //   console.log("pronto per firebase");
            var tx=document.getElementById("textarea_").value;
          //  console.log("contenuto text area: "+tx);
            submitSurveyOnFirebase(em,window.value,tx,srcImg,nomeA);
            window.value=0;
        }
    }
    
}



function submitSurveyOnFirebase(email,rate, content,urlImg,nomeA){
        db.collection("feedbacks").add({
    user: email,
    rate: rate,
    content:content,
    urlimage:urlImg,
    nome:nomeA

})
.then(function(docRef) {
    iziToast.success({
        title: 'OK',
        message: 'Recensione Pubblicata con Successo!',
    });
    //console.log("Document written with ID: ", docRef.id);
    document.getElementById("textarea_").disabled=true;
    submit.style.display="none";
    rs.style.display="";
})
.catch(function(error) {
    console.error("Error adding document: ", error);
    iziToast.error({
        title: 'Errore',
        message: error,
    });
});



//funzione per disabilitare il continuo submit di feed 
       // console.log(hasAlreadyRate);
}



function setRating(val) {
    var gg=document.querySelectorAll('#rateUI');

 Array.prototype.forEach.call( gg, function( node ,index) {
                    /* node.addEventListener("mouseover",function () {
                         node.setAttribute("class","fas fa-star");
                     
                         for (var i = 0; i < index; i++) {
                             gg[i].setsignAttribute("class","fas fa-star");
                           
                         }
                     })
                      node.addEventListener("mouseout",function () {
                         node.setAttribute("class","far fa-star");
                   
                         for (var i = 0; i < index; i++) {
                             gg[i].setAttribute("class","far fa-star");
                             
                         }
                     })*/

                        for (var i = 0; i <= index; i++) {
                            if(i<=val-1){
                                gg[i].setAttribute("class","icon active");
                            }
                            else{
                                gg[i].setAttribute("class","icon");      
                            }
                          
                            
                        }


                     })
}







function startToView() {
    



db.collection("feedbacks").orderBy("rate", "asc")
    .get()
    .then(function(querySnapshot) {
        
      /* t=querySnapshot.docs[0];
        var contenuto=querySnapshot.docs[0]._document.data.internalValue.root.left.value.internalValue;
        //console.log(contenuto);
        var rate_modal=querySnapshot.docs[0]._document.data.internalValue.root.right.value.internalValue;
        var user=querySnapshot.docs[0]._document.data.internalValue.root.value.internalValue;
        //console.log(contenuto+rate+user_modal);
        document.getElementById("feed_modal_txt_crit").innerHTML=contenuto;
        document.getElementById("feed_modal_star_crit").innerHTML=user;
        document.getElementById("titolo_crit").innerHTML=rate_modal;*/
        var docRef = db.collection("feedbacks").doc(querySnapshot.docs[0].id);

docRef.get().then(function(doc) {
    if (doc.exists) {
      //  console.log("Document data:", doc.data());
        var contenuto=doc.data().content;
        var rate=doc.data().rate;
        var nome=doc.data().nome;
        var src=doc.data().urlimage;
        document.getElementById("feed_modal_txt_crit").innerHTML=contenuto;
       // document.getElementById("feed_modal_star_crit").innerHTML=rate;
        document.getElementById("titolo_crit").innerHTML=nome;
        document.getElementById("img_crit").setAttribute("src",src);
        document.getElementById("feed_modal_star_crit").innerHTML='';
        for (let i = 0; i < rate; i++) {
            document.getElementById("feed_modal_star_crit").innerHTML += '<i class="fas fa-star"></i>';
        }
        var mancanti = 5 - rate;
        for (let j = 0; j < mancanti; j++) {

            document.getElementById("feed_modal_star_crit").innerHTML += '<i class="far fa-star"></i>';
        }

    } else {
        // doc.data() will be undefined in this case
       // console.log("No such document!");
    }
}).catch(function(error) {
   // console.log("Error getting document:", error);
});
        
    })
    .catch(function(error) {
      //  console.log("Error getting documents: ", error);
    });


    db.collection("feedbacks").orderBy("rate", "desc")
    .get()
    .then(function(querySnapshot) {
        
       
        /*var contenuto=querySnapshot.docs[0]._document.data.internalValue.root.left.value.internalValue;
        //console.log(contenuto);
        var rate_modal=querySnapshot.docs[0]._document.data.internalValue.root.right.value.internalValue;
        var user=querySnapshot.docs[0]._document.data.internalValue.root.value.internalValue;
        //console.log(contenuto+rate+user_modal);
        document.getElementById("feed_modal_txt_positiva").innerHTML=contenuto;
        document.getElementById("feed_modal_star_positiva").innerHTML=user;
        document.getElementById("titolo_pos").innerHTML=rate_modal;*/
        var docRef = db.collection("feedbacks").doc(querySnapshot.docs[0].id);

        docRef.get().then(function(doc) {
            if (doc.exists) {
               // console.log("Document data:", doc.data());
                var contenuto=doc.data().content;
                var rate=doc.data().rate;
                var nome=doc.data().nome;
                var src=doc.data().urlimage;
                document.getElementById("feed_modal_txt_positiva").innerHTML=contenuto;
                //document.getElementById("feed_modal_star_positiva").innerHTML=rate;
                document.getElementById("titolo_pos").innerHTML=nome;
                document.getElementById("img_pos").setAttribute("src",src);
                document.getElementById("feed_modal_star_positiva").innerHTML='';
                for (let i = 0; i < rate; i++) {
                    document.getElementById("feed_modal_star_positiva").innerHTML += '<i class="fas fa-star"></i>';
                }
                var mancanti = 5 - rate;
                for (let j = 0; j < mancanti; j++) {

                    document.getElementById("feed_modal_star_positiva").innerHTML += '<i class="far fa-star"></i>';
                }
        
            } else {
                // doc.data() will be undefined in this case
                //console.log("No such document!");
            }
        }).catch(function(error) {
           // console.log("Error getting document:", error);
        });
        
    })
    .catch(function(error) {
      //  console.log("Error getting documents: ", error);
    });

    document.getElementById("viewFeeds_modal").click();
}





    // var docRef = db.collection("cities").doc("GAXEfCJ0WwYzb7bUUjqr");

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//         var t= Date(doc.data());
//         console.log(t);
//         var s=new Date(t);
//         console.log(s.getDay());
    


//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });

// });

var news_containerRef=document.getElementById("ul_news_container");
db.collection("dateNews").onSnapshot(function(querySnapshot) {
    while (news_db.hasChildNodes()) {
        news_db.removeChild(news_db.lastChild);
    }
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
       /// var t= Date(doc.data());
      //  console.log(t.toDate());
     //    var s=Date(t);
 //        console.log(s.getDay());

        var li_main_=document.createElement("li");
        var a_date=document.createElement("a");
        a_date.setAttribute("class","uk-accordion-title");
        var a_date_text=document.createTextNode(doc.data().data);
        t="";
        s="";
        a_date.appendChild(a_date_text);
        var div_content_news=document.createElement("div");
        div_content_news.setAttribute("class","uk-accordion-content");
        var arty=document.createElement("article");
        // console.log(doc.data().type=="info");
        if(doc.data().type=="info"){
            arty.setAttribute("class","message is-info");
          //   console.log("sono entrato qui");
           // console.log(art);
        }
        else if(doc.data().type=="warning"){
            arty.setAttribute("class","message is-warning");
        }
        else if(doc.data().type=="danger"){
            arty.setAttribute("class","message is-danger");
        }
        var div_body_news=document.createElement("div");
        div_body_news.setAttribute("class","message-body");
        var div_body_news_text=document.createTextNode(doc.data().news);
        div_body_news.appendChild(div_body_news_text);
        arty.appendChild(div_body_news);
        // console.log(div_body_news);
        div_content_news.appendChild(arty);
    li_main_.appendChild(a_date);
    li_main_.appendChild(div_content_news);
        news_containerRef.appendChild(li_main_);
    // console.log(li_main_);

    });

    if(news_db.childElementCount>0){
        document.getElementById("badge__news").setAttribute("class","p1 fa-stack fa-2x has-badge");
        document.getElementById("badge-news").innerHTML=news_db.childElementCount;
        document.getElementById("badge-news").setAttribute("class","uk-badge");
    }
    else{
        document.getElementById("badge__news").setAttribute("class"," fa-stack fa-2x has-badge");
       
        document.getElementById("badge-news").innerHTML="";
        document.getElementById("badge-news").setAttribute("class","");
    }
});



/*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    //aggiungere il footer per mandare avanti e indietro le modal
}*/


// var element = document.querySelector("#animateElement");
// const open_sentieri=document.querySelector("#open__sentieri").addEventListener("click",function (){
//     console.log("cliccato!");
//     element.setAttribute("class","animated rubberBand");
// });
// element.addEventListener('animationend', function() { element.setAttribute("class",""); })

var li_modal=document.getElementById("liAuth_modal").addEventListener("click",showLogin)
var form_ad_news=document.getElementById("btn_form_ad").addEventListener("click",function(){
    //console.log("sxnsnsxnsn");
    var selVal= document.getElementById("select_form_ad").value;
    var valtxa=document.getElementById("txa_form_ad").value;
    var temp=new Date().toLocaleDateString();
    db.collection("dateNews").add({
        data:temp,
        news:valtxa,
        type:selVal
    })
    .then(function(docRef) {
       // console.log("Document written with ID: ", docRef.id);
        insertTDNews(temp,valtxa,docRef.id);
        
        document.getElementById("txa_form_ad").value="";
        //suxess
        document.getElementById("close_form_ad").click();
        iziToast.success({
            title: 'OK',
            message: 'news aggiunta con Successo!',
        });
        document.getElementById("open_n").click();
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
$(function(){

    /* Instantiating iziModal */
    $("#modal-custom").iziModal({
        overlayClose: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)'
    });
    var sasss=document.getElementById("googleSignInBtn").addEventListener("click",function(){
        var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        //console.log("loggatoh: " + result);
        // ...
        document.getElementById("closeLogModal").click();
        
        
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
    //    console.log(error);
        // ...
    });
    });
    /*$(document).on('click', '.trigger-custom', function (event) {
        event.preventDefault();
        $('#modal-custom').iziModal('open');
    });*/
  
    /* JS inside the modal */
    var el_izimodal=document.getElementById("modal_login_btn").addEventListener("click",function(){
       document.getElementById("modal_login").style.display="";
        
    })
    $("#modal-custom").on('click', 'header a', function(event) {
        //var el=document.getElementById("modal_login").style.display="";
        event.preventDefault();
        var index = $(this).index();
       // $(this).addClass('active').siblings('a').removeClass('active');
       // $(this).parents("div").find("section").eq(index).removeClass('hide').siblings('section').addClass('hide');
  
        if( $(this).index() === 0 ){
            $("#modal-custom .iziModal-content .icon-close").css('background', '#ddd');
        } else {
            $("#modal-custom .iziModal-content .icon-close").attr('style', '');
        }
    });
  
    $("#modal-custom").on('click', '.submit', function(event) { 
        event.preventDefault();
      //console.log("cliccato login")
      var emailValue=document.getElementById("email-izi").value;
      var passwValue=document.getElementById("passw-izi").value;
      firebase.auth().signInWithEmailAndPassword(emailValue, passwValue).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      //  console.log(errorMessage);
        document.getElementById("passw-izi").value="";
        iziToast.error({
            title: 'Errore',
            message: errorMessage,
        });
        if( !$modal.hasClass(fx) ){
            $modal.addClass(fx);
            setTimeout(function(){
                $modal.removeClass(fx);
            }, 1500);
        }
        // ...
      });
     
    // console.log(firebaseUser.uid);
  // var currentUser = firebase.auth().currentUser;
   // console.log("uid::"+window.uid);
        var fx = "wobble",  //wobble shake
            $modal = $(this).closest('.iziModal');
  //document.getElementById("closeLogModal").click();
       
    }); 
    
  })
    
  
  
  
  