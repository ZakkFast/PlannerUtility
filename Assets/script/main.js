$currentTime = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').text($currentTime)

function populate(){
    for(i = 9; i <= 17; i++){
        $row = $('<div class= "row"></div')
        $hour = $('<div class = "hour col-1"></div>')
        $input = $('<textarea class = "col-10"></textarea>')
        $hour.text(moment(i, 'hh').format('LT'))
        $button = $('<div class = "saveBtn col-1">Save</div>')
        $('.container').append($row)
        $($row).append($hour)
        $($row).append($input)
        $($row).append($button)

        
        $timeNow = moment().format('HH')
        $timeBlock = i
        if($timeBlock == $timeNow){
            $input.addClass('present')
        } else if ($timeBlock < $timeNow){
            $input.addClass('past')
        } else {
            $input.addClass('future')
        }

        console.log($timeNow)
        // $input.each(function(){
        //     console.log($timeBlock)
        //     console.log($timeNow)
            
            
        // })
    }
    
}

populate()





/*
1.display time - done
2.presnet user with time blocks - done
    2.1 input forms
    2.2 style -done

3.color code time blocks to past present future - done
4.allow user to edit content in blocks 
5.save content to local storage
*/
