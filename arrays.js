
var arrays = new (function(a,b){

    this.a = a
    this.b = b
    
                                    // dynamische Zahlenräume
    
    
	
	var a1 = []				//
    var a2 = [[ ]]
    var a3 = [[[ ]]]
    var a4 = [[[[ ]]]]      // 4 Stufen


	var b1 = [0]			//  b1[0] = 0
    var b2 = [[0]]
    var b3 = [[[0]]]
    var b4 = [[[[0]]]]
	

	var c1 = [1]			//  c1[0] = 1
    var c2 = [[1]]
    var c3 = [[[1]]]
    var c4 = [[[[1]]]]   
	
	// c4[0][0][0]
	
	
	
	
	
	
	// number relations...				x / 10 ....  x / 100 .... 
	
	var dez_10 = 7
	var dez_100 = 75
	
	var x = make_number(10, 7)
	
	var xx = new number(10, 7)
	
	var xxx = new number(10, 7)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    
    this.arraylist = [a1,a2,a3,a4]
    
    this.make_bigtable = function(x,y){
    }
    
    
    
    
    var cell_id_start = 0
    
    var start_position = [0,0]       //  (x/y)  mit 0/0 === oben links...
    // var start_position = [4,4]  
    
    
    
    //        [ raum1 , raum2, raum3  ]
    
    //        [ raum3 , raum2, raum1  ]
    
    //                                            Alle Zahlenräume "rechts" haben jeweils eine Maximumgrenze
    //                                      Der eine Zahlenraum "links" hat keine Maximumgrenze
    
    var increment_rule = function(r){
        
        r[1]++ ;
        
        var maximum = 10
        
        if (r[1] > maximum )
        
        var faster = 1
        var limited = 1
        
    }
    
    

    

   

})(3,100)

