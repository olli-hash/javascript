


// -------- -------- -------- -------- -------- -------- -------- -------- -------- --------

var sData = 'Wisen';
function display(){
  console.log('sData value is %s', this.sData);
}
display.call(); // sData value is Wisen

// -------- -------- -------- -------- -------- -------- -------- -------- -------- --------

function a () {}
function b () {}
function c () {}
// -------- -------- -------- -------- -------- -------- -------- -------- -------- --------


$( document ).ready(function() {
    
      $('button#a').on("click", function(){


      $("#output1").append(a + b + c + display)		// Funktionen a,b,c,etc. sind bekannt

        console.log(arrays)
        //$("body").append(arrays.toString())
        $("body").append(JSON.stringify(arrays))

    })


    $('button#b').on("click", function(){

        var cell_1 = the_cell.construct_again()
        var cell_2 = the_cell.hallo
        var cell_3 = the_cell.construct()

        var all = [the_cell, cell_1, cell_2, cell_3]

        console.log(all)
        $("body").append(JSON.stringify(all))

    })

    $('button#c').on("click", function(){

        var log = [ the_cell.hallo() ,  the_cell.tellme() , new the_cell.construct(), new the_cell.construct() ]
//                 var cell_2 = the_cell.hallo
//                 var cell_3 = the_cell.construct()

//                 var all = [the_cell, cell_1, cell_2, cell_3]
        console.log(log)
        $("body").append(JSON.stringify(log))

    })

})

// -------- -------- -------- -------- -------- -------- -------- -------- -------- --------





    // Welche Datenobjekte bleiben hier "stehen" ?   == Alle; Jede Variable, jede Funktion, jedes Objekt
