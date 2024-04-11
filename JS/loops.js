/**
    JS Loops
        -- allow us to repeat a set of instructions multiple times;
        --also used to repeatedly execute a block of cose until a specific condition is met
 */

/**
FOR LOOP
    syntax:
        for( [initialization] ;[condition]; [ arithmetic expression]){
            // code that will be executed as long as the consition is true
        } )
*/ 
    
        console.log(' === FOR LOOP == ');

        for(let x = 0; x < 5; x ++){
            console.log(x);
        }

/**
        WHILE LOOP

        Syntax:
            while(condition){
                //code block
            }
 */

            console.log(' == WHILE Loop == ')

            let count = 0;
            while(count < 5){
                count++;
                console.log(count);
            }


     /**    DO-WHILE LOOP

            Syntax:
                do{
                    // code block/statement(condition)
                } while (condition)
     */
    
                console.log(' == DO-WHILE Loop == ')
    
                let j = 1;

                do{
                    console.log( 'Do-while: ', j);
                    j++;
                } while ( j <=5);
    