const currentTimeEl = document.querySelector('#currentDay')
// const date = moment().format('MMM Do YYYY');

//  

// function populate(){
//     for(i = 9; i <= 17; i++){
//         row = $('<div class="row>fuck</div')
//         $('container').append(row)
//     }
// }
function populate(){
    for(i = 9; i <= 17; i++){
        $row = $('<div class= "row">[i]</div')
        $hour = $('<div class = "hour col-1"></div>')
        $input = $('<div class = "col-10"></div>')
        $button = $('<div class = "saveBtn col-1">Save</div>')
        $('.container').append($row)
        $($row).append($hour)
        $($row).append($input)
        $($row).append($button)
    }
}

populate()



/*
1.display time - done
2.presnet user with time blocks
    2.1 input forms
    2.2 style

3.color code time blocks to past present future
4.allow user to edit content in blocks
5.save content to local storage
*/

//for loop comparison for color block
// let i = 8

// for (i < 17)

// var < var current time

// if(past){
//     change class
// } if(present) {
//     change class
// } else if {
//     change class
// }

//Write a function that add div class row.