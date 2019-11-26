
                // *keine* Konstruktorfunktion, aber eine Funktion, die ein Objekt zurückgibt
var the_cell = (function(contenttype, content){

    var cell_id_start = 0
    var start_position = [0,0]
    
    function cell_class(){
        
        this.id = cell_id_start++
        this.position = start_position.slice()
        
        this.construct_again = cell_class
        
        this.hallo = function(){ return "hallo-string"}
        
        this.testprop = "fünf"
        
        
        this.contenttype = contenttype
        this.content = content
        this.assigend_to = []       // e.g. to "Areas" or "Symbols"
        
        this.tellme_again = function(){
            return private_var
        }
        
        
    }
    
    var o = new cell_class()
    o.construct = cell_class
    
    var private_var = "this is private"
    
    
    
    o.tellme = function(){
        return private_var
    }

    
    return o

})("string"," i'm a cell")