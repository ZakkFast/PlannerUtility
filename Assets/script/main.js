$currentTime = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').text($currentTime)

function populate(){
    for(i = 8; i <= 17; i++){
        //Creates UI 
        $row = $(`<div class= "row">`)
        $hour = $(`<div class = "hour time-block col-1"></div>`)
        $hour.text(moment(i, 'hh').format('LT'))
        $input = $(`<textarea class = "col" id='inputText${i}' type='text' name='userInput'></textarea>`)
        $input.text(localStorage.getItem(i))
        $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${i}'></button>`)
        //Appends UI in order
        $('.container').append($row)
        $($row).append($hour)
        $($row).append($input)
        $($row).append($button)
        //Setting time formate to be am or pm for easier comparision below.
        $timeNow = moment().format('HH')
        $timeBlock = i
        if($timeBlock == $timeNow){
            $input.addClass('present')
        } else if ($timeBlock < $timeNow){
            $input.addClass('past')
        } else {
            $input.addClass('future')
        }
    }//Adds event listener to save to local storage
    $(".saveBtn").click(function(){
        var id = $(this).data("id")
        var userInput = $(this).siblings().eq(1).val()
        localStorage.setItem(id,userInput)
        })
}
populate()